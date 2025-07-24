import { useEffect } from 'react';

interface AdSenseProps {
  adSlot?: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  adClient?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function AdSense({ 
  adSlot = 'YOUR_AD_SLOT_ID', 
  adFormat = 'auto',
  adClient = 'ca-pub-1780067953006047',
  style = { display: 'block' },
  className = ''
}: AdSenseProps) {
  useEffect(() => {
    // Load AdSense script if not already loaded
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
    
    // Initialize AdSense after component mounts
    const timer = setTimeout(() => {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [adClient]);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}

// Google Tag Manager component
export function GoogleTagManager() {
  useEffect(() => {
    // Google Tag Manager script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PHH33TBB');
    `;
    document.head.appendChild(gtmScript);
    
    // Noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHH33TBB"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);
  }, []);

  return null;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}