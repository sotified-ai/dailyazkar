import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";

export default function DuaHub() {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-16">
            <SEOHead
                title="Dua Hub - Authentic Islamic Supplications | Daily Azkar"
                description="Explore a comprehensive collection of authentic islamic Duas, including Rabbana prayers from the Quran and supplications after daily Salah."
                keywords="dua hub, islamic duas, rabbana duas, dua after salah, supplications, namaz duas, daily prayers"
                canonical="https://dailyazkar.site/dua"
            />

            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i className="fas fa-hands-praying text-white text-3xl"></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                        Dua Hub
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        "And your Lord says, 'Call upon Me; I will respond to you.'" (Quran 40:60) <br /> Connect with Allah through these authentic and powerful supplications.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Dua After Salah */}
                    <Link href="/dua/after-salah">
                        <Card className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full hover:-translate-y-1">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-person-praying text-blue-500 text-2xl"></i>
                                </div>
                                <CardTitle className="text-2xl text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                                    Dua After Salah
                                </CardTitle>
                                <p className="text-emerald-600 dark:text-emerald-400 font-arabic text-xl mt-2">دعاء بعد الصلاة</p>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    The Prophetic tradition of glorifying Allah (Tasbeeh) and praying immediately after the 5 daily prayers.
                                </p>
                                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center justify-center gap-2">
                                    Read Now <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                                </span>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* Rabbana Duas */}
                    <Link href="/dua/rabbana">
                        <Card className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full hover:-translate-y-1">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-book-quran text-purple-500 text-2xl"></i>
                                </div>
                                <CardTitle className="text-2xl text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors">
                                    Rabbana Duas
                                </CardTitle>
                                <p className="text-emerald-600 dark:text-emerald-400 font-arabic text-xl mt-2">أدعية ربنا</p>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    The 40 beautiful "Rabbana" (Our Lord) supplications revealed directly to the Prophets in the Holy Quran.
                                </p>
                                <span className="text-purple-600 dark:text-purple-400 font-medium text-sm flex items-center justify-center gap-2">
                                    Read Now <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                                </span>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                {/* Bottom CTA to Another Hub */}
                <div className="mt-20 text-center max-w-2xl mx-auto p-8 rounded-2xl glassmorphism border border-emerald-100 dark:border-emerald-800">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Want to Read the Quran?</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Explore the fully complete 114 Surahs with side-by-side authentic translations.</p>
                    <Link href="/quran">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors font-medium cursor-pointer">
                            <i className="fas fa-book-open"></i> Go to Quran Hub
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
