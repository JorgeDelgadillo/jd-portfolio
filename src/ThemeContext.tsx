import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const STORAGE_KEY = 'theme-preference'; // values: 'system' | 'dark' | 'light'

  const getInitialPreference = (): 'system' | 'dark' | 'light' => {
    if (typeof window === 'undefined') return 'system';

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light' || stored === 'system') return stored as 'system' | 'dark' | 'light';
    } catch (e) {
      // localStorage may be unavailable in some environments
    }

    return 'system';
  };

  const [preference, setPreference] = useState<'system' | 'dark' | 'light'>(getInitialPreference);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    if (getInitialPreference() === 'system' && window.matchMedia)
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    return getInitialPreference() === 'dark';
  });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      setDarkMode(preference === 'dark');
      return;
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    if (preference === 'system') {
      setDarkMode(mq.matches);

      const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

      if (mq.addEventListener) mq.addEventListener('change', handleChange as EventListener);
      else mq.addListener(handleChange as (e: MediaQueryListEvent) => void);

      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', handleChange as EventListener);
        else mq.removeListener(handleChange as (e: MediaQueryListEvent) => void);
      };
    }

    setDarkMode(preference === 'dark');
    return undefined;
  }, [preference]);

  const toggleDarkMode = () => {
    setPreference((prev) => {
      if (prev === 'system') {
        const systemDark = typeof window !== 'undefined' && window.matchMedia
          ? window.matchMedia('(prefers-color-scheme: dark)').matches
          : false;
        const next = systemDark ? 'light' : 'dark';
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {
          // ignore
        }
        return next;
      }

      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
