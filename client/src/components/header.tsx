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
  const [showLangMenu, setShowLangMenu] = useState(false);

  const changeLanguage = (langCode: string) => {
    if (langCode === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname};`;
    }
    window.location.reload();
  };

  const navigation = [
    { name: "Azkar Hub", href: "/azkar", icon: "fas fa-sun" },
    { name: "Quran Hub", href: "/quran", icon: "fas fa-book-open" },
    { name: "Dua Hub", href: "/dua", icon: "fas fa-hands-praying" },
    { name: "Azkar Quran Tutor", href: "/tutor", icon: "fas fa-graduation-cap" },
    { name: "Blogs", href: "/blog", icon: "fas fa-book-reader" },
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
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors ${location.startsWith(item.href) && item.href !== "/" ? "text-emerald-600 dark:text-emerald-400" : ""}`}
                >
                  <i className={`${item.icon} mr-2 hidden xl:inline-block`}></i>{item.name}
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
                aria-label="Open search"
              >
                <i className="fas fa-search" aria-hidden="true"></i>
              </Button>

              {/* Language Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                  aria-label="Change language"
                  aria-expanded={showLangMenu}
                >
                  <i className="fas fa-globe" aria-hidden="true"></i>
                </Button>
                {showLangMenu && (
                  <div className="absolute top-full right-0 mt-2 w-32 glassmorphism rounded-xl shadow-lg transition-all z-50">
                    <div className="p-2 flex flex-col">
                      <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-sm text-left hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg text-gray-700 dark:text-gray-200">English</button>
                      <button onClick={() => changeLanguage('ur')} className="px-4 py-2 text-sm text-left hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg font-arabic text-gray-700 dark:text-gray-200">اردو</button>
                      <button onClick={() => changeLanguage('ar')} className="px-4 py-2 text-sm text-left hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg font-arabic text-gray-700 dark:text-gray-200">العربية</button>
                    </div>
                  </div>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                aria-label="Toggle dark mode"
              >
                <i className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`} aria-hidden="true"></i>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                aria-label="Toggle mobile menu"
                aria-expanded={showMobileMenu}
              >
                <i className="fas fa-bars" aria-hidden="true"></i>
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
                    className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${location.startsWith(item.href) && item.href !== "/"
                      ? "bg-emerald-50 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                  >
                    <i className={`${item.icon} mr-3 text-emerald-500`}></i>
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
