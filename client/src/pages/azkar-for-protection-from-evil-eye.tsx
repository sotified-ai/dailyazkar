import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function AzkarForProtectionFromEvilEye() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Azkar for Protection from Evil Eye - Islamic Remedies Against Harmful Glances",
    "description": "Discover authentic Islamic remembrances and supplications for protection against the evil eye, with Arabic text, transliteration, and translations.",
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
        "name": "What is the evil eye in Islam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The evil eye is a real concept in Islam, referring to the belief that someone can cast a curse on another person through envious or malicious glances. The Prophet (peace be upon him) confirmed its existence and taught specific protection methods through authentic duas and azkar."
        }
      },
      {
        "@type": "Question",
        "name": "Which azkar are most effective against the evil eye?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective azkar against the evil eye include Surah Al-Falaq, Surah An-Nas, Ayat al-Kursi, and the dua 'A'udhu bikalimatillahit-tammah min sharri ma khalaq'. These provide comprehensive protection when recited regularly."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I recite protection azkar for the evil eye?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Protection azkar for the evil eye should be recited regularly, especially morning and evening. The three Quls (Surah Al-Falaq, An-Nas, and Al-Ikhlas) are recommended to be recited after each prayer. Consistency is key for effective protection."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Azkar for Protection from Evil Eye - Islamic Remedies Against Harmful Glances | Daily Azkar"
        description="Discover authentic Islamic remembrances and supplications for protection against the evil eye, with Arabic text, transliteration, and translations. Learn Islamic protection from evil eye."
        keywords="azkar for protection from evil eye, protection from evil eye duas, islamic protection from evil eye, evil eye protection azkar, duas for evil eye protection, islamic remedies for evil eye, protection from envious glances, morning azkar for evil eye protection, evening azkar for evil eye protection"
        canonical="https://dailyazkar.site/azkar-for-protection-from-evil-eye"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-eye text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Azkar for Protection from Evil Eye
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Islamic remedies against harmful glances and envious intentions
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Understanding the Evil Eye in Islam
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The evil eye is a genuine concern in Islamic tradition, acknowledged and confirmed by the Prophet Muhammad (peace be upon him). It refers to the belief that someone can cast a curse on another person through envious or malicious glances. The Quran and Sunnah provide specific protection methods through authentic duas and azkar.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Islam teaches that protection from the evil eye is achieved through seeking refuge in Allah and reciting specific verses and supplications that He has provided. These protective azkar serve as spiritual shields against the harmful effects of envious glances and malicious intentions.
            </p>
          </div>
        </div>

        {/* Hadith Confirmation */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            The Reality of the Evil Eye
          </h2>
          
          <div className="glassmorphism rounded-2xl p-6 border-l-4 border-teal-500">
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-teal-500">
                <i className="fas fa-quote-left text-lg"></i>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4 leading-relaxed">
                  "The evil eye is real, and if anything were to overtake the divine decree, it would be the evil eye."
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Sahih Muslim - This hadith confirms the reality of the evil eye and emphasizes the importance of seeking protection from it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Most Effective Azkar for Protection */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Most Effective Azkar for Protection from Evil Eye
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Surah Al-Falaq (Quran 113:1-5)</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Qul a'udhu birabbi'l-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharri'n-naffathati fil 'uqad. Wa min sharri hasidin idha hasad."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "Say, I seek refuge in the Lord of the daybreak. From the evil of what He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This surah specifically mentions protection from the evil of an envier when he envies, making it particularly effective against the evil eye.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 113:1-5 | Benefit: Protection from the evil eye and witchcraft
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Surah An-Nas (Quran 114:1-6)</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَ النَّاسِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Qul a'udhu birabbin-nas. Malikin-nas. Ilahin-nas. Min sharri'l-waswas'il-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "Say, I seek refuge in the Lord of mankind. The Sovereign of mankind. The God of mankind. From the evil of the retreating whisperer - Who whispers [evil] into the breasts of mankind. From among the jinn and among the humans."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This surah provides protection from evil whisperings that can lead to harmful thoughts and intentions, including those that result in the evil eye.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 114:1-6 | Benefit: Protection from evil influences and negative intentions
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Protective Dua</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "A'udhu bikalimatillahi-t-tammah min sharri ma khalaq"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "I seek refuge in the perfect words of Allah from the evil of what He has created"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This dua provides comprehensive protection from all forms of evil, including the evil eye. The Prophet (peace be upon him) recommended it for protection from various harms.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Sahih Muslim | Benefit: Comprehensive protection from evil, including the evil eye
              </p>
            </div>
          </div>
        </div>

        {/* Additional Protective Measures */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Additional Protective Measures
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-star mr-3 text-teal-500"></i>
                Ayat al-Kursi for Protection
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Reciting Ayat al-Kursi morning and evening provides comprehensive protection. The Prophet (peace be upon him) said that whoever recites it after every prayer will remain under Allah's protection until the next prayer.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 2:255 | Benefit: Continuous protection from various harms
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-pray mr-3 text-cyan-500"></i>
                Seeking Refuge in Allah
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                  أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "A'udhu billahi minash shaytanir rajeem"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "I seek refuge in Allah from the accursed Satan"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Seeking refuge from Satan before reciting the Quran or making dua helps prevent his interference, which can contribute to negative influences and the evil eye.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Quran 16:98 | Benefit: Protection from satanic interference
              </p>
            </div>
          </div>
        </div>

        {/* How to Use These Azkar Effectively */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            How to Use These Azkar for Maximum Protection
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-clock mr-2 text-teal-500"></i>
                Recommended Times
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-teal-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">After each of the five daily prayers</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-teal-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Morning and evening (after Fajr and Maghrib)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-teal-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Before sleeping and after waking up</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-teal-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">When entering your home</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-teal-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Before eating or drinking</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-magic mr-2 text-cyan-500"></i>
                Best Practices
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Recite with full concentration and understanding</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Have firm belief in Allah's protection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Recite regularly and consistently</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Combine with good deeds and righteousness</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Trust in Allah while taking practical precautions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Signs of Evil Eye */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Recognizing Signs of the Evil Eye
          </h2>
          
          <div className="glassmorphism rounded-2xl p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              While we should not live in fear of the evil eye, understanding its potential signs can help us take appropriate protective measures. The Prophet (peace be upon him) taught us to seek protection without becoming obsessed with it.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Physical Signs</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Unexplained fatigue or weakness</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Sudden health issues without clear cause</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Loss of appetite or digestive issues</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Emotional/Mental Signs</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-cyan-500 mt-2 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Unexplained sadness or depression</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-cyan-500 mt-2 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Persistent bad dreams</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-cyan-500 mt-2 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Sudden loss of motivation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
              <span className="font-semibold">Important Note:</span> These symptoms can have various causes. It's important to seek medical advice for persistent health issues while also taking spiritual protection measures.
            </p>
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
                What is the evil eye in Islam?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The evil eye is a real concept in Islam, referring to the belief that someone can cast a curse on another person through envious or malicious glances. The Prophet (peace be upon him) confirmed its existence and taught specific protection methods through authentic duas and azkar. The evil eye occurs when someone looks at another person with envy or admiration in a way that causes harm.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Which azkar are most effective against the evil eye?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The most effective azkar against the evil eye include Surah Al-Falaq, Surah An-Nas, Ayat al-Kursi, and the dua 'A'udhu bikalimatillahit-tammah min sharri ma khalaq'. These provide comprehensive protection when recited regularly. The Prophet (peace be upon him) specifically recommended the last two surahs (Al-Falaq and An-Nas) for protection from the evil eye and witchcraft.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How often should I recite protection azkar for the evil eye?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Protection azkar for the evil eye should be recited regularly, especially morning and evening. The three Quls (Surah Al-Falaq, An-Nas, and Al-Ikhlas) are recommended to be recited after each prayer. Consistency is key for effective protection. The Prophet (peace be upon him) emphasized regular recitation of protective duas for continuous spiritual protection.
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
            <Link href="/protection-duas-in-islam" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors">
              Protection Duas
            </Link>
            <Link href="/ruqiya" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors">
              Islamic Ruqiya
            </Link>
            <Link href="/morning-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}