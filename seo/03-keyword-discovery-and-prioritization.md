# FILE 03 — 03-keyword-discovery-and-prioritization.md

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
