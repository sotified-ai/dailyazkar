import { quranSurahs } from "@/data/quran-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function Quran() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Holy Quran - Browse All 114 Surahs",
    "description": "Explore the Holy Quran with all 114 Surahs. Browse Meccan and Medinan chapters with verse counts and discover the divine guidance from Allah.",
    "url": "https://dailyazkar.site/quran"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many Surahs are in the Quran?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Quran contains 114 Surahs (chapters), with 86 revealed in Mecca and 28 revealed in Medina."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Meccan and Medinan Surahs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meccan Surahs focus on fundamentals of faith, stories of prophets, and the Day of Judgment. Medinan Surahs often address social laws, community matters, and practical guidance."
        }
      },
      {
        "@type": "Question",
        "name": "Which Surah is the longest in the Quran?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Surah Al-Baqarah is the longest with 286 verses, covering many aspects of Islamic law and guidance."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Holy Quran - Browse All 114 Surahs | Daily Azkar"
        description="Explore the Holy Quran with all 114 Surahs. Browse Meccan and Medinan chapters with verse counts. Discover divine guidance, wisdom, and light for believers."
        keywords="quran, holy quran, quran surahs, quran chapters, meccan surahs, medinan surahs, القرآن الكريم, islamic scripture, quran online, al kursi translation, ayatul kursiyyu transliteration, al asr, ayatul kursi in transliteration, falaq surah in english, translation of ayat al kursi, surah falaq transliteration, transliteration of surah falaq, surah al falaq transliteration, surat al falaq, ayat al kursi translation, fatiha translation, surah baqarah transliteration, wal asr translation, al asr translation, ayat kursi transliteration, ayatul kursi with transliteration, surah ikhlas translation, surah ikhlas transliteration, surah list, 4 qul surah, al asr surah translation, al fajr surah, ayatul kursi and translation, ayatul kursi translation"
        canonical="https://dailyazkar.site/quran"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-book-open text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Holy Quran
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-emerald-600 dark:text-emerald-400 mb-6">
            القرآن الكريم
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse Surahs and explore the divine guidance from Allah. Each Surah contains wisdom and light for believers.
          </p>
        </div>

        {/* Introduction Section - SEO Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Noble Quran: Allah's Final Revelation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Holy Quran is the literal word of Allah, revealed to Prophet Muhammad ﷺ over 23 years through the angel Jibreel (Gabriel). It serves as the ultimate source of guidance for all of humanity, containing wisdom, laws, stories of previous prophets, and the path to eternal success in both this world and the Hereafter.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Allah says: <em className="text-emerald-600 dark:text-emerald-400">"This is the Book about which there is no doubt, a guidance for those conscious of Allah"</em> (Quran 2:2). The Quran has been preserved letter by letter, exactly as it was revealed 1400 years ago, fulfilling Allah's promise to protect His final message.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              The Quran consists of 114 Surahs (chapters), divided into 30 Juz (parts). Each Surah addresses different aspects of faith, worship, ethics, and law. Regular recitation and reflection upon its verses brings immense reward, guidance, and tranquility to the heart of every believer.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-100 dark:border-emerald-800/30">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-language text-emerald-600 dark:text-emerald-400 mr-3 text-2xl"></i>
                Authentic Translations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3 flex-shrink-0"></i>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100 block mb-1">Authentic English Translation: (Saheeh International)</strong>
                    The global gold standard for clear, authentic English translation.
                  </div>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3 flex-shrink-0"></i>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100 block mb-1">Authentic Urdu Translation: (Fateh Muhammad Jalandhry)</strong>
                    One of the most beautifully written and scholar-approved Urdu translations available.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          <div className="text-center glassmorphism rounded-xl p-4">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">114</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Surahs</div>
          </div>
          <div className="text-center glassmorphism rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6,236</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Verses</div>
          </div>
          <div className="text-center glassmorphism rounded-xl p-4">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">86</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Meccan</div>
          </div>
          <div className="text-center glassmorphism rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">28</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Medinan</div>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* Surah List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {quranSurahs.map((surah) => (
            <Link key={surah.number} href={`/quran/${surah.number}`}>
              <Card className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {surah.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {surah.name}
                        </h3>
                        <p className="text-xl font-arabic text-emerald-600 dark:text-emerald-400">
                          {surah.nameArabic}
                        </p>
                      </div>
                    </div>
                    <i className="fas fa-chevron-right text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"></i>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <i className="fas fa-list mr-1"></i>
                        {surah.verses} verses
                      </div>
                      <Badge variant={surah.type === "meccan" ? "default" : "secondary"}>
                        {surah.type === "meccan" ? "Meccan" : "Medinan"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <AdSense className="my-8" />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How many Surahs are in the Quran?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Quran contains 114 Surahs (chapters). Of these, 86 were revealed in Mecca before the Hijrah (migration), and 28 were revealed in Medina after the Prophet ﷺ migrated there.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What is the difference between Meccan and Medinan Surahs?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Meccan Surahs generally focus on fundamentals of faith (Aqeedah), stories of previous prophets, and descriptions of the Day of Judgment. Medinan Surahs often address social laws, community matters, family issues, and practical guidance for Muslims.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Which Surah is the longest in the Quran?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Surah Al-Baqarah (The Cow) is the longest Surah with 286 verses. It covers many aspects of Islamic law, stories of previous nations, and contains Ayat al-Kursi - one of the most powerful verses in the Quran.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Explore More Islamic Content
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rabbana-duas" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors">
              Quranic Duas
            </Link>
            <Link href="/ruqiya" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Ruqyah (Quran Healing)
            </Link>
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Read with Reflection
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <em>"And We have certainly made the Quran easy for remembrance, so is there any who will remember?"</em> - Quran 54:17
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Click on any Surah to begin reading and reflecting upon Allah's guidance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
