import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden islamic-geometric">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 right-10 text-emerald-200 dark:text-emerald-800 text-6xl animate-float opacity-20">
        <i className="fas fa-moon"></i>
      </div>
      <div className="absolute bottom-20 left-10 text-amber-200 dark:text-amber-800 text-4xl animate-float opacity-20" style={{animationDelay: '1s'}}>
        <i className="fas fa-star"></i>
      </div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
              ✨ Islamic Daily Remembrance
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="gradient-text">Daily Azkar</span>
            <br />
            <span className="text-gray-800 dark:text-white">Your Spiritual Companion</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Begin and end your day with authentic Islamic remembrance. Discover beautiful morning and evening Azkar, 
            Quranic verses, and spiritual guidance to strengthen your connection with Allah.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/morning-azkar">
              <Button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-sun mr-2"></i>Start Morning Azkar
              </Button>
            </Link>
            <Link href="/evening-azkar">
              <Button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-moon mr-2"></i>Evening Remembrance
              </Button>
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Daily Azkar</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">114</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Quran Surahs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Daily Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
