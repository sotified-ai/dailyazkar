import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: any;
  images: any[];
  onNavigate: (image: any) => void;
}

export function ImageModal({ isOpen, onClose, image, images, onNavigate }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, image]);

  const handlePrevious = () => {
    if (!image) return;
    const currentIndex = images.findIndex(img => img.id === image.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(images[previousIndex]);
  };

  const handleNext = () => {
    if (!image) return;
    const currentIndex = images.findIndex(img => img.id === image.id);
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(images[nextIndex]);
  };

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center min-h-screen p-4">
      <div className="relative max-w-5xl w-full">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
        />
        
        {/* Modal Controls */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
        >
          <i className="fas fa-times"></i>
        </Button>
        
        <Button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
        >
          <i className="fas fa-chevron-left"></i>
        </Button>
        
        <Button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
        >
          <i className="fas fa-chevron-right"></i>
        </Button>
        
        {/* Image Info */}
        <div className="absolute bottom-4 left-4 right-4 glassmorphism rounded-xl p-4">
          <h4 className="font-semibold text-white mb-2">{image.title}</h4>
          <p className="text-gray-200 text-sm">{image.alt}</p>
        </div>
      </div>
    </div>
  );
}
