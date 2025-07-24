import { HeroSection } from "@/components/hero-section";
import { FeaturedContent } from "@/components/featured-content";
import { ImageGallery } from "@/components/image-gallery";
import { EnhancedSearch } from "@/components/enhanced-search";
import { DailyReminder } from "@/components/daily-reminder";
import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Daily Azkar",
    "url": window.location.origin,
    "description": "Your daily guide to Morning and Evening Zikr, featuring authentic Islamic Azkar and Quran Duas with explanations.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${window.location.origin}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="pt-24">
      <SEOHead
        title="Daily Azkar - Morning & Evening Zikr | Islamic Prayers & Supplications"
        description="Your daily guide to Morning and Evening Zikr, featuring authentic Islamic Azkar and Quran Duas with explanations. Enhance your spiritual journey with our interactive content."
        keywords="Zikr, Azkar, Morning Azkar, Evening Azkar, Quran, Islamic Duas, Daily Prayers, Muslim prayers, spiritual guide, masnoon azkar"
        canonical={window.location.href}
        structuredData={structuredData}
      />
      <HeroSection />
      <AdSense className="my-8" />
      <FeaturedContent />
      <ImageGallery />
      <AdSense className="my-8" />
      <EnhancedSearch />
      <DailyReminder />
    </div>
  );
}
