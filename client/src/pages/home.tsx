import { HeroSection } from "@/components/hero-section";
import { FeaturedContent } from "@/components/featured-content";
import { ImageGallery } from "@/components/image-gallery";
import { EnhancedSearch } from "@/components/enhanced-search";
import { DailyReminder } from "@/components/daily-reminder";

export default function Home() {
  return (
    <div className="pt-24">
      <HeroSection />
      <FeaturedContent />
      <ImageGallery />
      <EnhancedSearch />
      <DailyReminder />
    </div>
  );
}
