# Antigravity SEO Automation Plan for Daily Azkar

> This document is intentionally written as a **series of Markdown files**.
> You may split each section into its own `.md` file **or** give this entire document to Antigravity and instruct it to execute each phase in order.

---

## FILE 01 — `01-project-guardrails.md`

### Objective

Introduce SEO automation **without breaking the working site**. All actions must be reversible, auditable, and human-reviewed.

### Non‑Negotiable Rules

* ❌ No auto‑publishing AI content
* ❌ No destructive file edits
* ❌ No SEO changes in production without staging validation
* ✅ Dry‑run first, reports only
* ✅ Human approval required for content

### Architecture Constraints (must respect)

* Frontend: Vite + React (`client/`)
* Backend: Express (`server/`)
* No runtime dependency on SEO scripts
* SEO automation runs **outside request path**

### Success Criteria

* Google AdSense‑safe pages (no blank / thin pages indexed)
* Structured keyword roadmap
* Stable traffic growth
* Zero production regressions

---

## FILE 02 — `02-site-audit-and-blank-page-detection.md`

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

---

## FILE 03 — `03-keyword-discovery-and-prioritization.md`

### Purpose

Build a keyword map aligned with **real search intent** for Daily Azkar.

### Keyword Categories

* Informational: meaning of azkar, benefits
* Devotional: morning azkar, evening azkar
* Habit‑based: daily azkar list, azkar before sleep
* Long‑tail: dua for anxiety islam

### Priority Formula

```
priority = (searchVolume × 0.6) + (intentStrength × 0.3) − (difficulty × 0.1)
```

### Output Fields

```json
{
  "keyword": "morning azkar",
  "intent": "daily devotional",
  "priority": 0.87,
  "recommendedPage": "/morning-azkar"
}
```

### Rules

* One primary keyword per page
* Avoid cannibalization
* Prefer intent over raw volume

---

## FILE 04 — `04-noindex-and-adsense-protection.md`

### Purpose

Protect AdSense and SEO reputation **without deleting content**.

### Strategy

* Thin pages → improve
* Blank pages → temporary `noindex`
* Experimental pages → keep private

### Implementation (Safe)

* Use server middleware
* Inject `X‑Robots‑Tag: noindex` header
* Driven by JSON config file

### Example Config

```json
{
  "/azkar-test": true,
  "/draft-page": true
}
```

### Rollback

* Delete JSON file
* Restart server
* No code rollback required

---

## FILE 05 — `05-ai-assisted-content-drafting.md`

### Purpose

Use AI **only as a drafting assistant**, never as a publisher.

### When AI Is Allowed

* Page exists but is thin
* Keyword has validated intent
* Human review scheduled

### AI Output Requirements

* 450–700 words
* Respectful Islamic tone
* No medical / legal claims
* Clean HTML

### AI Output Schema

```json
{
  "title": "",
  "meta_description": "",
  "slug": "",
  "body_html": "",
  "faq": []
}
```

### Human Review Checklist

* Theological neutrality
* Clarity and usefulness
* Duplicate content check

---

## FILE 06 — `06-on-page-seo-optimization.md`

### Scope

Optimize only **approved pages**.

### Allowed Optimizations

* Title tags
* Meta descriptions
* Internal links
* Schema (Article / FAQ)

### Forbidden

* Keyword stuffing
* Hidden text
* Auto‑generated backlinks

### Internal Linking Rule

* Link only to semantically related Azkar pages
* Max 5 links per page

---

## FILE 07 — `07-release-and-monitoring.md`

### Release Flow

1. Apply changes in staging
2. Lighthouse + manual QA
3. Merge to main
4. Deploy

### Monitoring Metrics

* Indexed pages (GSC)
* AdSense warnings
* Average time on page
* Organic impressions

### Failure Protocol

* Any warning → revert immediately
* Re‑audit and re‑draft

---

## FILE 08 — `08-antigravity-execution-instructions.md`

### Instructions for Antigravity

* Execute files in numeric order
* Never skip safety steps
* Produce reports for every phase
* Ask for approval before any content publish

### Final Objective

A stable, AdSense‑safe, SEO‑optimized Daily Azkar site that grows traffic **without automation abuse**.

---

## End of MD Series

> This series is intentionally conservative. Speed comes **after** safety and trust.
