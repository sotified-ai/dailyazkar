# FILE 02 — 02-site-audit-and-blank-page-detection.md

### Purpose

Identify pages that may violate AdSense or SEO quality standards.

### Definition of Page States

* **Healthy**: ≥ 250 words, unique intent
* **Thin**: 80–249 words (needs improvement)
* **Blank / Risky**: < 80 words (noindex or fix)

### Audit Process

1. Crawl all public routes (ignore `/api`, `/admin`, static assets)
2. Extract rendered text from `<main>` or page root
3. Count visible words
4. Generate report only, no changes

### Output (JSON)

```json
{
  "url": "/morning-azkar",
  "wordCount": 62,
  "status": "NOINDEX_SUGGESTED",
  "recommendedAction": "AI_DRAFT_OR_REDIRECT"
}
```

### Safety Guarantee

* ❌ No pages deleted
* ❌ No meta tags injected yet
* ✅ Report‑only mode
