import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function ProtectionDuasInIslam() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Protection Duas in Islam - Islamic Supplications for Safety",
    "description": "Discover authentic Islamic supplications for protection against evil, harm, and negative influences, with Arabic text, transliteration, and translations.",
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
        "name": "What are the most effective protection duas in Islam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective protection duas include Ayat al-Kursi, the three Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas), and specific duas like 'A'udhu billahi minash shaytanir rajeem'. These provide comprehensive spiritual protection when recited regularly."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I recite protection duas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Protection duas should be recited regularly, especially morning and evening. Ayat al-Kursi and the three Quls are recommended to be recited after each prayer. Consistency is key, and the Prophet (peace be upon him) emphasized regular recitation for continuous protection."
        }
      },
      {
        "@type": "Question",
        "name": "Can protection duas protect against the evil eye?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, specific protection duas can protect against the evil eye. Surah Al-Falaq and Surah An-Nas are particularly effective for this purpose. The Prophet (peace be upon him) recommended these surahs for protection from the evil eye and witchcraft."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Protection Duas in Islam - Islamic Supplications for Safety | Daily Azkar"
        description="Discover authentic Islamic supplications for protection against evil, harm, and negative influences, with Arabic text, transliteration, and translations. Learn Islamic protection duas for safety."
        keywords="protection duas in islam, islamic protection duas, duas for protection from harm, islamic supplications for safety, protection from evil eye duas, protection from black magic duas, islamic safety duas, morning protection duas, evening protection duas"
        canonical="https://dailyazkar.site/protection-duas-in-islam"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-shield-alt text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Protection Duas in Islam
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Islamic supplications for safety and protection from harm
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Seeking Divine Protection
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Islam provides numerous authentic supplications (duas) specifically designed for protection against various forms of harm, evil, and negative influences. These protection duas are gifts from Allah, taught through the Quran and the Sunnah of Prophet Muhammad (peace be upon him), to safeguard believers in their daily lives.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Prophet (peace be upon him) emphasized the importance of seeking protection through these divinely revealed words, which provide spiritual armor against both seen and unseen threats. Regular recitation of these duas creates a protective barrier around the believer.
            </p>
          </div>
        </div>

        {/* Most Effective Protection Duas */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Most Effective Protection Duas
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 dark:text-red-400 font-bold">1</span>
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
                Reciting Ayat al-Kursi provides comprehensive protection. The Prophet (peace be upon him) said that whoever recites it after every prayer will remain under Allah's protection until the next prayer.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 2:255 | Benefit: Comprehensive protection until next prayer
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">The Three Quls for Protection</h3>
              </div>
              
              <div className="space-y-6">
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
                    This surah seeks protection from evil forces, including witchcraft and the evil eye. It's particularly effective against harmful magic and envy.
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
                    This surah seeks protection from evil whisperings that cause doubt, fear, and anxiety. It's effective against psychological manipulation and negative thoughts.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: Comprehensive protection from evil forces and negative influences
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Basmalah</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Bismillahir-Rahmanir-Rahim"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "In the name of Allah, the Most Gracious, the Most Merciful"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Prophet (peace be upon him) said: "Whoever recites Bismillah when entering his house, the devil says: 'No place to stay and no dinner for you here.'"
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sunan Abu Dawud | Benefit: Protection when entering homes and beginning activities
              </p>
            </div>
          </div>
        </div>

        {/* Protection from Specific Threats */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Protection from Specific Threats
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-eye mr-3 text-amber-500"></i>
                Protection from the Evil Eye
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Dua for Protection from Envy</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                    <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                      أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                    Transliteration: "A'udhu bikalimatillahi-t-tammah min sharri ma khalaq"
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Translation: "I seek refuge in the perfect words of Allah from the evil of what He has created"
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reference: Sahih Muslim | Benefit: Protection from the evil eye and harmful intentions
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Surah Al-Falaq and An-Nas</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    These two surahs are specifically recommended for protection from the evil eye and witchcraft. The Prophet (peace be upon him) used to recite them for his grandsons Hasan and Husayn.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-spell-check mr-3 text-purple-500"></i>
                Protection from Witchcraft and Black Magic
              </h3>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Ruqyah for Protection</h4>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                  <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                    أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
                  </p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                  Transliteration: "A'udhu billahi minash shaytanir rajeem"
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Translation: "I seek refuge in Allah from the accursed Satan"
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This declaration of seeking refuge from Satan is a powerful protection against his whisperings and schemes. Reciting it before reading the Quran or making dua is essential.
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reference: Quran 16:98 | Benefit: Protection from satanic interference
                </p>
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-user-shield mr-3 text-red-500"></i>
                General Protection Duas
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Dua for Comprehensive Protection</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                    <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                      اللَّهُمَّ إِنِّي أَعُوذُ بِوَجْهِكَ الْكَرِيمِ وَكَلِمَاتِكَ التَّامَّةِ مِنْ شَرِّ مَا أَنْتَ آخِذٌ بِهِ نَاصِيَتِي
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                    Transliteration: "Allahumma inni a'udhu biwajhika al-kareem wa kalimatika at-tamma min sharri ma anta akhidhun bihi nasiyati"
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Translation: "O Allah, I seek refuge in Your noble Face and in Your perfect words from the evil of whatever You are holding my forelock with"
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reference: Sunan al-Tirmidhi | Benefit: Comprehensive protection from all kinds of harm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Protection Schedule */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Daily Protection Schedule
          </h2>
          
          <div className="glassmorphism rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <i className="fas fa-clock mr-3 text-blue-500"></i>
              When to Recite Protection Duas
            </h3>
            
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-2 text-gray-800 dark:text-white">Time</th>
                  <th className="pb-2 text-gray-800 dark:text-white">Dua/Activity</th>
                  <th className="pb-2 text-gray-800 dark:text-white">Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 text-gray-600 dark:text-gray-300">After Fajr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Morning azkar including Ayat al-Kursi and 3 Quls</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Protection for the day</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600 dark:text-gray-300">After each prayer</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Ayat al-Kursi and 3 Quls</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Continuous protection</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Before sleep</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Ayat al-Kursi and last two verses of Surah Al-Baqarah</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Protection during sleep</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600 dark:text-gray-300">After Maghrib</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Evening azkar including 3 Quls</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Night protection</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600 dark:text-gray-300">When leaving home</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Basmalah and specific protection dua</td>
                  <td className="py-3 text-gray-600 dark:text-gray-300">Protection outside home</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Hadith Evidence */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Hadith Evidence for Protection Duas
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-red-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "Whoever recites Ayat al-Kursi after every prayer, nothing will prevent him from entering Paradise except death."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Narrated by Al-Tirmidhi - This hadith highlights the protective and spiritual benefits of reciting Ayat al-Kursi regularly.
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
                    "The two Mu'awwidhat (Surah Al-Falaq and Surah An-Nas) seek refuge with Allah's perfect words from the evil of what He has created."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sahih Muslim - This hadith emphasizes the protective power of the last two surahs of the Quran.
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
                    "When one of you recites the Quran, he should seek refuge with Allah from the accursed Satan, for indeed he comes to him like a camel."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sahih al-Bukhari - This hadith emphasizes the importance of seeking refuge from Satan before reciting Quran or making dua.
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
                What are the most effective protection duas in Islam?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The most effective protection duas include Ayat al-Kursi, the three Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas), and specific duas like 'A'udhu billahi minash shaytanir rajeem'. These provide comprehensive spiritual protection when recited regularly. The Prophet (peace be upon him) emphasized these specific duas for protection from various forms of harm and evil influences.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How often should I recite protection duas?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Protection duas should be recited regularly, especially morning and evening. Ayat al-Kursi and the three Quls are recommended to be recited after each prayer. Consistency is key, and the Prophet (peace be upon him) emphasized regular recitation for continuous protection. The more frequently these protection duas are recited, the stronger the spiritual shield becomes.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can protection duas protect against the evil eye?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, specific protection duas can protect against the evil eye. Surah Al-Falaq and Surah An-Nas are particularly effective for this purpose. The Prophet (peace be upon him) recommended these surahs for protection from the evil eye and witchcraft. Reciting these surahs regularly creates a spiritual barrier against harmful glances and envious intentions.
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
            <Link href="/ruqiya" className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors">
              Islamic Ruqiya
            </Link>
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/azkar-for-anxiety-in-islam" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Azkar for Anxiety
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}