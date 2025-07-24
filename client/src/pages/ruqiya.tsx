import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Ruqiya() {
  const ruqiyaItems = [
    {
      id: 1,
      title: "Surah Al-Fatiha",
      titleArabic: "سورة الفاتحة",
      content: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful. All praise is due to Allah, Lord of the worlds - The Entirely Merciful, the Especially Merciful, Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path - The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray.",
      reference: "Quran 1:1-7",
      repetitions: 1,
      benefits: "Complete healing and protection"
    },
    {
      id: 2,
      title: "Ayat al-Kursi",
      titleArabic: "آية الكرسي",
      content: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      reference: "Quran 2:255",
      repetitions: 1,
      benefits: "Ultimate protection from evil"
    },
    {
      id: 3,
      title: "Al-Mu'awwidhatayn - Surah Al-Falaq",
      titleArabic: "سورة الفلق",
      content: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      translation: "Say: I seek refuge in the Lord of daybreak, From the evil of that which He created, And from the evil of darkness when it settles, And from the evil of the blowers in knots, And from the evil of an envier when he envies.",
      reference: "Quran 113:1-5",
      repetitions: 3,
      benefits: "Protection from magic and envy"
    },
    {
      id: 4,
      title: "Al-Mu'awwidhatayn - Surah An-Nas",
      titleArabic: "سورة الناس",
      content: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
      translation: "Say: I seek refuge in the Lord of mankind, The Sovereign of mankind, The God of mankind, From the evil of the retreating whisperer - Who whispers in the breasts of mankind - Of jinn and men.",
      reference: "Quran 114:1-6",
      repetitions: 3,
      benefits: "Protection from whispers of Satan"
    }
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-shield-alt text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Ruqiya
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-violet-600 dark:text-violet-400 mb-6">
            رقية شرعية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Spiritual protection through Quranic verses. Authentic Islamic healing and protection prayers for spiritual well-being and protection from evil.
          </p>
        </div>

        {/* Important Note */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="glassmorphism rounded-xl p-6 border-l-4 border-violet-500">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
              <i className="fas fa-info-circle text-violet-500 mr-2"></i>
              Important Guidelines
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              <li>• Recite with complete faith and trust in Allah</li>
              <li>• Maintain ritual purity (wudu) while reciting</li>
              <li>• Recite in a clear, audible voice</li>
              <li>• Blow gently on the person or yourself after each recitation</li>
              <li>• Seek professional medical help alongside spiritual healing</li>
            </ul>
          </div>
        </div>

        {/* Ruqiya Items */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {ruqiyaItems.map((item, index) => (
            <Card key={item.id} className="glassmorphism border-0 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-lg font-arabic text-violet-600 dark:text-violet-400">
                        {item.titleArabic}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    {item.repetitions > 1 && (
                      <div className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {item.repetitions}x
                      </div>
                    )}
                    <div className="text-xs text-violet-600 dark:text-violet-400 font-medium">
                      {item.benefits}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Arabic Text */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6">
                  <p className="text-2xl font-arabic leading-loose text-right text-gray-800 dark:text-white">
                    {item.content}
                  </p>
                </div>

                {/* Translation */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Translation:</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.translation}
                  </p>
                </div>

                {/* Reference and Benefits */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center text-sm text-violet-600 dark:text-violet-400">
                    <i className="fas fa-book-open mr-2"></i>
                    <span className="font-medium">Reference: {item.reference}</span>
                  </div>
                  <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400">
                    <i className="fas fa-heart mr-2"></i>
                    <span className="font-medium">Benefits: {item.benefits}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Guidance */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Spiritual Healing with Faith
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "And We send down of the Quran that which is healing and mercy for the believers" - Quran 17:82
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Recite with sincere intention</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Trust in Allah's healing power</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Combine with medical treatment</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Maintain regular practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
