import { HeroSlider } from "@/components/hero-slider";
import { FeaturedContent } from "@/components/featured-content";
import { EnhancedSearch } from "@/components/enhanced-search";

import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Daily Azkar",
    "url": "https://dailyazkar.site",
    "description": "Your daily guide to Morning and Evening Zikr, featuring authentic Islamic Azkar and Quran Duas with explanations.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dailyazkar.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="pt-24">
      <SEOHead
        title="Complete Morning & Evening Azkar Guide (Arabic + English) | Daily Azkar"
        description="Your daily guide to Morning and Evening Zikr, featuring authentic Islamic Azkar and Quran Duas with explanations. Enhance your spiritual journey with our interactive content."
        keywords="Zikr, Azkar, Morning Azkar, Evening Azkar, Quran, Islamic Duas, Daily Prayers, Muslim prayers, spiritual guide, masnoon azkar, ramzan azkar, ramadan azkar, fasting duas, sehri dua, iftar dua, ramzan dua, roza, fasting islam, azkar ramadan, ramadan mubarak, ramzaan, subah ke azkar, sham ke azkar, namaz ke baad ki dua, hifazat ki dua, nazar e bad ki dua, masnoon duain, qurani duain, manzil dua, ruqyah shariah, beemari ki dua, parishani ki dua, wazifa, sone ki dua, jagne ki dua, ghar se nikalne ki dua, safar ki dua, daily azkar in urdu, roman urdu duas, islamic wazaif, dua qabooliyat, rabbana duas in roman english, har bimari ka ilaj quran se, jadu ka ilaj, nazar ka ilaj, subah o sham ke azkar, bimari ki dua, pareshani ki dua, gham ki dua, supplication meaning, dhikr, du aa, tasbeeh, akdar, dua and meaning, akdar meaning, how to make dua, indeed meaning in urdu, how to ask dua, dua muslim, praise god in arabic, protect dua, dhikr meaning, dua to save from evil eye, islamic dua, translate allahu akbar, zikr, askar, la ilaha illallah in arabic, prayer in arabic, prayers in arabic language, qiyam meaning, what is recite, adhkar, define dua"
        canonical="https://dailyazkar.site"
        structuredData={structuredData}
      />
      <HeroSlider />
      <AdSense className="my-8" />
      <FeaturedContent />
      <AdSense className="my-8" />

      {/* Educational Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              Why Morning Azkar Matter
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Morning Azkar (أذكار الصباح) hold a special place in Islamic tradition as they serve as a spiritual armor for the believer at the beginning of each day. The Prophet Muhammad ﷺ emphasized the importance of these remembrances, stating that whoever recites them will have Allah's protection throughout the day.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The significance of morning remembrance extends beyond mere ritual; it's a conscious act of turning to Allah before engaging in worldly affairs. These blessed words establish a spiritual connection that influences one's mindset, decisions, and interactions throughout the day. Scientific studies have also shown that starting the day with mindful, positive affirmations can significantly impact mental well-being and productivity.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Regular recitation of morning Azkar creates a protective barrier against negative influences and helps maintain spiritual focus despite the challenges of daily life. This practice serves as a reminder of our dependence on Allah and our ultimate purpose in life.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              Authentic Sources of Azkar
            </h2>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our collection of Azkar comes from the most authentic sources in Islamic literature: the Quran and the verified Sunnah of Prophet Muhammad ﷺ. Each remembrance has been carefully sourced from reliable Hadith collections such as Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud, and Jami` at-Tirmidhi.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We prioritize mutawatir (widely transmitted) and sahih (authentic) narrations to ensure that every Azkar presented on our platform aligns with the highest standards of Islamic scholarship. Our team consults classical commentaries and contemporary scholarly works to verify the authenticity and proper context of each remembrance.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Additionally, we include the original Arabic text, transliteration, and accurate English translation for each Azkar, along with its source reference, allowing users to verify and deepen their understanding of these blessed words.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              How This Site Ensures Authenticity
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At Daily Azkar, we maintain rigorous standards for verifying the authenticity of every remembrance we present. Our editorial process involves consultation with qualified Islamic scholars and references to established academic works on Hadith sciences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Each Azkar is cross-referenced with multiple authentic sources, and we clearly indicate the grade of each Hadith (sahih, hasan, da'if) according to established scholarly criteria. We also provide the original Arabic text as it appears in classical sources, ensuring accuracy in transmission.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our commitment to authenticity extends to our translations, which are reviewed by qualified scholars to ensure they accurately convey the intended meaning of the Arabic text without adding personal interpretations or innovations to the established practices.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              Islamic Scholarship References
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our content is guided by the works of renowned Islamic scholars and institutions. We reference authoritative texts such as "Al-Adhkar" by Imam Nawawi, "Hisn al-Muslim" by Sa'id ibn Ali ibn Wahf al-Qahtani, and "Fortress of the Muslim" for verification of authentic supplications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Contemporary scholars whose works inform our understanding include Ibn Uthaymeen, Al-Albani, and other recognized authorities in Hadith sciences. We also consult major Islamic universities and scholarly councils for guidance on matters of authenticity and proper practice.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                For complex issues regarding the context and application of various Azkar, we defer to qualified scholars who have dedicated their lives to the study of Islamic jurisprudence and spirituality. This ensures that our users receive guidance that is both authentic and applicable to contemporary life.
              </p>
            </div>
          </div>

          {/* Online Quran Tutor Highlight */}
          <div className="text-center mb-16 px-4">
            <div className="relative inline-block w-full max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group border border-gray-100 dark:border-gray-700">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500"></div>

                <span className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 font-bold rounded-full text-xs tracking-wider uppercase mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800">
                  <i className="fas fa-star text-amber-500 mr-2"></i> New Premium Service
                </span>

                <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
                  Hire an Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Online Quran Teacher</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Interactive 1-on-1 Quran classes with qualified native-sounding tutors for your children and adults. Choose from dedicated male and female teachers specializing in Noorani Qaida, Tajweed, and Hifz.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/online-quran-tutor" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                    <i className="fas fa-graduation-cap mr-3 text-xl"></i>
                    Start Free Trial Class
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Community Link */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-1 shadow-xl w-full max-w-2xl transform hover:-translate-y-1 transition-transform duration-300">
              <a href="https://chat.whatsapp.com/GffEMFRkkH76d31tDTgawC" target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-800 rounded-xl px-8 py-8 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-green-500 opacity-10 rounded-full blur-2xl group-hover:bg-green-400 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-emerald-500 opacity-10 rounded-full blur-2xl group-hover:bg-emerald-400 transition-all duration-500"></div>

                <i className="fab fa-whatsapp text-5xl text-green-500 mb-4 inline-block group-hover:scale-110 transition-transform duration-300"></i>
                <h3 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-3">Join Our WhatsApp Community</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">Get daily reminders, authentic Azkar updates, and stay spiritually connected with our growing community.</p>

                <div className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">
                  <span>Join Group Now</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Gallery Link */}
          <div className="text-center my-16">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-1">
              <Link to="/gallery" className="block bg-white dark:bg-gray-800 rounded-xl px-8 py-6 text-center">
                <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-2">Explore Our Azkar Gallery</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Beautiful Islamic calligraphy and sacred remembrance images</p>
                <div className="flex items-center justify-center text-amber-600 dark:text-amber-400 font-medium">
                  <span>View Collection</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <EnhancedSearch />
    </div>
  );
}
