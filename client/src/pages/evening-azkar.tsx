import { azkarData, anasDua } from "@/data/azkar-data";

import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";
import { DuaBlock } from "@/components/dua-block";

export default function EveningAzkar() {
  const eveningAzkar = azkarData.find(category => category.id === "evening");

  if (!eveningAzkar) {
    return (
      <div className="pt-24 container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Evening Azkar not found
          </h1>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Evening Azkar - Complete Guide to Night Supplications",
    "description": "Discover the complete collection of Evening Azkar (أذكار المساء) with Arabic text, transliteration, and English translations. Protect yourself with these blessed night supplications.",
    "author": {
      "@type": "Organization",
      "name": "Daily Azkar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Daily Azkar",
      "url": "https://dailyazkar.site"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to recite Evening Azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time is after Asr prayer until Maghrib (sunset). If you miss this window, you can still recite them until midnight."
        }
      },
      {
        "@type": "Question",
        "name": "Can I recite Evening Azkar in English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While reciting in Arabic is preferred for the full reward, understanding the meaning is also important. You can read the translation to understand what you're saying."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to complete Evening Azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A complete recitation typically takes 10-15 minutes, though this varies based on the number of repetitions of each dhikr."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Evening Azkar (Authentic & Verified) | Daily Azkar"
        description="Discover the complete collection of Evening Azkar with Arabic text, transliteration, and English translations. Protect yourself with these blessed night supplications from authentic Islamic sources."
        keywords="evening azkar, أذكار المساء, night dhikr, evening prayers islam, masnoon sham, evening remembrance, islamic supplications, bedtime duas, ramzan evening azkar, ramadan azkar msa, iftar dua, dua before iftar, fasting dua, ramzaan, roza kholne ki dua, shaam app, dua for sleeping, sleeping dua, surah lail, surah layl, al lail, al layl, daily nightly lyrics, evening adhkar, massa lyrics, short night prayer, surah al layl, al magrib, masa lyrics, dua after sleeping, dua close fast"
        canonical="https://dailyazkar.site/evening-azkar"
        structuredData={structuredData}
      />
      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-moon text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            {eveningAzkar.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-emerald-600 dark:text-emerald-400 mb-6">
            {eveningAzkar.nameArabic}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {eveningAzkar.description}
          </p>
        </div>

        {/* Introduction Section - SEO Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Importance of Evening Azkar
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Evening Azkar (أذكار المساء) are the remembrances and supplications that Muslims recite after Asr prayer until Maghrib. These blessed words of remembrance provide spiritual protection, peace of heart, and closeness to Allah throughout the night. The practice of evening remembrance is deeply rooted in the Prophetic tradition and carries immense spiritual benefits.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Prophet Muhammad ﷺ consistently recited Evening Azkar and encouraged his companions to do the same. These supplications serve as a shield against harm and a means of gaining Allah's mercy and protection during the vulnerable hours of the night. By establishing this daily practice, believers strengthen their connection with their Creator and find peace in His remembrance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Benefits of Reciting Evening Azkar
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Divine Protection:</strong> Evening Azkar serve as a spiritual shield throughout the night, protecting you from harm and evil.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Peace of Mind:</strong> Regular remembrance brings tranquility to the heart and soul, helping you rest peacefully.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Seeking Forgiveness:</strong> Many of these supplications include seeking Allah's forgiveness for sins committed during the day.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Following the Sunnah:</strong> Practicing what the Prophet ﷺ consistently did strengthens our faith and earns tremendous rewards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Gratitude:</strong> Evening Azkar help us thank Allah for the blessings of the day that has passed.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              When to Recite Evening Azkar
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The preferred time for Evening Azkar is after Asr prayer until Maghrib (sunset). However, if this time passes, you may still recite them until the middle of the night. The key is consistency in making this a daily practice. Allah says in the Quran: <em>"Indeed, in the remembrance of Allah do hearts find rest"</em> (Quran 13:28).
            </p>
          </div>
        </div>

        {/* Azkar List */}
        <AdSense className="my-8" />
        <div className="space-y-8 max-w-4xl mx-auto">
          {eveningAzkar.items.map((azkar, index) => (
            <DuaBlock key={azkar.id} azkar={azkar} index={index} />
          ))}
        </div>

        {/* Hazrat Anas Dua Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Dua of Hazrat Anas (RA)
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              A powerful daily protection dua against all harm, taught by the Prophet ﷺ (narrated by Hazrat Anas RA)
            </p>
          </div>
          <DuaBlock azkar={anasDua} index={eveningAzkar.items.length} />
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
                What is the best time to recite Evening Azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The best time is after Asr prayer until Maghrib (sunset). If you miss this window, you can still recite them until midnight. The most important thing is to be consistent with your practice.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can I recite Evening Azkar in English?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                While reciting in Arabic is preferred for the full reward, understanding the meaning is also important. You can read the translation to understand what you're saying, but try to learn the Arabic gradually.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How long does it take to complete Evening Azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A complete recitation typically takes 10-15 minutes, though this varies based on the number of repetitions of each dhikr. Start with the most important ones if you're short on time.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Continue Your Spiritual Journey
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/ruqiya" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Ruqyah Protection
            </Link>
            <Link href="/dua-after-salah" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Post-Prayer Duas
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              End Your Day with Gratitude
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              May Allah forgive your sins and bless you with peaceful rest
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                <i className="fas fa-check-circle mr-2"></i>
                <span className="font-medium">Evening Azkar Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
