import { ImageGallery } from "@/components/image-gallery";

export default function Gallery() {
  return (
    <div className="pt-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Azkar Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beautiful collection of Islamic calligraphy and sacred remembrance images
          </p>
        </div>
        
        <ImageGallery />
      </div>
    </div>
  );
}