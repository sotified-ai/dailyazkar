# QA Checklist & Acceptance Criteria

## Acceptance Criteria
- [ ] **Navigational Depth:** Maximum depth to reach any detail page from Home is 3 clicks.
- [ ] **No Orphans:** Every detail page features at least 2 internal contextual or sidebar links.
- [ ] **RTL Support:** Arabic displays perfectly strictly Right-to-Left regardless of OS language settings. Line height >= 2.5 for diacritical marks.
- [ ] **Accessible Audio:** Audio player has active `role="region"` and `aria-label` attributes. Supports Play/Pause + Speed controls.
- [ ] **Global Hub Access:** Navigation bar explicitly displays: Azkar Hub, Quran Hub, Dua Hub, Azkar Quran Tutor, Blogs.
- [ ] **Performance Target:** Mobile PageSpeed score > 85.

## Implementation Priorities (MVP)
1. **Structural Taxonomy:** Build empty index wrappers for hubs and map current isolated routes inside them.
2. **Breadcrumbs & Interlinking:** Add systemic Breadcrumbs and Prev/Next buttons across Azkar/Surahs.
3. **Audio Refactor:** Upgrade audio controls on detail pages to meet WCAG.
4. **Content Migration:** Apply 301 redirects from old URLs safely.
