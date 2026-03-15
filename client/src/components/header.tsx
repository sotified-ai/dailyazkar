import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { SearchModal } from "./search-modal";
import { useLanguage } from "@/lib/language-context";

export function Header() {
  const [location, setLocation] = useLocation();
  const { theme, setTheme } = useTheme();
  const { lang, t } = useLanguage();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const navigation = [
    { name: t("nav.azkar"), href: "/azkar", icon: "fas fa-sun" },
    { name: t("nav.quran"), href: "/quran", icon: "fas fa-book-open" },
    { name: t("nav.dua"), href: "/dua", icon: "fas fa-hands-praying" },
    { name: t("nav.tutor"), href: "/tutor", icon: "fas fa-graduation-cap" },
    { name: t("nav.blogs"), href: "/blog", icon: "fas fa-book-reader" },
    { name: "AI Assistant", href: "/ai-assistant", icon: "fas fa-robot" },
  ];

  const handleLanguageChange = (targetLang: "en" | "ur") => {
    const isCurrentlyUrdu = location.startsWith("/ur");
    let newPath = location;

    if (targetLang === "ur" && !isCurrentlyUrdu) {
      newPath = `/ur${location === "/" ? "" : location}`;
    } else if (targetLang === "en" && isCurrentlyUrdu) {
      newPath = location.replace(/^\/ur/, "") || "/";
    }

    if (newPath !== location) {
      // Use window.location.href to force a full reload and router base update
      window.location.href = newPath;
    }
    setShowLangMenu(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism animate-fade-in">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center shrink-0">
                <i className="fas fa-moon text-white text-lg"></i>
              </div>
              <div>
                <h1 className="text-xl font-display font-bold gradient-text leading-tight">{t("site.title")}</h1>
                <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">{t("site.tagline")}</p>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors ${location.startsWith(item.href) && item.href !== "/" ? "text-emerald-600 dark:text-emerald-400" : ""}`}
                >
                  <i className={`${item.icon} mr-2 rtl:ml-2 rtl:mr-0 hidden xl:inline-block`}></i>{item.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
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
                  <span className="ml-1 text-xs uppercase">{lang}</span>
                </Button>
                {showLangMenu && (
                  <div className="absolute top-full right-0 rtl:left-0 rtl:right-auto mt-2 w-32 glassmorphism rounded-xl shadow-lg transition-all z-50 overflow-hidden">
                    <div className="p-1 flex flex-col">
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`px-4 py-2 text-sm text-left rtl:text-right hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg text-gray-700 dark:text-gray-200 ${lang === 'en' ? 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600' : ''}`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleLanguageChange('ur')}
                        className={`px-4 py-2 text-sm text-left rtl:text-right hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg font-urdu text-gray-700 dark:text-gray-200 ${lang === 'ur' ? 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600' : ''}`}
                      >
                        اردو
                      </button>
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
                    <i className={`${item.icon} mr-3 rtl:ml-3 rtl:mr-0 text-emerald-500`}></i>
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
