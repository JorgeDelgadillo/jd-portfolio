import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppContainer from './AppContainer.tsx'
import { ThemeProvider } from './ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  </StrictMode>,
)
