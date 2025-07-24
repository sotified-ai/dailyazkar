// Image data based on the original JavaScript folder structure
export const AZKAR_CATEGORIES = {
  MANZIL: 'manzil',
  SUBHA: 'subha', 
  SHAM: 'sham',
  QURANIDUA: 'quranidua'
} as const;

export const IMAGE_COUNTS = {
  [AZKAR_CATEGORIES.MANZIL]: 13,
  [AZKAR_CATEGORIES.SUBHA]: 7,
  [AZKAR_CATEGORIES.SHAM]: 10,
  [AZKAR_CATEGORIES.QURANIDUA]: 8
} as const;

export const CATEGORY_LABELS = {
  [AZKAR_CATEGORIES.MANZIL]: 'Manzil',
  [AZKAR_CATEGORIES.SUBHA]: 'Morning Azkar',
  [AZKAR_CATEGORIES.SHAM]: 'Evening Azkar',
  [AZKAR_CATEGORIES.QURANIDUA]: 'Quran Duas'
} as const;

export const CATEGORY_DESCRIPTIONS = {
  [AZKAR_CATEGORIES.MANZIL]: 'Protective verses and prayers',
  [AZKAR_CATEGORIES.SUBHA]: 'Morning remembrance and supplications',
  [AZKAR_CATEGORIES.SHAM]: 'Evening prayers and dhikr',
  [AZKAR_CATEGORIES.QURANIDUA]: 'Quranic supplications and verses'
} as const;

export function getImageFilenames(category: keyof typeof IMAGE_COUNTS): string[] {
  const count = IMAGE_COUNTS[category] || 0;
  return Array.from({ length: count }, (_, i) => `image-${i + 1}.jpg`);
}

export function getImagePath(category: keyof typeof IMAGE_COUNTS, filename: string): string {
  return `/azkar/${category}/${filename}`;
}

export function getAllImages() {
  const allImages: Array<{
    id: string;
    category: keyof typeof IMAGE_COUNTS;
    filename: string;
    path: string;
    title: string;
    description: string;
  }> = [];

  Object.keys(IMAGE_COUNTS).forEach((category) => {
    const categoryKey = category as keyof typeof IMAGE_COUNTS;
    const filenames = getImageFilenames(categoryKey);
    
    filenames.forEach((filename, index) => {
      allImages.push({
        id: `${category}-${index + 1}`,
        category: categoryKey,
        filename,
        path: getImagePath(categoryKey, filename),
        title: `${CATEGORY_LABELS[categoryKey]} ${index + 1}`,
        description: CATEGORY_DESCRIPTIONS[categoryKey]
      });
    });
  });

  return allImages;
}