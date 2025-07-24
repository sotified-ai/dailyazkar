export interface AzkarItem {
  id: number;
  title: string;
  titleArabic: string;
  content: string;
  translation: string;
  reference?: string;
  repetitions: number;
  imageUrl?: string;
}

export interface AzkarCategory {
  id: string;
  name: string;
  nameArabic: string;
  description: string;
  icon: string;
  items: AzkarItem[];
}

export const azkarData: AzkarCategory[] = [
  {
    id: "morning",
    name: "Morning Azkar",
    nameArabic: "أذكار الصباح",
    description: "Start your day with blessed remembrance and seek Allah's protection",
    icon: "fas fa-sun",
    items: [
      {
        id: 1,
        title: "Ayat al-Kursi",
        titleArabic: "آية الكرسي",
        content: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
        reference: "Quran 2:255",
        repetitions: 1,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
      },
      {
        id: 2,
        title: "Surah Al-Ikhlas",
        titleArabic: "سورة الإخلاص",
        content: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        translation: "Say: He is Allah, the One! Allah, the Eternal, Absolute; He begets not, nor is He begotten; And there is none like unto Him.",
        reference: "Quran 112:1-4",
        repetitions: 3,
        imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa"
      }
    ]
  },
  {
    id: "evening",
    name: "Evening Azkar",
    nameArabic: "أذكار المساء",
    description: "End your day with gratitude and seek Allah's forgiveness",
    icon: "fas fa-moon",
    items: [
      {
        id: 3,
        title: "Seeking Allah's Forgiveness",
        titleArabic: "الاستغفار",
        content: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
        translation: "I seek forgiveness from Allah the Mighty, whom there is none worthy of worship except Him, the Living, the Eternal, and I repent to Him.",
        reference: "Abu Dawud",
        repetitions: 3,
        imageUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869"
      }
    ]
  }
];

// Gallery images are now handled by the image-data.ts file with proper folder structure
