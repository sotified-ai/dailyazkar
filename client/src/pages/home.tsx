import { useEffect, useState } from "react";
import { HeroSlider } from "@/components/hero-slider";
import { HeroSection } from "@/components/hero-section";
import { FeaturedContent } from "@/components/featured-content";
import { EnhancedSearch } from "@/components/enhanced-search";

import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";

export default function Home() {
  const [heroVariant, setHeroVariant] = useState<"slider" | "static">("slider");

  useEffect(() => {
    // A/B test hook: Check URL params first, then fallback to random assignment or local storage
    const urlParams = new URLSearchParams(window.location.search);
    const forceVariant = urlParams.get("hero");

    if (forceVariant === "static" || forceVariant === "slider") {
      setHeroVariant(forceVariant);
    } else {
      // For now, default to slider to roll out the new feature as the primary winner.
      // But we have the hook ready to switch based on a backend flag or a 50/50 Math.random() roll if desired.
      setHeroVariant("slider");
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Daily Azkar",
    "url": "https://dailyazkar.site",
    "description": "Your daily guide to Morning and Evening Zikr, featuring authentic Islamic Azkar and Quran Duas with explanations.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dailyazkar.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="pt-24">
      <SEOHead
        title="Complete Morning & Evening Azkar Guide (Arabic + English) | Daily Azkar"
        description="Your daily guide to Morning and Evening Zikr, featuring authentic Islamic Azkar and Quran Duas with explanations. Enhance your spiritual journey with our interactive content."
        keywords="Zikr, Azkar, Morning Azkar, Evening Azkar, Quran, Islamic Duas, Daily Prayers, Muslim prayers, spiritual guide, masnoon azkar, ramzan azkar, ramadan azkar, fasting duas, sehri dua, iftar dua, ramzan dua, roza, fasting islam, azkar ramadan, ramadan mubarak, ramzaan, subah ke azkar, sham ke azkar, namaz ke baad ki dua, hifazat ki dua, nazar e bad ki dua, masnoon duain, qurani duain, manzil dua, ruqyah shariah, beemari ki dua, parishani ki dua, wazifa, sone ki dua, jagne ki dua, ghar se nikalne ki dua, safar ki dua, daily azkar in urdu, roman urdu duas, islamic wazaif, dua qabooliyat, rabbana duas in roman english, har bimari ka ilaj quran se, jadu ka ilaj, nazar ka ilaj, subah o sham ke azkar, bimari ki dua, pareshani ki dua, gham ki dua, supplication meaning, dhikr, du aa, tasbeeh, akdar, dua and meaning, akdar meaning, how to make dua, indeed meaning in urdu, how to ask dua, dua muslim, praise god in arabic, protect dua, dhikr meaning, dua to save from evil eye, islamic dua, translate allahu akbar, zikr, askar, la ilaha illallah in arabic, prayer in arabic, prayers in arabic language, qiyam meaning, what is recite, adhkar, define dua"
        canonical="https://dailyazkar.site"
        structuredData={structuredData}
      />
      {heroVariant === "slider" ? <HeroSlider /> : <HeroSection />}
      <EnhancedSearch />
      <FeaturedContent />
      <AdSense className="my-8" />

      {/* Educational Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Online Quran Tutor Highlight */}
          <div className="text-center mb-16 px-4">
            <div className="relative inline-block w-full max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group border border-gray-100 dark:border-gray-700">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500"></div>

                <span className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 font-bold rounded-full text-xs tracking-wider uppercase mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800">
                  <i className="fas fa-star text-amber-500 mr-2"></i> New Premium Service
                </span>

                <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
                  Hire an Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Online Quran Teacher</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Interactive 1-on-1 Quran classes with qualified native-sounding tutors for your children and adults. Choose from dedicated male and female teachers specializing in Noorani Qaida, Tajweed, and Hifz.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/online-quran-tutor" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                    <i className="fas fa-graduation-cap mr-3 text-xl"></i>
                    Start Free Trial Class
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
