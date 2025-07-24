import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RabbanaDuas() {
  const duas = [
    {
      id: 1,
      title: "Seeking Guidance",
      titleArabic: "دعاء الهداية",
      content: "رَبَّنَا اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Our Lord, guide us to the straight path.",
      reference: "Quran 1:6",
      chapter: "Al-Fatiha"
    },
    {
      id: 2, 
      title: "Seeking Forgiveness",
      titleArabic: "دعاء المغفرة",
      content: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      translation: "Our Lord, forgive us our sins and the excess in our affairs and plant firmly our feet and give us victory over the disbelieving people.",
      reference: "Quran 3:147",
      chapter: "Al-Imran"
    }
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-heart text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Rabbana Duas
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-teal-600 dark:text-teal-400 mb-6">
            ربنا ادعية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful supplications from the Quran beginning with "Our Lord". These duas are direct from Allah's book and carry immense spiritual weight.
          </p>
        </div>

        {/* Duas List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {duas.map((dua, index) => (
            <Card key={dua.id} className="glassmorphism border-0 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {dua.title}
                      </h3>
                      <p className="text-lg font-arabic text-teal-600 dark:text-teal-400">
                        {dua.titleArabic}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                      {dua.chapter}
                    </div>
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
                <div className="flex items-center text-sm text-teal-600 dark:text-teal-400">
                  <i className="fas fa-book-open mr-2"></i>
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
              Duas from the Quran
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              These supplications are taught to us directly by Allah in His holy book, making them particularly powerful and blessed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
