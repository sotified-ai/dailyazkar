import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";

export default function AzkarHub() {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-16">
            <SEOHead
                title="Azkar Hub - Morning, Evening & Ramadan Supplications | Daily Azkar"
                description="Your complete hub for authentic daily Azkar. Find Morning Azkar, Evening Azkar, and Ramadan supplications to protect yourself and remember Allah."
                keywords="azkar hub, morning azkar, evening azkar, ramadan azkar, daily azkar, islamic supplications, dhikr"
                canonical="https://dailyazkar.site/azkar"
            />

            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i className="fas fa-sun text-white text-3xl"></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                        Azkar Hub
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        "And remember your Lord within yourself in humility and in fear without being apparent in speech - in the mornings and the evenings. And do not be among the heedless." (Quran 7:205)
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Morning Azkar */}
                    <Link href="/azkar/morning">
                        <Card className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full hover:-translate-y-1">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-sun text-amber-500 text-2xl"></i>
                                </div>
                                <CardTitle className="text-2xl text-gray-800 dark:text-white group-hover:text-amber-600 transition-colors">
                                    Morning Azkar
                                </CardTitle>
                                <p className="text-emerald-600 dark:text-emerald-400 font-arabic text-xl mt-2">أذكار الصباح</p>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Authentic supplications to recite after Fajr for daily protection and blessings.
                                </p>
                                <span className="text-amber-600 dark:text-amber-400 font-medium text-sm flex items-center justify-center gap-2">
                                    Read Now <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                                </span>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* Evening Azkar */}
                    <Link href="/azkar/evening">
                        <Card className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full hover:-translate-y-1">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-moon text-indigo-500 text-2xl"></i>
                                </div>
                                <CardTitle className="text-2xl text-gray-800 dark:text-white group-hover:text-indigo-600 transition-colors">
                                    Evening Azkar
                                </CardTitle>
                                <p className="text-emerald-600 dark:text-emerald-400 font-arabic text-xl mt-2">أذكار المساء</p>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Prophetic remembrances to recite after Asr for peaceful nights and safety.
                                </p>
                                <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm flex items-center justify-center gap-2">
                                    Read Now <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                                </span>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* Ramadan Azkar */}
                    <Link href="/azkar/ramadan">
                        <Card className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full hover:-translate-y-1">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-star and crescent text-emerald-500 text-2xl"></i>
                                </div>
                                <CardTitle className="text-2xl text-gray-800 dark:text-white group-hover:text-emerald-600 transition-colors">
                                    Ramadan Azkar
                                </CardTitle>
                                <p className="text-emerald-600 dark:text-emerald-400 font-arabic text-xl mt-2">أذكار رمضان</p>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Essential duas for Suhoor, Iftar, Tarawih, and Laylatul Qadr.
                                </p>
                                <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm flex items-center justify-center gap-2">
                                    Read Now <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                                </span>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* Tasbeeh Counter */}
                    <Link href="/tasbeeh-counter">
                        <Card className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full hover:-translate-y-1">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-calculator text-teal-600 text-2xl"></i>
                                </div>
                                <CardTitle className="text-2xl text-gray-800 dark:text-white group-hover:text-teal-600 transition-colors">
                                    Tasbeeh Counter
                                </CardTitle>
                                <p className="text-emerald-600 dark:text-emerald-400 font-arabic text-xl mt-2">المسبحة الإلكترونية</p>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Track your daily dhikr with our interactive digital tasbeeh tool.
                                </p>
                                <span className="text-teal-600 dark:text-teal-400 font-medium text-sm flex items-center justify-center gap-2">
                                    Start Counting <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                                </span>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                {/* Bottom CTA to Another Hub */}
                <div className="mt-20 text-center max-w-2xl mx-auto p-8 rounded-2xl glassmorphism border border-emerald-100 dark:border-emerald-800">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Looking for specific prayers?</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Explore our extensive collection of thematic Duas, including supplications after Salah and from the Quran.</p>
                    <Link href="/dua">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors font-medium">
                            <i className="fas fa-hands-praying"></i> Go to Dua Hub
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
