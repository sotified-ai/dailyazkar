import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const popularSearches = [
    "Morning Azkar",
    "Evening Azkar", 
    "Surah Al-Fatiha",
    "Istighfar"
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(`Search results for "${searchQuery}" would appear here. This would connect to an authentic Islamic knowledge database.`);
      setIsLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center min-h-screen p-4">
      <div className="glassmorphism rounded-2xl p-6 w-full max-w-2xl animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-white">
            Search Azkar
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <i className="fas fa-times"></i>
          </Button>
        </div>
        
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="Search for Azkar, Duas, or Islamic topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="w-full px-6 py-4 text-lg"
          />
          <Button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
          >
            <i className="fas fa-search mr-2"></i>Search
          </Button>
        </div>
        
        {/* Search Loading */}
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
                size="sm"
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
  );
}
