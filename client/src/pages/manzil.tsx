import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { manzilDua } from "@/data/azkar-data";

export default function Manzil() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Manzil - Protection from Evil",
        "description": "Manzil is a collection of verses from the Quran highly effective for protection from black magic, evil eye, and jinn. یہ منزل آسیب، سحر اور بعض دوسرے خطرات سے حفاظت کیلئے ایک مجرب عمل ہے۔",
        "publisher": {
            "@type": "Organization",
            "name": "Daily Azkar",
            "url": "https://dailyazkar.site"
        }
    };

    return (
        <div className="pt-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
            <SEOHead
                title="Manzil (منزل) - Protection & Healing | Daily Azkar"
                description="Manzil is a collection of verses from the Quran highly effective for protection from black magic, evil eye, and jinn. یہ منزل آسیب، سحر اور بعض دوسرے خطرات سے حفاظت کیلئے ایک مجرب عمل ہے۔"
                keywords="manzil, manzil dua, protection from evil eye, islamic healing, quranic verses for protection, منزل, protection from black magic, protection from jinn, protection from satan, protection from thieves, protection from wild beasts, شاہ ولی اللہ محدث دہلوى, آسیب، سحر اور خطرات سے حفاظت"
                canonical="https://dailyazkar.site/manzil"
                structuredData={structuredData}
            />
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-shield-virus text-white text-3xl"></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                        Manzil
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-arabic text-indigo-600 dark:text-indigo-400 mb-6">
                        منزل
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A powerful collection of Quranic verses for spiritual protection against black magic, evil eye, jinn, and satanic forces.
                    </p>
                </div>

                {/* Important Note */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="glassmorphism rounded-xl p-6 border-l-4 border-indigo-500">
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                            <i className="fas fa-info-circle text-indigo-500 mr-2"></i>
                            Important Guidelines
                        </h3>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                            <li>• Recite with complete faith and trust in Allah</li>
                            <li>• Best recited once in the morning and once in the evening</li>
                            <li>• Maintain ritual purity (wudu) while reciting</li>
                            <li>• Blow over water and drink it, or sprinkle it over yourself, if needed</li>
                        </ul>
                    </div>
                </div>

                {/* Manzil Content */}
                <div className="space-y-8 max-w-4xl mx-auto">
                    <Card className="glassmorphism border-0 shadow-lg animate-slide-up">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                        <i className="fas fa-book-open"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                            {manzilDua.title}
                                        </h3>
                                        <p className="text-lg font-arabic text-indigo-600 dark:text-indigo-400">
                                            {manzilDua.titleArabic}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                                        1x
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* Arabic Text */}
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6">
                                <p className="text-2xl font-arabic leading-relaxed text-right text-gray-800 dark:text-white whitespace-pre-wrap">
                                    {manzilDua.content}
                                </p>
                            </div>

                            {/* Translation */}
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Translation:</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                    {manzilDua.translation}
                                </p>
                            </div>

                            {/* Reference and Benefits */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <div className="flex items-center text-sm text-indigo-600 dark:text-indigo-400">
                                    <i className="fas fa-book-open mr-2"></i>
                                    <span className="font-medium">Reference: {manzilDua.reference}</span>
                                </div>
                                <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400">
                                    <i className="fas fa-heart mr-2"></i>
                                    <span className="font-medium">Benefits: {manzilDua.benefits}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Additional Guidance */}
                <div className="text-center mt-12">
                    <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
                            Complete Protection from Harm
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            "Allah is the best guardian, and He is the most merciful of the merciful." - Quran 12:64
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
