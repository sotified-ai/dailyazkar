import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function AzkarBeforeSleep() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Azkar Before Sleep - Islamic Supplications for Peaceful Rest",
    "description": "Discover authentic Islamic remembrances and supplications to recite before sleep, with Arabic text, transliteration, and translations for peaceful rest.",
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
        "name": "What are the recommended azkar before sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The recommended azkar before sleep include Ayat al-Kursi, the three Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas), specific duas for protection during sleep, and recitation of the last two verses of Surah Al-Baqarah. These provide spiritual protection throughout the night."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I spend on azkar before sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The time spent on azkar before sleep can vary from 5-15 minutes depending on your schedule. The key is consistency rather than duration. Even reciting a few essential azkar regularly is better than skipping them entirely. The Prophet (peace be upon him) emphasized regularity in worship."
        }
      },
      {
        "@type": "Question",
        "name": "Can azkar before sleep help with nightmares?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, reciting protective azkar before sleep can help prevent nightmares. Surah Al-Falaq and Surah An-Nas are particularly effective for protection during sleep. The Prophet (peace be upon him) recommended these surahs for protection from evil influences while sleeping."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Azkar Before Sleep - Islamic Supplications for Peaceful Rest | Daily Azkar"
        description="Discover authentic Islamic remembrances and supplications to recite before sleep, with Arabic text, transliteration, and translations for peaceful rest. Learn Islamic prayers before sleep."
        keywords="azkar before sleep, duas before sleep, islamic prayers before sleep, islamic supplications for sleep, bedtime azkar, protection duas for sleep, peaceful sleep duas, morning and evening azkar before sleep, islamic bedtime remembrance"
        canonical="https://dailyazkar.site/azkar-before-sleep"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-moon text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Azkar Before Sleep
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Islamic supplications for peaceful and protected rest
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Sacred Transition to Rest
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Sleep is one of Allah's greatest blessings, a temporary return to the state of peace and tranquility He has granted us. Islam teaches specific remembrances (azkar) to recite before sleep, creating a spiritual shield of protection and gratitude as we enter this state of rest.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Prophet Muhammad (peace be upon him) emphasized the importance of reciting these azkar before sleep, highlighting their role in ensuring peaceful rest and protection throughout the night. These blessed words connect us with Allah even as we transition from the conscious to the unconscious state.
            </p>
          </div>
        </div>

        {/* Essential Azkar Before Sleep */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Essential Azkar Before Sleep
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">1</span>
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
                The Prophet (peace be upon him) said: "Whoever recites Ayat al-Kursi when going to bed, Allah will appoint a guardian over him, and no devil will come near him until morning."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih al-Bukhari | Benefit: Protection throughout the night
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
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
                    Reciting this surah after going to bed is equivalent to reciting one-third of the Quran.
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
                    This surah seeks protection from evil forces during the night, including witchcraft and the evil eye.
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
                    This surah seeks protection from evil whisperings that can affect sleep and dreams.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: Comprehensive protection during sleep from various harms
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tasbih Before Sleep</h3>
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
                The Prophet (peace be upon him) said: "Whoever says 'Subhan Allahi wa bihamdihi' one hundred times during the day, nothing will be more excellent than his action except one who does the like or more."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih al-Bukhari | Benefit: Forgiveness of sins and spiritual purification
              </p>
            </div>
          </div>
        </div>

        {/* Additional Supplications */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Additional Supplications Before Sleep
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-pray mr-3 text-indigo-500"></i>
                Dua for Protection During Sleep
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ، فَإِن أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Bismika Rabbi wada'tu janbi wa bika arfa'uhu, fa in amsakt nafsii farhamha, wa in arsaltaha fahfazha bima tahfazu bihi 'ibadaka as-salihin"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "In Your name, my Lord, I lie down and in Your name I rise. So if You take my soul, have mercy on it, and if You return it to me, protect it with the protection with which You protect Your righteous servants."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih al-Bukhari | Benefit: Complete protection during sleep
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-heart mr-3 text-purple-500"></i>
                Dua for Peaceful Sleep
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Allahumma bismika amutu wa ahyaa"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "O Allah, in Your name I die and live"
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih al-Bukhari | Benefit: Peaceful sleep and awakening
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-shield-alt mr-3 text-emerald-500"></i>
                Seeking Forgiveness Before Sleep
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Allahumma aslamtu nafsi ilayka, wa fawwadtu amri ilayka, wa wajjahtu wajhi ilayka, wa alja'tu zahri ilayka, raghbata wa rahbata ilayka, la malja' wa la manja minka illa ilayka, amantu bikitabika alladhi anzalta, wa binabiyyika alladhi arsalt"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "O Allah, I submit my soul to You, and I entrust my affair to You, and I turn my face to You, and I commit my back to You, hoping and fearing You. There is no refuge or escape from You except to You. I believe in Your Book which You have sent down, and in Your Prophet whom You have sent."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih al-Bukhari | Benefit: Complete surrender to Allah and protection
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Reciting Azkar Before Sleep */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Benefits of Reciting Azkar Before Sleep
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Spiritual Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Creates a spiritual barrier against harmful forces during sleep
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-bed text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Peaceful Sleep
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Helps achieve restful and undisturbed sleep
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-pray text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Spiritual Reward
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Earns great reward and increases good deeds
              </p>
            </div>
          </div>
        </div>

        {/* Hadith Evidence */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Hadith Evidence for Azkar Before Sleep
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6 border-l-4 border-indigo-500">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-indigo-500">
                  <i className="fas fa-quote-left text-lg"></i>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                    "When anyone of you goes to bed, let him recite: 'Bismika Allahumma amutu wa ahyaa', and when he gets up, let him say: 'Alhamdu lillahi alladhi ahyaana ba'da ma amaatana wa ilayhi an-nushur'."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sahih al-Bukhari - This hadith emphasizes the importance of reciting specific words when going to sleep and upon waking up.
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
                    "Whoever lies down in his bed and then says: 'Allahumma bismika amutu wa ahyaa', and if he dies during the night, his soul will be in a state of faith, and if he lives, his soul will be returned to him in a state of faith."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sahih al-Bukhari - This hadith highlights the spiritual significance of reciting these words before sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Tips */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Practical Tips for Reciting Azkar Before Sleep
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-clock mr-2 text-indigo-500"></i>
                Timing and Position
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Recite the azkar while lying on your right side</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Face the Qibla if possible</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Recite with full concentration and understanding</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Recite quietly to avoid disturbing others</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-lightbulb mr-2 text-purple-500"></i>
                Helpful Practices
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Prepare a quiet, comfortable space</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Minimize distractions before sleep</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Make it a consistent habit</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Include these azkar in your daily routine</span>
                </li>
              </ul>
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
                What are the recommended azkar before sleep?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The recommended azkar before sleep include Ayat al-Kursi, the three Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas), specific duas for protection during sleep, and recitation of the last two verses of Surah Al-Baqarah. These provide spiritual protection throughout the night. The Prophet (peace be upon him) also recommended reciting the tasbih (glorification) and specific duas for complete protection.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How long should I spend on azkar before sleep?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The time spent on azkar before sleep can vary from 5-15 minutes depending on your schedule. The key is consistency rather than duration. Even reciting a few essential azkar regularly is better than skipping them entirely. The Prophet (peace be upon him) emphasized regularity in worship, and consistency in reciting these protective words is more beneficial than sporadic lengthy sessions.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can azkar before sleep help with nightmares?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, reciting protective azkar before sleep can help prevent nightmares. Surah Al-Falaq and Surah An-Nas are particularly effective for protection during sleep. The Prophet (peace be upon him) recommended these surahs for protection from evil influences while sleeping. These surahs seek protection from evil whisperings and negative forces that can affect dreams and sleep quality.
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
            <Link href="/evening-azkar" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/ruqiya" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Islamic Ruqiya
            </Link>
            <Link href="/morning-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/azkar-for-anxiety-in-islam" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Azkar for Anxiety
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}