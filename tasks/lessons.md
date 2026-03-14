# SEO Improvement Log – DailyAzkar.site

---

Date: 2026-03-14
Issue: High-value Keyword Gap identified (vs duaandazkar.com)
Root Cause: Competitor is ranking for high-volume terms like "morning dua" (2400) which were not yet prioritized.
Rule: Regularly conduct keyword gap analysis and create high-quality pillar pages for top missing keywords. Specifically, use "morning dua", "dua after prayer", and "dua after waking up" as primary/secondary keywords in relevant sections.
Status: Added missing keywords to `tasks/todo.md`. Next step: Create `/morning-dua` pillar page.

---

Date: 2026-03-05
Issue: Primary keyword missing from first 100 words
Root Cause: Draft started with generic introduction
Rule: Always verify keyword placement before expanding body content. Enforce keyword presence in titles, H2, and first 100 words.
Status: Preventative rule added

---

Date: 2026-03-05
Issue: Urdu page missing hreflang
Root Cause: Template not updated for multilingual
Rule: No page goes live without hreflang validation checklist
Status: Added to QA checklist

---

Date: 2026-03-05
Issue: Meta description exceeded 160 characters
Root Cause: No character count validation
Rule: Enforce 140–160 character validation before publish
Status: Added to checklist

---

## AI Instructions for Keyword Optimization (Rulebook)

1. **Primary Keyword Rules**:
    - Include primary keyword in Title, H1, first 100 words, and at least one H2.
    - Title should be 50-60 characters.
    - Meta description should be 140-160 characters with CTA.

2. **Keyword Placement**:
    - Do not keyword stuff. Use natural variations.
    - Sprinkle semantic keywords (LSI) in paragraph text, FAQs, and image alt tags.

3. **Internal Linking Strategy**:
    - Always link between related pages:
        - Morning Azkar -> After Fajr Dua -> Evening Azkar -> Protection Duas.
    - Use descriptive keywords in anchor text.

4. **Required Missing Keywords (High Priority)**:
    - Primary: morning dua, morning azkar, dua after prayer, dua after waking up, dua after namaz.
    - Secondary: after fajr dua, muslim morning prayer, morning duas, dua for protection from evil.


| Priority | Category | URL | Issue | Recommended Fix | Owner | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| High | Strategy | /en/morning-dua | Missing Pillar Page | Create comprehensive page for "morning dua" | Content | Open |
| High | Technical | All pages | Missing hreflang implementation | Add correct hreflang tags for en/ur/ar versions | Dev | Open |
| High | Technical | All pages | Missing canonical tags | Add self-referencing canonical tags | Dev | Open |
| High | On-Page | /en/morning-azkar| Keyword not in first 100 words | Revise intro to include "morning dua" and "morning azkar" naturally | Content | Open |
| High | On-Page | /en/evening-azkar| Thin content under 800 words | Expand with FAQs and authentic references | Content | Open |
| High | UX | RTL pages | Improper RTL rendering | Add dir="rtl" and verify CSS alignment | Dev | Open |
| Medium | On-Page | Multiple pages | Missing internal links | Add 2–4 contextual internal links per page | Content | Open |
| Medium | Media | All images | Missing alt text | Add descriptive language-specific alt attributes | Content | Open |
| Medium | Content | /en/daily-azkar-pdf| Weak transactional CTA | Add clear download CTA above fold | Content | Open |
| Low | Structured Data| Core pages | Missing schema markup | Add WebPage schema with inLanguage property | Dev | Open |
| Low | SEO Strategy | Sitewide | Keyword cannibalization risk| Run site query and consolidate overlapping pages | SEO | Open |
| Low | Sitemap | All pages | Incomplete sitemap entries | Ensure all language variants included in XML sitemap | Dev | Open |
