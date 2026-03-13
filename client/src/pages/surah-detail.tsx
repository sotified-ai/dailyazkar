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
    const [isReading, setIsReading] = useState(false);
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
        setIsReading(false);
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
        if (currentPage > 0 && isReading) {
            localStorage.setItem(`quran-bookmark-${surahNumber}`, currentPage.toString());
        }
    }, [currentPage, isReading, surahNumber]);

    // Scroll to top of content when page changes
    useEffect(() => {
        if (isReading) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [currentPage, isReading]);

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
        switch(fontSizeLevel) {
            case 1: return "text-3xl md:text-4xl";
            case 2: return "text-4xl md:text-5xl";
            case 3: return "text-5xl md:text-6xl";
            case 4: return "text-6xl md:text-7xl";
            case 5: return "text-7xl md:text-[5rem] lg:text-[6rem]";
            default: return "text-5xl md:text-6xl";
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-background select-none">
            <SEOHead
                title={isReading ? `Reading ${surahInfo.name} - Quran | Daily Azkar` : `${surahInfo.name} (${surahInfo.nameArabic}) - Quran`}
                description={`Start reading Surah ${surahInfo.name} (${surahInfo.nameArabic}).`}
            />

            <div className="container mx-auto px-4 max-w-5xl text-foreground">
                {/* Navigation aids outside the reading zone */}
                {!isReading && (
                    <div className="mb-8">
                        <Breadcrumbs items={[
                            { label: "Home", href: "/" },
                            { label: "Quran Hub", href: "/quran" },
                            { label: `Surah ${surahInfo.name}` }
                        ]} />
                    </div>
                )}

                {/* ========================================== */}
                {/* STATE 1: INTRO ("START READING") CARD       */}
                {/* ========================================== */}
                {!isReading ? (
                    <div className="flex flex-col items-center justify-center py-6 md:py-10 animate-in fade-in zoom-in-95 duration-500">
                        {/* The Intro Card using the system theme CSS properties */}
                        <div
                            className="relative w-full max-w-2xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 flex flex-col items-center justify-center overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-border/20 z-0"
                            style={{
                                background: 'var(--primary-gradient)',
                                boxShadow: 'var(--glass-shadow)'
                            }}
                        >

                            {/* Subtle decorative backdrop */}
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none z-0"></div>
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none z-0"></div>

                            {/* Surah Number Badge & Back */}
                            <div className="w-full flex justify-between items-start mb-6 md:mb-10 relative z-10 text-white">
                                <div
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-bold text-xl md:text-2xl drop-shadow-md text-white border border-white/20 bg-white/20 backdrop-blur-md"
                                >
                                    {surahInfo.number}
                                </div>
                                <Button
                                    variant="ghost"
                                    onClick={() => setLocation("/quran")}
                                    className="w-12 h-12 rounded-full hover:bg-white/30 text-white transition-colors drop-shadow-md"
                                >
                                    <i className="fas fa-arrow-left text-xl"></i>
                                </Button>
                            </div>

                            {/* Main Surah Typography - Fixed Contrast for Light Mode */}
                            <div className="text-center relative z-10 space-y-3 md:space-y-4 mb-10 md:mb-14 text-white">
                                <h2 className="text-5xl md:text-7xl font-arabic font-bold drop-shadow-lg mb-4 text-white" dir="rtl">
                                    {surahInfo.nameArabic}
                                </h2>
                                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md">
                                    {surahInfo.name}
                                </h1>
                                <p className="text-white/90 font-medium text-base md:text-lg italic tracking-wide drop-shadow-sm">
                                    "The Opening" {/* Ideally fetched from data */}
                                </p>
                            </div>

                            {/* Meta Badges */}
                            <div className="flex flex-wrap justify-center gap-3 relative z-10 mb-10 md:mb-14 text-white">
                                {[
                                    { icon: surahInfo.type === "meccan" ? "kaaba" : "mosque", text: surahInfo.type === "meccan" ? "Makki" : "Madani" },
                                    { icon: "list-ol", text: `${surahInfo.verses} Ayahs` }
                                ].map((badge, idx) => (
                                    <span
                                        key={idx}
                                        className="px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-medium flex items-center gap-2 drop-shadow-md border border-white/20 bg-white/20 backdrop-blur-md"
                                    >
                                        <i className={`fas fa-${badge.icon}`}></i>
                                        {badge.text}
                                    </span>
                                ))}
                            </div>

                            {/* Start Action */}
                            <button
                                onClick={() => setIsReading(true)}
                                className="w-full sm:w-72 rounded-full py-4 md:py-5 font-bold text-lg md:text-xl flex justify-center items-center gap-3 transition-transform transform hover:-translate-y-1 active:scale-95 shadow-xl relative z-10 text-white drop-shadow-md border border-white/40 hover:bg-white/30 bg-white/20 backdrop-blur-md"
                            >
                                <i className="fas fa-book-open"></i>
                                Start Reading
                            </button>

                        </div>

                        <div className="w-full mt-12"><AdSense /></div>

                    </div>
                ) : (
                    /* ========================================== */
                    /*  STATE 2: THE INLINE READING INTERFACE     */
                    /* ========================================== */
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                        <div className="w-full max-w-6xl h-full max-h-[92vh] flex flex-col rounded-2xl md:rounded-3xl border border-border/50 shadow-2xl overflow-hidden bg-background glassmorphism relative animate-in zoom-in-95 duration-500">

                            {/* Top Nav Bar within the reading view */}
                            <div className="flex-none z-20 bg-background/90 backdrop-blur-xl border-b border-border px-3 py-3 md:px-8 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm text-foreground">

                                <div className="flex items-center w-full justify-between md:w-auto">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setIsReading(false)}
                                        className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors border-border/50 text-foreground"
                                        title="Back to Detail"
                                    >
                                        <i className="fas fa-times"></i>
                                    </Button>

                                    <div className="text-center md:hidden flex-1 px-4">
                                        <h1 className="font-bold text-foreground">{surahInfo.name}</h1>
                                    </div>
                                    <div className="w-10 md:hidden"></div>
                                </div>

                                <div className="hidden md:block text-center flex-1">
                                    <h1 className="font-bold text-lg text-foreground">{surahInfo.name}</h1>
                                    <p className="text-muted-foreground text-sm font-arabic">{surahInfo.nameArabic}</p>
                                </div>

                                {/* Toggles & Resizer */}
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    
                                    {/* Font Size Adjuster widget */}
                                    <div className="flex items-center bg-muted/50 p-1 rounded-full border border-border/50 shadow-sm mr-1">
                                        <button 
                                            onClick={() => changeFontSize(-1)}
                                            disabled={fontSizeLevel === 1}
                                            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-30 transition-colors"
                                            title="Decrease Font Size"
                                        >
                                            <i className="fas fa-font text-xs"></i><span className="text-[10px] ml-0.5">-</span>
                                        </button>
                                        <div className="w-1 h-1 rounded-full bg-border mx-1"></div>
                                        <button 
                                            onClick={() => changeFontSize(1)}
                                            disabled={fontSizeLevel === 5}
                                            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-30 transition-colors"
                                            title="Increase Font Size"
                                        >
                                            <i className="fas fa-font text-sm"></i><span className="text-xs ml-0.5">+</span>
                                        </button>
                                    </div>
                                    
                                    <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border/50">
                                        <button className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-semibold shadow-sm pointer-events-none transition-all">
                                            Arabic
                                        </button>
                                        <button
                                            onClick={() => setShowUr(!showUr)}
                                            className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${showUr ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"}`}
                                        >
                                            اردو
                                        </button>
                                        <button
                                            onClick={() => setShowEn(!showEn)}
                                            className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${showEn ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"}`}
                                        >
                                            English
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Reading Canvas Container */}
                            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-3 py-6 md:px-8 lg:px-12 scroll-smooth">

                                {/* Bismillah */}
                                {surahContent?.bismillah && currentPage === 1 && (
                                    <div className="flex justify-center mb-6 md:mb-8 py-2 md:py-4">
                                        <p
                                            className={`${getArabicFontSizeClass()} font-arabic font-bold text-foreground drop-shadow-sm tracking-wide text-center transition-all duration-300`}
                                            dir="rtl"
                                            style={{ lineHeight: '2.4' }}
                                        >
                                            {surahContent.bismillah}
                                        </p>
                                    </div>
                                )}

                                {/* Verses Container */}
                                <div className="space-y-8 md:space-y-12 pb-6">
                                    {currentVerses.map((verse) => (
                                        <div key={verse.number} className="relative group mt-4">

                                            {/* Verse Number Bubble */}
                                            <div
                                                className="absolute -top-4 right-4 sm:right-8 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-opacity z-10 bg-muted text-foreground border-4 border-background"
                                            >
                                                {verse.number}
                                            </div>

                                            <div className="text-right space-y-4 md:space-y-6 bg-muted/40 hover:bg-muted/80 dark:bg-card/60 dark:hover:bg-card p-4 md:p-8 rounded-2xl md:rounded-[1.5rem] transition-colors border border-border/40 hover:border-primary/30 shadow-md relative z-0">

                                                {/* Huge Readable Arabic Text - Responsive Dynamic Sizing */}
                                                <div
                                                    className={`${getArabicFontSizeClass()} font-arabic font-semibold text-foreground drop-shadow-sm selection:bg-primary/20 selection:text-primary pb-2 transition-all duration-300`}
                                                    dir="rtl"
                                                    style={{ lineHeight: '2.4' }}
                                                >
                                                    {verse.text}
                                                </div>

                                                {/* Active Translations */}
                                                {(showUr || showEn) && (
                                                    <div className="pt-6 border-t border-border/50 space-y-4 md:space-y-6">
                                                        {showUr && verse.translationUr && (
                                                            <div className="text-right flex justify-end">
                                                                <div className="w-full md:w-5/6 pr-4 md:pr-5 border-r-4 border-emerald-500/50">
                                                                    <p className="text-xl md:text-2xl lg:text-3xl font-arabic leading-[2.2] text-muted-foreground transition-all duration-300" dir="rtl">
                                                                        {verse.translationUr}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {showEn && verse.translationEn && (
                                                            <div className="text-left w-full md:w-5/6 bg-muted/40 p-4 md:p-5 rounded-2xl border-l-4 border-primary/50">
                                                                <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-muted-foreground transition-all duration-300">
                                                                    {verse.translationEn}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Pagination Control Bar */}
                            {totalPages > 1 && (
                                <div className="flex-none z-20 bg-background/90 backdrop-blur-xl border-t border-border px-4 py-4 md:px-6 md:py-5 flex left-0 right-0 justify-center items-center gap-4 md:gap-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
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
                                                    className="px-5 py-2 md:px-6 md:py-2.5 text-primary-foreground font-bold rounded-full transition-transform hover:scale-105 flex items-center gap-2 shadow-md text-sm md:text-base"
                                                    style={{ background: 'var(--accent-gradient)' }}
                                                >
                                                    Next Surah <i className="fas fa-arrow-right text-xs md:text-sm"></i>
                                                </button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Global Bottom Navigation Area */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16 pt-10 border-t border-border/50">
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
