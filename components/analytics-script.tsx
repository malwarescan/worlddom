"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function AnalyticsScript() {
  // Function to initialize Google Analytics 4
  useEffect(() => {
    // This would normally be in a useEffect, but we're using Script components instead
  }, [])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EXAMPLE123456" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EXAMPLE123456');
          
          // Custom event tracking for blog posts
          document.addEventListener('DOMContentLoaded', function() {
            // Track scroll depth
            let scrollDepths = [25, 50, 75, 100];
            let scrollDepthTriggered = {};
            
            window.addEventListener('scroll', function() {
              let scrollPercentage = 100 * window.scrollY / (document.body.offsetHeight - window.innerHeight);
              
              scrollDepths.forEach(function(depth) {
                if (scrollPercentage >= depth && !scrollDepthTriggered[depth]) {
                  scrollDepthTriggered[depth] = true;
                  gtag('event', 'scroll_depth', {
                    'depth': depth,
                    'page': window.location.pathname
                  });
                }
              });
            });
            
            // Track CTA clicks
            document.querySelectorAll('a[href*="utm_"]').forEach(function(link) {
              link.addEventListener('click', function() {
                gtag('event', 'cta_click', {
                  'cta_text': this.innerText.trim(),
                  'cta_url': this.href
                });
              });
            });
          });
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "example123456");
        `}
      </Script>

      {/* Meta Pixel (Facebook) */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '123456789012345');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  )
}

