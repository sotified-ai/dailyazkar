import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DuaAfterSalah() {
  const duas = [
    {
      id: 1,
      title: "Seeking Allah's Forgiveness",
      titleArabic: "الاستغفار",
      content: "أَسْتَغْفِرُ اللَّهَ (ثلاث مرات) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      translation: "I seek forgiveness from Allah (three times). O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor.",
      reference: "Muslim 591"
    },
    {
      id: 2,
      title: "Declaration of Faith",
      titleArabic: "التوحيد",
      content: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      translation: "There is no deity except Allah, alone without partner. To Him belongs the dominion and to Him belongs praise, and He is over all things competent.",
      reference: "Bukhari 844"
    }
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-hands text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Dua after Salah
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-blue-600 dark:text-blue-400 mb-6">
            دعاء بعد الصلاة
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Complete your prayer with these blessed supplications. Essential duas to recite after each of the five daily prayers.
          </p>
        </div>

        {/* Duas List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {duas.map((dua, index) => (
            <Card key={dua.id} className="glassmorphism border-0 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {dua.title}
                    </h3>
                    <p className="text-lg font-arabic text-blue-600 dark:text-blue-400">
                      {dua.titleArabic}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Arabic Text */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6">
                  <p className="text-2xl font-arabic leading-loose text-right text-gray-800 dark:text-white">
                    {dua.content}
                  </p>
                </div>

                {/* Translation */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Translation:</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {dua.translation}
                  </p>
                </div>

                {/* Reference */}
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <i className="fas fa-book mr-2"></i>
                  <span className="font-medium">Reference: {dua.reference}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Complete Your Prayer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              These supplications help maintain the spiritual connection established during prayer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
