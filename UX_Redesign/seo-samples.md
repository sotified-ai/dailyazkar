# SEO & Schema Recommendations

## Canonical & Redirection Rules
- 301 Map: `/online-quran-tutor` -> `/tutor`
- Self-referencing canonicals implemented on all details: `<link rel="canonical" href="https://site.com/hub/page" />`

## Page Type Schema Selection
- Main Hub Index: `CollectionPage`
- Surah / Azkar Detail: `Article` + `Chapter`
- Tutor Profile: `Course` + `ProfilePage`
- FAQ sections: `FAQPage`
- Blogs: `BlogPosting`

## Sample Meta Tags (Surah Al-Fatiha)
```html
<title>Surah Al-Fatiha - Read Quran Online | Daily Azkar</title>
<meta name="description" content="Read and listen to Surah Al-Fatiha with authentic English and Urdu translation.">
<meta name="keywords" content="surah al-fatiha, quran chapter 1, opening surah, meccan">
```

## Sample JSON-LD (WebPage + Article)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Surah Al-Fatiha",
  "description": "Read and listen to Surah Al-Fatiha with authentic translations.",
  "inLanguage": ["ar", "en", "ur"],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://site.com/quran/surahs/1"
  }
}
```
