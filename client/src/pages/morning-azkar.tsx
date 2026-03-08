import { azkarData, anasDua } from "@/data/azkar-data";

import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";
import { DuaBlock } from "@/components/dua-block";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/related-content";

export default function MorningAzkar() {
  const morningAzkar = azkarData.find(category => category.id === "morning");

  if (!morningAzkar) {
    return (
      <div className="pt-24 container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Morning Azkar not found
          </h1>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Morning Azkar - Complete Guide to Dawn Supplications",
    "description": "Discover the complete collection of Morning Azkar (أذكار الصباح) with Arabic text, transliteration, and English translations. Includes Prophetic prescriptions for sufficiency (کفایت کا نبوى نسخہ) in all affairs and prayers for completely thanking Allah's blessings.",
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
        "name": "What is the best time to recite Morning Azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time is after Fajr prayer until sunrise. If you miss this window, you can still recite them until mid-morning (Dhuha time)."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to complete Morning Azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A complete recitation typically takes 10-15 minutes, though this varies based on the number of repetitions of each dhikr."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of Morning Azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Morning Azkar provide divine protection throughout the day, bring peace of mind, earn tremendous rewards, and help maintain constant awareness of Allah."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="50 Authentic Morning Azkar with Translation | Daily Azkar"
        description="Discover the complete collection of Morning Azkar with Arabic text, transliteration, and English translations. Start your day with blessed remembrance, divine protection, and Prophetic prescriptions for sufficiency in worldly and hereafter affairs."
        keywords="morning azkar, أذكار الصباح, dawn prayers islam, subh azkar, morning dhikr, morning remembrance, Prophetic Prescription for Sufficiency, دنیا و آخرت کے کاموں پر کفایت کا نبوى نسخہ, ہر چیز سے کفایت کا نبوى نسخہ, اپنے لئے اللہ کى نعمتوں کو مکمّل فرمانے کا نبوى نسخہ, دن اور رات کى نعمتوں کا شکر ادا کرنے کا نبوى نسخہ, completing allah's blessings, islamic supplications, fajr duas, ramzan azkar, ramadan morning azkar, sehri dua, fasting duas, azkar after fajr, ramzaan azkar, suhoor dua, الاذكار الصباحية, morning dua, morning adhkar, waking up dua, dua for waking up, dua after waking up, dua wake up, dua waking up, morning dus, complete morning, best morning prayer, morning doa, wake up dua"
        canonical="https://dailyazkar.site/morning-azkar"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Azkar Hub", href: "/azkar" },
          { label: "Morning Azkar" }
        ]} />

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-sun text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            {morningAzkar.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-amber-600 dark:text-amber-400 mb-6">
            {morningAzkar.nameArabic}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {morningAzkar.description}
          </p>
        </div>

        {/* Introduction Section - SEO Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Power of Morning Azkar
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Morning Azkar (أذكار الصباح) are the blessed remembrances and supplications that Muslims recite after Fajr prayer until sunrise. These sacred words connect us with Allah at the start of each day, providing spiritual protection, inner peace, and divine blessings that accompany us throughout our daily activities.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Prophet Muhammad ﷺ was consistent in his morning remembrance and taught his companions these supplications for their protection and reward. He said: <em className="text-amber-600 dark:text-amber-400">"Whoever says SubhanAllah 100 times in the morning and 100 times in the evening, it is as if he has performed Hajj 100 times"</em> (Tirmidhi). This shows the immense value Allah places on morning remembrance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Benefits of Morning Azkar
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Divine Protection:</strong> Shield yourself from harm, evil eye, and negative influences throughout the day.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Spiritual Energy:</strong> Begin your day with positive energy and a strong connection to Allah.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Tremendous Rewards:</strong> Each word of remembrance is recorded as good deeds in your scale.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Following Sunnah:</strong> Practice what the Prophet ﷺ consistently did every morning.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Mental Clarity:</strong> Starting with Dhikr brings focus and tranquility to your mind.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              When to Recite Morning Azkar
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The preferred time for Morning Azkar is after Fajr prayer until sunrise. This is a blessed time when Allah descends to the lowest heaven and responds to the supplications of His servants. If you miss this window, you may still recite them until mid-morning (Dhuha time). Consistency is key - even a few minutes of daily remembrance is better than occasional lengthy sessions.
            </p>
          </div>
        </div>

        {/* Azkar List */}
        <AdSense className="my-8" />
        <div className="space-y-8 max-w-4xl mx-auto">
          {morningAzkar.items.map((azkar, index) => (
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
          <DuaBlock azkar={anasDua} index={morningAzkar.items.length} />
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
                What is the best time to recite Morning Azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The best time is after Fajr prayer until sunrise. This is when the angels are present and Allah's mercy descends. If you miss this window, you can still recite them until mid-morning.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How long does it take to complete Morning Azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A complete recitation typically takes 10-15 minutes. If you're pressed for time, start with the most essential ones like Ayat al-Kursi, the three Quls, and the morning Tasbih.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What are the benefits of Morning Azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Morning Azkar provide divine protection throughout the day, bring peace of mind, earn tremendous rewards, help maintain constant awareness of Allah, and follow the blessed Sunnah of our Prophet ﷺ.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <RelatedContent hub="azkar" currentHref="/morning-azkar" />

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Complete Your Morning Routine
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              May Allah accept your remembrance and grant you protection throughout the day
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                <i className="fas fa-check-circle mr-2"></i>
                <span className="font-medium">Morning Azkar Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
