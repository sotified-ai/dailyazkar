# FILE 04 — 04-noindex-and-adsense-protection.md

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
