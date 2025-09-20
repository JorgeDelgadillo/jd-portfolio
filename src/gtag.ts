// Lightweight gtag loader + SPA pageview helper
export const GA_ID = (import.meta.env.VITE_GA_ID as string) || undefined;

declare global {
  interface Window { dataLayer?: any[]; gtag?: (...args: any[]) => void; }
}

export function loadGtag() {
  if (!GA_ID) { console.warn('[GA] Missing VITE_GA_ID; GA disabled'); return; }
  // avoid double-inserting
  if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.addEventListener('load', () => console.debug('[GA] gtag.js loaded', GA_ID));
  script.addEventListener('error', (e) => console.warn('[GA] gtag.js failed to load', e));
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  const origPush = window.dataLayer.push ? window.dataLayer.push.bind(window.dataLayer) : undefined as any;
  // minimal call logger to validate dispatch
  window.gtag = function() {
    try { console.debug('[GA] gtag call', arguments); } catch {}
    if (window.dataLayer && origPush) { return origPush(arguments as any); }
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore - arguments is array-like
    return (window.dataLayer as any).push(arguments);
  };
  window.gtag('js', new Date());
  // Disable automatic page_view so SPA route changes can be controlled manually
  window.gtag('config', GA_ID, { send_page_view: false });
  console.debug('[GA] config sent', { GA_ID, send_page_view: false });
}

export function pageview(path = (location.pathname || '/') + (location.search || '') + (location.hash || '')) {
  if (!GA_ID) { console.warn('[GA] pageview skipped: missing GA_ID'); return; }
  if (!window.gtag) { console.warn('[GA] pageview skipped: gtag not ready', { path }); return; }
  const payload = { page_path: path, page_location: location.href, page_title: document.title };
  console.debug('[GA] pageview', payload);
  // GA4 page_view event
  // @ts-ignore - gtag types
  window.gtag('event', 'page_view', payload);
}
