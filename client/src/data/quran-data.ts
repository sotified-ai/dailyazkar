export interface QuranSurah {
  number: number;
  name: string;
  nameArabic: string;
  verses: number;
  type: "meccan" | "medinan";
}

export const quranSurahs: QuranSurah[] = [
  { number: 1, name: "Al-Fatiha", nameArabic: "الفاتحة", verses: 7, type: "meccan" },
  { number: 2, name: "Al-Baqarah", nameArabic: "البقرة", verses: 286, type: "medinan" },
  { number: 3, name: "Al-Imran", nameArabic: "آل عمران", verses: 200, type: "medinan" },
  { number: 4, name: "An-Nisa", nameArabic: "النساء", verses: 176, type: "medinan" },
  { number: 5, name: "Al-Ma'idah", nameArabic: "المائدة", verses: 120, type: "medinan" },
  { number: 6, name: "Al-An'am", nameArabic: "الأنعام", verses: 165, type: "meccan" },
  { number: 7, name: "Al-A'raf", nameArabic: "الأعراف", verses: 206, type: "meccan" },
  { number: 8, name: "Al-Anfal", nameArabic: "الأنفال", verses: 75, type: "medinan" },
  { number: 9, name: "At-Tawbah", nameArabic: "التوبة", verses: 129, type: "medinan" },
  { number: 10, name: "Yunus", nameArabic: "يونس", verses: 109, type: "meccan" },
  { number: 11, name: "Hud", nameArabic: "هود", verses: 123, type: "meccan" },
  { number: 12, name: "Yusuf", nameArabic: "يوسف", verses: 111, type: "meccan" },
  { number: 13, name: "Ar-Ra'd", nameArabic: "الرعد", verses: 43, type: "medinan" },
  { number: 14, name: "Ibrahim", nameArabic: "إبراهيم", verses: 52, type: "meccan" },
  { number: 15, name: "Al-Hijr", nameArabic: "الحجر", verses: 99, type: "meccan" },
];
