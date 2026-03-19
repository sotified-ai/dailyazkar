import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AIChatWidget } from "./ai-chat-widget";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 space-y-3 z-40">
      {/* AI Assistant Button - Hidden for Production */}
      {/* 
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 hover:shadow-emerald-500/40 text-white rounded-full shadow-2xl transform hover:scale-110 active:scale-95 transition-all flex items-center justify-center p-0 border-0 group relative overflow-hidden"
            aria-label="Open AI Assistant"
          >
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <i className="fas fa-robot text-xl relative z-10" aria-hidden="true"></i>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white dark:border-gray-900"></span>
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0 sm:max-w-[400px] w-full border-l border-border/40">
          <AIChatWidget />
        </SheetContent>
      </Sheet> 
      */}

      {/* Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 bg-card/80 backdrop-blur-md border border-border/50 text-foreground hover:bg-muted rounded-full shadow-lg transform hover:scale-110 active:scale-95 transition-all flex items-center justify-center animate-fade-in"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-sm" aria-hidden="true"></i>
        </Button>
      )}
    </div>
  );
}
