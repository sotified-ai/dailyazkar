import { SEOHead } from '@/components/seo-head';
import { AdSense } from '@/components/adsense';
import { Link } from 'wouter';

export default function AboutIslamPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "About Islam - Understanding Azkar and Remembrance of Allah",
    "url": "https://dailyazkar.site/about-islam",
    "mainEntityOfPage": "https://dailyazkar.site/about-islam",
    "description": "Learn about Islam's beautiful practice of Azkar (remembrance of Allah). Discover the spiritual benefits, importance, and role of daily supplications in a Muslim's life.",
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
        "name": "What is the difference between Azkar and Dua?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Azkar refers to remembrance phrases praising Allah, while Dua is supplication asking Allah for specific needs. Both are forms of worship and often overlap."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I recite Azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muslims are encouraged to recite Azkar throughout the day, especially during morning and evening times, after prayers, and before sleep."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <SEOHead
        title="About Islam - Understanding Azkar and Remembrance of Allah | Daily Azkar"
        description="Learn about Islam's beautiful practice of Azkar (remembrance of Allah). Discover the spiritual benefits, importance, and role of daily supplications in a Muslim's life."
        keywords="about islam, azkar meaning, dhikr islam, remembrance of allah, islamic worship, muslim faith, benefits of azkar"
        canonical="https://dailyazkar.site/about-islam"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-mosque text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            About Islam
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-emerald-600 dark:text-emerald-400 mb-6">
            عن الإسلام
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding the beautiful practice of Azkar and remembrance of Allah
          </p>
        </div>

        {/* What is Azkar Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              What is Azkar?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Azkar (أذكار) is the plural of Dhikr, meaning 'remembrance' in Arabic. It refers to the practice of remembering and mentioning Allah through specific phrases, supplications, and prayers. This fundamental Islamic practice connects the believer's heart and tongue to their Creator throughout the day, fostering a constant awareness of Allah's presence in every aspect of life.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The word Dhikr encompasses various forms of worship, including the recitation of Allah's names, glorification (Tasbih), praise (Tahmid), and declaration of Allah's greatness (Takbir). These simple yet powerful phrases, when recited with sincerity and understanding, have the ability to transform one's spiritual state and bring immense peace to the heart.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              In Islamic tradition, Azkar are prescribed for virtually every occasion - from waking up in the morning to going to sleep at night, before and after meals, upon entering and leaving the home, and countless other daily activities. This comprehensive approach ensures that a Muslim's entire day becomes an act of worship.
            </p>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* Importance Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Importance of Remembrance in Islam
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Allah says in the Quran: <em className="text-emerald-600 dark:text-emerald-400">"Indeed, in the remembrance of Allah do hearts find rest"</em> (Quran 13:28). This verse highlights the profound impact that Dhikr has on the human soul, providing peace, contentment, and spiritual fulfillment that material possessions cannot offer.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Prophet Muhammad ﷺ emphasized the importance of constant remembrance, teaching his companions various forms of Azkar for different times and occasions. He said: <em className="text-emerald-600 dark:text-emerald-400">"The example of the one who remembers his Lord compared to the one who does not is like that of the living and the dead"</em> (Bukhari).
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From morning to evening, before and after prayers, and in every life situation, Islam provides specific words of remembrance. This comprehensive system of Dhikr serves as a spiritual anchor, keeping believers grounded in their faith throughout life's challenges and blessings alike.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
              Spiritual and Practical Benefits of Azkar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-heart text-emerald-600 dark:text-emerald-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Inner Peace</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Regular Dhikr calms anxiety and brings serenity to the heart. It provides a refuge from the stresses of daily life.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-shield-alt text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Divine Protection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Many Azkar serve as spiritual protection from harm, evil, and negative influences.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-star text-amber-600 dark:text-amber-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Tremendous Reward</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Every word of remembrance earns rewards from Allah. Simple phrases can fill one's scale of good deeds.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-brain text-purple-600 dark:text-purple-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Spiritual Mindfulness</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Azkar keep us conscious of Allah throughout our daily activities, making every moment meaningful.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-link text-rose-600 dark:text-rose-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Divine Connection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Remembrance strengthens our relationship with our Creator and deepens our love for Him.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-pray text-teal-600 dark:text-teal-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Following Sunnah</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Practicing Azkar follows the blessed way of the Prophet ﷺ and earns his intercession.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What is the difference between Azkar and Dua?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Azkar refers to remembrance phrases praising Allah, such as "SubhanAllah" (Glory be to Allah) or "Alhamdulillah" (Praise be to Allah). Dua is supplication, where we ask Allah for specific needs or desires. Both are forms of worship and often overlap. For example, many Azkar include elements of Dua within them.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How often should I recite Azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Muslims are encouraged to recite Azkar throughout the day. The most important times are the morning (after Fajr) and evening (after Asr), after each of the five daily prayers, and before sleep. However, one can engage in Dhikr at any time - while walking, working, or waiting.
              </p>
            </div>
          </div>
        </div>

        {/* Authenticity Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              Our Commitment to Authenticity
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-amber-500">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Source Verification</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">All content is verified through authentic Islamic sources including Quran, Sahih Hadith collections, and classical commentaries.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-amber-500">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Scholarly Review</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Our content undergoes review by qualified Islamic scholars to ensure accuracy and adherence to authentic teachings.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-amber-500">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Reference Standards</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">We reference established works like Hisn al-Muslim, Al-Adhkar by Imam Nawawi, and authentic hadith collections.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-amber-500">
                    <i className="fas fa-gavel"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Verification Methodology</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Multiple verification steps ensure each piece of content meets the highest standards of Islamic scholarship.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Start Your Journey of Remembrance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/ruqiya" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Ruqyah Protection
            </Link>
            <Link href="/dua-after-salah" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Post-Prayer Duas
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Begin Your Spiritual Journey Today
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let the remembrance of Allah bring peace to your heart and light to your path
            </p>
            <Link href="/morning-azkar" className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full font-medium transition-all">
              Start with Morning Azkar
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
