# FILE 01 — 01-project-guardrails.md

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


