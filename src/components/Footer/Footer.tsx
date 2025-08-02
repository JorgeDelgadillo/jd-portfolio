import { useTheme } from '../../ThemeContext';
import { useState } from 'react';

const Footer = () => {
  const { darkMode } = useTheme();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: '🐙',
      color: 'from-gray-600 to-gray-800',
      hoverText: 'Check out my code!'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: '💼',
      color: 'from-blue-600 to-blue-800',
      hoverText: 'Let\'s connect professionally!'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: '🐦',
      color: 'from-sky-500 to-blue-600',
      hoverText: 'Follow my tech journey!'
    },
    {
      name: 'Email',
      href: 'mailto:jorge@example.com',
      icon: '✉️',
      color: 'from-red-500 to-pink-600',
      hoverText: 'Drop me a message!'
    },
    {
      name: 'Discord',
      href: 'https://discord.com',
      icon: '🎮',
      color: 'from-indigo-500 to-purple-600',
      hoverText: 'Let\'s chat about tech!'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero', emoji: '🏠' },
    { name: 'About', href: '#about', emoji: '👨‍💻' },
    { name: 'Experience', href: '#experience', emoji: '💼' },
    { name: 'Projects', href: '#projects', emoji: '🚀' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="footer" 
      className={`relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
          : 'bg-gradient-to-br from-gray-900 via-blue-900 to-black'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-100"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-black mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Jorge Delgadillo
                  </span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Crafting digital experiences that inspire, engage, and make a difference. 
                  Always excited to collaborate on innovative projects! ✨
                </p>
              </div>

              {/* Creative Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 group hover:text-blue-400 transition-colors cursor-pointer">
                  <span className="text-xl group-hover:animate-bounce">📧</span>
                  <span>jorge@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 group hover:text-purple-400 transition-colors cursor-pointer">
                  <span className="text-xl group-hover:animate-pulse">📍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 group hover:text-green-400 transition-colors cursor-pointer">
                  <span className="text-xl group-hover:animate-spin">🌐</span>
                  <span>Available Worldwide (Remote)</span>
                </div>
              </div>

              {/* Availability Status */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700/50">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold">Available for new opportunities</span>
                <span className="text-green-400 animate-bounce">🚀</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                      {link.emoji}
                    </span>
                    <span className="group-hover:font-semibold">{link.name}</span>
                  </a>
                ))}
              </nav>

              {/* Fun Stats */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/30">
                <h5 className="text-sm font-semibold text-blue-300 mb-2">Fun Stats:</h5>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>☕ Coffee consumed: ∞</div>
                  <div>🐛 Bugs fixed: 1,337+</div>
                  <div>💡 Ideas per day: 42</div>
                </div>
              </div>
            </div>

            {/* Interactive Social & CTA */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-2xl">💫</span>
                Let's Connect
              </h4>

              {/* Social Links Grid */}
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-110 hover:rotate-3 ${
                      hoveredSocial === social.name
                        ? `bg-gradient-to-r ${social.color} border-transparent text-white shadow-2xl`
                        : 'border-gray-600 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-2xl block group-hover:animate-bounce">
                        {social.icon}
                      </span>
                      <span className="text-xs font-semibold mt-1 block">
                        {social.name}
                      </span>
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredSocial === social.name && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                        {social.hoverText}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                      </div>
                    )}
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full group relative px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="group-hover:animate-bounce">💌</span>
                    Hire Me
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="w-full group px-6 py-3 border-2 border-pink-500 text-pink-400 rounded-2xl font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    <span className="group-hover:animate-spin">📄</span>
                    Download Resume
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Copyright with Animation */}
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p className="flex items-center gap-2">
                  <span>&copy; {currentYear} Jorge Delgadillo.</span>
                  <span className="animate-pulse">✨</span>
                  <span>Made with</span>
                  <span className="text-red-500 animate-pulse">❤️</span>
                  <span>and lots of</span>
                  <span className="animate-bounce">☕</span>
                </p>
                <p className="mt-1 flex items-center justify-center md:justify-start gap-2">
                  <span>Built with React, TypeScript & Tailwind CSS</span>
                  <span className="animate-spin">⚛️</span>
                </p>
              </div>

              {/* Back to Top Button */}
              <a
                href="#hero"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-105 border border-gray-600"
              >
                <span className="group-hover:animate-bounce">🚀</span>
                <span>Back to Top</span>
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hidden Easter Egg */}
          <div className="absolute bottom-4 right-4 opacity-10 hover:opacity-100 transition-opacity duration-500">
            <div className="text-xs text-gray-500 cursor-default">
              <span className="hover:text-purple-400 transition-colors">Konami Code Ready 🎮</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
