import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";
import { DuaBlock } from "@/components/dua-block";
import { azkarData } from "@/data/azkar-data";

export default function BenefitsOfEveningAzkar() {
  const eveningAzkar = azkarData.find(category => category.id === "evening");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Benefits of Evening Azkar - Spiritual and Psychological Advantages",
    "description": "Discover the profound benefits of reciting evening azkar (أذكار المساء) including spiritual protection, mental peace, and divine blessings for the night.",
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
        "name": "What are the main benefits of reciting evening azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main benefits include spiritual protection throughout the night, peace of mind, seeking forgiveness for daily sins, earning tremendous rewards, and following the blessed Sunnah of Prophet Muhammad ﷺ."
        }
      },
      {
        "@type": "Question",
        "name": "When should I recite evening azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The preferred time is after Asr prayer until Maghrib (sunset). If you miss this window, you can still recite them until midnight. The key is consistency in making this a daily practice."
        }
      },
      {
        "@type": "Question",
        "name": "Can evening azkar help with sleep quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, evening azkar can significantly improve sleep quality by calming the mind, releasing daily stress, and providing spiritual comfort that leads to peaceful rest."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Benefits of Evening Azkar - Spiritual and Psychological Advantages | Daily Azkar"
        description="Discover the profound benefits of reciting evening azkar (أذكار المساء) including spiritual protection, mental peace, and divine blessings for the night. Learn how ending your day with remembrance transforms your nights."
        keywords="benefits of evening azkar, evening azkar advantages, spiritual benefits of evening remembrance, psychological benefits of evening azkar, evening azkar protection, evening azkar peace of mind, evening azkar rewards, evening azkar sleep quality"
        canonical="https://dailyazkar.site/benefits-of-evening-azkar"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-moon text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Benefits of Evening Azkar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the profound spiritual, psychological, and physical advantages of ending your day with authentic Islamic remembrance
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Conclude Your Day with Sacred Remembrance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Evening Azkar (أذكار المساء) are the blessed remembrances and supplications that Muslims recite after Asr prayer until Maghrib. These sacred words of remembrance provide spiritual protection, peace of heart, and closeness to Allah throughout the night.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              As the day concludes and we prepare for rest, evening azkar offer an opportunity for reflection, gratitude, and spiritual purification. They serve as a bridge between the activity of the day and the tranquility of the night, allowing us to release worldly concerns and focus on our relationship with Allah.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-8 text-center">
            Key Benefits of Evening Azkar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-emerald-600 dark:text-emerald-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Night Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Evening azkar serve as a spiritual shield throughout the night, protecting you from harm, nightmares, and evil influences while you sleep.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bed text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Peaceful Sleep
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular remembrance brings tranquility to the heart and soul, helping you rest peacefully and wake up refreshed.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-redo text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Seeking Forgiveness
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Many evening azkar include seeking Allah's forgiveness for sins committed during the day, purifying the soul.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-praying-hands text-amber-600 dark:text-amber-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Following Sunnah
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Practicing what the Prophet ﷺ consistently did strengthens our faith and earns tremendous rewards from Allah.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Spiritual and Psychological Depth
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Reflection and Accountability
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Evening azkar provide a structured time for self-reflection, allowing us to evaluate our day's actions and seek forgiveness for shortcomings. This practice of accountability fosters spiritual growth and moral consciousness.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Through this reflection, we develop a heightened awareness of our responsibilities toward Allah and fellow humans, preparing us to improve in the coming day.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Stress Relief and Mental Peace
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                The practice of evening remembrance serves as a powerful mechanism for releasing the stress and tensions accumulated throughout the day. By focusing on Allah's attributes and promises, we shift our attention away from worldly concerns.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This mental transition creates the ideal state of mind for restful sleep and emotional restoration, setting the stage for a peaceful night.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Gratitude and Appreciation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Evening azkar encourage us to express gratitude to Allah for the countless blessings received during the day. This practice of gratitude cultivates a positive mindset and strengthens our relationship with the Creator, regardless of the day's challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Azkar */}
        {eveningAzkar && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              Sample Evening Azkar
            </h2>
            <div className="space-y-4">
              {eveningAzkar.items.slice(0, 1).map((azkar, index) => (
                <DuaBlock key={azkar.id} azkar={azkar} index={index} />
              ))}
            </div>
          </div>
        )}

        <AdSense className="my-8" />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What are the main benefits of reciting evening azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The main benefits include spiritual protection throughout the night, peace of mind, seeking forgiveness for daily sins, earning tremendous rewards, and following the blessed Sunnah of Prophet Muhammad ﷺ. These remembrances also promote better sleep and spiritual purification.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                When should I recite evening azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The preferred time is after Asr prayer until Maghrib (sunset). If you miss this window, you can still recite them until midnight. The key is consistency in making this a daily practice.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can evening azkar help with sleep quality?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, evening azkar can significantly improve sleep quality by calming the mind, releasing daily stress, and providing spiritual comfort that leads to peaceful rest. The practice helps transition from daily activities to a state of spiritual readiness for sleep.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Related Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/evening-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Complete Evening Azkar
            </Link>
            <Link href="/benefits-of-morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar Benefits
            </Link>
            <Link href="/azkar-before-sleep" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Azkar Before Sleep
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}