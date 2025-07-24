import { azkarData } from "@/data/azkar-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EveningAzkar() {
  const eveningAzkar = azkarData.find(category => category.id === "evening");

  if (!eveningAzkar) {
    return (
      <div className="pt-24 container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Evening Azkar not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-moon text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            {eveningAzkar.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-emerald-600 dark:text-emerald-400 mb-6">
            {eveningAzkar.nameArabic}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {eveningAzkar.description}
          </p>
        </div>

        {/* Azkar List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {eveningAzkar.items.map((azkar, index) => (
            <Card key={azkar.id} className="glassmorphism border-0 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {azkar.title}
                      </h3>
                      <p className="text-lg font-arabic text-emerald-600 dark:text-emerald-400">
                        {azkar.titleArabic}
                      </p>
                    </div>
                  </div>
                  {azkar.repetitions > 1 && (
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                      {azkar.repetitions}x
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Arabic Text */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6">
                  <p className="text-2xl font-arabic leading-loose text-right text-gray-800 dark:text-white">
                    {azkar.content}
                  </p>
                </div>

                {/* Translation */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Translation:</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {azkar.translation}
                  </p>
                </div>

                {/* Reference */}
                {azkar.reference && (
                  <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400">
                    <i className="fas fa-book mr-2"></i>
                    <span className="font-medium">Reference: {azkar.reference}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              End Your Day with Gratitude
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              May Allah forgive your sins and bless you with peaceful rest
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                <i className="fas fa-check-circle mr-2"></i>
                <span className="font-medium">Evening Azkar Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
