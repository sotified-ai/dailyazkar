import React, { createContext, useContext, ReactNode } from "react";
import { useLocation } from "wouter";

type Language = "en" | "ur";

interface LanguageContextType {
    lang: Language;
    direction: "ltr" | "rtl";
    isUrdu: boolean;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
    en: {
        "nav.home": "Home",
        "nav.azkar": "Azkar Hub",
        "nav.quran": "Quran Hub",
        "nav.dua": "Dua Hub",
        "nav.tutor": "Quran Tutor",
        "nav.blogs": "Blogs",
        "site.title": "Daily Azkar",
        "site.tagline": "Islamic Remembrance",
        "common.read_now": "Read Now",
        "common.start_counting": "Start Counting",
        "common.translation": "Translation",
        "common.copy_arabic": "Copy Arabic Text",
        "common.completed": "Completed",
        "common.tap_to_count": "Tap to Count",
        "common.reset": "Reset",
        "cards.morning.title": "Morning Azkar",
        "cards.morning.description": "Start your day with blessed remembrance.",
        "cards.evening.title": "Evening Azkar",
        "cards.evening.description": "End your day in peace and gratitude.",
        "cards.quran.title": "Holy Quran",
        "cards.quran.description": "Read and reflect upon Allah's words.",
        "cards.dua_after_salah.title": "Dua after Salah",
        "cards.dua_after_salah.description": "Complete your prayer with blessed supplications.",
        "cards.rabbana.title": "Rabbana Duas",
        "cards.rabbana.description": "Powerful supplications from the Quran.",
        "cards.ruqiya.title": "Ruqiya",
        "cards.ruqiya.description": "Spiritual protection through Quranic verses.",
        "cards.tasbeeh.title": "Tasbeeh Counter",
        "cards.tasbeeh.description": "Track your daily dhikr digitally.",
    },
    ur: {
        "nav.home": "ہوم",
        "nav.azkar": "اذکار حب",
        "nav.quran": "قرآن حب",
        "nav.dua": "دعا حب",
        "nav.tutor": "قرآن ٹیوٹر",
        "nav.blogs": "بلاگز",
        "site.title": "ڈیلی اذکار",
        "site.tagline": "اسلامی ذکر و اذکار",
        "common.read_now": "ابھی پڑھیں",
        "common.start_counting": "گننا شروع کریں",
        "common.translation": "ترجمہ",
        "common.copy_arabic": "عربی کاپی کریں",
        "common.completed": "مکمل",
        "common.tap_to_count": "پڑھنے کے لیے دبائیں",
        "common.reset": "دوبارہ شروع کریں",
        "cards.morning.title": "صبح کے اذکار",
        "cards.morning.description": "اپنے دن کا آغاز بابرکت اذکار سے کریں۔",
        "cards.evening.title": "شام کے اذکار",
        "cards.evening.description": "اپنے دن کا اختتام سکون اور شکر کے ساتھ کریں۔",
        "cards.quran.title": "قرآن کریم",
        "cards.quran.description": "اللہ کے کلام کی تلاوت اور اس پر غور و فکر کریں۔",
        "cards.dua_after_salah.title": "نماز کے بعد کی دعائیں",
        "cards.dua_after_salah.description": "اپنی نماز کو بابرکت دعاؤں کے ساتھ مکمل کریں۔",
        "cards.rabbana.title": "ربنا دعائیں",
        "cards.rabbana.description": "قرآن پاک کی طاقتور دعائیں۔",
        "cards.ruqiya.title": "رقیہ شرعیہ",
        "cards.ruqiya.description": "قرآنی آیات کے ذریعے روحانی تحفظ۔",
        "cards.tasbeeh.title": "تسبیح کاؤنٹر",
        "cards.tasbeeh.description": "اپنے روزانہ کے ذکر کو ڈیجیٹل طور پر ٹریک کریں۔",
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    // We use window.location.pathname directly because useLocation might be affected by BaseRouter prefixes
    const isUrdu = window.location.pathname.startsWith("/ur");
    const lang: Language = isUrdu ? "ur" : "en";
    const direction = isUrdu ? "rtl" : "ltr";

    const t = (key: string) => {
        return translations[lang][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, direction, isUrdu, t }}>
            <div dir={direction} className={isUrdu ? "font-urdu" : ""}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
