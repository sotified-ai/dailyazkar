import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AzkarItem } from "@/data/azkar-data";
import { Copy, RefreshCw, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

interface DuaBlockProps {
    azkar: AzkarItem;
    index: number;
}

export function DuaBlock({ azkar, index }: DuaBlockProps) {
    const { lang, t } = useLanguage();
    const [count, setCount] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (count >= azkar.repetitions) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    }, [count, azkar.repetitions]);

    const handleIncrement = () => {
        if (count < azkar.repetitions) {
            setCount(prev => prev + 1);
        }
    };

    const handleReset = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCount(0);
        setIsCompleted(false);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(azkar.content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    const progressPercentage = Math.min((count / azkar.repetitions) * 100, 100);

    return (
        <Card className={cn(
            "glassmorphism border-0 shadow-lg animate-slide-up transition-all duration-300",
            isCompleted ? "border-l-4 border-l-emerald-500 rtl:border-l-0 rtl:border-r-4 rtl:border-r-emerald-500 bg-emerald-50/30 dark:bg-emerald-900/10" : ""
        )}>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-colors duration-300 shrink-0",
                            isCompleted ? "bg-emerald-500" : "bg-gradient-to-br from-amber-500 to-orange-600"
                        )}>
                            {isCompleted ? <Check className="w-6 h-6" /> : index + 1}
                        </div>
                        <div>
                            <h3 className={cn(
                                "text-xl font-semibold text-gray-800 dark:text-white",
                                lang === 'ur' ? 'font-urdu text-lg leading-relaxed' : ''
                            )}>
                                {azkar.title}
                            </h3>
                            <p className="text-lg font-arabic text-amber-600 dark:text-amber-400">
                                {azkar.titleArabic}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleCopy}
                            className="text-gray-500 hover:text-amber-600 dark:hover:text-amber-400"
                            title={t("common.copy_arabic")}
                        >
                            {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>

            <CardContent>
                {/* Arabic Text */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6 relative group">
                    <p className="text-2xl md:text-3xl font-arabic leading-loose text-right text-gray-800 dark:text-white">
                        {azkar.content}
                    </p>
                </div>

                {/* Translation */}
                <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm uppercase tracking-wide opacity-70">
                        {t("common.translation")}
                    </h4>
                    <p className={cn(
                        "text-gray-600 dark:text-gray-300 leading-relaxed font-serif whitespace-pre-wrap",
                        lang === 'ur' ? 'font-urdu text-lg leading-loose text-right' : ''
                    )}>
                        {azkar.translation}
                    </p>
                </div>

                {/* Reference & Counter Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400 overflow-hidden text-ellipsis whitespace-nowrap">
                        {azkar.reference && (
                            <>
                                <i className="fas fa-book mr-2 rtl:ml-2 rtl:mr-0"></i>
                                <span className="font-medium">{azkar.reference}</span>
                            </>
                        )}
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        {/* Counter Button */}
                        <Button
                            onClick={handleIncrement}
                            disabled={isCompleted}
                            className={cn(
                                "flex-1 sm:flex-none w-full sm:w-auto sm:min-w-[220px] h-12 rounded-full font-bold text-lg transition-all shadow-md active:scale-95 flex items-center justify-between px-6 gap-4 rtl:flex-row-reverse",
                                isCompleted
                                    ? "bg-emerald-500 hover:bg-emerald-600 text-white cursor-default"
                                    : "bg-amber-500 hover:bg-amber-600 text-white"
                            )}
                        >
                            <span className={cn(
                                "whitespace-nowrap",
                                lang === 'ur' ? 'font-urdu text-base' : ''
                            )}>
                                {isCompleted ? t("common.completed") : t("common.tap_to_count")}
                            </span>
                            <div className="flex items-center gap-2 bg-black/10 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 font-sans">
                                <span>{count}</span>
                                <span className="opacity-60">/</span>
                                <span>{azkar.repetitions}</span>
                            </div>
                        </Button>

                        <div className="w-10 flex-shrink-0 flex justify-center">
                            {count > 0 && !isCompleted && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleReset}
                                    className="rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/30"
                                    title={t("common.reset")}
                                    aria-label={t("common.reset")}
                                >
                                    <RefreshCw className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
