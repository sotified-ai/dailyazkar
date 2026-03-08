import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function AuthenticHadithOnAzkar() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Authentic Hadith on Azkar - Verified Sayings of Prophet Muhammad",
    "description": "Collection of authentic hadith from Prophet Muhammad (peace be upon him) about the importance and benefits of daily remembrance.",
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
        "name": "Why is it important to follow authentic hadith about azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Following authentic hadith ensures we practice azkar as taught by Prophet Muhammad (peace be upon him). Authentic hadith provide guidance on the correct methods, timing, and benefits of various remembrances, ensuring our practice aligns with the Sunnah."
        }
      },
      {
        "@type": "Question",
        "name": "How can I verify the authenticity of a hadith?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hadith authenticity is determined by examining the chain of narrators (isnad) and the text (matn). Reliable collections like Sahih Bukhari and Sahih Muslim contain only authentic hadith. Consulting qualified scholars and established reference works also helps verify authenticity."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most important azkar mentioned in authentic hadith?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some of the most important azkar mentioned in authentic hadith include morning and evening remembrances, adhkar after prayers, dhikr after meals, and remembrances for various situations. The Prophet (peace be upon him) emphasized consistency in these practices."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Authentic Hadith on Azkar - Verified Sayings of Prophet Muhammad | Daily Azkar"
        description="Collection of authentic hadith from Prophet Muhammad (peace be upon him) about the importance and benefits of daily remembrance. Learn from verified sayings about the significance of azkar in Islamic practice."
        keywords="authentic hadith on azkar, prophet muhammad hadith on remembrance, verified sayings about azkar, authentic islamic remembrance hadith, prophet muhammad on morning azkar, prophet muhammad on evening azkar, authentic hadith morning and evening remembrance"
        canonical="https://dailyazkar.site/authentic-hadith-on-azkar"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-book text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Authentic Hadith on Azkar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Verified sayings of Prophet Muhammad (peace be upon him) about the importance and benefits of daily remembrance
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Guidance from the Seal of Prophets
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Noble Prophet Muhammad (peace be upon him) consistently emphasized the importance of daily remembrance (dhikr) in the life of a Muslim. His authentic sayings provide invaluable guidance on the significance, timing, and benefits of various forms of remembrance.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              These hadith form an essential part of our understanding of azkar, complementing the Quranic teachings. They offer practical instruction on how to incorporate remembrance into our daily routines and highlight the spiritual and material benefits of consistent practice.
            </p>
          </div>
        </div>

        {/* Hadith Collection */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-8 text-center">
            Selected Authentic Hadith on Azkar
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-amber-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-amber-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "By Allah, there is none among you who remembers Allah as He deserves to be remembered, but Allah has prepared for you a great reward for remembering Him."
                  </p>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    <p className="font-semibold">Reference: Sahih Bukhari</p>
                    <p className="mt-1">This hadith emphasizes the immense value Allah places on remembrance, even if we fall short of remembering Him as He truly deserves.</p>
                  </div>
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
                    "Shall I not inform you of the best of your deeds, the purest in the sight of your Lord, and the highest in rank, better for you than spending gold and silver, and better than meeting your enemy and striking their necks and they strike your necks?"
                    The companions replied, "Yes, O Messenger of Allah!" He said, "Remembrance of Allah."
                  </p>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    <p className="font-semibold">Reference: Sunan Tirmidhi</p>
                    <p className="mt-1">This hadith highlights the superiority of dhikr over other good deeds, including charity and jihad.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blue-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "The people who remember Allah much and the people who remember Him little are not equal. The people who remember Allah much are superior."
                  </p>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    <p className="font-semibold">Reference: Sahih Muslim</p>
                    <p className="mt-1">This hadith establishes the principle that frequent remembrance is superior to infrequent remembrance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-purple-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-purple-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "Whoever says 'Subhan Allahi wa bihamdihi' one hundred times in a day, will be forgiven all his sins even if they were as numerous as the foam of the sea."
                  </p>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    <p className="font-semibold">Reference: Sahih Bukhari and Muslim</p>
                    <p className="mt-1">This hadith demonstrates the tremendous power of specific remembrances for forgiveness of sins.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-teal-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-teal-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "The example of the one who remembers his Lord and the one who does not remember his Lord is like that of the living and the dead."
                  </p>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    <p className="font-semibold">Reference: Sahih Bukhari</p>
                    <p className="mt-1">This profound comparison illustrates the spiritual vitality that comes from constant remembrance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hadith About Timing */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Hadith About Timing of Azkar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <i className="fas fa-sun mr-2 text-amber-500"></i>
                Morning Remembrance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                "Whoever says 'Subhan Allahi wa bihamdihi' one hundred times in the morning and evening, will have a tree planted for him in Paradise."
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Reference: Sahih Bukhari</p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <i className="fas fa-moon mr-2 text-emerald-500"></i>
                Evening Remembrance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                "The most beloved speech to Allah is four words: 'Subhan Allahi wa bihamdihi, Subhan Allahil Adheem'."
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Reference: Sunan Tirmidhi</p>
            </div>
          </div>
        </div>

        {/* Benefits According to Hadith */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Benefits Mentioned in Hadith
          </h2>
          
          <div className="space-y-4">
            <div className="glassmorphism rounded-xl p-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                <i className="fas fa-shield-alt mr-2 text-blue-500"></i>
                Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Prophet (peace be upon him) said: "Whoever says 'A'udhu bi kalimatillah it-tammati min sharri ma khalaq' three times in the morning and evening, nothing will harm him until evening or until morning." (Sunan Abu Dawud)
              </p>
            </div>
            
            <div className="glassmorphism rounded-xl p-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                <i className="fas fa-pray mr-2 text-purple-500"></i>
                Forgiveness
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Prophet (peace be upon him) said: "Whoever says 'Astaghfirullah wa atubu ilayhi' one hundred times in a day, Allah will forgive him even if he has fled from battle." (Sahih Bukhari)
              </p>
            </div>
            
            <div className="glassmorphism rounded-xl p-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                <i className="fas fa-trophy mr-2 text-amber-500"></i>
                Reward
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Prophet (peace be upon him) said: "Whoever says 'La ilaha illallah wahdahu la shareeka lah, lahul mulku wa lahul hamdu wa huwa ala kulli shay'in qadeer' ten times, Allah will free him from Fire and he will have a tree in Paradise." (Sunan Tirmidhi)
              </p>
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
                Why is it important to follow authentic hadith about azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Following authentic hadith ensures we practice azkar as taught by Prophet Muhammad (peace be upon him). Authentic hadith provide guidance on the correct methods, timing, and benefits of various remembrances, ensuring our practice aligns with the Sunnah. This authenticity is crucial for spiritual benefit and religious correctness.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How can I verify the authenticity of a hadith?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hadith authenticity is determined by examining the chain of narrators (isnad) and the text (matn). Reliable collections like Sahih Bukhari and Sahih Muslim contain only authentic hadith. Consulting qualified scholars and established reference works also helps verify authenticity. Modern digital databases also provide authenticity ratings for hadith.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What are the most important azkar mentioned in authentic hadith?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Some of the most important azkar mentioned in authentic hadith include morning and evening remembrances, adhkar after prayers, dhikr after meals, and remembrances for various situations. The Prophet (peace be upon him) emphasized consistency in these practices and taught specific remembrances for protection, gratitude, and seeking forgiveness.
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
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/benefits-of-morning-azkar" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Benefits of Morning Azkar
            </Link>
            <Link href="/authentic-sources-of-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Authentic Sources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}