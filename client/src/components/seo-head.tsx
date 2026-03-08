import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  structuredData?: any;
  robots?: string;
}

export function SEOHead({ title, description, keywords, canonical, ogType = 'website', structuredData, robots }: SEOHeadProps) {
  useEffect(() => {
    // ── Title ────────────────────────────────────────────────────
    document.title = title;

    // ── Meta description ────────────────────────────────────────
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // ── Meta keywords ───────────────────────────────────────────
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // ── Robots ───────────────────────────────────────────────────
    if (robots) {
      let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', robots);
    }

    // ── Canonical ────────────────────────────────────────────────
    // Always update — a static <link rel="canonical"> exists in index.html for root.
    // For inner pages, JS updates it to the correct page URL.
    const canonicalHref = canonical || `https://dailyazkar.site${window.location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // ── Open Graph ───────────────────────────────────────────────
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta') as HTMLMetaElement;
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:type', ogType);
    // Use the canonical URL (not window.location.href which may vary)
    updateOGTag('og:url', canonicalHref);
    updateOGTag('og:site_name', 'Daily Azkar');

    // ── Twitter Card ─────────────────────────────────────────────
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta') as HTMLMetaElement;
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);

    // ── Structured data ─────────────────────────────────────────
    if (structuredData) {
      // Use a data-attribute to avoid collision with the WebSite schema in index.html
      let script = document.querySelector('script[data-seo="page"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script') as HTMLScriptElement;
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', 'page');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogType, structuredData, robots]);

  return null;
}