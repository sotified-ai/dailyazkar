import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function DuaAfterMaghribPrayer() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dua After Maghrib Prayer - Supplications Following Sunset Prayer",
    "description": "Essential duas and supplications to recite after completing the Maghrib prayer, with Arabic text, transliteration, and English translation.",
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
        "name": "What dua should I recite after Maghrib prayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After Maghrib prayer, you should recite the prescribed evening azkar (أذكار المساء), which include seeking forgiveness, reciting Ayat al-Kursi, and other authentic supplications. These provide protection for the night."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I spend on dua after Maghrib?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no fixed duration, but a complete recitation of evening azkar typically takes 10-15 minutes. The Prophet (peace be upon him) emphasized consistency rather than duration, so even a few minutes is beneficial."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make personal dua after Maghrib prayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can make personal supplications after Maghrib prayer. This is an excellent time for personal dua as it falls within the blessed evening hours when prayers are answered. However, prioritize the prescribed evening azkar first."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Dua After Maghrib Prayer - Supplications Following Sunset Prayer | Daily Azkar"
        description="Essential duas and supplications to recite after completing the Maghrib prayer, with Arabic text, transliteration, and English translation. Learn the authentic duas for protection and blessings after sunset prayer."
        keywords="dua after maghrib prayer, evening duas after maghrib, authentic duas after maghrib prayer, islamic supplications after maghrib, evening azkar after maghrib, duas for protection after maghrib, evening remembrance after maghrib prayer, duas after sunset prayer"
        canonical="https://dailyazkar.site/dua-after-maghrib-prayer"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-pray text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Dua After Maghrib Prayer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Essential supplications to recite after completing the sunset prayer
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Blessed Time After Maghrib
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The time immediately following the Maghrib prayer until the end of the evening is one of the blessed periods in Islamic tradition. The Prophet Muhammad (peace be upon him) emphasized the importance of engaging in remembrance and supplication during this time.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              This period is characterized by divine mercy, answered prayers, and spiritual protection for the remainder of the night. The prescribed evening azkar (أذكار المساء) are specifically designed to be recited during this time to maximize these spiritual benefits.
            </p>
          </div>
        </div>

        {/* Essential Duas After Maghrib */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Essential Duas After Maghrib Prayer
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Seeking Forgiveness</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-2xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Astaghfirullahal-adheema alladhee laa ilaaha illa huwal-hayyul-qayyoomu wa atoobu ilayhi"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "I seek forgiveness from Allah the Almighty, there is none worthy of worship except Him, the Ever-Living, the Self-Subsisting, and I repent to Him"
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sunan Abu Dawud | Benefit: Forgiveness of sins and acceptance of repentance
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
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
                Translation: "Allah - there is none worthy of worship except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 2:255 | Benefit: Protection for the night and day until evening
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
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
                    Translation: "Say, He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent."
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
                    Translation: "Say, I seek refuge in the Lord of the daybreak. From the evil of what He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies."
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
                    Translation: "Say, I seek refuge in the Lord of mankind. The Sovereign of mankind. The God of mankind. From the evil of the retreating whisperer - Who whispers [evil] into the breasts of mankind. From among the jinn and among the humans."
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Benefit: These three surahs provide comprehensive protection from evil and negative influences
              </p>
            </div>
          </div>
        </div>

        {/* Additional Evening Supplications */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Additional Evening Supplications
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tasbih After Prayer</h3>
              
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
                This is to be repeated 33 times, then say "Allahu Akbar" 34 times to complete 100 total.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih Bukhari | Benefit: Forgives sins even if they are as numerous as foam on the sea
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Evening Prayer for Protection</h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in qadeer. Rabbii as'aluka khayra ma fi hathihi al-laylati wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hathihi al-laylati wa sharri ma ba'daha."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "We have reached the evening and sovereignty belongs to Allah, all praise is due to Allah. There is none worthy of worship except Allah, alone without partner. To Him belongs sovereignty and to Him belongs praise, and He is over everything Almighty. My Lord, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and the evil of what follows it."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih Muslim | Benefit: Comprehensive protection for the night and what follows
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Evening Duas */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Benefits of Reciting Duas After Maghrib
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Night Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reciting evening azkar provides spiritual protection throughout the night from various harms and negative influences.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-seedling text-emerald-600 dark:text-emerald-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Increased Reward
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The evening hours are blessed times when good deeds carry greater weight and reward in the sight of Allah.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-brain text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Peace of Mind
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ending the day with remembrance brings mental peace and spiritual grounding for restful sleep.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-amber-600 dark:text-amber-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Seeking Forgiveness
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Evening remembrance includes seeking forgiveness for sins committed during the day, purifying the soul.
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
                What dua should I recite after Maghrib prayer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                After Maghrib prayer, you should recite the prescribed evening azkar (أذكار المساء), which include seeking forgiveness, reciting Ayat al-Kursi, and other authentic supplications. These provide protection for the night. The Prophet (peace be upon him) emphasized the importance of consistency in these remembrances.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How long should I spend on dua after Maghrib?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                There is no fixed duration, but a complete recitation of evening azkar typically takes 10-15 minutes. The Prophet (peace be upon him) emphasized consistency rather than duration, so even a few minutes is beneficial. The key is to be consistent with whatever time you allocate.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can I make personal dua after Maghrib prayer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can make personal supplications after Maghrib prayer. This is an excellent time for personal dua as it falls within the blessed evening hours when prayers are answered. However, prioritize the prescribed evening azkar first, as these are specifically recommended by the Prophet (peace be upon him). After completing the prescribed remembrances, you can add personal supplications.
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
            <Link href="/evening-azkar" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Complete Evening Azkar
            </Link>
            <Link href="/dua-after-salah" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Duas After All Prayers
            </Link>
            <Link href="/benefits-of-evening-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Benefits of Evening Azkar
            </Link>
            <Link href="/dua-after-fajr-prayer" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              After Fajr Prayer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}