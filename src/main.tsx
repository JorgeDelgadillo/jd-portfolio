import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppContainer from './AppContainer.tsx'
import { ThemeProvider } from './ThemeContext'
import { loadGtag, pageview } from './gtag'

// Initialize Google Analytics (if VITE_GA_ID is set)
loadGtag()
console.debug('[GA] loadGtag called', { hasId: Boolean(import.meta.env.VITE_GA_ID) })
// initial pageview
{
  const initialPath = (location.pathname || '/') + (location.search || '') + (location.hash || '')
  console.debug('[GA] initial pageview dispatch', { path: initialPath })
  pageview(initialPath)
}

// SPA navigation tracking: hash changes, history API, and popstate
window.addEventListener('hashchange', () => {
  const p = (location.pathname || '/') + (location.search || '') + (location.hash || '')
  console.debug('[GA] hashchange -> pageview', { path: p })
  pageview(p)
})
window.addEventListener('popstate', () => {
  const p = (location.pathname || '/') + (location.search || '') + (location.hash || '')
  console.debug('[GA] popstate -> pageview', { path: p })
  pageview(p)
})

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
  window.addEventListener('locationchange', () => {
    const p = (location.pathname || '/') + (location.search || '') + (location.hash || '')
    console.debug('[GA] locationchange -> pageview', { path: p })
    pageview(p)
  })
})()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  </StrictMode>,
)
