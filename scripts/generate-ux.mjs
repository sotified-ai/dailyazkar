import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const baseDir = path.resolve('d:/Projects/AzkarDaily/UX_Redesign');
const templatesDir = path.join(baseDir, 'templates');

if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
if (!fs.existsSync(templatesDir)) fs.mkdirSync(templatesDir, { recursive: true });

// 1. Sitemap
const sitemap = `# Site Map: Daily Azkar Hub Model

- **Home** (/)
  - **Azkar Hub** (/azkar)
    - Morning Azkar (/azkar/morning)
    - Evening Azkar (/azkar/evening)
    - Ramadan Azkar (/azkar/ramadan)
  - **Quran Hub** (/quran)
    - Surah Index (/quran/surahs)
      - Surah Al-Fatiha Detail (/quran/surahs/1) ... 114 Surahs
    - Manzil (/quran/manzil)
    - Ruqiya (/quran/ruqiya)
  - **Dua Hub** (/dua)
    - Dua after Salah (/dua/after-salah)
    - Rabbana Duas (/dua/rabbana)
  - **Azkar Quran Tutor** (/tutor)
    - Tutor Landing & Booking (/tutor)
    - Tutor Profile & Courses (/tutor/profile/:id)
  - **Blogs** (/blog)
    - Blog List Index (/blog)
    - Blog Detail Post (/blog/:slug)
`;
fs.writeFileSync(path.join(baseDir, 'sitemap.md'), sitemap);

// 2. Templates
const templateHubLanding = `# Hub Landing Page Template
**Fields:**
- Meta Title & Description
- Hero Section (Title, Subtitle, CTA)
- Hub Image / Iconography
- Sub-category Cards (e.g., Morning, Evening, Ramadan)
- Featured Content / Highlighted Item
- Bottom CTA to another hub
`;
fs.writeFileSync(path.join(templatesDir, 'hub-landing.md'), templateHubLanding);

const templateIndex = `# Index Page Template
**Fields:**
- Breadcrumbs
- H1 Title
- Intro Text (SEO friendly, ~100 words)
- Filters & Category Tags
- List of Content Cards (Title, Excerpt, Icons, Read Time)
- Pagination / Infinite Scroll
- Related Hubs Links
`;
fs.writeFileSync(path.join(templatesDir, 'index.md'), templateIndex);

const templateDetail = `# Detail Page Template (Azkar/Dua/Surah)
**Fields:**
- Breadcrumbs
- H1 Title + Meta
- Source/Authority Tag (e.g., Sahih Bukhari, Quran 2:255)
- Contextual Intro
- Content Block loop (per verse/dua):
  - Arabic Text (RTL direction enforced, proper Diacritics CSS)
  - Transliteration (optional toggle)
  - Translation (En/Ur toggles)
  - Audio Player (Play/Pause, Speed Control, Streaming/Progressive fallback)
- Inline Contextual Cross-links
- Next/Previous Item Buttons
- Bottom Related Items Sidebar/Section
`;
fs.writeFileSync(path.join(templatesDir, 'detail.md'), templateDetail);

const templateTutorProfile = `# Tutor Profile Template
**Fields:**
- Profile Head (Name, Image, Verification Badge)
- Qualifications & Educational Background
- Introduction Video/Audio Feature
- Course Outlines & Syllabi
- Student Reviews & Testimonials
- Available Schedules & Calendar Integration
- Primary Action: CTA (Book Trial / Enroll)
`;
fs.writeFileSync(path.join(templatesDir, 'tutor-profile.md'), templateTutorProfile);

const templateBlogList = `# Blog List Template
**Fields:**
- Hero Section (Latest/Featured Post)
- Category Filter Navigation
- Feed Grid (Image, Title, Excerpt, Date, Author, Read Time)
- Pagination Loop
- Newsletter Subscribe CTA
`;
fs.writeFileSync(path.join(templatesDir, 'blog-list.md'), templateBlogList);

const templateBlogDetail = `# Blog Detail Template
**Fields:**
- Breadcrumbs
- H1 Title
- Post Meta (Author, Date, Read Time, Tags)
- Featured Image
- Content Area (Rich Text + specific RTL support for embedded verses)
- Social Share Links
- Author Bio Box
- Suggested "Read Next" Articles
`;
fs.writeFileSync(path.join(templatesDir, 'blog-detail.md'), templateBlogDetail);

// 3. Content Mapping CSV
const csv = `Page URL,Hub,Parent Index,Tags,Primary Keywords,Recommended Meta Title,Recommended Meta Description,Audio File,Translation,Read Time
/azkar/morning,Azkar Hub,/azkar,"morning,dhikr,protection","morning azkar, dhikr, protection duas","Morning Azkar - Authentic Supplications","Read morning Azkar for peace and protection.",Yes,Yes,10 min
/azkar/ramadan,Azkar Hub,/azkar,"ramadan,fasting,tarawih","ramadan azkar, fasting dua","Ramadan Azkar & Duas","Comprehensive guide to Ramadan duas.",Yes,Yes,15 min
/dua/after-salah,Dua Hub,/dua,"salah,namaz,tasbeeh","dua after salah, after namaz dua","Authentic Duas After Salah","Duas and adhkar after mandatory prayers.",Yes,Yes,5 min
/dua/rabbana,Dua Hub,/dua,"quran,rabbana,supplication","rabbana duas, quran duas","40 Rabbana Duas from the Quran","Reflect on the beautiful Rabbana duas from Quran.",Yes,Yes,12 min
/quran/surahs/1,Quran Hub,/quran,makkah | fatiha | opening,"surah al-fatiha, quran chapter 1","Surah Al-Fatiha - Read Quran Online","Read and listen to Surah Al-Fatiha with translation.",Yes,Yes,2 min
/quran/manzil,Quran Hub,/quran,"protection,spiritual,healing","manzil dua, ruqyah","Manzil - Powerful Verses for Protection","Recite Manzil for spiritual healing.",Yes,Yes,20 min
/quran/ruqiya,Quran Hub,/quran,"healing,evil eye,sihr","ruqiya, ruqyah shariah","Ruqiya Shariah Guide","Complete Ruqiya Shariah for evil eye.",Yes,Yes,25 min
/tutor,Azkar Quran Tutor,/tutor,"learning,tajweed,courses","online quran tutor, learn tajweed","Azkar Quran Tutor - Learn Online","Find expert Quran tutors online for tajweed.",No,No,3 min`;
fs.writeFileSync(path.join(baseDir, 'content-mapping.csv'), csv);

