import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AzkarItem } from "@/data/azkar-data";
import { Copy, RefreshCw, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { ArabicText, DuaTranslation, MushafPanel } from "@/components/dua-reader";

interface DuaBlockProps {
    azkar: AzkarItem;
    index: number;
    /** Heading shown above the translation (defaults to "Translation"). */
    translationLabel?: string;
}

export function DuaBlock({ azkar, index, translationLabel }: DuaBlockProps) {
    const { lang, t } = useLanguage();
    const [count, setCount] = useState(0);
    const [copied, setCopied] = useState(false);

    const isCompleted = count >= azkar.repetitions;

    const handleIncrement = () => {
        if (count < azkar.repetitions) {
            setCount(prev => prev + 1);
        }
    };

    const handleReset = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCount(0);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(azkar.content.trim());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    const progressPercentage = Math.min((count / azkar.repetitions) * 100, 100);

    return (
        <article
            id={`dua-${azkar.id}`}
            className={cn(
                "scroll-mt-40 rounded-3xl border shadow-xl overflow-hidden bg-background transition-colors duration-300",
                isCompleted
                    ? "border-emerald-400/60 dark:border-emerald-500/40"
                    : "border-amber-200/60 dark:border-border/60"
            )}
        >
            {/* ── Header ── */}
            <header className="flex items-center justify-between gap-3 px-4 py-4 md:px-8 md:py-5 border-b border-border/60 bg-background/95">
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <div className={cn(
                        "relative w-11 h-11 md:w-12 md:h-12 shrink-0 flex items-center justify-center transition-colors",
                        isCompleted ? "text-emerald-500" : "text-amber-600/70 dark:text-amber-400/80"
                    )}>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                            <path fill="currentColor" className="opacity-15" d="M50 5 L65 15 L85 15 L95 35 L95 65 L85 85 L65 85 L50 95 L35 85 L15 85 L5 65 L5 35 L15 15 L35 15 Z" />
                            <path fill="none" stroke="currentColor" strokeWidth="3" d="M50 8 L64 17 L82 17 L92 35 L92 65 L82 83 L64 83 L50 92 L36 83 L18 83 L8 65 L8 35 L18 17 L36 17 Z" />
                        </svg>
                        <span className={cn(
                            "relative text-sm font-bold",
                            isCompleted ? "text-emerald-600 dark:text-emerald-400" : "text-amber-900/80 dark:text-amber-100"
                        )}>
                            {isCompleted ? <Check className="w-5 h-5" /> : index + 1}
                        </span>
                    </div>
                    <div className="min-w-0">
                        <h3 className={cn(
                            "text-base md:text-xl font-display font-bold text-gray-800 dark:text-white leading-snug",
                            lang === "ur" && "font-urdu text-base md:text-lg leading-relaxed"
                        )}>
                            {azkar.title}
                        </h3>
                        {azkar.titleArabic && (
                            <p dir="rtl" className="text-base md:text-lg font-arabic text-amber-700 dark:text-amber-400 leading-relaxed text-left rtl:text-right">
                                {azkar.titleArabic}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    {azkar.repetitions > 1 && (
                        <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-amber-100/70 dark:bg-amber-900/40 border border-amber-300/40 dark:border-amber-700/50 text-amber-800 dark:text-amber-200 text-xs font-bold">
                            {azkar.repetitions}×
                        </span>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCopy}
                        className="rounded-full text-gray-500 hover:text-amber-600 dark:hover:text-amber-400"
                        title={t("common.copy_arabic")}
                        aria-label={t("common.copy_arabic")}
                    >
                        {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                    </Button>
                </div>
            </header>

            {/* ── Arabic on mushaf paper ── */}
            <MushafPanel>
                <ArabicText text={azkar.content} />
            </MushafPanel>

            {/* ── Translation ── */}
            {azkar.translation && (
                <div className="px-5 py-6 md:px-12 md:py-8 border-t border-amber-900/10 dark:border-border/60 bg-amber-50/30 dark:bg-transparent empty:hidden">
                    <DuaTranslation translation={azkar.translation} label={translationLabel ?? t("common.translation")} />
                </div>
            )}

            {/* ── Virtue ── */}
            {azkar.benefits && (
                <div className="mx-5 md:mx-12 mb-6 flex items-start gap-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/50 px-4 py-3">
                    <i className="fas fa-star text-emerald-500 text-xs mt-1.5 shrink-0"></i>
                    <p dir="auto" className="text-sm text-emerald-900/80 dark:text-emerald-100/80 leading-loose">
                        {azkar.benefits}
                    </p>
                </div>
            )}

            {/* ── Reference & counter ── */}
            <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 md:px-8 border-t border-border/60 bg-background/95">
                <div className="flex items-center text-sm text-emerald-700 dark:text-emerald-400 min-w-0">
                    {azkar.reference && (
                        <>
                            <i className="fas fa-book mr-2 rtl:ml-2 rtl:mr-0"></i>
                            <span className="font-medium truncate">{azkar.reference}</span>
                        </>
                    )}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Button
                        onClick={handleIncrement}
                        disabled={isCompleted}
                        className={cn(
                            "relative overflow-hidden flex-1 sm:flex-none w-full sm:w-auto sm:min-w-[220px] h-12 rounded-full font-bold text-lg transition-all shadow-md active:scale-95 flex items-center justify-between px-6 gap-4 rtl:flex-row-reverse disabled:opacity-100",
                            isCompleted
                                ? "bg-emerald-500 hover:bg-emerald-600 text-white cursor-default"
                                : "bg-amber-500 hover:bg-amber-600 text-white"
                        )}
                    >
                        {!isCompleted && (
                            <span
                                className="absolute inset-y-0 left-0 bg-white/20 transition-all duration-300"
                                style={{ width: `${progressPercentage}%` }}
                                aria-hidden="true"
                            />
                        )}
                        <span className={cn("relative whitespace-nowrap", lang === "ur" && "font-urdu text-base")}>
                            {isCompleted ? t("common.completed") : t("common.tap_to_count")}
                        </span>
                        <span className="relative flex items-center gap-2 bg-black/10 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 font-sans">
                            <span>{count}</span>
                            <span className="opacity-60">/</span>
                            <span>{azkar.repetitions}</span>
                        </span>
                    </Button>

                    <div className="w-10 flex-shrink-0 flex justify-center">
                        {count > 0 && (
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
            </footer>
        </article>
    );
}
