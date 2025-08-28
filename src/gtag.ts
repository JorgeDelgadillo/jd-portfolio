// Lightweight gtag loader + SPA pageview helper
export const GA_ID = (import.meta.env.VITE_GA_ID as string) || undefined;

declare global {
  interface Window { dataLayer?: any[]; gtag?: (...args: any[]) => void; }
}

export function loadGtag() {
  if (!GA_ID) return;
  // avoid double-inserting
  if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { window.dataLayer!.push(arguments); };
  window.gtag('js', new Date());
  // Disable automatic page_view so SPA route changes can be controlled manually
  window.gtag('config', GA_ID, { send_page_view: false });
}

export function pageview(path = (location.pathname || '/') + (location.search || '') + (location.hash || '')) {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path });
}
