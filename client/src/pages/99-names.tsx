import { useState, useMemo } from "react";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { allahNames } from "@/data/names-data";
import { Link } from "wouter";

export default function NamesOfAllahPage() {
    const [search, setSearch] = useState("");

    const filteredNames = useMemo(() => {
        return allahNames.filter(name =>
            name.transliteration.toLowerCase().includes(search.toLowerCase()) ||
            name.meaningEn.toLowerCase().includes(search.toLowerCase()) ||
            name.arabic.includes(search)
        );
    }, [search]);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "99 Names of Allah (Asma ul Husna) with Meaning & Benefits",
        "description": "Explore the 99 Beautiful Names of Allah with Arabic text, English transliteration, and meanings in English and Urdu. Learn the spiritual benefits of reflecting on Allah's attributes."
    };

    return (
        <div className="pt-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
            <SEOHead
                title="99 Names of Allah (Asma ul Husna) with Meaning & Urdu Translation"
                description="Complete list of 99 Names of Allah (Asma ul Husna) with Arabic text, transliteration, and meanings in English and Urdu. Search and learn Allah's beautiful attributes."
                keywords="99 names of allah, asma ul husna, names of allah with meaning, allah names urdu meaning, 99 names of allah list, attributes of allah"
                canonical="https://dailyazkar.site/99-names-of-allah"
                structuredData={structuredData}
            />

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "99 Names of Allah" }
                ]} />

                <div className="text-center mb-12 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <i className="fas fa-star text-white text-3xl"></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                        99 Names of Allah
                    </h1>
                    <p className="text-2xl font-arabic text-emerald-600 dark:text-emerald-400 mb-6">
                        أسماء الله الحسنى
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        "To Allah belong the most beautiful names, so call on Him by them." (Surah Al-A'raf, 7:180)
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto mb-12">
                    <div className="relative group">
                        <Input
                            placeholder="Search by name or meaning..."
                            className="h-14 pl-12 rounded-2xl border-emerald-100 dark:border-gray-700 bg-white/50 backdrop-blur-md shadow-sm focus:ring-emerald-500"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-emerald-500 opacity-50"></i>
                    </div>
                </div>

                {/* Names Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredNames.map((name) => (
                        <Card key={name.id} className="glassmorphism border-0 overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-md">
                            <CardContent className="p-8 text-center relative">
                                <span className="absolute top-4 left-4 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                                    #{name.id}
                                </span>

                                <div className="text-4xl font-arabic mb-4 text-gray-800 dark:text-white group-hover:scale-110 transition-transform duration-300 pt-4">
                                    {name.arabic}
                                </div>
                                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                                    {name.transliteration}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm italic mb-4">
                                    {name.meaningEn}
                                </p>
                                <div className="pt-4 border-t border-emerald-50 dark:border-gray-800">
                                    <p className="text-2xl font-arabic text-gray-700 dark:text-gray-200">
                                        {name.meaningUr}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Educational Content Section */}
                <div className="max-w-4xl mx-auto mb-12 prose prose-lg dark:prose-invert">
                    <h2 className="text-3xl font-display font-bold mb-6 text-center">The Significance of Asma ul Husna</h2>
                    <p>
                        The 99 Names of Allah, known as **Asma ul Husna**, are the attributes and qualities of our Creator. Understanding these names is fundamental to a Muslim's faith, as it allows us to know Allah and connect with Him on a deeper spiritual level.
                    </p>
                    <p>
                        The Prophet Muhammad ﷺ said: *"Allah has ninety-nine names, i.e. one-hundred minus one, and whoever knows them will go to Paradise."* (Sahih al-Bukhari). "Knowing" these names refers to more than just memorization; it involves reflecting on their meanings, acting upon their implications, and calling upon Allah using these beautiful attributes.
                    </p>
                    <h3>Benefits of Reflecting on Allah's Names</h3>
                    <ul>
                        <li><strong>Increased Faith:</strong> The more we learn about Allah's mercy (Ar-Rahman), power (Al-Qadir), and wisdom (Al-Hakim), the stronger our Tawakkul (reliance) becomes.</li>
                        <li><strong>Accepted Duas:</strong> Allah encourages us in the Quran to call upon Him by His beautiful names. Using relevant names in your supplications adds sincerity and power to your prayer.</li>
                        <li><strong>Spiritual Tranquility:</strong> Reciting and reflecting on these attributes brings a profound sense of peace to the heart, fulfilling the Quranic promise: *"Verily, in the remembrance of Allah do hearts find rest."*</li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="text-center mt-12 bg-emerald-600 rounded-3xl p-10 text-white shadow-2xl">
                    <h2 className="text-3xl font-display font-bold mb-4">Deepen Your Spiritual Journey</h2>
                    <p className="text-emerald-50 text-xl mb-8">Download our Daily Azkar app or explore our comprehensive guides to Islamic supplications.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/azkar" className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                            Go to Azkar Hub
                        </Link>
                        <Link href="/dua/rabbana" className="bg-emerald-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-900 transition-colors shadow-lg">
                            Explore Rabbana Duas
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
