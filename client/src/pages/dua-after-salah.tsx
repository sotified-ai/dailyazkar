import { DuaBlock } from "@/components/dua-block";
import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function DuaAfterSalah() {
  const duas = [
    {
      id: 1,
      title: "Seeking Forgiveness",
      titleArabic: "الاستغفار",
      content: "أَسْتَغْفِرُ اللَّهَ",
      translation: "I seek forgiveness from Allah.",
      reference: "Muslim 591",
      repetitions: 3
    },
    {
      id: 2,
      title: "Peace from Allah",
      titleArabic: "اللهم أنت السلام",
      content: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      translation: "O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor.",
      reference: "Muslim 591",
      repetitions: 1
    },
    {
      id: 3,
      title: "Declaration of Faith",
      titleArabic: "التهليل",
      content: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
      translation: "There is no deity except Allah, alone without partner. To Him belongs the dominion and to Him belongs praise, and He is over all things competent. O Allah, there is none who can withhold what You give, and none who can give what You withhold, and the might of the mighty will not benefit him against You.",
      reference: "Bukhari 844",
      repetitions: 1
    },
    {
      id: 4,
      title: "Tasbih (Glory be to Allah)",
      titleArabic: "التسبيح",
      content: "سُبْحَانَ اللَّهِ",
      translation: "Glory be to Allah.",
      reference: "Muslim 595",
      repetitions: 33
    },
    {
      id: 5,
      title: "Tahmid (Praise be to Allah)",
      titleArabic: "التحميد",
      content: "الْحَمْدُ لِلَّهِ",
      translation: "Praise be to Allah.",
      reference: "Muslim 595",
      repetitions: 33
    },
    {
      id: 6,
      title: "Takbir (Allah is Greatest)",
      titleArabic: "التكبير",
      content: "اللَّهُ أَكْبَرُ",
      translation: "Allah is the Greatest.",
      reference: "Muslim 595",
      repetitions: 33
    },
    {
      id: 7,
      title: "Completing the Hundred",
      titleArabic: "تمام المائة",
      content: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      translation: "There is no deity except Allah, alone without partner. To Him belongs the dominion and to Him belongs praise, and He is over all things competent.",
      reference: "Muslim 597",
      repetitions: 1
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dua After Salah - Complete Post-Prayer Supplications",
    "description": "Learn the authentic duas and supplications to recite after completing your daily prayers. These blessed words complete your Salah and bring immense rewards.",
    "author": {
      "@type": "Organization",
      "name": "Daily Azkar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Daily Azkar",
      "url": "https://dailyazkar.site/dua-after-salah"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I say after finishing Salah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After the Tasleem, say Astaghfirullah 3 times, then recite 'Allahumma Antas-Salam wa minkas-salam...', followed by Tasbih (SubhanAllah 33x, Alhamdulillah 33x, Allahu Akbar 33x)."
        }
      },
      {
        "@type": "Question",
        "name": "Why is it important to make dua after prayers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The time after prayer is one of the blessed times when Allah is most likely to accept your supplications. The Prophet ﷺ said it is a time when duas are not rejected."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Dua After Salah - Complete Post-Prayer Supplications | Daily Azkar"
        description="Learn the authentic duas and supplications to recite after completing your daily prayers. Includes Arabic text, translations, and references from Hadith."
        keywords="dua after salah, post prayer dua, after namaz dua, salah supplications, tasbih after prayer, adhkar after salah, دعاء بعد الصلاة"
        canonical="https://dailyazkar.site/dua-after-salah"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-hands text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Dua after Salah
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-blue-600 dark:text-blue-400 mb-6">
            دعاء بعد الصلاة
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Complete your prayer with these blessed supplications. Essential duas to recite after each of the five daily prayers.
          </p>
        </div>

        {/* Introduction Section - SEO Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Importance of Post-Prayer Supplications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The moments immediately after completing Salah are among the most blessed times for making dua. The Prophet Muhammad ﷺ taught us specific supplications to recite after the Tasleem (ending greeting) that complete our prayer and bring immense rewards. These adhkar maintain the spiritual connection we established during prayer.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Prophet ﷺ said: <em className="text-blue-600 dark:text-blue-400">"The supplication made between the Adhan and Iqamah is not rejected, and neither is the one made after the obligatory prayer"</em> (Tirmidhi). This highlights why we should never rush away from our prayer mat without completing these blessed remembrances.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The post-prayer adhkar include seeking forgiveness (Istighfar), praising Allah through Tasbih, Tahmid, and Takbir, and personal supplications. This practice was consistently observed by the Prophet ﷺ after every prayer and is highly recommended for all Muslims.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Benefits of Post-Prayer Adhkar
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Completes the Prayer:</strong> These adhkar are the proper conclusion to your Salah.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Forgiveness of Sins:</strong> Istighfar after prayer seeks Allah's pardon for any shortcomings.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Tremendous Rewards:</strong> The Tasbih, Tahmid, and Takbir (33 times each) bring rewards that fill the scales.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Accepted Duas:</strong> This is a prime time when Allah accepts supplications.</span>
              </li>
            </ul>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* Duas List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {duas.map((dua, index) => (
            <DuaBlock key={dua.id} azkar={dua} index={index} />
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
                What should I say after finishing Salah?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                After the Tasleem, say "Astaghfirullah" 3 times, then recite "Allahumma Antas-Salam wa minkas-salam tabaarakta ya dhal-jalali wal-ikram", followed by Tasbih (SubhanAllah 33x, Alhamdulillah 33x, Allahu Akbar 33x), and complete with the declaration of Tawheed.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Why is it important to make dua after prayers?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The time after prayer is one of the blessed times when Allah is most likely to accept your supplications. The Prophet ﷺ mentioned it as a time when duas are not rejected. This is your opportunity to ask Allah for anything you need.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can I make personal dua after the prescribed adhkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! After completing the Sunnah adhkar, you can and should make personal dua. Raise your hands and ask Allah for your needs in any language you're comfortable with. This is a blessed time for personal supplications.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Continue Your Worship
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/prayer-times" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Prayer Times
            </Link>
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/rabbana-duas" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors">
              Quranic Duas
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Complete Your Prayer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              These supplications help maintain the spiritual connection established during prayer. Never rush away without remembering Allah.
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-arabic text-xl">
              اللَّهُمَّ تَقَبَّلْ مِنَّا
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              O Allah, accept from us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
