import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Daily Azkar - Islamic Remembrance",
          text: "Discover beautiful Islamic daily prayers and remembrance",
          url: window.location.href
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "Page link copied to clipboard"
        });
      } catch (error) {
        toast({
          title: "Unable to copy",
          description: "Please copy the link manually",
          variant: "destructive"
        });
      }
    }
  };

  const handleBookmark = () => {
    // In a real app, this would save to user's bookmarks
    toast({
      title: "Bookmarked!",
      description: "Page added to your bookmarks"
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 space-y-3 z-40">
      {/* Share Button */}
      <Button
        onClick={handleShare}
        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all flex items-center justify-center"
      >
        <i className="fas fa-share-alt"></i>
      </Button>
      
      {/* Bookmark Button */}
      <Button
        onClick={handleBookmark}
        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all flex items-center justify-center"
      >
        <i className="fas fa-bookmark"></i>
      </Button>
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all flex items-center justify-center animate-fade-in"
        >
          <i className="fas fa-arrow-up"></i>
        </Button>
      )}
    </div>
  );
}
