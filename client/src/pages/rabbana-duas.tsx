import { DuaBlock } from "@/components/dua-block";
import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/related-content";

export default function RabbanaDuas() {
  const duas = [
    {
      id: 1,
      title: "Seeking Guidance",
      titleArabic: "دعاء الهداية",
      content: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      translation: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
      reference: "Quran 2:201 (Al-Baqarah)",
      repetitions: 1
    },
    {
      id: 2,
      title: "Seeking Forgiveness",
      titleArabic: "دعاء المغفرة",
      content: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      translation: "Our Lord, forgive us our sins and the excess in our affairs and plant firmly our feet and give us victory over the disbelieving people.",
      reference: "Quran 3:147 (Al-Imran)",
      repetitions: 1
    },
    {
      id: 3,
      title: "Seeking Patience",
      titleArabic: "دعاء الصبر",
      content: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
      translation: "Our Lord, pour upon us patience and let us die as Muslims [in submission to You].",
      reference: "Quran 7:126 (Al-A'raf)",
      repetitions: 1
    },
    {
      id: 4,
      title: "Protection from Punishment",
      titleArabic: "دعاء الوقاية من العذاب",
      content: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا",
      translation: "Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering.",
      reference: "Quran 25:65 (Al-Furqan)",
      repetitions: 1
    },
    {
      id: 5,
      title: "For Righteous Offspring",
      titleArabic: "دعاء الذرية الصالحة",
      content: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      translation: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
      reference: "Quran 25:74 (Al-Furqan)",
      repetitions: 1
    },
    {
      id: 6,
      title: "Seeking Mercy",
      titleArabic: "دعاء الرحمة",
      content: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
      translation: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
      reference: "Quran 3:8 (Al-Imran)",
      repetitions: 1
    },
    {
      id: 7,
      title: "Seeking Patience & Victory",
      titleArabic: "الصبر والنصر",
      content: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      translation: "Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.",
      reference: "Quran 2:250 (Al-Baqarah)",
      repetitions: 1
    },
    {
      id: 8,
      title: "Seeking Forgiveness & Mercy",
      titleArabic: "المغفرة والرحمة",
      content: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
      translation: "Our Lord, we have believed, so forgive us and have mercy upon us, and You are the best of the merciful.",
      reference: "Quran 23:109 (Al-Mu'minun)",
      repetitions: 1
    },
    {
      id: 9,
      title: "Perfecting Light",
      titleArabic: "إتمام النور",
      content: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      translation: "Our Lord, perfect for us our light and forgive us. Indeed, You are over all things competent.",
      reference: "Quran 66:8 (At-Tahrim)",
      repetitions: 1
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rabbana Duas - Powerful Quranic Supplications",
    "description": "Collection of 'Rabbana' duas from the Holy Quran. These powerful supplications begin with 'Our Lord' and are direct words taught by Allah.",
    "author": {
      "@type": "Organization",
      "name": "Daily Azkar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Daily Azkar",
      "url": "https://dailyazkar.site/rabbana-duas"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are Rabbana Duas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rabbana Duas are supplications from the Quran that begin with 'Rabbana' (Our Lord). They are direct prayers taught by Allah in His book, making them particularly blessed and powerful."
        }
      },
      {
        "@type": "Question",
        "name": "Why are Quranic duas so powerful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quranic duas are the words of Allah Himself, taught to us for our benefit. When we recite these duas, we are using the most perfect words to address our Creator, which is why they hold special significance."
        }
      },
      {
        "@type": "Question",
        "name": "When should I recite Rabbana Duas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can recite Rabbana Duas at any time, but especially during times of need, in sujood (prostration), after obligatory prayers, and during the last third of the night."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Rabbana Duas - Powerful Quranic Supplications | Daily Azkar"
        description="Collection of 'Rabbana' duas from the Holy Quran. These powerful supplications begin with 'Our Lord' and are direct words taught by Allah for our benefit."
        keywords="rabbana duas, quranic duas, rabbana prayers, our lord duas, quran supplications, ربنا دعاء, islamic prayers from quran"
        canonical="https://dailyazkar.site/rabbana-duas"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Dua Hub", href: "/dua" },
          { label: "Rabbana Duas" }
        ]} />

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-heart text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Rabbana Duas
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-teal-600 dark:text-teal-400 mb-6">
            أدعية ربنا
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful supplications from the Quran beginning with "Our Lord". These duas are direct from Allah's book and carry immense spiritual weight.
          </p>
        </div>

        {/* Introduction Section - SEO Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Power of Quranic Supplications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Rabbana Duas are among the most beloved supplications in Islam. The word "Rabbana" (رَبَّنَا) means "Our Lord" and these prayers are found throughout the Holy Quran. What makes them uniquely powerful is that they are the very words Allah taught us to use when calling upon Him - the perfect expressions of our needs, hopes, and devotion.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Quran contains over 40 such duas, each addressing different aspects of life - from seeking guidance and forgiveness to asking for righteous offspring and protection from the Fire. When we recite these duas, we follow the example of the prophets and righteous believers mentioned in the Quran who used these exact words.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Prophet Muhammad ﷺ frequently recited these Quranic duas, and the companions learned them as an essential part of their worship. The dua <em className="text-teal-600 dark:text-teal-400">"Rabbana atina fid-dunya hasanah..."</em> was one of the most frequent supplications of the Prophet ﷺ.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Why Recite Rabbana Duas?
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Allah's Own Words:</strong> These are the perfect expressions Allah taught us to use.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Comprehensive Requests:</strong> They cover all aspects of life - this world and the Hereafter.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Prophetic Practice:</strong> The Prophet ﷺ and companions regularly recited these duas.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Easy to Memorize:</strong> Short yet powerful phrases that stay with you forever.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Unique Perspective Section for AdSense */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8 border-l-4 border-teal-500 shadow-inner">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
              The Heart of a Rabbana Dua: Why They Work Differently
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-2">The Psychology of "Our Lord"</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  The word **Rabbana** carries a collective and intimate weight. Unlike "Rabbi" (My Lord), "Rabbana" (Our Lord) connects us to the entire Ummah. It reflects a communal humility, acknowledging that while our needs are personal, we belong to a larger family of believers.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  In psychology, shifting from "Me" to "We" reduces the isolation often felt during times of trial. By saying "Our Lord," you are unconsciously tapping into the strength of the righteous who have used these same words for centuries.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-2">Quranic vs. Personal Dua</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  While personal supplications in your own language are essential, **Quranic Prayers** serve a unique purpose: they are the "Gold Standard" of logic and etiquette when speaking to Allah.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  They are balanced—always asking for both the worldly benefit and the eternal success. This prevents our prayers from becoming purely materialistic, helping us maintain a "High-Value Mindset" focused on the ultimate goal: the pleasure of Allah.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-teal-50/50 dark:bg-emerald-900/10 p-5 rounded-xl border border-teal-100 dark:border-teal-800/30">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 flex items-center">
                <i className="fas fa-scroll mr-2 text-teal-500"></i>
                Did You Know?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                Many of the **40 Rabbana Duas** were uttered by Prophets like Ibrahim (AS), Musa (AS), and Zakariya (AS) during the most challenging moments of their lives. When you recite them, you are literally speaking the same words revealed by the Creator to the greatest human beings to ever walk the Earth.
              </p>
            </div>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* Duas List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {duas.map((dua, index) => (
            <DuaBlock key={dua.id} azkar={dua} index={index} />
          ))}
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
                What are Rabbana Duas?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rabbana Duas are supplications from the Quran that begin with "Rabbana" (Our Lord). They are direct prayers taught by Allah in His book, making them particularly blessed and effective. There are over 40 such duas throughout the Quran.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Why are Quranic duas so powerful?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quranic duas are the words of Allah Himself, taught to us for our benefit. When we recite these duas, we are using the most perfect words to address our Creator. They are the same words used by prophets and the righteous before us.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                When should I recite Rabbana Duas?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can recite Rabbana Duas at any time, but especially during times of need, in sujood (prostration), after obligatory prayers, during the last third of the night, and while making personal supplications.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <RelatedContent hub="dua" currentHref="/rabbana-duas" />

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Duas from the Quran
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              These supplications are taught to us directly by Allah in His holy book, making them particularly powerful and blessed.
            </p>
            <p className="text-teal-600 dark:text-teal-400 font-arabic text-xl">
              رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Our Lord, accept from us. Indeed You are the Hearing, the Knowing. (Quran 2:127)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
