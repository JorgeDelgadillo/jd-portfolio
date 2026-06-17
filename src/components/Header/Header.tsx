import { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#footer" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navColor = darkMode ? "text-cream-soft" : "text-ink-soft";
  const navHover = darkMode ? "hover:text-cream" : "hover:text-ink";

  return (
    <>
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "bg-espresso/80 border-b border-hairline-dark"
            : "bg-parchment/80 border-b border-hairline"
          : "border-b border-transparent"
      }`}
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5 md:py-6">
        {/* Monogram */}
        <a
          href="#hero"
          className={`font-serif text-2xl tracking-tight transition-opacity duration-300 hover:opacity-70 ${darkMode ? "text-cream" : "text-ink"}`}
        >
          Jorge<span className="text-sepia dark:text-gold">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[13px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${navColor} ${navHover}`}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 hover:scale-105 ${navColor} ${navHover} ${darkMode ? "border-hairline-dark" : "border-hairline"}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h1M3 12H2m16.24 6.24l-.71-.71M6.34 6.34l-.71-.71"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden flex flex-col items-end gap-[5px] w-8 h-8 justify-center transition-colors ${navColor}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span
            className={`block h-px transition-all duration-300 ${darkMode ? "bg-cream" : "bg-ink"} ${menuOpen ? "w-6" : "w-6"}`}
          />
          <span
            className={`block h-px transition-all duration-300 ${darkMode ? "bg-cream" : "bg-ink"} w-4`}
          />
        </button>
      </div>
    </header>

    {/* Mobile overlay menu — rendered as sibling of <header> so its
        position:fixed is relative to the viewport, NOT the header's
        backdrop-filter containing block. */}
    <div
      className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } ${darkMode ? "bg-espresso" : "bg-parchment"}`}
      aria-hidden={!menuOpen}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span
          className={`font-serif text-2xl tracking-tight ${darkMode ? "text-cream" : "text-ink"}`}
        >
          Jorge<span className="text-sepia dark:text-gold">.</span>
        </span>
        <button
          className={`flex items-center justify-center w-8 h-8 ${darkMode ? "text-cream" : "text-ink"}`}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col px-6 pt-10 gap-2">
        {menuItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`font-serif text-4xl tracking-tight py-3 border-b transition-all duration-500 ${
              darkMode ? "text-cream border-hairline-dark" : "text-ink border-hairline"
            }`}
            style={{
              animation: menuOpen ? `vfade-up 0.6s ${index * 80 + 100}ms both` : "none",
            }}
          >
            {item.name}
          </a>
        ))}
        <button
          onClick={() => {
            toggleDarkMode();
          }}
          className={`mt-10 flex items-center gap-3 text-[13px] uppercase tracking-[0.18em] ${navColor}`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
          <span className={`w-9 h-5 rounded-full border relative ${darkMode ? "border-hairline-dark" : "border-hairline"}`}>
            <span
              className={`absolute top-[2px] w-3.5 h-3.5 rounded-full transition-all duration-300 ${darkMode ? "left-[2px] bg-gold" : "left-[18px] bg-sepia"}`}
            />
          </span>
        </button>
      </nav>
    </div>
    </>
  );
};

export default Header;
