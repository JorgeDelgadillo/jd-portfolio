import { createContext, useContext, useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const STORAGE_KEY = "theme-preference"; // values: 'system' | 'dark' | 'light'

  const getInitialPreference = (): "system" | "dark" | "light" => {
    if (typeof window === "undefined") return "system";

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light" || stored === "system")
        return stored as "system" | "dark" | "light";
    } catch {
      // localStorage may be unavailable in some environments
    }

    return "system";
  };

  const [preference, setPreference] = useState<"system" | "dark" | "light">(
    getInitialPreference,
  );

  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Derive darkMode from preference and system preference
  const darkMode = useMemo(() => {
    if (preference === "system") return systemPrefersDark;
    return preference === "dark";
  }, [preference, systemPrefersDark]);

  // Apply dark class to document
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Listen to system preference changes
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) =>
      setSystemPrefersDark(e.matches);

    if (mq.addEventListener) mq.addEventListener("change", handleChange);
    else mq.addListener(handleChange as (e: MediaQueryListEvent) => void);

    return () => {
      if (mq.removeEventListener)
        mq.removeEventListener("change", handleChange);
      else mq.removeListener(handleChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setPreference((prev) => {
      if (prev === "system") {
        const next = systemPrefersDark ? "light" : "dark";
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // ignore
        }
        return next;
      }

      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
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
