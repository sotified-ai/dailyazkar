import { useRoute, Link, useLocation } from "wouter";
import { quranSurahs } from "@/data/quran-data";
import { getSurahContent } from "@/data/quran";
import { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AdSense } from "@/components/adsense";
import { RelatedContent } from "@/components/related-content";

const ITEMS_PER_PAGE = 20;

export default function SurahDetail() {
    const [match, params] = useRoute("/quran/surahs/:number");
    const [_location, setLocation] = useLocation();
    const surahNumber = params ? parseInt(params.number) : 0;

    // Core Application States — always start from page 1
    const [currentPage, setCurrentPage] = useState(1);

    // Last-read verse bookmark (verse.number, not index)
    const [lastReadVerse, setLastReadVerse] = useState<number | null>(null);
    const verseRefs = useRef<Record<number, HTMLDivElement | null>>({});

    // Reading Toggle States
    const [showArabic, setShowArabic] = useState(true);
    const [showUr, setShowUr] = useState(false);
    const [showEn, setShowEn] = useState(false);

    // Customization States (1 to 5)
    const [fontSizeLevel, setFontSizeLevel] = useState(3);

    const surahInfo = quranSurahs.find((s) => s.number === surahNumber);
    const surahContent = getSurahContent(surahNumber);

    // Initialization — reset to page 1 whenever surah changes, restore preferences only
    useEffect(() => {
        setCurrentPage(1);
        verseRefs.current = {};

        const savedEn = localStorage.getItem('quran-pref-en');
        if (savedEn !== null) setShowEn(savedEn === 'true');

        const savedUr = localStorage.getItem('quran-pref-ur');
        if (savedUr !== null) setShowUr(savedUr === 'true');

        const savedFontSize = localStorage.getItem('quran-fontsize-level');
        if (savedFontSize !== null) setFontSizeLevel(parseInt(savedFontSize));

        // Restore last-read verse bookmark
        const savedVerse = localStorage.getItem(`quran-lastread-${surahNumber}`);
        setLastReadVerse(savedVerse ? parseInt(savedVerse) : null);
    }, [surahNumber]);

    // Preferences Persistence
    useEffect(() => {
        localStorage.setItem('quran-pref-en', showEn.toString());
        localStorage.setItem('quran-pref-ur', showUr.toString());
        localStorage.setItem('quran-fontsize-level', fontSizeLevel.toString());
    }, [showEn, showUr, fontSizeLevel]);

    // Scroll to top of content when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    if (!surahInfo) {
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-background px-4">
                <h1 className="text-2xl font-bold text-foreground mb-4">Surah Not Found</h1>
                <Button variant="secondary" onClick={() => setLocation("/quran")}>Go Back</Button>
            </div>
        );
    }

    const totalPages = surahContent ? Math.ceil(surahContent.verses.length / ITEMS_PER_PAGE) : 0;
    const currentVerses = surahContent
        ? surahContent.verses.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
        : [];

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const changeFontSize = (delta: number) => {
        setFontSizeLevel(prev => Math.max(1, Math.min(5, prev + delta)));
    };

    const getArabicFontSizeClass = () => {
        switch (fontSizeLevel) {
            case 1: return "text-2xl md:text-3xl";
            case 2: return "text-3xl md:text-4xl";
            case 3: return "text-4xl md:text-5xl";
            case 4: return "text-5xl md:text-6xl";
            case 5: return "text-6xl md:text-7xl";
            default: return "text-4xl md:text-5xl";
        }
    };

    const getTranslationFontSizeClass = () => {
        switch (fontSizeLevel) {
            case 1: return "text-sm md:text-base";
            case 2: return "text-base md:text-lg";
            case 3: return "text-base md:text-lg";
            case 4: return "text-lg md:text-xl";
            case 5: return "text-xl md:text-2xl";
            default: return "text-base md:text-lg";
        }
    };

    const getUrduFontSizeClass = () => {
        switch (fontSizeLevel) {
            case 1: return "text-lg md:text-xl";
            case 2: return "text-xl md:text-2xl";
            case 3: return "text-2xl md:text-3xl";
            case 4: return "text-3xl md:text-4xl";
            case 5: return "text-4xl md:text-5xl";
            default: return "text-2xl md:text-3xl";
        }
    };

    const showTranslation = showEn || showUr;

    // Mark a verse as last-read
    const markVerse = useCallback((verseNumber: number) => {
        setLastReadVerse(prev => {
            const next = prev === verseNumber ? null : verseNumber;
            if (next === null) {
                localStorage.removeItem(`quran-lastread-${surahNumber}`);
            } else {
                localStorage.setItem(`quran-lastread-${surahNumber}`, next.toString());
            }
            return next;
        });
    }, [surahNumber]);

    // Jump to the page that contains a given verse and scroll to it
    const jumpToVerse = useCallback((verseNumber: number) => {
        if (!surahContent) return;
        const verseIdx = surahContent.verses.findIndex(v => v.number === verseNumber);
        if (verseIdx === -1) return;
        const targetPage = Math.floor(verseIdx / ITEMS_PER_PAGE) + 1;
        if (targetPage !== currentPage) {
            setCurrentPage(targetPage);
            // Scroll after page renders
            setTimeout(() => {
                const el = verseRefs.current[verseNumber];
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 150);
        } else {
            const el = verseRefs.current[verseNumber];
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [surahContent, currentPage, surahNumber]);

    // Is the lastReadVerse on a different page?
    const lastReadPage = lastReadVerse && surahContent
        ? Math.floor((surahContent.verses.findIndex(v => v.number === lastReadVerse)) / ITEMS_PER_PAGE) + 1
        : null;

    return (
        <div className="min-h-screen pt-24 pb-12 bg-[#Fdfcf7] dark:bg-background">
            <SEOHead
                title={`Reading ${surahInfo.name} - Quran | Daily Azkar`}
                description={`Start reading Surah ${surahInfo.name} (${surahInfo.nameArabic}).`}
            />

            <div className="w-full px-4 xl:px-8 2xl:px-16 text-foreground">
                <div className="mb-6">
                    <Breadcrumbs items={[
                        { label: "Home", href: "/" },
                        { label: "Quran Hub", href: "/quran" },
                        { label: `Surah ${surahInfo.name}` }
                    ]} />
                </div>

                <div className="w-full flex flex-col rounded-3xl border border-border/50 shadow-2xl overflow-hidden bg-background relative animate-in fade-in zoom-in-95 duration-700">

                    {/* ── Top Nav Bar ── */}
                    <div className="z-20 bg-background/95 backdrop-blur-xl border-b border-border px-4 py-4 md:px-8 md:py-5 flex flex-col md:flex-row justify-between items-center gap-3 shadow-sm">

                        {/* Mobile: back + title */}
                        <div className="flex items-center w-full justify-between md:w-auto">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setLocation("/quran")}
                                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors border-border/50 text-foreground shrink-0"
                                title="Back to Quran Hub"
                            >
                                <i className="fas fa-arrow-left"></i>
                            </Button>

                            <div className="text-center md:hidden flex-1 px-4">
                                <h1 className="font-bold text-foreground text-base">{surahInfo.name}</h1>
                                <p className="text-xs text-muted-foreground font-arabic">{surahInfo.nameArabic}</p>
                            </div>
                            <div className="w-10 md:hidden"></div>
                        </div>

                        {/* Desktop: centered title */}
                        <div className="hidden md:flex flex-col items-center flex-1">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-8 bg-amber-500/30"></div>
                                <h1 className="font-display font-bold text-xl text-amber-900 dark:text-amber-100">{surahInfo.name}</h1>
                                <div className="h-[1px] w-8 bg-amber-500/30"></div>
                            </div>
                            <p className="text-amber-800/60 dark:text-amber-200/40 text-sm font-arabic mt-0.5 tracking-widest">{surahInfo.nameArabic}</p>
                        </div>

                        {/* Controls: font size + translation toggle */}
                        <div className="flex flex-wrap items-center justify-center gap-2">

                            {/* Font size control */}
                            <div className="flex items-center bg-white/50 dark:bg-muted/50 p-1 rounded-full border border-border/50 shadow-sm">
                                <button
                                    onClick={() => changeFontSize(-1)}
                                    disabled={fontSizeLevel === 1}
                                    className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-30 transition-colors"
                                    title="Decrease Font Size"
                                >
                                    <i className="fas fa-minus text-[10px]"></i>
                                </button>
                                <div className="w-1 h-1 rounded-full bg-border mx-1"></div>
                                <button
                                    onClick={() => changeFontSize(1)}
                                    disabled={fontSizeLevel === 5}
                                    className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-30 transition-colors"
                                    title="Increase Font Size"
                                >
                                    <i className="fas fa-plus text-xs"></i>
                                </button>
                            </div>

                            {/* Translation toggle */}
                            <div className="flex items-center gap-1 bg-white/50 dark:bg-muted/50 p-1 rounded-full border border-border/50">
                                <button
                                    onClick={() => { setShowEn(false); setShowUr(false); }}
                                    className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${(!showEn && !showUr) ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50"}`}
                                >
                                    Quran
                                </button>
                                <button
                                    onClick={() => { setShowUr(!showUr); setShowEn(false); }}
                                    className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${showUr ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"}`}
                                >
                                    اردو
                                </button>
                                <button
                                    onClick={() => { setShowEn(!showEn); setShowUr(false); }}
                                    className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${showEn ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"}`}
                                >
                                    English
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Continue Reading Banner ── */}
                    {lastReadVerse && (
                        <div className="z-10 flex items-center justify-between gap-3 px-4 py-3 md:px-8 bg-amber-50/80 dark:bg-amber-950/60 border-b border-amber-200/60 dark:border-amber-700/60 animate-in slide-in-from-top-2 duration-300">
                            <div className="flex items-center gap-2.5 text-amber-800 dark:text-amber-100">
                                <i className="fas fa-bookmark text-amber-500 text-sm"></i>
                                <span className="text-sm font-medium">
                                    Last read: <span className="font-bold">Ayah {lastReadVerse}</span>
                                    {lastReadPage && lastReadPage !== currentPage && (
                                        <span className="text-amber-700/60 dark:text-amber-400/80 ml-1">(Page {lastReadPage})</span>
                                    )}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => jumpToVerse(lastReadVerse)}
                                    className="px-4 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
                                >
                                    Go to Ayah
                                </button>
                                <button
                                    onClick={() => markVerse(lastReadVerse)}
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-amber-600/60 dark:text-amber-400/80 hover:bg-amber-200/50 dark:hover:bg-amber-700/40 hover:text-amber-800 dark:hover:text-amber-100 transition-colors"
                                    title="Clear bookmark"
                                >
                                    <i className="fas fa-times text-xs"></i>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ── Mushaf Canvas ── */}
                    <div className="flex-1 bg-[#fdfaf1] dark:bg-zinc-950/20 mushaf-paper overflow-x-hidden">

                        <div className="w-full relative px-6 py-8 md:px-12 md:py-12 xl:px-20 2xl:px-32">

                            {/* Corner decorations */}
                            <div className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-amber-500/30 rounded-tl-xl pointer-events-none"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl pointer-events-none"></div>

                            {/* Surah Header — only on page 1 */}
                            {currentPage === 1 && (
                                <div className="mb-10 relative flex justify-center items-center">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
                                        <svg className="w-full h-24 text-amber-600" viewBox="0 0 800 100" preserveAspectRatio="none">
                                            <path d="M0,50 Q200,0 400,50 T800,50" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <path d="M0,60 Q200,10 400,60 T800,60" fill="none" stroke="currentColor" strokeWidth="1" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10 px-10 py-4 border-2 border-amber-600/40 dark:border-amber-500/50 bg-amber-50/50 dark:bg-amber-900/40 rounded-xl shadow-sm border-double">
                                        <h2 className="text-4xl md:text-5xl font-arabic font-bold text-amber-900 dark:text-amber-100" dir="rtl">
                                            سُورَةُ {surahInfo.nameArabic}
                                        </h2>
                                    </div>
                                </div>
                            )}

                            {/* Page indicator badge (when not on page 1) */}
                            {currentPage > 1 && (
                                <div className="flex justify-center mb-8">
                                    <div className="px-4 py-1.5 rounded-full bg-amber-100/60 dark:bg-amber-900/50 border border-amber-300/30 dark:border-amber-700/50 text-amber-800/70 dark:text-amber-200/90 text-xs font-semibold tracking-widest uppercase">
                                        {surahInfo.name} · Page {currentPage} of {totalPages}
                                    </div>
                                </div>
                            )}

                            {/* Bismillah — only on page 1 */}
                            {surahContent?.bismillah && currentPage === 1 && (
                                <div className="flex justify-center mb-10 md:mb-14">
                                    <div className="bg-amber-100/40 dark:bg-amber-900/40 px-10 py-5 rounded-2xl border border-amber-200/50 dark:border-amber-700/40">
                                        <p
                                            className={`${getArabicFontSizeClass()} font-arabic font-bold text-zinc-900 dark:text-zinc-100 drop-shadow-sm tracking-wide text-center leading-[2.4]`}
                                            dir="rtl"
                                        >
                                            {surahContent.bismillah}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* ── Verse Cards ── */}
                            <div className="flex flex-col gap-0">
                                {showTranslation ? (
                                    /* Translation mode: two-column on wide screens (Arabic right | Translation left) */
                                    currentVerses.map((verse, idx) => {
                                        const isLastRead = lastReadVerse === verse.number;
                                        return (
                                            <div
                                                key={verse.number}
                                                ref={el => { verseRefs.current[verse.number] = el; }}
                                                onClick={() => markVerse(verse.number)}
                                                className={`group relative py-5 md:py-7 cursor-pointer rounded-xl transition-all duration-200 px-3 md:px-4 -mx-3 md:-mx-4
                                                    ${isLastRead
                                                        ? 'bg-amber-100/60 dark:bg-amber-900/50 ring-2 ring-amber-400/50 dark:ring-amber-500/60'
                                                        : 'hover:bg-amber-50/50 dark:hover:bg-amber-900/25'
                                                    }
                                                    ${idx < currentVerses.length - 1 ? 'border-b border-amber-900/8 dark:border-amber-100/10' : ''}`}
                                            >
                                                {/* Bookmark ribbon + verse number */}
                                                <div className="flex justify-between items-center mb-3">
                                                    <div>
                                                        {isLastRead && (
                                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/20 dark:bg-amber-500/30 border border-amber-400/40 dark:border-amber-400/60 text-amber-700 dark:text-amber-200 text-xs font-bold animate-in fade-in duration-200">
                                                                <i className="fas fa-bookmark text-amber-500 text-xs"></i>
                                                                Last read
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 dark:bg-amber-900/50 border border-amber-300/30 dark:border-amber-600/50">
                                                        <svg className="w-3.5 h-3.5 text-amber-600/60" viewBox="0 0 100 100">
                                                            <path fill="currentColor" d="M50 5 L65 15 L85 15 L95 35 L95 65 L85 85 L65 85 L50 95 L35 85 L15 85 L5 65 L5 35 L15 15 L35 15 Z" className="opacity-30" />
                                                            <path fill="none" stroke="currentColor" strokeWidth="4" d="M50 8 L64 17 L82 17 L92 35 L92 65 L82 83 L64 83 L50 92 L36 83 L18 83 L8 65 L8 35 L18 17 L36 17 Z" />
                                                        </svg>
                                                        <span className="text-xs font-bold text-amber-800/70 dark:text-amber-200/90 font-numeric">{verse.number}</span>
                                                    </span>
                                                </div>

                                                {/* Two-column layout on lg+ screens */}
                                                <div className="flex flex-col lg:flex-row-reverse lg:gap-8 xl:gap-12 2xl:gap-16 items-start">

                                                    {/* Arabic — right column on desktop */}
                                                    <div className="w-full lg:w-1/2 xl:w-[55%]">
                                                        <p
                                                            className={`${getArabicFontSizeClass()} font-arabic font-medium text-zinc-900 dark:text-zinc-100 leading-[2.8] md:leading-[3.2] text-right select-none`}
                                                            dir="rtl"
                                                        >
                                                            {verse.text}
                                                        </p>
                                                    </div>

                                                    {/* Translation — left column on desktop */}
                                                    <div className="w-full lg:w-1/2 xl:w-[45%] mt-4 lg:mt-0 lg:pt-2 lg:border-r lg:border-amber-900/10 lg:dark:border-amber-400/20 lg:pr-8 xl:pr-12">
                                                        {showUr && verse.translationUr && (
                                                            <p
                                                                className={`${getUrduFontSizeClass()} font-arabic text-amber-950/75 dark:text-amber-100/85 leading-[2.2] text-right select-none`}
                                                                dir="rtl"
                                                            >
                                                                {verse.translationUr}
                                                            </p>
                                                        )}
                                                        {showEn && verse.translationEn && (
                                                            <p className={`${getTranslationFontSizeClass()} text-zinc-700 dark:text-zinc-300 leading-relaxed`}>
                                                                {verse.translationEn}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    /* Arabic-only mode: verse blocks with click-to-bookmark */
                                    <div className="flex flex-col gap-0">
                                        {currentVerses.map((verse, idx) => {
                                            const isLastRead = lastReadVerse === verse.number;
                                            return (
                                                <div
                                                    key={verse.number}
                                                    ref={el => { verseRefs.current[verse.number] = el; }}
                                                    className="inline"
                                                >
                                                    {/* Last-read marker line */}
                                                    {isLastRead && (
                                                        <div className="flex items-center gap-2 mb-2 mt-1">
                                                            <div className="flex-1 h-px bg-amber-400/40 dark:bg-amber-500/60"></div>
                                                            <span className="text-xs font-bold text-amber-600 dark:text-amber-300 flex items-center gap-1">
                                                                <i className="fas fa-bookmark"></i> Last read
                                                            </span>
                                                            <div className="flex-1 h-px bg-amber-400/40"></div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                        {/* Continuous text paragraph with clickable verse markers */}
                                        <p
                                            className={`${getArabicFontSizeClass()} font-arabic font-medium text-zinc-900 dark:text-zinc-100 leading-[3] md:leading-[3.5] pb-8 select-none`}
                                            dir="rtl"
                                            style={{ textAlign: 'justify', textAlignLast: 'center' }}
                                        >
                                            {currentVerses.map((verse) => {
                                                const isLastRead = lastReadVerse === verse.number;
                                                return (
                                                    <span key={verse.number} className={`inline ${isLastRead ? 'bg-amber-200/40 dark:bg-amber-500/25 rounded px-0.5' : ''}`}>
                                                        {verse.text}
                                                        <span
                                                            onClick={() => markVerse(verse.number)}
                                                            className="inline-flex items-center justify-center mx-2 mt-1 align-middle h-fit translate-y-[-0.1em] cursor-pointer"
                                                            title={`${isLastRead ? 'Remove bookmark from' : 'Bookmark'} Ayah ${verse.number}`}
                                                        >
                                                            <span className="relative inline-flex items-center justify-center hover:scale-110 transition-transform">
                                                                <svg
                                                                    className={`w-8 h-8 md:w-11 md:h-11 drop-shadow-sm transition-colors ${isLastRead ? 'text-amber-500' : 'text-amber-600/60'}`}
                                                                    viewBox="0 0 100 100"
                                                                >
                                                                    <path fill="currentColor" d="M50 5 L65 15 L85 15 L95 35 L95 65 L85 85 L65 85 L50 95 L35 85 L15 85 L5 65 L5 35 L15 15 L35 15 Z" className={isLastRead ? 'opacity-40' : 'opacity-20'} />
                                                                    <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M50 8 L64 17 L82 17 L92 35 L92 65 L82 83 L64 83 L50 92 L36 83 L18 83 L8 65 L8 35 L18 17 L36 17 Z" />
                                                                    <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                                                                </svg>
                                                                <span className={`absolute inset-0 flex items-center justify-center text-[10px] md:text-sm font-bold font-numeric ${isLastRead ? 'text-amber-700 dark:text-amber-300' : 'text-amber-900/80 dark:text-amber-100/80'}`}>
                                                                    {verse.number}
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                );
                                            })}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Bottom corner decorations */}
                            <div className="absolute bottom-4 left-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-amber-500/30 rounded-bl-xl pointer-events-none"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-amber-500/30 rounded-br-xl pointer-events-none"></div>
                        </div>
                    </div>

                    {/* ── Pagination Bar ── */}
                    {totalPages > 1 && (
                        <div className="z-20 bg-background/95 backdrop-blur-xl border-t border-border px-4 py-5 md:px-6 md:py-6 flex justify-center items-center gap-3 md:gap-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">

                            {/* Prev button */}
                            <Button
                                variant="outline"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="h-11 px-5 rounded-full border-border/60 bg-background/70 hover:bg-primary/5 hover:border-primary/40 hover:text-primary text-foreground font-medium gap-2 transition-all disabled:opacity-40"
                            >
                                <i className="fas fa-chevron-left text-xs"></i>
                                <span className="hidden sm:inline">Previous</span>
                            </Button>

                            {/* Page numbers — show up to 7 pages */}
                            <div className="flex items-center gap-1.5">
                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                    .filter(p => {
                                        if (totalPages <= 7) return true;
                                        if (p === 1 || p === totalPages) return true;
                                        if (Math.abs(p - currentPage) <= 2) return true;
                                        return false;
                                    })
                                    .reduce<(number | '...')[]>((acc, p, idx, arr) => {
                                        if (idx > 0 && typeof arr[idx - 1] === 'number' && (p as number) - (arr[idx - 1] as number) > 1) {
                                            acc.push('...');
                                        }
                                        acc.push(p);
                                        return acc;
                                    }, [])
                                    .map((item, idx) =>
                                        item === '...' ? (
                                            <span key={`ellipsis-${idx}`} className="w-8 text-center text-muted-foreground text-sm">…</span>
                                        ) : (
                                            <button
                                                key={item}
                                                onClick={() => handlePageChange(item as number)}
                                                className={`w-9 h-9 rounded-full text-sm font-semibold font-numeric transition-all ${
                                                    currentPage === item
                                                        ? 'bg-primary text-primary-foreground shadow-md scale-110'
                                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                                }`}
                                            >
                                                {item}
                                            </button>
                                        )
                                    )
                                }
                            </div>

                            {/* Next button */}
                            <Button
                                variant="outline"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="h-11 px-5 rounded-full border-border/60 bg-background/70 hover:bg-primary/5 hover:border-primary/40 hover:text-primary text-foreground font-medium gap-2 transition-all disabled:opacity-40"
                            >
                                <span className="hidden sm:inline">Next</span>
                                <i className="fas fa-chevron-right text-xs"></i>
                            </Button>

                            {/* Next Surah shortcut — shown on last page */}
                            {currentPage === totalPages && surahNumber < 114 && (
                                <div className="absolute right-4 md:right-6 hidden sm:block">
                                    <Link href={`/quran/surahs/${surahNumber + 1}`}>
                                        <button className="px-5 py-2 text-primary-foreground font-bold rounded-full transition-transform hover:scale-105 flex items-center gap-2 shadow-md text-sm bg-emerald-600 hover:bg-emerald-700 active:scale-95">
                                            Next Surah <i className="fas fa-arrow-right text-xs"></i>
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* ── Bottom Surah Navigation ── */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-14 pt-10 border-t border-border/50 mb-16">
                    <div className="w-full sm:w-auto">
                        {surahNumber > 1 && (
                            <Link href={`/quran/surahs/${surahNumber - 1}`}>
                                <Button variant="outline" className="w-full sm:w-auto gap-4 py-8 px-6 rounded-2xl group hover:border-primary/50 transition-all bg-card/30 text-foreground">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <i className="fas fa-arrow-left text-primary"></i>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Previous</div>
                                        <div className="font-bold text-foreground text-lg">{quranSurahs.find(s => s.number === surahNumber - 1)?.name}</div>
                                    </div>
                                </Button>
                            </Link>
                        )}
                    </div>

                    <Link href="/quran">
                        <Button variant="ghost" className="rounded-full w-14 h-14 p-0 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
                            <i className="fas fa-list text-xl"></i>
                        </Button>
                    </Link>

                    <div className="w-full sm:w-auto text-right">
                        {surahNumber < 114 && (
                            <Link href={`/quran/surahs/${surahNumber + 1}`}>
                                <Button variant="outline" className="w-full sm:w-auto gap-4 py-8 px-6 rounded-2xl group hover:border-primary/50 transition-all bg-card/30 justify-end text-foreground">
                                    <div className="text-right">
                                        <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Next</div>
                                        <div className="font-bold text-foreground text-lg">{quranSurahs.find(s => s.number === surahNumber + 1)?.name}</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <i className="fas fa-arrow-right text-primary"></i>
                                    </div>
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>

                <div className="mt-16">
                    <RelatedContent hub="quran" />
                </div>

            </div>
        </div>
    );
}
