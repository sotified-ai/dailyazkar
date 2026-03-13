import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function AzkarAfterEveryPrayer() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Azkar After Every Prayer - Islamic Supplications for Continued Blessings",
    "description": "Discover authentic Islamic remembrances and supplications to recite after each of the five daily prayers, with Arabic text, transliteration, and translations.",
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
        "name": "What are the recommended azkar after each prayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The recommended azkar after each prayer include Tasbih (Subhan Allah, Alhamdulillah, Allahu Akbar) 33 times each, followed by 'La ilaha illallahu wahdahu la shareeka lah', and then Ayat al-Kursi and the three Quls. These provide continued blessings and protection."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I spend on azkar after each prayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The time spent on azkar after each prayer can be as brief as 2-3 minutes for the essential ones. The complete set of recommended azkar typically takes 5-10 minutes. The key is consistency rather than duration, so even reciting a few essential azkar regularly is better than skipping them."
        }
      },
      {
        "@type": "Question",
        "name": "Can I recite azkar after prayer in any language?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The traditional azkar are in Arabic as taught by the Prophet (peace be upon him). However, you can make personal duas in your own language after reciting the prescribed Arabic remembrances. The essential azkar like Tasbih and Ayat al-Kursi should be recited in Arabic."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Azkar After Every Prayer - Islamic Supplications for Continued Blessings | Daily Azkar"
        description="Discover authentic Islamic remembrances and supplications to recite after each of the five daily prayers, with Arabic text, transliteration, and translations. Learn Islamic prayers after salah."
        keywords="azkar after every prayer, duas after salah, islamic prayers after prayer, islamic supplications after prayer, post-prayer azkar, morning and evening azkar after prayer, tasbih after prayer, protection duas after prayer, islamic remembrance after salah"
        canonical="https://dailyazkar.site/azkar-after-every-prayer"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-pray text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Azkar After Every Prayer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Islamic supplications for continued blessings and protection
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Continuing the Connection with Allah
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The completion of each of the five daily prayers (salah) is not an end but a continuation of our connection with Allah. Islam teaches specific remembrances (azkar) to recite immediately after finishing each prayer, extending the spiritual state achieved during salah and seeking continued blessings and protection.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Prophet Muhammad (peace be upon him) consistently practiced these post-prayer remembrances, demonstrating their importance in a Muslim's daily spiritual routine. These azkar serve as a bridge between the formal worship of prayer and our daily activities, maintaining the consciousness of Allah (dhikr) throughout our day.
            </p>
          </div>
        </div>

        {/* Essential Azkar After Prayer */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Essential Azkar After Each Prayer
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tasbih (The Glorification)</h3>
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
                The Prophet (peace be upon him) said: "Whoever says 'Subhan Allah' thirty-three times, 'Alhamdulillah' thirty-three times, and 'Allahu Akbar' thirty-four times, after each prayer, will have his sins forgiven even if they are as numerous as foam on the sea."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih Muslim | Benefit: Forgiveness of sins
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tahlil and Takbir</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in qadeer"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "There is none worthy of worship except Allah alone, He has no partner. To Him belongs sovereignty and to Him belongs praise, and He is over everything Almighty."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This statement of monotheism completes the tasbih and reinforces the core belief of Islam.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: Affirmation of Tawhid (monotheism)
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Ayat al-Kursi</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La taKhudhuhu sinatun wa la nawm. Lahuma fi assama wati wa ma fi al-ardi. Man dhal ladhi yashfa'u indahu illa bi-idhnihi. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuheetoona bishayin min 'ilmihi illa bima sha'. Wasia kursiyyuhus-samawati wal-arda. Wa la yaooduhu hifdhuhuma. Wa Huwal-'Aliyyul-'Adheem."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Prophet (peace be upon him) said: "Whoever recites Ayat al-Kursi after every prayer, nothing will prevent him from entering Paradise except death."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sunan al-Tirmidhi | Benefit: Continued protection until next prayer
              </p>
            </div>
          </div>
        </div>

        {/* The Three Quls After Prayer */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            The Three Quls (Surah Al-Mu'awwidhatayn)
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Surah Al-Ikhlas (Quran 112:1-4)</h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Qul huwallahu ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Prophet (peace be upon him) said: "Whoever recites Surah Al-Ikhlas, Al-Falaq, and An-Nas in the morning and evening three times, it will be sufficient for him regarding everything."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: Equivalent to one-third of the Quran
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Surah Al-Falaq (Quran 113:1-5)</h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Qul a'udhu birabbi'l-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharri'n-naffathati fil 'uqad. Wa min sharri hasidin idha hasad."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This surah provides protection from evil forces, witchcraft, and the evil eye.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: Protection from evil and witchcraft
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Surah An-Nas (Quran 114:1-6)</h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَ النَّاسِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Qul a'udhu birabbin-nas. Malikin-nas. Ilahin-nas. Min sharri'l-waswas'il-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This surah provides protection from evil whisperings that cause doubt and anxiety.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: Protection from evil whisperings
              </p>
            </div>
          </div>
        </div>

        {/* Additional Recommended Supplications */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Additional Recommended Supplications
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-hands mr-3 text-blue-500"></i>
                Dua for Forgiveness After Prayer
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Allahumma antas-salamu wa minkas-salam, tabarakta ya dhal-jalali wal-ikram"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "O Allah, You are Peace, and from You is peace. Blessed are You, O Possessor of Majesty and Honor"
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih Muslim | Benefit: Seeking peace and blessings from Allah
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-pray mr-3 text-cyan-500"></i>
                Seeking Forgiveness for All Sins
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  أَسْتَغْفِرُ اللَّهَ (three times)
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Astaghfirullah" (three times)
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "I seek forgiveness from Allah" (three times)
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Prophet (peace be upon him) said: "Whoever says 'Astaghfirullah' three times after each prayer, Allah will forgive his sins even if they are as numerous as the foam of the sea."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: Forgiveness of minor sins
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Reciting Azkar After Prayer */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Benefits of Reciting Azkar After Prayer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-shield-alt mr-3 text-blue-500"></i>
                Spiritual Protection
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Provides protection from evil forces</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Maintains spiritual connection with Allah</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Creates spiritual barrier against harm</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-seedling mr-3 text-emerald-500"></i>
                Spiritual Growth
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Increases faith and mindfulness of Allah</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Earns great rewards and forgiveness</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Helps maintain consistency in worship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hadith Evidence */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Hadith Evidence for Azkar After Prayer
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blue-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "Whoever says 'Subhan Allah' thirty-three times, 'Alhamdulillah' thirty-three times, and 'Allahu Akbar' thirty-four times, after each prayer, will have his sins forgiven even if they are as numerous as foam on the sea."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sahih Muslim - This hadith emphasizes the great reward for reciting the tasbih after each prayer.
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-cyan-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-cyan-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "Whoever recites Ayat al-Kursi after every prayer, nothing will prevent him from entering Paradise except death."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sunan al-Tirmidhi - This hadith highlights the protective and spiritual benefits of reciting Ayat al-Kursi after each prayer.
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
                    "Whoever recites Surah Al-Ikhlas, Al-Falaq, and An-Nas in the morning and evening three times, it will be sufficient for him regarding everything."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sunan Abu Dawud - This hadith emphasizes the comprehensive protection provided by the three Quls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Implementation */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Practical Implementation
          </h2>
          
          <div className="glassmorphism rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <i className="fas fa-list mr-3 text-blue-500"></i>
              Recommended Order After Prayer
            </h3>
            
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">Tasbih:</span> Subhan Allah (33x), Alhamdulillah (33x), Allahu Akbar (34x)
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">Tahlil:</span> La ilaha illallahu wahdahu la shareeka lah (once)
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">Ayat al-Kursi:</span> (once)
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">The Three Quls:</span> Al-Ikhlas, Al-Falaq, An-Nas (once each)
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">Dua for Peace:</span> Allahumma antas-salam... (once)
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">6</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">Seeking Forgiveness:</span> Astaghfirullah (three times)
                </div>
              </li>
            </ol>
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
                What are the recommended azkar after each prayer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The recommended azkar after each prayer include Tasbih (Subhan Allah, Alhamdulillah, Allahu Akbar) 33 times each, followed by 'La ilaha illallahu wahdahu la shareeka lah', and then Ayat al-Kursi and the three Quls. These provide continued blessings and protection. The Prophet (peace be upon him) emphasized these specific remembrances for their great rewards and spiritual benefits.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How long should I spend on azkar after each prayer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The time spent on azkar after each prayer can be as brief as 2-3 minutes for the essential ones. The complete set of recommended azkar typically takes 5-10 minutes. The key is consistency rather than duration, so even reciting a few essential azkar regularly is better than skipping them. The Prophet (peace be upon him) emphasized the importance of regularity in worship.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can I recite azkar after prayer in any language?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The traditional azkar are in Arabic as taught by the Prophet (peace be upon him). However, you can make personal duas in your own language after reciting the prescribed Arabic remembrances. The essential azkar like Tasbih and Ayat al-Kursi should be recited in Arabic. For the most authentic practice, it's recommended to recite the established azkar in Arabic as taught by the Prophet (peace be upon him).
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
            <Link href="/dua-after-salah" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Dua After Salah
            </Link>
            <Link href="/morning-azkar" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/ruqiya" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Islamic Ruqiya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}