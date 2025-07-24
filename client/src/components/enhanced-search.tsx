import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EnhancedSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const popularSearches = [
    "Subhanallah",
    "Morning Dua",
    "Astaghfirullah", 
    "Ayat al-Kursi",
    "Evening Remembrance"
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(`Comprehensive explanation for "${searchQuery}" would be provided here through connection to authentic Islamic knowledge databases. This would include Quranic references, Hadith citations, and scholarly explanations.`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Discover <span className="gradient-text">Islamic Knowledge</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Search for Azkar, Quranic verses, or Islamic topics and get detailed explanations and context
            </p>
          </div>
          
          <div className="glassmorphism rounded-2xl p-8">
            <div className="relative mb-6">
              <Input
                type="text"
                placeholder="Search for 'Subhanallah', 'morning dua', 'Surah Al-Fatiha'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="w-full px-6 py-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-lg"
              />
              <Button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-lg"
              >
                <i className="fas fa-search mr-2"></i>Search
              </Button>
            </div>
            
            {/* Search Loader */}
            {isLoading && (
              <div className="text-center py-6">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
                <p className="text-gray-600 dark:text-gray-400 mt-3">Searching Islamic knowledge...</p>
              </div>
            )}
            
            {/* Search Results */}
            {searchResults && !isLoading && (
              <div className="mt-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Search Results</h4>
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {searchResults}
                  </div>
                  <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <i className="fas fa-info-circle mr-1"></i>
                    Please verify with authentic Islamic sources.
                  </div>
                </div>
              </div>
            )}
            
            {/* Popular Searches */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Popular Searches</h4>
              <div className="flex flex-wrap gap-3">
                {popularSearches.map((search) => (
                  <Button
                    key={search}
                    variant="outline"
                    onClick={() => {
                      setSearchQuery(search);
                      handleSearch();
                    }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
