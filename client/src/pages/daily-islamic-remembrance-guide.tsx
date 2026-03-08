import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function DailyIslamicRemembranceGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Daily Islamic Remembrance Guide - Complete Manual for Dhikr",
    "description": "Comprehensive guide to daily Islamic remembrance (dhikr) including morning, evening, and situational azkar with Arabic text, transliteration, and translations.",
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
        "name": "What is the importance of daily Islamic remembrance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Daily Islamic remembrance (dhikr) is crucial for spiritual well-being and maintaining connection with Allah. The Quran states: 'Those who believe and whose hearts find rest in the remembrance of Allah. Verily, in the remembrance of Allah do hearts find rest' (Quran 13:28). Regular dhikr provides protection, peace, and spiritual nourishment."
        }
      },
      {
        "@type": "Question",
        "name": "How many times should I recite daily azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The frequency varies depending on the specific azkar. Some are recommended to be recited once, while others have specific numbers like 33 times for tasbih. The key is consistency rather than quantity. Start with what you can manage and gradually increase. The Prophet (peace be upon him) emphasized the importance of regularity in dhikr."
        }
      },
      {
        "@type": "Question",
        "name": "When is the best time for daily remembrance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best times are morning (after Fajr until sunrise) and evening (after Asr until Maghrib). Other blessed times include after prayers, before sleep, after waking up, and during times of difficulty. The Prophet (peace be upon him) was consistent in his remembrance throughout the day and night."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Daily Islamic Remembrance Guide - Complete Manual for Dhikr | Daily Azkar"
        description="Comprehensive guide to daily Islamic remembrance (dhikr) including morning, evening, and situational azkar with Arabic text, transliteration, and translations. Learn the complete manual for Islamic remembrance."
        keywords="daily islamic remembrance, islamic dhikr guide, daily azkar guide, morning and evening azkar, islamic remembrance manual, daily islamic prayers, daily islamic supplications, morning azkar guide, evening azkar guide, islamic remembrance guide"
        canonical="https://dailyazkar.site/daily-islamic-remembrance-guide"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-book-open text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Daily Islamic Remembrance Guide
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Complete manual for dhikr and daily Islamic remembrance
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Foundation of Islamic Worship
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Dhikr (remembrance of Allah) is the cornerstone of Islamic spiritual life. The Quran emphasizes its importance: "O you who believe! Remember Allah with much remembrance" (Quran 33:41). Regular dhikr keeps the heart connected to Allah, provides spiritual nourishment, and offers protection from spiritual and worldly harm.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              This comprehensive guide will walk you through the essential daily remembrances, their timing, benefits, and proper implementation. Following these practices as taught by Prophet Muhammad (peace be upon him) will strengthen your faith and provide peace of mind.
            </p>
          </div>
        </div>

        {/* Categories of Daily Remembrance */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Categories of Daily Remembrance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-sun text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-3">
                Morning Azkar (أذكار الصباح)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Recited after Fajr prayer until sunrise
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Protection for the day</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Spiritual strength</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Divine blessings</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-moon text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-3">
                Evening Azkar (أذكار المساء)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Recited after Asr prayer until Maghrib
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Night protection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Peace of mind</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Seeking forgiveness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Daily Remembrances */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Essential Daily Remembrances
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 dark:text-green-400 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Ayat al-Kursi</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-2xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La taKhudhuhu sinatun wa la nawm. Lahuma fi assama wati wa ma fi al-ardi. Man dhal ladhi yashfa'u indahu illa bi-idhnihi. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuheetoona bishayin min 'ilmihi illa bima sha'. Wasia kursiyyuhus-samawati wal-arda. Wa la yaooduhu hifdhuhuma. Wa Huwal-'Aliyyul-'Adheem."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Reciting Ayat al-Kursi morning and evening provides protection for the day or night until the next recitation. It's one of the most powerful verses in the Quran.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 2:255 | Frequency: Once daily (recommended twice: morning and evening)
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">The Three Quls</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Surah Al-Ikhlas (Quran 112:1-4)</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                    <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                      قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                    Transliteration: "Qul huwallahu ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad."
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Reciting this surah morning and evening is equivalent to reciting one-third of the Quran.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Surah Al-Falaq (Quran 113:1-5)</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                    <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                      قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                    Transliteration: "Qul a'udhu birabbi'l-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharri'n-naffathati fil 'uqad. Wa min sharri hasidin idha hasad."
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This surah seeks protection from evil forces and harmful magic.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Surah An-Nas (Quran 114:1-6)</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                    <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                      قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَ النَّاسِ
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                    Transliteration: "Qul a'udhu birabbin-nas. Malikin-nas. Ilahin-nas. Min sharri'l-waswas'il-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas."
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This surah seeks protection from evil whisperings and negative influences.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Frequency: Three times daily (recommended after each prayer)
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tasbih (Glory Be to Allah)</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Subhanallah, walhamdulillah, wa la ilaha illallahu, wallahu akbar"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "Glory be to Allah, praise be to Allah, there is no god but Allah, and Allah is the Greatest"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This is to be repeated 33 times, then say "Allahu Akbar" 34 times to complete 100 total. This tasbih after each prayer forgives sins even if they are as numerous as foam on the sea.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih Bukhari | Frequency: After each of the five daily prayers
              </p>
            </div>
          </div>
        </div>

        {/* Timing and Implementation */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Timing and Implementation
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-clock mr-3 text-amber-500"></i>
                Recommended Times for Dhikr
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Morning Times</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-amber-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 dark:text-gray-300">After Fajr prayer until sunrise</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-amber-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 dark:text-gray-300">During breakfast</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-amber-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 dark:text-gray-300">Before leaving home</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Evening Times</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 dark:text-gray-300">After Asr prayer until Maghrib</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 dark:text-gray-300">After Maghrib prayer</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 dark:text-gray-300">Before sleeping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-list mr-3 text-blue-500"></i>
                Daily Implementation Schedule
              </h3>
              
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-2 text-gray-800 dark:text-white">Time</th>
                    <th className="pb-2 text-gray-800 dark:text-white">Activity</th>
                    <th className="pb-2 text-gray-800 dark:text-white">Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 text-gray-600 dark:text-gray-300">After Fajr</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Morning Azkar</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Day protection</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-600 dark:text-gray-300">After each prayer</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Tasbih (33x3 + 1)</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Sin forgiveness</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-600 dark:text-gray-300">After Asr</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Evening Azkar</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Night protection</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Before sleep</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Specific sleep duas</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">Peaceful sleep</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Benefits of Consistent Dhikr */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Benefits of Consistent Dhikr
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Spiritual Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Regular dhikr creates a spiritual shield against negative influences and harmful forces.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Peace of Mind
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Consistent remembrance brings tranquility and mental calmness to the heart.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-pray text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Increased Faith
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Regular dhikr strengthens belief and connection with Allah.
              </p>
            </div>
          </div>
        </div>

        {/* Hadith About Dhikr */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Hadith Emphasizing Dhikr
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-green-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "The example of the one who remembers his Lord and the one who does not remember his Lord is like that of the living and the dead."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sahih Bukhari - This hadith emphasizes the spiritual vitality that comes from constant remembrance of Allah.
                  </p>
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
                    "Shall I not inform you of the best of your deeds, the purest in the sight of your Lord, and the highest in rank, better for you than spending gold and silver, and better than meeting your enemy and striking their necks and they strike your necks?" The companions replied, "Yes, O Messenger of Allah!" He said, "Remembrance of Allah."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sunan Tirmidhi - This hadith highlights the superiority of dhikr over other good deeds, including charity and jihad.
                  </p>
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
                    "The people who remember Allah much and the people who remember Him little are not equal. The people who remember Allah much are superior."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sahih Muslim - This hadith establishes the principle that frequent remembrance is superior to infrequent remembrance.
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
                What is the importance of daily Islamic remembrance?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Daily Islamic remembrance (dhikr) is crucial for spiritual well-being and maintaining connection with Allah. The Quran states: "Those who believe and whose hearts find rest in the remembrance of Allah. Verily, in the remembrance of Allah do hearts find rest" (Quran 13:28). Regular dhikr provides protection, peace, and spiritual nourishment. It's a fundamental practice that strengthens faith and brings tranquility to the heart.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How many times should I recite daily azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The frequency varies depending on the specific azkar. Some are recommended to be recited once, while others have specific numbers like 33 times for tasbih. The key is consistency rather than quantity. Start with what you can manage and gradually increase. The Prophet (peace be upon him) emphasized the importance of regularity in dhikr. Quality and understanding of the words are more important than quantity.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                When is the best time for daily remembrance?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The best times are morning (after Fajr until sunrise) and evening (after Asr until Maghrib). Other blessed times include after prayers, before sleep, after waking up, and during times of difficulty. The Prophet (peace be upon him) was consistent in his remembrance throughout the day and night. These times are blessed because they are when Allah's mercy is abundant and prayers are more likely to be answered.
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
            <Link href="/morning-azkar" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/benefits-of-morning-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Benefits of Morning Azkar
            </Link>
            <Link href="/authentic-hadith-on-azkar" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Authentic Hadith on Azkar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}