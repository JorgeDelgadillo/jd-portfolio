import { useState, useEffect } from 'react';
import { useTheme } from '../../ThemeContext';

const menuItems = [
  { name: 'Home', href: '#hero', icon: '🏠', color: 'from-blue-500 to-purple-500' },
  { name: 'About', href: '#about', icon: '👨‍💻', color: 'from-purple-500 to-pink-500' },
  { name: 'Experience', href: '#experience', icon: '💼', color: 'from-pink-500 to-red-500' },
  { name: 'Projects', href: '#projects', icon: '🚀', color: 'from-green-500 to-blue-500' },
  { name: 'Contact', href: '#footer', icon: '💬', color: 'from-orange-500 to-yellow-500' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleActiveSection = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'footer'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === 'hero' ? 'home' : section === 'footer' ? 'contact' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleActiveSection);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveSection);
    };
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b shadow-xl transition-all duration-500 ${
        scrolled 
          ? darkMode 
            ? 'border-gray-800/80 bg-gray-900/95 shadow-2xl' 
            : 'border-gray-200/80 bg-white/95 shadow-2xl'
          : darkMode 
            ? 'border-gray-800/50 bg-gray-900/90' 
            : 'border-gray-200/50 bg-white/90'
      }`}
      style={{ 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled 
          ? darkMode 
            ? '0 10px 40px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)' 
            : '0 10px 40px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.8)'
          : darkMode 
            ? '0 8px 32px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.05)' 
            : '0 8px 32px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.8)'
      }}
    >
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Enhanced Logo */}
        <a href="#hero" className="flex items-center gap-3 text-xl font-bold group transition-all duration-300 hover:scale-105">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500 scale-110`}></div>
            <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:shadow-blue-500/25 group-hover:shadow-2xl font-extrabold animate-pulse">
              JD
            </span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-extrabold text-xl leading-tight">
              Jorge
            </span>
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold text-sm leading-tight opacity-75">
              Developer
            </span>
          </div>
        </a>

        <nav className="hidden md:flex gap-2 items-center">
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative group px-4 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                    : darkMode
                      ? 'text-gray-200 hover:text-white hover:bg-gray-800/50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                } backdrop-blur-sm border border-transparent hover:border-gray-300/20 dark:hover:border-gray-600/20`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="flex items-center gap-2">
                  <span className={`text-lg transition-transform duration-300 ${isActive ? 'animate-bounce' : 'group-hover:scale-110'}`}>
                    {item.icon}
                  </span>
                  <span className="font-semibold">{item.name}</span>
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
                
                {/* Hover gradient background */}
                {!isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                )}
              </a>
            );
          })}
          
          <button
            onClick={toggleDarkMode}
            className={`ml-4 relative group p-3 rounded-2xl border transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/30' 
                : 'bg-indigo-500/20 border-indigo-500/30 text-indigo-600 hover:bg-indigo-500/30'
            } backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden`}
            aria-label="Toggle dark mode"
          >
            <div className="relative z-10 flex items-center justify-center">
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </div>
            
            <div className={`absolute inset-0 bg-gradient-to-r ${
              darkMode ? 'from-yellow-400 to-orange-500' : 'from-indigo-500 to-purple-600'
            } opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
          </button>

          <a
            href="#footer"
            className="ml-4 group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="group-hover:animate-bounce">💬</span>
              <span>Let's Talk</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </nav>

        <button
          className={`md:hidden relative group p-3 rounded-2xl border transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-gray-800/50 border-gray-600/30 text-gray-200 hover:bg-gray-700/50' 
              : 'bg-white/50 border-gray-300/30 text-gray-700 hover:bg-gray-100/50'
          } backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <div className="relative z-10">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
      </div>

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
