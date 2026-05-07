import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { TerminalTheme } from './themes/types'
import { themes } from './themes'

interface ThemeContextType {
  theme: TerminalTheme
  setTheme: (themeName: string) => void
  toggleTheme: () => void
  availableThemes: string[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<TerminalTheme>(() => {
    const saved = localStorage.getItem('terminal-theme')
    if (saved && themes[saved]) {
      return themes[saved]
    }
    return themes['catppuccin-dark']
  })

  const [availableThemes] = useState(() => Object.keys(themes))

  useEffect(() => {
    localStorage.setItem('terminal-theme', theme.name)
    document.documentElement.style.setProperty('--bg-color', theme.colors.background)
    document.documentElement.style.setProperty('--fg-color', theme.colors.foreground)
    document.documentElement.style.setProperty('--cursor-color', theme.colors.cursor)
  }, [theme])

  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setThemeState(themes[themeName])
    }
  }

  const toggleTheme = () => {
    const currentVariant = theme.variant
    const targetVariant = currentVariant === 'dark' ? 'light' : 'dark'
    const baseName = theme.name.split('-').slice(0, -1).join('-')
    const alternateTheme = themes[`${baseName}-${targetVariant}`]
    if (alternateTheme) {
      setThemeState(alternateTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
