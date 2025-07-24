import { useState } from "react";
import { getAllImages, AZKAR_CATEGORIES, CATEGORY_LABELS } from "@/data/image-data";
import { ImageModal } from "./image-modal";
import { Button } from "@/components/ui/button";

export function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const allImages = getAllImages();

  const filters = [
    { id: "all", label: "All Azkar" },
    { id: AZKAR_CATEGORIES.MANZIL, label: CATEGORY_LABELS[AZKAR_CATEGORIES.MANZIL] },
    { id: AZKAR_CATEGORIES.SUBHA, label: CATEGORY_LABELS[AZKAR_CATEGORIES.SUBHA] },
    { id: AZKAR_CATEGORIES.SHAM, label: CATEGORY_LABELS[AZKAR_CATEGORIES.SHAM] },
    { id: AZKAR_CATEGORIES.QURANIDUA, label: CATEGORY_LABELS[AZKAR_CATEGORIES.QURANIDUA] }
  ];

  const filteredImages = activeFilter === "all" 
    ? allImages 
    : allImages.filter(img => img.category === activeFilter);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Beautiful <span className="gradient-text">Azkar Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Immerse yourself in the beauty of Islamic calligraphy and sacred remembrance
            </p>
          </div>
          
          {/* Gallery Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant="outline"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 glassmorphism rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30"
                    : "text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
          
          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="image-gallery-item h-64 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-2xl overflow-hidden relative">
                  <img
                    src={image.path}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to SVG placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
                          <rect width="100%" height="100%" fill="#10b981"/>
                          <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="24" font-family="Arial">
                            ${image.title}
                          </text>
                          <text x="50%" y="60%" text-anchor="middle" fill="white" font-size="16" font-family="Arial">
                            ${image.description}
                          </text>
                          <circle cx="200" cy="200" r="50" fill="rgba(255,255,255,0.2)"/>
                          <path d="M180 180 L220 220 M180 220 L220 180" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="image-overlay">
                    <div className="text-center">
                      <i className="fas fa-expand text-white text-2xl mb-2"></i>
                      <p className="text-white font-medium">{image.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="px-8 py-3 glassmorphism hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium rounded-full"
            >
              Load More Images
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        image={selectedImage}
        images={filteredImages}
        onNavigate={setSelectedImage}
      />
    </>
  );
}
