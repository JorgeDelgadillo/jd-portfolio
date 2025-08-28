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
  const wrap = (fnName: 'pushState' | 'replaceState') => {
    const orig = (history as any)[fnName] as Function
    ;(history as any)[fnName] = function (...args: any[]) {
      const result = orig.apply(this, args)
      window.dispatchEvent(new Event('locationchange'))
      return result
    }
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
