import { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import translations from "@/data/hero-i18n.json";
import { trackEvent } from "@/lib/analytics";

type SupportedLang = "en" | "ur" | "ar";

function getLanguageFromCookie(): SupportedLang {
    const match = typeof document !== "undefined" ? document.cookie.match(/googtrans=\/en\/([a-z]{2})/) : null;
    if (match && (match[1] === "ur" || match[1] === "ar")) {
        return match[1] as SupportedLang;
    }
    return "en"; // default to English
}

function getTimeContext() {
    const hour = new Date().getHours();
    // Fajr/Morning: 3 AM to 11 AM
    if (hour >= 3 && hour < 11) return "morning";
    // Maghrib/Evening: 4 PM to 9 PM
    if (hour >= 16 && hour < 21) return "evening";
    return "default";
}

export function HeroSlider() {
    const [lang, setLang] = useState<SupportedLang>("en");
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
        duration: 30, // speed
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const timeContext = useMemo(() => getTimeContext(), []);

    useEffect(() => {
        // Initial lang check
        setLang(getLanguageFromCookie());

        // Track default slide selection
        trackEvent("hero_default_slide", "hero", timeContext);

        const interval = setInterval(() => {
            const currentLang = getLanguageFromCookie();
            if (currentLang !== lang) {
                trackEvent("language_switch", "interaction", `from_${lang}_to_${currentLang}`);
                setLang(currentLang);
            }
        }, 1000); // Polling for cookie change

        return () => clearInterval(interval);
    }, [lang, timeContext]);

    // Sync selected index
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        trackEvent("hero_slide_view", "hero", `slide_${emblaApi.selectedScrollSnap()}_${lang}`);
    }, [emblaApi, lang]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        // Initial tracking
        onSelect();
    }, [emblaApi, onSelect]);

    const t = (key: keyof typeof translations) => translations[key][lang];

    const handleCtaClick = (ctaId: string) => {
        trackEvent("hero_cta_click", "hero", `${ctaId}_slide_${selectedIndex}`);
    };

    const isRtl = lang === "ur" || lang === "ar";

    const slides = [
        {
            id: "core_azkar",
            title: t("slide1.title"),
            subtext: t("slide1.subtext"),
            bgClass: "from-emerald-900 to-indigo-900",
            hasPrimaryCtas: true,
            secondaryCta: t("cta.secondary_slide1"),
            secondaryLink: "/quran/surahs/67",
            icon: "fas fa-moon"
        },
        {
            id: "quran_hub",
            title: t("slide2.title"),
            subtext: t("slide2.subtext"),
            bgClass: "from-emerald-800 to-teal-900",
            hasPrimaryCtas: false,
            secondaryCta: t("cta.secondary_slide2"),
            secondaryLink: "/quran",
            icon: "fas fa-book-open"
        },
        {
            id: "dua_hub",
            title: t("slide3.title"),
            subtext: t("slide3.subtext"),
            bgClass: "from-indigo-900 to-purple-900",
            hasPrimaryCtas: false,
            secondaryCta: t("cta.secondary_slide3"),
            secondaryLink: "/dua",
            icon: "fas fa-hands-praying"
        },
        {
            id: "tutor",
            title: t("slide4.title"),
            subtext: t("slide4.subtext"),
            bgClass: "from-amber-900 to-orange-900",
            hasPrimaryCtas: false,
            secondaryCta: t("cta.secondary_slide4"),
            secondaryLink: "/tutor",
            icon: "fas fa-graduation-cap"
        }
    ];

    return (
        <section
            className="relative overflow-hidden group focus-within:ring-2 focus-within:ring-emerald-500 max-h-[80vh]"
            dir={isRtl ? "rtl" : "ltr"}
            aria-label="Hero slider"
            role="region"
        >
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y" style={{ flexDirection: isRtl ? "row-reverse" : "row" }}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`relative flex-[0_0_100%] min-w-0 min-h-[50vh] transition-opacity duration-500 bg-gradient-to-br ${slide.bgClass} flex items-center justify-center`}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Slide ${index + 1} of ${slides.length}`}
                        >
                            <div className="absolute inset-0 bg-black/40 z-0 transition-opacity hover:bg-black/30"></div>

                            <div className="relative z-10 w-full container mx-auto px-4 py-16 lg:py-24 text-center">
                                <div className="mb-4">
                                    <span className="inline-block px-4 py-2 bg-white/10 text-emerald-100 rounded-full text-sm font-medium backdrop-blur-md border border-white/20 shadow-sm transition-all hover:bg-white/20">
                                        <i className={`${slide.icon} mr-2`} aria-hidden="true"></i>
                                        {slide.id === "core_azkar" && timeContext === "morning" && "🌞 Fayr Window Open"}
                                        {slide.id === "core_azkar" && timeContext === "evening" && "🌙 Maghrib Window Open"}
                                        {(slide.id !== "core_azkar" || timeContext === "default") && "✨ Islamic Daily Remembrance"}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white drop-shadow-lg max-w-4xl mx-auto notranslate">
                                    {slide.title}
                                </h1>

                                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed notranslate drop-shadow-md">
                                    {slide.subtext}
                                </p>

                                {/* Primary CTAs universally rendered as per brief */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 flex-wrap">
                                    <Link href="/azkar/morning">
                                        <Button
                                            onClick={() => handleCtaClick("start_morning")}
                                            className={`px-8 py-6 text-lg rounded-full font-bold shadow-xl hover:scale-105 transition-transform ${timeContext === "morning" ? "bg-amber-500 hover:bg-amber-600 text-white ring-4 ring-amber-500/30" : "bg-white text-emerald-900 hover:bg-emerald-50"}`}
                                        >
                                            <i className="fas fa-sun mr-2" aria-hidden="true"></i> {t("cta.primary_morning")}
                                        </Button>
                                    </Link>

                                    <Link href="/azkar/evening">
                                        <Button
                                            onClick={() => handleCtaClick("start_evening")}
                                            className={`px-8 py-6 text-lg rounded-full font-bold shadow-xl hover:scale-105 transition-transform ${timeContext === "evening" ? "bg-amber-500 hover:bg-amber-600 text-white ring-4 ring-amber-500/30" : "bg-emerald-600 hover:bg-emerald-700 text-white dropdown-shadow"}`}
                                        >
                                            <i className="fas fa-moon mr-2" aria-hidden="true"></i> {t("cta.primary_evening")}
                                        </Button>
                                    </Link>

                                    <Link href={slide.secondaryLink}>
                                        <Button
                                            variant="outline"
                                            onClick={() => handleCtaClick(`secondary_${slide.id}`)}
                                            className="px-8 py-6 text-lg rounded-full font-bold bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
                                        >
                                            {slide.secondaryCta}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 z-20 hidden md:flex"
                onClick={() => {
                    emblaApi?.scrollPrev();
                    trackEvent("hero_nav_prev", "hero", "prev_arrow");
                }}
                aria-label="Previous slide"
            >
                <i className={`fas fa-chevron-${isRtl ? "right" : "left"}`} aria-hidden="true"></i>
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 z-20 hidden md:flex"
                onClick={() => {
                    emblaApi?.scrollNext();
                    trackEvent("hero_nav_next", "hero", "next_arrow");
                }}
                aria-label="Next slide"
            >
                <i className={`fas fa-chevron-${isRtl ? "left" : "right"}`} aria-hidden="true"></i>
            </Button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20" dir="ltr">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={selectedIndex === index ? "true" : "false"}
                        className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent ${selectedIndex === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
