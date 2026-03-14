import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const popularSearches = [
    "Morning Azkar",
    "Evening Azkar",
    "Surah Al-Fatiha",
    "Istighfar"
  ];

  const siteContent = [
    { title: "Morning Azkar", description: "Start your day with blessed remembrance and seek Allah's protection", href: "/azkar/morning", category: "Azkar" },
    { title: "Evening Azkar", description: "Conclude your day with the beautiful evening adhkar", href: "/azkar/evening", category: "Azkar" },
    { title: "99 Names of Allah", description: "The beautiful attributes of Allah (Asma ul Husna) with meanings and Urdu translation", href: "/99-names-of-allah", category: "Knowledge" },
    { title: "Azkar Before Sleep", description: "Authentic Islamic bedtime supplications and protection duas for a peaceful night", href: "/azkar-before-sleep", category: "Guide" },
    { title: "Tasbeeh Counter", description: "Interactive digital tasbeeh counter for daily dhikr and zikr tracking", href: "/tasbeeh-counter", category: "Utility" },
    { title: "Dua After Waking Up", description: "A comprehensive guide on the best dua after waking up and authentic morning azkar", href: "/dua-after-waking-up", category: "Guide" },
    { title: "Dua After Salah", description: "Authentic supplications to recite after the five daily prayers", href: "/dua/after-salah", category: "Dua" },
    { title: "Rabbana Duas", description: "40 powerful prayers from the Holy Quran starting with Rabbana", href: "/dua/rabbana", category: "Dua" },
    { title: "Daily Blogs", description: "Read our latest articles on spirituality, Ramadan, and daily Islamic life", href: "/blog", category: "Articles" },
    { title: "Quran Hub", description: "Read the Holy Quran with authentic translations and surah details", href: "/quran", category: "Quran" },
    { title: "Protection Duas", description: "Authentic Islamic supplications for protection from evil and harm", href: "/protection-duas-in-islam", category: "Dua" },
    { title: "Tasbeeh Counter", description: "Digital tasbeeh counter for daily dhikr tracking", href: "/azkar", category: "Utility" }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);

    // Simple filter search
    setTimeout(() => {
      const results = siteContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsLoading(false);
    }, 400);
  };



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center min-h-screen p-4">
      <div className="glassmorphism rounded-3xl p-8 w-full max-w-2xl animate-scale-in border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white">
              Search AzkarDaily
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find Azkar, Duas, and Islamic Guides</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="w-10 h-10 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close search"
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </Button>
        </div>

        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="Search for '99 names', 'morning dua', etc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full h-16 pl-14 pr-32 text-lg rounded-2xl border-emerald-100 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-emerald-500"
            autoFocus
          />
          <i className="fas fa-search absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500 text-xl"></i>
          <Button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-6 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all"
          >
            Search
          </Button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-emerald-500 border-t-transparent"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 font-medium italic">Searching our library...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Results</p>
              {searchResults.map((result, idx) => (
                <a
                  key={idx}
                  href={result.href}
                  onClick={onClose}
                  className="block group p-5 rounded-2xl bg-white/40 dark:bg-gray-800/40 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/50 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">
                        {result.category}
                      </span>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-emerald-600 transition-colors">
                        {result.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                        {result.description}
                      </p>
                    </div>
                    <i className="fas fa-chevron-right text-emerald-300 group-hover:translate-x-1 transition-transform mt-2"></i>
                  </div>
                </a>
              ))}
            </div>
          ) : searchQuery && !isLoading ? (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/30 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700">
              <i className="fas fa-search-minus text-4xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 dark:text-gray-400 px-8">
                We couldn't find anything matching "<span className="font-bold text-emerald-500">{searchQuery}</span>".
                Try searching for simple keywords like "Azkar" or "Dua".
              </p>
            </div>
          ) : (
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Popular Searches</h4>
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
                    className="px-6 py-2 rounded-full border-emerald-100 dark:border-emerald-900 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 transition-all"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
