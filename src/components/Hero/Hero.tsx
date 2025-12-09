import { useTheme } from "../../ThemeContext";
import { useState, useRef, useEffect } from "react";
import {
  DiReact,
  DiPython,
  DiJavascript1,
  DiDocker,
  DiDjango,
  DiPostgresql,
  DiMongodb,
} from "react-icons/di";
import {
  SiTypescript,
  SiAndroid,
  SiAmazonwebservices,
  SiKotlin,
  SiSwift,
} from "react-icons/si";

const Hero = () => {
  const { darkMode } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        e.target &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const technologies = [
    { name: "React", icon: <DiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <DiPython /> },
    { name: "React Native", icon: <SiAndroid /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "AWS", icon: <SiAmazonwebservices /> },
    { name: "Docker", icon: <DiDocker /> },
    { name: "Django", icon: <DiDjango /> },
    { name: "PostgreSQL", icon: <DiPostgresql /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Swift", icon: <SiSwift /> },
  ];

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-6 py-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              Jorge Delgadillo
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Software Engineer – Fullstack (React, Python, AWS)
          </p>
          <p
            className={`text-lg max-w-lg ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Versatile and detail-oriented Fullstack Software Engineer with over
            5 years of experience in startups and international environments.
            Passionate about building scalable systems, automation, and
            delivering impactful user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#experience"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700`}
            >
              View My Work
            </a>

            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((s) => !s)}
                className={`px-8 py-3 border-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                  darkMode
                    ? "border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                Get In Touch
                <span className="text-sm opacity-75">
                  {menuOpen ? "▲" : "▼"}
                </span>
              </button>

              {menuOpen && (
                <div
                  className={`absolute mt-2 right-0 w-56 rounded-lg shadow-lg z-50 py-2 ${
                    darkMode
                      ? "bg-slate-800 text-gray-100"
                      : "bg-white text-gray-900"
                  }`}
                  role="menu"
                >
                  <a
                    href="mailto:jorgdelgadillo@gmail.com"
                    className={`block px-4 py-2 text-sm hover:underline ${darkMode ? "hover:bg-slate-700" : "hover:bg-gray-100"}`}
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                  >
                    Send Email
                  </a>
                  <a
                    href="https://calendly.com/jorgdelgadillo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-4 py-2 text-sm hover:underline ${darkMode ? "hover:bg-slate-700" : "hover:bg-gray-100"}`}
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                  >
                    Schedule a Meeting
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-8">
            <h3
              className={`text-lg font-semibold mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform ${
                    darkMode
                      ? "bg-slate-800 text-gray-200 border border-slate-700"
                      : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo/Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className={`w-80 h-80 rounded-full overflow-hidden shadow-2xl ${
                darkMode ? "ring-4 ring-slate-700" : "ring-4 ring-gray-200"
              }`}
            >
              <img
                src="/avatar.jpg" // Replace with your avatar image path
                alt="Jorge Delgadillo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-pulse bg-blue-500"></div>
            <div
              className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-pulse delay-300 ${
                darkMode ? "bg-blue-400" : "bg-purple-500"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
