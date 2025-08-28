import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppContainer from './AppContainer.tsx'
import { ThemeProvider } from './ThemeContext'
import { loadGtag, pageview } from './gtag'

// Initialize Google Analytics (if VITE_GA_ID is set)
loadGtag()
// initial pageview
pageview()

// SPA navigation tracking: hash changes, history API, and popstate
window.addEventListener('hashchange', () => pageview())
window.addEventListener('popstate', () => pageview())

;(function() {
  type HistoryStateMethod = (data: any, unused: string, url?: string | null) => void
  const wrap = (fnName: 'pushState' | 'replaceState') => {
    const orig = history[fnName] as HistoryStateMethod
    history[fnName] = function (data: any, unused: string, url?: string | null) {
      orig.apply(this, [data, unused, url])
      window.dispatchEvent(new Event('locationchange'))
    } as HistoryStateMethod
  }
  wrap('pushState')
  wrap('replaceState')
  window.addEventListener('locationchange', () => pageview())
})()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  </StrictMode>,
)
