import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function AzkarForAnxietyInIslam() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Azkar for Anxiety in Islam - Islamic Remedies for Peace of Mind",
    "description": "Discover authentic Islamic remembrances and supplications to help manage anxiety and find peace of mind according to Islamic teachings.",
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
        "name": "Can azkar help with anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, azkar can significantly help with anxiety. The Prophet (peace be upon him) taught specific remembrances for peace of mind and protection from worry. Regular recitation of azkar calms the heart and provides spiritual grounding that reduces anxiety."
        }
      },
      {
        "@type": "Question",
        "name": "Which azkar are most effective for anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective azkar for anxiety include Ayat al-Kursi, the three Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas), Istighfar (seeking forgiveness), and specific duas for peace and tranquility. These provide spiritual protection and mental calmness."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I recite azkar for anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For anxiety, you should recite azkar regularly, especially the morning and evening remembrances. Additionally, you can recite specific protective azkar whenever anxiety arises. Consistency is key, and the Prophet (peace be upon him) emphasized regular remembrance."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Azkar for Anxiety in Islam - Islamic Remedies for Peace of Mind | Daily Azkar"
        description="Discover authentic Islamic remembrances and supplications to help manage anxiety and find peace of mind according to Islamic teachings. Learn how Islamic remembrance provides spiritual relief from anxiety."
        keywords="azkar for anxiety, islamic remedies for anxiety, muslim anxiety relief, islamic supplications for peace, azkar for peace of mind, islamic treatment for anxiety, duas for anxiety relief, morning azkar for anxiety, evening azkar for anxiety"
        canonical="https://dailyazkar.site/azkar-for-anxiety-in-islam"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-om text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Azkar for Anxiety in Islam
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Islamic remedies for peace of mind and spiritual relief from anxiety
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Finding Peace Through Islamic Remembrance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Anxiety is a common human experience, and Islam provides effective spiritual remedies through authentic azkar (remembrances) taught by Prophet Muhammad (peace be upon him). These blessed words of remembrance serve as a spiritual medicine for the heart and mind, providing peace and tranquility in times of distress.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Quran itself confirms this healing quality: "Those who believe and whose hearts find rest in the remembrance of Allah. Verily, in the remembrance of Allah do hearts find rest" (Quran 13:28). This verse highlights the therapeutic effect of dhikr on the human psyche.
            </p>
          </div>
        </div>

        {/* Most Effective Azkar for Anxiety */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Most Effective Azkar for Anxiety Relief
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">1</span>
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
                Reciting Ayat al-Kursi provides spiritual protection and peace of mind. The verse emphasizes Allah's infinite power and control over all affairs, which helps alleviate anxiety by reminding us that Allah is in control of everything.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 2:255 | Benefit: Provides protection and peace of mind
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
                    This surah reaffirms the oneness of Allah, providing spiritual grounding and peace by reminding us that Allah alone is our sustainer and protector.
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
                    This surah seeks protection from evil forces, including witchcraft and envy, which can contribute to anxiety and spiritual unease.
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
                    This surah seeks protection from the evil whisperings that cause doubt, worry, and anxiety. It's particularly effective for dealing with obsessive thoughts and fears.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: These three surahs provide comprehensive protection from spiritual causes of anxiety
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Istighfar (Seeking Forgiveness)</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Astaghfirullahal-adheema alladhee laa ilaaha illa huwal-hayyul-qayyoomu wa atoobu ilayhi"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "I seek forgiveness from Allah the Almighty, there is none worthy of worship except Him, the Ever-Living, the Self-Subsisting, and I repent to Him"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Seeking forgiveness removes the burden of guilt and anxiety related to sins, providing mental peace and spiritual purification.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sunan Abu Dawud | Benefit: Removes guilt and provides peace of mind
              </p>
            </div>
          </div>
        </div>

        {/* Specific Duas for Peace and Calm */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Specific Duas for Peace and Calm
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Dua for Peace of Heart</h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "Our Lord, give us good in this world and good in the hereafter and protect us from the punishment of the Fire"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This comprehensive dua asks Allah for goodness in both worlds and protection from harm, providing peace and security.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 2:201 | Benefit: Provides peace and security
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Dua for Relief from Distress</h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "La ilaha illa anta subhanaka inni kuntu minadh-dhalimeen"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "None has the right to be worshipped except You; Glory be to You. Indeed, I was among the wrongdoers"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This dua, taught by Allah to Prophet Yunus (Jonah), is particularly effective for relief from distress and anxiety. The Prophet (peace be upon him) said it is a cure for distress.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 21:87 | Benefit: Relief from distress and anxiety
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Dua for Tranquility</h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Amana arrasoolu bimaa unzila ilayhi mir rabbih wal mu'minuun. Kullun amana billahi wa malaaa'ikatihi wa kutubihi wa rusulihi laa nufarriqu baina ahadin mir rusulih. Wa qaaloo sami'naa wa ata'naa ghafraanaka rabbana wa ilaykal masir"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], 'We make no distinction between any of His messengers.' And they say, 'We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.'"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This verse (part of Ayat al-Kursi context) reinforces faith and submission to Allah, bringing mental peace through acceptance of His will.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 2:285 | Benefit: Strengthens faith and brings peace through submission
              </p>
            </div>
          </div>
        </div>

        {/* Scientific Perspective */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Scientific Perspective on Dhikr and Anxiety
          </h2>
          
          <div className="glassmorphism rounded-2xl p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Modern scientific research has increasingly recognized the therapeutic effects of repetitive prayer and meditation, which align with the Islamic practice of dhikr. Studies show that regular recitation of remembrances:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Reduces cortisol levels:</span> Lowering stress hormones that contribute to anxiety
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Activates the parasympathetic nervous system:</span> Promoting relaxation and calmness
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Improves focus and mindfulness:</span> Reducing rumination and anxious thoughts
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Releases endorphins:</span> Natural mood-enhancing chemicals in the brain
                </span>
              </li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              These scientific findings validate what Islam has taught for over 1400 years: that regular remembrance of Allah has profound effects on mental and emotional well-being.
            </p>
          </div>
        </div>

        {/* Practical Implementation */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Practical Implementation for Anxiety Management
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-clock mr-2 text-cyan-500"></i>
                Daily Schedule
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Recite morning azkar after Fajr for protection throughout the day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Repeat Ayat al-Kursi and the three Quls after each prayer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Recite evening azkar after Maghrib for night protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Increase istighfar (seeking forgiveness) throughout the day</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-hand-holding-heart mr-2 text-emerald-500"></i>
                Emergency Response
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Recite "La ilaha illa anta subhanaka" during acute anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Practice deep breathing while reciting any dhikr</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Focus on the meaning of the words for greater effect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Make sincere dua asking Allah for relief from anxiety</span>
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
                Can azkar help with anxiety?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, azkar can significantly help with anxiety. The Prophet (peace be upon him) taught specific remembrances for peace of mind and protection from worry. Regular recitation of azkar calms the heart and provides spiritual grounding that reduces anxiety. The Quran confirms this: "Those who believe and whose hearts find rest in the remembrance of Allah. Verily, in the remembrance of Allah do hearts find rest" (Quran 13:28).
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Which azkar are most effective for anxiety?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The most effective azkar for anxiety include Ayat al-Kursi, the three Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas), Istighfar (seeking forgiveness), and specific duas for peace and tranquility. These provide spiritual protection and mental calmness. The dua "La ilaha illa anta subhanaka" taught to Prophet Yunus is particularly effective for distress.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How often should I recite azkar for anxiety?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                For anxiety, you should recite azkar regularly, especially the morning and evening remembrances. Additionally, you can recite specific protective azkar whenever anxiety arises. Consistency is key, and the Prophet (peace be upon him) emphasized regular remembrance. Reciting Ayat al-Kursi and the three Quls after each prayer is recommended.
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
            <Link href="/morning-azkar" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/ruqiya" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Islamic Ruqiya
            </Link>
            <Link href="/protection-duas-in-islam" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Protection Duas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}