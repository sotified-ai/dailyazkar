import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { SearchModal } from "./search-modal";

export function Header() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigation = [
    { name: "Morning Azkar", href: "/morning-azkar", icon: "fas fa-sun" },
    { name: "Evening Azkar", href: "/evening-azkar", icon: "fas fa-moon" },
    { name: "Dua after Salah", href: "/dua-after-salah", icon: "fas fa-hands" },
    { name: "Rabbana Duas", href: "/rabbana-duas", icon: "fas fa-heart" },
    { name: "Quran", href: "/quran", icon: "fas fa-book-open" },
    { name: "Ruqiya", href: "/ruqiya", icon: "fas fa-shield-alt" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism animate-fade-in">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
                <i className="fas fa-moon text-white text-lg"></i>
              </div>
              <div>
                <h1 className="text-xl font-display font-bold gradient-text">Daily Azkar</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Islamic Remembrance</p>
              </div>
            </Link>
            
            {/* Main Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">
                  <span>Azkar</span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 glassmorphism rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-2">
                    <Link 
                      href="/morning-azkar" 
                      className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors"
                    >
                      <i className="fas fa-sun text-amber-500 mr-3"></i>Morning Azkar
                    </Link>
                    <Link 
                      href="/evening-azkar" 
                      className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors"
                    >
                      <i className="fas fa-moon text-emerald-500 mr-3"></i>Evening Azkar
                    </Link>
                  </div>
                </div>
              </div>
              
              {navigation.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors ${
                    location === item.href ? "text-emerald-600 dark:text-emerald-400" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSearch(true)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <i className="fas fa-search"></i>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <i className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <i className="fas fa-bars"></i>
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="lg:hidden mt-4 opacity-100 visible transition-all duration-300">
              <div className="glassmorphism rounded-xl p-4 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setShowMobileMenu(false)}
                    className="block py-2 text-gray-700 dark:text-gray-200 hover:text-emerald-600 transition-colors"
                  >
                    <i className={`${item.icon} mr-3`}></i>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
}