// 4. Interlinking Rules
const interlinks = `# Interlinking Rules & UX Copy Guidelines

## Rules
1. **Vertical Hierarchy:** Every detail page must feature clear Schema-integrated Breadcrumbs: \`Home > Hub > Index > Page\`.
2. **Contextual Inline Linking:** Automatically link core religious terms inside content (e.g., "Manzil", "Fajr", "Morning Azkar") to their direct hub detail pages exactly once per article.
3. **Sequential Navigation:** Surahs, Duas, and Azkar must contain \`< Previous\` and \`Next >\` bottom links to keep the user reading.
4. **Hub Cross-Pollination:** Inject a "Related Hub Content" horizontal carousel at the bottom of all Detail and Blog pages correlating tags (e.g., A blog about "Prayer" links directly to "Dua After Salah").

## UX Copy Guidelines
- **Order of Text Elements:** (1) Arabic Content, (2) Transliteration, (3) English/Urdu Translations.
- **Arabic Rendering:** Must feature explicit \`dir="rtl"\` and \`lang="ar"\`, ensuring proper fallback for non-RTL environments. Diacritics must not be clipped by tight line-heights.
- **Audio Players:** Must support progressive download/streaming, variable speed control (1x, 1.25x), and play/pause toggles. Incorporate \`aria-label="Play recitation"\`.
`;
fs.writeFileSync(path.join(baseDir, 'interlinking-rules.md'), interlinks);

// 5. SEO Samples
const seo = `# SEO & Schema Recommendations

## Canonical & Redirection Rules
- 301 Map: \`/online-quran-tutor\` -> \`/tutor\`
- Self-referencing canonicals implemented on all details: \`<link rel="canonical" href="https://site.com/hub/page" />\`

## Page Type Schema Selection
- Main Hub Index: \`CollectionPage\`
- Surah / Azkar Detail: \`Article\` + \`Chapter\`
- Tutor Profile: \`Course\` + \`ProfilePage\`
- FAQ sections: \`FAQPage\`
- Blogs: \`BlogPosting\`

## Sample Meta Tags (Surah Al-Fatiha)
\`\`\`html
<title>Surah Al-Fatiha - Read Quran Online | Daily Azkar</title>
<meta name="description" content="Read and listen to Surah Al-Fatiha with authentic English and Urdu translation.">
<meta name="keywords" content="surah al-fatiha, quran chapter 1, opening surah, meccan">
\`\`\`

## Sample JSON-LD (WebPage + Article)
\`\`\`json
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
\`\`\`
`;
fs.writeFileSync(path.join(baseDir, 'seo-samples.md'), seo);

// 6. QA Checklist
const qa = `# QA Checklist & Acceptance Criteria

## Acceptance Criteria
- [ ] **Navigational Depth:** Maximum depth to reach any detail page from Home is 3 clicks.
- [ ] **No Orphans:** Every detail page features at least 2 internal contextual or sidebar links.
- [ ] **RTL Support:** Arabic displays perfectly strictly Right-to-Left regardless of OS language settings. Line height >= 2.5 for diacritical marks.
- [ ] **Accessible Audio:** Audio player has active \`role="region"\` and \`aria-label\` attributes. Supports Play/Pause + Speed controls.
- [ ] **Global Hub Access:** Navigation bar explicitly displays: Azkar Hub, Quran Hub, Dua Hub, Azkar Quran Tutor, Blogs.
- [ ] **Performance Target:** Mobile PageSpeed score > 85.

## Implementation Priorities (MVP)
1. **Structural Taxonomy:** Build empty index wrappers for hubs and map current isolated routes inside them.
2. **Breadcrumbs & Interlinking:** Add systemic Breadcrumbs and Prev/Next buttons across Azkar/Surahs.
3. **Audio Refactor:** Upgrade audio controls on detail pages to meet WCAG.
4. **Content Migration:** Apply 301 redirects from old URLs safely.
`;
fs.writeFileSync(path.join(baseDir, 'qa-checklist.md'), qa);

console.log("Files written successfully.");

// ZIP them up using powershell
try {
    if (fs.existsSync('d:/Projects/AzkarDaily/UX_Redesign.zip')) {
        fs.unlinkSync('d:/Projects/AzkarDaily/UX_Redesign.zip');
    }
    execSync('powershell.exe -Command "Compress-Archive -Path d:/Projects/AzkarDaily/UX_Redesign/* -DestinationPath d:/Projects/AzkarDaily/UX_Redesign.zip -Force"', { stdio: 'inherit' });
    console.log("Zip created at d:/Projects/AzkarDaily/UX_Redesign.zip");
} catch (e) {
    console.error("Zipping failed:", e);
}
