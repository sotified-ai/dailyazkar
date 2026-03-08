import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function QuranicDuasExplained() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Quranic Duas Explained - Powerful Supplications from the Quran",
    "description": "Discover and understand the most powerful supplications from the Quran with Arabic text, transliteration, translation, and explanation of their benefits.",
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
        "name": "What are the most powerful duas in the Quran?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Among the most powerful duas in the Quran are Ayat al-Du'a (verse of supplication) in Surah Al-A'raf 7:126, the dua of Prophet Yunus in Surah Al-Anbiya 21:87, and the comprehensive dua in Surah Al-Baqarah 2:201. These are considered powerful because they were answered by Allah and have specific promises attached to them."
        }
      },
      {
        "@type": "Question",
        "name": "How should I recite Quranic duas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quranic duas should be recited with understanding, humility, and conviction. It's recommended to first praise Allah, send peace and blessings upon Prophet Muhammad (peace be upon him), then recite the dua with full concentration and hope for Allah's response. Reciting with feeling and understanding the meaning increases the effectiveness of the supplication."
        }
      },
      {
        "@type": "Question",
        "name": "Can I recite Quranic duas in Arabic even if I don't understand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can recite Quranic duas in Arabic even if you don't fully understand. However, it's highly recommended to learn the meaning to enhance your connection and understanding. Understanding the meaning helps you recite with more feeling and conviction, which improves the spiritual impact of your supplication."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Quranic Duas Explained - Powerful Supplications from the Quran | Daily Azkar"
        description="Discover and understand the most powerful supplications from the Quran with Arabic text, transliteration, translation, and explanation of their benefits. Learn Quranic duas for various needs and situations."
        keywords="quranic duas, duas from quran, powerful duas in quran, quranic supplications, islamic duas from quran, quran verses for dua, quranic duas explained, quran duas for protection, quran duas for guidance, quran duas for forgiveness"
        canonical="https://dailyazkar.site/quranic-duas-explained"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-quran text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Quranic Duas Explained
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful supplications from the Quran with explanations and benefits
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Ultimate Source of Supplication
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Quran contains numerous powerful supplications made by prophets and righteous individuals, as well as general prayers that Allah has taught us to recite. These Quranic duas represent the highest form of communication with Allah, as they are His own words, revealed to guide humanity in their spiritual needs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Each Quranic dua carries immense spiritual weight and has been preserved in its exact form since revelation. Reciting these duas connects us directly to the divine message and provides comprehensive solutions for various life situations and spiritual needs.
            </p>
          </div>
        </div>

        {/* Most Powerful Quranic Duas */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Most Powerful Quranic Duas
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Dua of Prophet Musa and Prophet Harun</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "Rabbanaftah bainana wa baina qawmina bil-haqqi wa anta khairul fatihin"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "Our Lord, judge between us and our people in truth, and You are the best of judges"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Context: This dua was made by Prophet Musa (Moses) and Prophet Harun (Aaron) when facing Pharaoh. It's a powerful dua for seeking justice in difficult situations and conflicts.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Surah Al-A'raf 7:127 | Benefit: Seeking divine justice in disputes
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Dua of Prophet Yunus (Jonah)</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
                  لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                Transliteration: "La ilaha illa anta subhanaka inni kuntu minad-dhalimeen"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Translation: "None has the right to be worshipped except You; Glory be to You. Indeed, I was among the wrongdoers"
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Context: This dua was made by Prophet Yunus when he was in the belly of the whale. The Prophet Muhammad (peace be upon him) said this is a dua for distress and difficulty, and whoever says it in hardship will be relieved.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Surah Al-Anbiya 21:87 | Benefit: Relief from distress and difficulties
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Comprehensive Dua for Goodness</h3>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3 leading-loose">
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
                Context: This is a comprehensive dua that encompasses all needs in both worlds. It was taught by Allah as a complete prayer for wellbeing.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reference: Surah Al-Baqarah 2:201 | Benefit: Request for goodness in both worlds and protection
              </p>
            </div>
          </div>
        </div>

        {/* Duas by Category */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Quranic Duas by Category
          </h2>
          
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-shield-alt mr-3 text-amber-500"></i>
                Duas for Protection
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Dua for Protection from Enemies</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                    <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                      رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالإِيمَانِ وَلا تَجْعَلْ فِي قُلُوبِنَا غِلاًّ لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَؤُوفٌ رَّحِيمٌ
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                    Transliteration: "Rabbana ighfir lana wa li-ikhwanina alladhina sabaquna bil-imani wa la taj'alka fi qulubina ghillan lilladhina amanu rabbana innaka ra'ufun rahim"
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Translation: "Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts hatred toward those who believed. Our Lord, indeed You are Kind, Merciful"
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reference: Surah Al-Hashr 59:10 | Benefit: Protection from hatred and harm from enemies
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Dua for Protection from Trials</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                    <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                      رَبَّنَا لا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                    Transliteration: "Rabbana la tuzig qulubana ba'da idh hadaytana wa hab lana mil ladunka rahmatan innaka antal wahhab"
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Translation: "Our Lord, do not turn our hearts away after You have guided us and grant us mercy from Yourself. Indeed, You are the Bestower"
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reference: Surah Al-Imran 3:8 | Benefit: Protection from deviation after guidance
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-star mr-3 text-emerald-500"></i>
                Duas for Guidance and Knowledge
              </h3>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Dua for Right Guidance</h4>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                  <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                    اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلا الضَّالِّينَ
                  </p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                  Transliteration: "Ihdinas-siratal-mustaqim * Siratal-ladhina an'amta 'alayhim ghayril maghduubi 'alayhim wa lad-dallin"
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Translation: "Guide us to the straight path - The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray"
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reference: Surah Al-Fatihah 1:6-7 | Benefit: Request for guidance on the straight path
                </p>
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-heart mr-3 text-blue-500"></i>
                Duas for Forgiveness
              </h3>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">General Dua for Forgiveness</h4>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3">
                  <p className="text-right text-xl font-arabic text-gray-800 dark:text-white mb-3">
                    رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ
                  </p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                  Transliteration: "Rabbana zalamna anfusana wa il lam taghfir lana wa tarhamna lanakunanna minal-khasirin"
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Translation: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers"
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reference: Surah Al-A'raf 7:23 | Benefit: Seeking forgiveness for all sins
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Make Quranic Duas Effective */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            How to Make Quranic Duas Effective
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-pray mr-2 text-amber-500"></i>
                Preparation and Conditions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Begin with praising Allah and sending peace upon Prophet Muhammad (peace be upon him)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Face the Qibla if possible</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Raise your hands in the position of dua</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Have firm belief that Allah will respond</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-clock mr-2 text-emerald-500"></i>
                Optimal Times for Quranic Duas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Last third of the night</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Between Adhan and Iqama</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">During Sujood (prostration)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">After obligatory prayers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits of Quranic Duas */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Benefits of Reciting Quranic Duas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-star text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Guaranteed Response
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quranic duas are promises from Allah, ensuring a response in one form or another.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Spiritual Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Regular recitation increases faith and strengthens the connection with Allah.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Divine Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quranic duas provide spiritual and physical protection from various harms.
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
                What are the most powerful duas in the Quran?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Among the most powerful duas in the Quran are Ayat al-Du'a (verse of supplication) in Surah Al-A'raf 7:126, the dua of Prophet Yunus in Surah Al-Anbiya 21:87, and the comprehensive dua in Surah Al-Baqarah 2:201. These are considered powerful because they were answered by Allah and have specific promises attached to them. The dua of Prophet Yunus, in particular, is known as the dua for distress and difficulty.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How should I recite Quranic duas?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quranic duas should be recited with understanding, humility, and conviction. It's recommended to first praise Allah, send peace and blessings upon Prophet Muhammad (peace be upon him), then recite the dua with full concentration and hope for Allah's response. Reciting with feeling and understanding the meaning increases the effectiveness of the supplication. It's also beneficial to raise your hands in the position of dua while reciting.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can I recite Quranic duas in Arabic even if I don't understand?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can recite Quranic duas in Arabic even if you don't fully understand. However, it's highly recommended to learn the meaning to enhance your connection and understanding. Understanding the meaning helps you recite with more feeling and conviction, which improves the spiritual impact of your supplication. The Arabic words themselves carry spiritual power, but combining this with comprehension makes the dua more meaningful and effective.
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
            <Link href="/quran" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Holy Quran
            </Link>
            <Link href="/rabbana-duas" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Rabbana Duas
            </Link>
            <Link href="/dua-after-salah" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Dua After Salah
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