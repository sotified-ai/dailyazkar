import { quranSurahs } from "@/data/quran-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Quran() {
  return (
    <div className="pt-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-book-open text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Holy Quran
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-emerald-600 dark:text-emerald-400 mb-6">
            القرآن الكريم
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse Surahs and explore the divine guidance from Allah. Each Surah contains wisdom and light for believers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          <div className="text-center glassmorphism rounded-xl p-4">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">114</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Surahs</div>
          </div>
          <div className="text-center glassmorphism rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6,236</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Verses</div>
          </div>
          <div className="text-center glassmorphism rounded-xl p-4">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">86</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Meccan</div>
          </div>
          <div className="text-center glassmorphism rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">28</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Medinan</div>
          </div>
        </div>

        {/* Surah List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {quranSurahs.map((surah) => (
            <Card key={surah.number} className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {surah.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {surah.name}
                      </h3>
                      <p className="text-xl font-arabic text-emerald-600 dark:text-emerald-400">
                        {surah.nameArabic}
                      </p>
                    </div>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"></i>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <i className="fas fa-list mr-1"></i>
                      {surah.verses} verses
                    </div>
                    <Badge variant={surah.type === "meccan" ? "default" : "secondary"}>
                      {surah.type === "meccan" ? "Meccan" : "Medinan"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Read with Reflection
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "And We have certainly made the Quran easy for remembrance, so is there any who will remember?" - Quran 54:17
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Click on any Surah to begin reading and reflecting upon Allah's guidance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
