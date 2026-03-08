import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function WhenToReciteMorningAzkar() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "When to Recite Morning Azkar - Optimal Times and Guidelines",
    "description": "Learn the optimal times for reciting morning azkar (أذكار الصباح) according to Islamic tradition and scholarly guidance.",
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
        "name": "What is the best time to recite morning azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time is after Fajr prayer until sunrise. This is when the angels are present and Allah's mercy descends. If you miss this window, you can still recite them until mid-morning (Dhuha time)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I recite morning azkar before Fajr prayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, morning azkar are specifically for the time after Fajr prayer. Before Fajr is the time for Tahajjud prayer if you wish to engage in extra worship before dawn."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I miss the preferred time for morning azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you miss the preferred time (after Fajr until sunrise), you can still recite morning azkar until mid-morning (Dhuha time). While the greatest reward is in the preferred time, it's still beneficial to recite them later rather than not at all."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-yellow-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="When to Recite Morning Azkar - Optimal Times and Guidelines | Daily Azkar"
        description="Learn the optimal times for reciting morning azkar (أذكار الصباح) according to Islamic tradition and scholarly guidance. Discover the preferred timing for maximum spiritual benefit."
        keywords="when to recite morning azkar, best time for morning azkar, morning azkar timing, islamic timing for morning remembrance, morning azkar after fajr, morning azkar before sunrise, morning azkar time window, optimal time for morning azkar"
        canonical="https://dailyazkar.site/when-to-recite-morning-azkar"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-clock text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            When to Recite Morning Azkar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding the optimal times and guidelines for reciting morning remembrance
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Blessed Time for Morning Remembrance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Understanding the proper timing for morning azkar (أذكار الصباح) is crucial for maximizing their spiritual benefit. The Prophet Muhammad (peace be upon him) was very particular about the timing of various forms of worship, including morning remembrance.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Islamic scholars have identified specific time frames for different acts of worship based on the Quran and authentic hadith. For morning azkar, there are optimal periods that carry special significance and enhanced spiritual rewards.
            </p>
          </div>
        </div>

        {/* Primary Time Window */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            The Primary Time Window
          </h2>
          
          <div className="glassmorphism rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-6">
                <i className="fas fa-sun text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  After Fajr Prayer Until Sunrise
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  This is the most preferred time for morning azkar
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-amber-500">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Peak Spiritual Benefit</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    The time after Fajr prayer until sunrise is considered one of the most blessed times of the day. Angels descend during this period, and Allah's mercy is abundant.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-amber-500">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Prophetic Tradition</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    The Prophet Muhammad (peace be upon him) consistently practiced morning remembrance during this time, making it a sunnah mu'akkadah (emphasized sunnah).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-amber-500">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Protection Throughout the Day</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reciting morning azkar in this time frame provides spiritual protection for the entire day, as mentioned in authentic hadith.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Time Windows */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Alternative Time Windows
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <i className="fas fa-sunrise mr-2 text-orange-500"></i>
                Dhuha Time
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                From mid-morning until just before Dhuhr prayer
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">If you miss the primary time, this is the next best alternative</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Still carries significant reward though less than the primary time</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <i className="fas fa-exclamation-triangle mr-2 text-amber-500"></i>
                If Missed Completely
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                During the day if unable to recite in preferred times
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Better to recite late than not at all</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Try to maintain consistency in a fixed time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practical Guidelines */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Practical Guidelines for Observing Proper Timing
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Preparing for the Optimal Time
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                To make the most of the preferred time for morning azkar, consider these practical steps:
              </p>
              
              <ol className="list-decimal pl-6 space-y-3">
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Wake up early</span>: Set your alarm to ensure you have time after Fajr prayer
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Complete Fajr prayer</span>: Perform the prayer first, then proceed with azkar
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Minimize distractions</span>: Find a quiet space to focus on your remembrance
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Set a routine</span>: Establish a consistent schedule to make it a habit
                </li>
              </ol>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Dealing with Challenges
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Life circumstances sometimes make it difficult to observe the optimal time. Here's how to handle common challenges:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-user-clock text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Busy Schedule</span>: Even a few minutes of essential morning azkar is better than skipping entirely. Focus on the most important remembrances if time is limited.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-bed text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Difficulty Waking Up</span>: Prepare the night before by placing your azkar list nearby and asking family members to help remind you.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-city text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Work/School Commitments</span>: You can memorize short azkar and recite them during breaks if you miss the preferred time.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hadith Evidence */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Supporting Hadith Evidence
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-amber-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-amber-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "O you who believe! Remember Allah with much remembrance. And glorify Him morning and evening." (Quran 33:41-42)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    This Quranic verse establishes the importance of morning and evening remembrance, with the morning time being particularly emphasized in hadith literature.
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-emerald-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-emerald-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "Whoever recites 'Subhan Allahi wa bihamdihi' one hundred times in the morning and evening, will have a tree planted for him in Paradise." (Sahih Bukhari)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    This hadith specifically mentions morning and evening times for certain remembrances, highlighting the significance of these periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                What is the best time to recite morning azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The best time is after Fajr prayer until sunrise. This is when the angels are present and Allah's mercy descends. If you miss this window, you can still recite them until mid-morning (Dhuha time). The key is to be consistent with whichever time you choose.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can I recite morning azkar before Fajr prayer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No, morning azkar are specifically for the time after Fajr prayer. Before Fajr is the time for Tahajjud prayer if you wish to engage in extra worship before dawn. The term "morning azkar" refers to remembrances for the period after dawn has broken and Fajr prayer is completed.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What happens if I miss the preferred time for morning azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                If you miss the preferred time (after Fajr until sunrise), you can still recite morning azkar until mid-morning (Dhuha time). While the greatest reward is in the preferred time, it's still beneficial to recite them later rather than not at all. Consistency in reciting them at any time is better than abandoning them entirely.
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
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Complete Morning Azkar
            </Link>
            <Link href="/benefits-of-morning-azkar" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Benefits of Morning Azkar
            </Link>
            <Link href="/when-to-recite-evening-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Evening Azkar Timing
            </Link>
            <Link href="/dua-after-fajr-prayer" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              After Fajr Prayer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}