import { useRoute } from "wouter";
import { quranSurahs } from "@/data/quran-data";
import { getSurahContent } from "@/data/quran";
import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/related-content";

const ITEMS_PER_PAGE = 20;

export default function SurahDetail() {
    const [match, params] = useRoute("/quran/:number");
    const surahNumber = params ? parseInt(params.number) : 0;
    const [currentPage, setCurrentPage] = useState(1);
    const [showArabic, setShowArabic] = useState(true);
    const [showEn, setShowEn] = useState(false);
    const [showUr, setShowUr] = useState(false);

    const surahInfo = quranSurahs.find((s) => s.number === surahNumber);
    const surahContent = getSurahContent(surahNumber);

    // Reset page and load bookmark when Surah changes
    useEffect(() => {
        window.scrollTo(0, 0);
        const savedPage = localStorage.getItem(`quran-bookmark-${surahNumber}`);
        if (savedPage) {
            setCurrentPage(parseInt(savedPage));
        } else {
            setCurrentPage(1);
        }
    }, [surahNumber]);

    // Save progress when page changes
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
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Surah Not Found
                </h1>
                <Link href="/quran">
                    <Button variant="outline">Back to Quran</Button>
                </Link>
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

    return (
        <div className="pt-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
            <SEOHead
                title={`${surahInfo.name} (${surahInfo.nameArabic}) - Quran | Daily Azkar`}
                description={`Read Surah ${surahInfo.name} (${surahInfo.nameArabic}) from the Holy Quran. ${surahInfo.verses} verses, ${surahInfo.type} revelation.`}
                keywords={`quran, surah ${surahInfo.name}, ${surahInfo.nameArabic}, quran chapter ${surahInfo.number}, read quran online`}
                canonical={`https://dailyazkar.site/quran/${surahInfo.number}`}
            />

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "Quran Hub", href: "/quran" },
                    { label: `Surah ${surahInfo.name}` }
                ]} />

                <div className="mb-8 flex justify-between items-center">
                    <Link href="/quran">
                        <Button variant="ghost" className="hover:bg-emerald-100 dark:hover:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                            <i className="fas fa-arrow-left mr-2"></i>
                            Back to Surahs
                        </Button>
                    </Link>
                    {totalPages > 1 && (
                        <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                            Page {currentPage} of {totalPages}
                        </Badge>
                    )}
                </div>

                {/* Surah Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                        {surahInfo.number}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-2">
                        {surahInfo.name}
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-arabic text-emerald-600 dark:text-emerald-400 mb-6 font-bold" dir="rtl">
                        {surahInfo.nameArabic}
                    </h2>
                    <div className="flex justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                            {surahInfo.type === "meccan" ? "Meccan" : "Medinan"}
                        </span>
                        <span className="bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                            {surahInfo.verses} Verses
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <label className="flex items-center space-x-2 cursor-pointer bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <input
                            type="checkbox"
                            checked={showArabic}
                            onChange={(e) => setShowArabic(e.target.checked)}
                            className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                        />
                        <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">Arabic</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <input
                            type="checkbox"
                            checked={showUr}
                            onChange={(e) => setShowUr(e.target.checked)}
                            className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                        />
                        <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">Urdu Translation</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <input
                            type="checkbox"
                            checked={showEn}
                            onChange={(e) => setShowEn(e.target.checked)}
                            className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                        />
                        <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">English Translation</span>
                    </label>
                </div>

                <AdSense className="my-8" />

                {/* Surah Content */}
                {surahContent ? (
                    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                        {surahContent.bismillah && currentPage === 1 && (
                            <div className="text-center mb-12 p-8 glassmorphism rounded-2xl">
                                <p className="text-3xl md:text-4xl font-arabic leading-loose text-gray-800 dark:text-gray-100" dir="rtl">
                                    {surahContent.bismillah}
                                </p>
                            </div>
                        )}

                        <div className="space-y-6">
                            {currentVerses.map((verse) => (
                                <div key={verse.number} className="glassmorphism rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-500 relative group">
                                    <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                                        {verse.number}
                                    </div>
                                    <div className="text-right mt-2 mb-4 pl-12 space-y-4">
                                        {showArabic && (
                                            <p className="text-2xl md:text-3xl font-arabic leading-[2.5] text-gray-800 dark:text-gray-100" dir="rtl">
                                                {verse.text}
                                            </p>
                                        )}
                                        {showUr && verse.translationUr && (
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                                                <p className="text-xl md:text-2xl font-arabic leading-loose text-emerald-700 dark:text-emerald-400" dir="rtl">
                                                    {verse.translationUr}
                                                </p>
                                            </div>
                                        )}
                                        {showEn && verse.translationEn && (
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-left">
                                                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                                    {verse.translationEn}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4 mt-12 py-8 border-t border-gray-100 dark:border-gray-800">
                                <Button
                                    variant="outline"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="w-32"
                                >
                                    <i className="fas fa-chevron-left mr-2"></i> Previous
                                </Button>

                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    {currentPage} / {totalPages}
                                </span>

                                <Button
                                    variant="outline"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="w-32"
                                >
                                    Next <i className="fas fa-chevron-right ml-2"></i>
                                </Button>
                            </div>
                        )}

                        {/* Jump to Page Input */}
                        {totalPages > 5 && (
                            <div className="flex justify-center items-center gap-2 mt-4">
                                <span className="text-sm text-gray-500">Go to page:</span>
                                <input
                                    type="number"
                                    min="1"
                                    max={totalPages}
                                    className="w-16 p-1 border rounded text-center text-sm"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            const page = parseInt(e.currentTarget.value);
                                            if (page >= 1 && page <= totalPages) {
                                                handlePageChange(page);
                                            }
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center py-16 px-4 glassmorphism rounded-2xl">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-book-open text-gray-400 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            Content Coming Soon
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            We are currently adding the verses for this Surah. Please check back later.
                        </p>
                        {surahNumber === 67 && (
                            <p className="text-sm text-emerald-600 mt-2">Try Surah Al-Mulk (67) to see a sample.</p>
                        )}
                    </div>
                )}

                <AdSense className="my-8" />

                {/* Navigation */}
                <div className="max-w-4xl mx-auto flex justify-between mt-12">
                    {surahNumber > 1 && (
                        <Link href={`/quran/${surahNumber - 1}`}>
                            <Button variant="outline" className="gap-2">
                                <i className="fas fa-chevron-left"></i> Previous Surah
                            </Button>
                        </Link>
                    )}
                    {surahNumber < 114 && (
                        <Link href={`/quran/${surahNumber + 1}`}>
                            <Button variant="outline" className="gap-2">
                                Next Surah <i className="fas fa-chevron-right"></i>
                            </Button>
                        </Link>
                    )}
                </div>

                <RelatedContent hub="quran" />
            </div>
        </div>
    );
}
