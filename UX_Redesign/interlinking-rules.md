# Interlinking Rules & UX Copy Guidelines

## Rules
1. **Vertical Hierarchy:** Every detail page must feature clear Schema-integrated Breadcrumbs: `Home > Hub > Index > Page`.
2. **Contextual Inline Linking:** Automatically link core religious terms inside content (e.g., "Manzil", "Fajr", "Morning Azkar") to their direct hub detail pages exactly once per article.
3. **Sequential Navigation:** Surahs, Duas, and Azkar must contain `< Previous` and `Next >` bottom links to keep the user reading.
4. **Hub Cross-Pollination:** Inject a "Related Hub Content" horizontal carousel at the bottom of all Detail and Blog pages correlating tags (e.g., A blog about "Prayer" links directly to "Dua After Salah").

## UX Copy Guidelines
- **Order of Text Elements:** (1) Arabic Content, (2) Transliteration, (3) English/Urdu Translations.
- **Arabic Rendering:** Must feature explicit `dir="rtl"` and `lang="ar"`, ensuring proper fallback for non-RTL environments. Diacritics must not be clipped by tight line-heights.
- **Audio Players:** Must support progressive download/streaming, variable speed control (1x, 1.25x), and play/pause toggles. Incorporate `aria-label="Play recitation"`.
