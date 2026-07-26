import { useRoute, Link, useLocation } from "wouter";
import { quranSurahs } from "@/data/quran-data";
import { getSurahContent } from "@/data/quran";
import { useEffect, useState, useRef } from "react";
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

    // Core Application States
    const [currentPage, setCurrentPage] = useState(1);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Reading Toggle States
    const [showArabic, setShowArabic] = useState(true);
    const [showUr, setShowUr] = useState(false);
    const [showEn, setShowEn] = useState(false);

    // Customization States (1 to 5)
    const [fontSizeLevel, setFontSizeLevel] = useState(3);

    const surahInfo = quranSurahs.find((s) => s.number === surahNumber);
    const surahContent = getSurahContent(surahNumber);

    // Initialization & LocalStorage
    useEffect(() => {
        const savedPage = localStorage.getItem(`quran-bookmark-${surahNumber}`);
        if (savedPage) setCurrentPage(parseInt(savedPage));
        else setCurrentPage(1);

        const savedEn = localStorage.getItem('quran-pref-en');
        if (savedEn !== null) setShowEn(savedEn === 'true');

        const savedUr = localStorage.getItem('quran-pref-ur');
        if (savedUr !== null) setShowUr(savedUr === 'true');

        const savedFontSize = localStorage.getItem('quran-fontsize-level');
        if (savedFontSize !== null) setFontSizeLevel(parseInt(savedFontSize));
    }, [surahNumber]);

    // Preferences Persistence
    useEffect(() => {
        localStorage.setItem('quran-pref-en', showEn.toString());
        localStorage.setItem('quran-pref-ur', showUr.toString());
        localStorage.setItem('quran-fontsize-level', fontSizeLevel.toString());
    }, [showEn, showUr, fontSizeLevel]);

    // Bookmark Persistence
    useEffect(() => {
        if (currentPage > 0) {
            localStorage.setItem(`quran-bookmark-${surahNumber}`, currentPage.toString());
        }
    }, [currentPage, surahNumber]);

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
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-[#Fdfcf7] dark:bg-background select-none">
            <SEOHead
                title={`Reading ${surahInfo.name} - Quran | Daily Azkar`}
                description={`Start reading Surah ${surahInfo.name} (${surahInfo.nameArabic}).`}
            />

            <div className="container mx-auto px-4 max-w-6xl text-foreground">
                <div className="mb-6">
                    <Breadcrumbs items={[
                        { label: "Home", href: "/" },
                        { label: "Quran Hub", href: "/quran" },
                        { label: `Surah ${surahInfo.name}` }
                    ]} />
                </div>

                <div className="w-full h-full flex flex-col rounded-3xl border border-border/50 shadow-2xl overflow-hidden bg-background glassmorphism relative animate-in fade-in zoom-in-95 duration-700">

                    {/* Top Nav Bar */}
                    <div className="flex-none z-20 bg-background/90 backdrop-blur-xl border-b border-border px-3 py-4 md:px-8 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm text-foreground">

                        <div className="flex items-center w-full justify-between md:w-auto">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setLocation("/quran")}
                                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors border-border/50 text-foreground"
                                title="Back to Quran Hub"
                            >
                                <i className="fas fa-arrow-left"></i>
                            </Button>

                            <div className="text-center md:hidden flex-1 px-4">
                                <h1 className="font-bold text-foreground">{surahInfo.name}</h1>
                            </div>
                            <div className="w-10 md:hidden"></div>
                        </div>

                        <div className="hidden md:flex flex-col items-center flex-1">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-8 bg-amber-500/30"></div>
                                <h1 className="font-display font-bold text-xl text-amber-900 dark:text-amber-100">{surahInfo.name}</h1>
                                <div className="h-[1px] w-8 bg-amber-500/30"></div>
                            </div>
                            <p className="text-amber-800/60 dark:text-amber-200/40 text-sm font-arabic mt-0.5 tracking-widest">{surahInfo.nameArabic}</p>
                        </div>

                        {/* Toggles & Resizer */}
                        <div className="flex flex-wrap items-center justify-center gap-2">

                            <div className="flex items-center bg-white/50 dark:bg-muted/50 p-1 rounded-full border border-border/50 shadow-sm mr-1">
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

                    {/* Mushaf Canvas Wrapper */}
                    <div className="flex-1 bg-[#fdfaf1] dark:bg-zinc-950/20 mushaf-paper overflow-x-hidden">

                        {/* The Mushaf Frame (Border) */}
                        <div className="max-w-4xl mx-auto relative p-6 md:p-12 lg:p-16 border-[12px] md:border-[24px] border-double border-amber-900/10 dark:border-amber-500/10 rounded-[2rem] md:rounded-[4rem]">

                            {/* Traditional Surah Header Banner */}
                            <div className="mb-12 relative flex justify-center items-center">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
                                    <svg className="w-full h-24 text-amber-600" viewBox="0 0 800 100" preserveAspectRatio="none">
                                        <path d="M0,50 Q200,0 400,50 T800,50" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <path d="M0,60 Q200,10 400,60 T800,60" fill="none" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>
                                <div className="relative z-10 px-12 py-4 border-2 border-amber-600/40 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl shadow-sm border-double">
                                    <h2 className="text-4xl md:text-5xl font-arabic font-bold text-amber-900 dark:text-amber-100" dir="rtl">
                                        سُورَةُ {surahInfo.nameArabic}
                                    </h2>
                                </div>
                            </div>

                            {/* Corner Decorations */}
                            <div className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-amber-500/30 rounded-tl-xl"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl"></div>
                            <div className="absolute bottom-4 left-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-amber-500/30 rounded-bl-xl"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-amber-500/30 rounded-br-xl"></div>

                            {/* Bismillah - In highlighted block style */}
                            {surahContent?.bismillah && currentPage === 1 && (
                                <div className="flex justify-center mb-10 md:mb-16">
                                    <div className="bg-amber-100/30 dark:bg-amber-900/5 px-10 py-4 rounded-lg border border-amber-200/50 dark:border-amber-800/20">
                                        <p
                                            className={`${getArabicFontSizeClass()} font-arabic font-bold text-zinc-900 dark:text-zinc-100 drop-shadow-sm tracking-wide text-center leading-[2.4]`}
                                            dir="rtl"
                                        >
                                            {surahContent.bismillah}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Continuous Mushaf Text Layout */}
                            <div className="pb-12 text-center">
                                <p
                                    className={`${getArabicFontSizeClass()} font-arabic font-medium text-zinc-900 dark:text-zinc-100 leading-[3] md:leading-[3.5] text-justify-center tracking-normal`}
                                    dir="rtl"
                                    style={{ textAlignLast: 'center' }}
                                >
                                    {currentVerses.map((verse) => (
                                        <span key={verse.number} className="inline group">
                                            {verse.text}
                                            <span className="inline-flex items-center justify-center mx-3 mt-1 align-middle h-fit translate-y-[-0.1em]">
                                                <span className="relative flex items-center justify-center">
                                                    <svg className="w-8 h-8 md:w-12 md:h-12 text-amber-600/60 drop-shadow-sm" viewBox="0 0 100 100">
                                                        {/* Golden Octagon / Ornate Circle */}
                                                        <path
                                                            fill="currentColor"
                                                            d="M50 5 L65 15 L85 15 L95 35 L95 65 L85 85 L65 85 L50 95 L35 85 L15 85 L5 65 L5 35 L15 15 L35 15 Z"
                                                            className="opacity-20"
                                                        />
                                                        <path
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                            d="M50 8 L64 17 L82 17 L92 35 L92 65 L82 83 L64 83 L50 92 L36 83 L18 83 L8 65 L8 35 L18 17 L36 17 Z"
                                                        />
                                                        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                                                    </svg>
                                                    <span className="absolute inset-0 flex items-center justify-center text-[10px] md:text-sm font-bold font-numeric text-amber-900/80 dark:text-amber-100/80">
                                                        {verse.number}
                                                    </span>
                                                </span>
                                            </span>

                                            {/* Embedded Translation (Only if toggled) - Now as a clean block after the verse if needed */}
                                            {(showUr || showEn) && (
                                                <span className="block w-full max-w-3xl mx-auto my-6 md:my-10 animate-in fade-in slide-in-from-top-2 duration-300 pointer-events-none select-none">
                                                    {showUr && verse.translationUr && (
                                                        <span className="block text-xl md:text-2xl lg:text-3xl font-arabic text-amber-900/60 dark:text-amber-100/60 leading-[2.2] border-t border-amber-900/5 pt-4">
                                                            {verse.translationUr}
                                                        </span>
                                                    )}
                                                    {showEn && verse.translationEn && (
                                                        <span className="block text-base md:text-lg font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed italic border-t border-amber-900/5 pt-4">
                                                            {verse.translationEn}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Pagination Control Bar */}
                    {totalPages > 1 && (
                        <div className="flex-none z-20 bg-background/90 backdrop-blur-xl border-t border-border px-4 py-8 md:px-6 md:py-10 flex left-0 right-0 justify-center items-center gap-4 md:gap-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-border/50 bg-background/50 hover:bg-background text-foreground"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </Button>

                            <div className="bg-muted px-6 py-2 md:px-8 md:py-2.5 rounded-full border border-border/50 font-medium font-numeric tabular-nums space-x-2 flex items-center shadow-inner">
                                <span className="text-foreground text-base md:text-lg">{currentPage}</span>
                                <span className="text-muted-foreground/50">/</span>
                                <span className="text-muted-foreground">{totalPages}</span>
                            </div>

                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-border/50 bg-background/50 hover:bg-background text-foreground"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </Button>

                            {/* Fast Navigation to Next Surah logic */}
                            {currentPage === totalPages && surahNumber < 114 && (
                                <div className="absolute right-4 md:right-6 hidden sm:block">
                                    <Link href={`/quran/surahs/${surahNumber + 1}`}>
                                        <button
                                            className="px-5 py-2 md:px-6 md:py-2.5 text-primary-foreground font-bold rounded-full transition-transform hover:scale-105 flex items-center gap-2 shadow-md text-sm md:text-base bg-emerald-600 hover:bg-emerald-700 active:scale-95"
                                        >
                                            Next Surah <i className="fas fa-arrow-right text-xs md:text-sm"></i>
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Global Bottom Navigation Area */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16 pt-10 border-t border-border/50 mb-16">
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
