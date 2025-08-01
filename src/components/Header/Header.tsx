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
    <header 
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b shadow-xl transition-all duration-300 ${
        darkMode 
          ? 'border-gray-800/50 bg-gray-900/90' 
          : 'border-gray-200/50 bg-white/90'
      }`}
      style={{ 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: darkMode 
          ? '0 8px 32px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.05)' 
          : '0 8px 32px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.8)'
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 text-xl font-bold group transition-all duration-300 hover:scale-105">
          <div className="relative">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-4 py-2 rounded-xl text-white shadow-lg transition-all duration-300 group-hover:shadow-blue-500/25 group-hover:shadow-2xl font-extrabold">
              JD
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold text-2xl">
            Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center">
          {menuItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="relative font-semibold text-gray-700 dark:text-gray-200 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group py-2"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
          ))}
          {/* Dark mode button desktop */}
          <button
            onClick={toggleDarkMode}
            className="ml-6 px-4 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 dark:bg-gray-800/30 dark:border-gray-700/30 dark:hover:bg-gray-700/40 transition-all duration-300 flex items-center gap-3 text-sm font-semibold shadow-lg backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:scale-105 hover:shadow-xl group"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h1M3 12H2m16.24 6.24l-.71-.71M6.34 6.34l-.71-.71" />
              </svg>
            )}
            <span className="hidden lg:inline font-semibold">{darkMode ? 'Dark' : 'Light'}</span>
          </button>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 dark:bg-gray-800/30 dark:hover:bg-gray-700/40 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 transition-all duration-300 hover:scale-110 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 group"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide Menu (from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 shadow-2xl z-50 transform transition-all duration-500 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } backdrop-blur-xl border-l ${
          darkMode 
            ? 'bg-gray-900 border-gray-800/50' 
            : 'bg-white border-gray-200/50'
        }`}
        style={{ 
          willChange: 'transform',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          boxShadow: darkMode 
            ? '-8px 0 32px rgba(0,0,0,0.5)' 
            : '-8px 0 32px rgba(0,0,0,0.15)'
        }}
      >
        <div className={`flex items-center justify-between px-6 py-6 border-b backdrop-blur-sm ${
          darkMode ? 'border-gray-800/50 bg-gray-900' : 'border-gray-200/50 bg-white'
        }`}>
          <a href="#hero" className="flex items-center gap-3 text-xl font-bold group">
            <div className="relative">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white px-3 py-2 rounded-xl shadow-lg font-extrabold">JD</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl opacity-20 blur-sm"></div>
            </div>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">Portfolio</span>
          </a>
          <button
            className={`flex items-center justify-center w-11 h-11 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500/50 group ${
              darkMode 
                ? 'bg-gray-800 hover:bg-red-500/20 border-gray-700/30 text-gray-200' 
                : 'bg-white hover:bg-red-500/20 border-gray-200/30 text-gray-700'
            }`}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 group-hover:text-red-500 group-hover:rotate-90 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className={`flex flex-col gap-2 px-6 py-8 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative font-semibold text-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 py-4 px-4 rounded-xl group animate-slideIn ${
                darkMode 
                  ? 'text-gray-200 hover:bg-gray-800/50' 
                  : 'text-gray-700 hover:bg-gray-100/80'
              }`}
              onClick={() => setMenuOpen(false)}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {item.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
          {/* Dark mode button mobile */}
          <button
            onClick={() => { toggleDarkMode(); setMenuOpen(false); }}
            className={`mt-8 mx-4 px-4 py-4 rounded-xl border backdrop-blur-sm transition-all duration-300 flex items-center gap-3 text-base font-semibold shadow-lg hover:scale-105 group ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 border-gray-700/30 text-gray-200' 
                : 'bg-white hover:bg-gray-50 border-gray-200/30 text-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h1M3 12H2m16.24 6.24l-.71-.71M6.34 6.34l-.71-.71" />
              </svg>
            )}
            <span className="font-semibold">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300 ${
            darkMode ? 'bg-black/50' : 'bg-gray-900/30'
          }`}
          style={{ 
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
