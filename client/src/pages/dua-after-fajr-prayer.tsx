import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function DuaAfterFajrPrayer() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dua After Fajr Prayer - Supplications Following Dawn Prayer",
    "description": "Essential duas and supplications to recite after completing the Fajr prayer, with Arabic text, transliteration, and English translation.",
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
        "name": "What dua should I recite after Fajr prayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After Fajr prayer, you should recite the prescribed morning azkar (أذكار الصباح), which include Ayat al-Kursi, the three Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas), and other authentic supplications. These provide protection and blessings for the day."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I spend on dua after Fajr?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no fixed duration, but a complete recitation of morning azkar typically takes 10-15 minutes. The Prophet (peace be upon him) emphasized the importance of consistency rather than duration, so even a few minutes of remembrance is beneficial."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make personal dua after Fajr prayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can make personal supplications after Fajr prayer. This is an excellent time for personal dua as it falls within the blessed morning hours when prayers are answered. However, prioritize the prescribed morning azkar first."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Dua After Fajr Prayer - Supplications Following Dawn Prayer | Daily Azkar"
        description="Essential duas and supplications to recite after completing the Fajr prayer, with Arabic text, transliteration, and English translation. Learn the authentic duas for protection and blessings after dawn prayer."
        keywords="dua after fajr prayer, morning duas after fajr, authentic duas after fajr prayer, islamic supplications after fajr, morning azkar after fajr, duas for protection after fajr, morning remembrance after fajr prayer, duas after dawn prayer"
        canonical="https://dailyazkar.site/dua-after-fajr-prayer"
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
            Dua After Fajr Prayer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Essential supplications to recite after completing the dawn prayer
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Blessed Time After Fajr
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The time immediately following the Fajr prayer until sunrise is one of the most blessed periods in Islamic tradition. The Prophet Muhammad (peace be upon him) emphasized the importance of engaging in remembrance and supplication during this time.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              This period is characterized by divine mercy, answered prayers, and spiritual protection for the remainder of the day. The prescribed morning azkar (أذكار الصباح) are specifically designed to be recited during this time to maximize these spiritual benefits.
            </p>
          </div>
        </div>

        {/* Essential Duas After Fajr */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Essential Duas After Fajr Prayer
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
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
                Reference: Quran 2:255 | Benefit: Reciting this after Fajr provides protection for the entire day
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Surah Al-Ikhlas</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-2xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Qul huwallahu ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "Say, He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 112:1-4 | Benefit: Equivalent to one-third of the Quran
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Surah Al-Falaq</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-2xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Qul a'udhu birabbi'l-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharri'n-naffathati fil 'uqad. Wa min sharri hasidin idha hasad."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "Say, I seek refuge in the Lord of the daybreak. From the evil of what He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 113:1-5 | Benefit: Protection from evil and witchcraft
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Surah An-Nas</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-2xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَ النَّاسِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Qul a'udhu birabbin-nas. Malikin-nas. Ilahin-nas. Min sharri'l-waswas'il-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "Say, I seek refuge in the Lord of mankind. The Sovereign of mankind. The God of mankind. From the evil of the retreating whisperer - Who whispers [evil] into the breasts of mankind. From among the jinn and among the humans."
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 114:1-6 | Benefit: Protection from evil whisperings
              </p>
            </div>
          </div>
        </div>

        {/* Additional Supplications */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Additional Supplications
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
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Seeking Forgiveness</h3>
              
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
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sunan Abu Dawud | Benefit: Forgiveness of sins and acceptance of repentance
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Morning Duas */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Benefits of Reciting Duas After Fajr
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Divine Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reciting morning azkar provides spiritual protection throughout the day from various harms and negative influences.
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
                The morning hours are blessed times when good deeds carry greater weight and reward in the sight of Allah.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-brain text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Mental Clarity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beginning the day with remembrance brings mental focus and spiritual grounding for daily activities.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-amber-600 dark:text-amber-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Peace of Mind
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Morning remembrance fills the heart with tranquility and reduces anxiety about the day ahead.
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
                What dua should I recite after Fajr prayer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                After Fajr prayer, you should recite the prescribed morning azkar (أذكار الصباح), which include Ayat al-Kursi, the three Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas), and other authentic supplications. These provide protection and blessings for the day. The Prophet (peace be upon him) emphasized the importance of consistency in these remembrances.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How long should I spend on dua after Fajr?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                There is no fixed duration, but a complete recitation of morning azkar typically takes 10-15 minutes. The Prophet (peace be upon him) emphasized the importance of consistency rather than duration, so even a few minutes of remembrance is beneficial. The key is to be consistent with whatever time you allocate.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can I make personal dua after Fajr prayer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can make personal supplications after Fajr prayer. This is an excellent time for personal dua as it falls within the blessed morning hours when prayers are answered. However, prioritize the prescribed morning azkar first, as these are specifically recommended by the Prophet (peace be upon him). After completing the prescribed remembrances, you can add personal supplications.
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
            <Link href="/morning-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Complete Morning Azkar
            </Link>
            <Link href="/dua-after-salah" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Duas After All Prayers
            </Link>
            <Link href="/when-to-recite-morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar Timing
            </Link>
            <Link href="/benefits-of-morning-azkar" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Benefits of Morning Azkar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}