import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("eid_announcement_dismissed") === "true";
    });

    useEffect(() => {
        // Current local time: 2026-03-19
        const today = new Date();
        // Show for 5 days: until March 24, 2026 inclusive
        const endDate = new Date("2026-03-25T00:00:00Z");

        if (today < endDate && !isDismissed) {
            setIsVisible(true);
        }
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem("eid_announcement_dismissed", "true");
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="relative z-[60] overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 py-3 px-4 text-white shadow-lg relative overflow-hidden">
                        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 md:gap-8 pr-8">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xl animate-pulse">
                                    🌙
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-display font-bold text-base sm:text-lg tracking-wide leading-none">
                                        Eid Mubarak! <span className="mx-1 opacity-50 hidden md:inline">|</span>
                                        <span className="font-arabic text-xl sm:text-2xl leading-none ml-1">عید مبارک! </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <p className="text-xs sm:text-sm font-medium text-emerald-50 leading-tight max-w-2xl">
                                    May Allah bless your home with happiness and your life with peace and prosperity.
                                    <span className="hidden lg:inline ml-1">Wishing you a blessed and joyful Eid with your loved ones.</span>
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleDismiss}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                            aria-label="Close announcement"
                        >
                            <X size={18} />
                        </button>

                        {/* Shimmer effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
