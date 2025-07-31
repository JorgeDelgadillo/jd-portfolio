import { useState } from 'react';
import { useTheme } from '../../ThemeContext';

const menuItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#footer' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 rounded text-gray-900 dark:text-white">JD</span>
          <span className="hidden sm:inline">Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {menuItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          {/* Dark mode button desktop */}
          <button
            onClick={toggleDarkMode}
            className="ml-6 px-3 py-2 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 text-sm font-medium shadow text-gray-900 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h1M3 12H2m16.24 6.24l-.71-.71M6.34 6.34l-.71-.71" />
              </svg>
            )}
            <span className="hidden lg:inline">{darkMode ? 'Dark' : 'Light'} Mode</span>
          </button>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide Menu (from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ willChange: 'transform' }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <a href="#hero" className="flex items-center gap-2 text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded">JD</span>
            <span>Portfolio</span>
          </a>
          <button
            className="flex items-center justify-center w-8 h-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 py-8">
          {menuItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {/* Dark mode button mobile */}
          <button
            onClick={() => { toggleDarkMode(); setMenuOpen(false); }}
            className="mt-8 px-3 py-2 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 text-base font-medium shadow text-gray-900 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h1M3 12H2m16.24 6.24l-.71-.71M6.34 6.34l-.71-.71" />
              </svg>
            )}
            <span className="inline">{darkMode ? 'Dark' : 'Light'} Mode</span>
          </button>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
