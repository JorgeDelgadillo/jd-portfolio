import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../ThemeContext";

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

  const subtitleColor = darkMode ? "text-cream-soft" : "text-ink-soft";
  const mutedColor = darkMode ? "text-cream-muted" : "text-ink-muted";
  const accent = darkMode ? "text-gold" : "text-sepia";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center paper-grain"
    >
      <div className="max-w-3xl mx-auto animate-vfade-up relative z-20">
        {/* Eyebrow */}
        <p
          className={`text-[12px] uppercase tracking-[0.32em] mb-8 ${mutedColor}`}
        >
          Fullstack Software Engineer
        </p>

        {/* Headline — name in H1 is the primary on-page signal for name searches */}
        <h1
          className={`font-serif font-light text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.04] tracking-[-0.02em] ${darkMode ? "text-cream" : "text-ink"}`}
        >
          Jorge Delgadillo
        </h1>

        {/* Tagline (H2) */}
        <h2
          className={`mt-4 font-serif font-light italic text-[clamp(1.5rem,4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] ${accent}`}
        >
          Building software with care
          <br />
          and quiet precision.
        </h2>

        {/* Subtitle */}
        <p
          className={`mt-10 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto ${subtitleColor}`}
        >
          I design and ship scalable systems, payments infrastructure, and
          AI-powered automation across the full stack — working remotely with
          international teams from Querétaro, Mexico.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href="#experience"
            className={`group inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.16em] font-medium transition-colors duration-300 ${darkMode ? "text-cream" : "text-ink"}`}
          >
            View my work
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className={`group inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.16em] font-medium transition-colors duration-300 ${subtitleColor} ${darkMode ? "hover:text-cream" : "hover:text-ink"}`}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
            >
              Get in touch
              <span className="text-[10px] opacity-70">
                {menuOpen ? "▲" : "▼"}
              </span>
            </button>

            {menuOpen && (
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-64 rounded-xl border py-2 z-50 ${
                  darkMode
                    ? "bg-espresso-elevated border-hairline-dark"
                    : "bg-parchment-light border-hairline"
                }`}
                role="menu"
              >
                <a
                  href="mailto:jorgdelgadillo@gmail.com"
                  className={`block px-5 py-3 text-sm transition-colors ${darkMode ? "text-cream-soft hover:text-cream" : "text-ink-soft hover:text-ink"}`}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                >
                  Send an email
                </a>
                <a
                  href="https://calendly.com/jorgdelgadillo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-5 py-3 text-sm transition-colors ${darkMode ? "text-cream-soft hover:text-cream" : "text-ink-soft hover:text-ink"}`}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                >
                  Schedule a meeting
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Portrait */}
      <div className="mt-20 animate-vfade-in relative z-0">
        <div
          className={`w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-1 transition-colors ${darkMode ? "ring-hairline-dark" : "ring-hairline"}`}
        >
          <img
            src="/avatar.jpg"
            alt="Jorge Delgadillo"
            className="w-full h-full object-cover"
            style={{ filter: darkMode ? "saturate(0.85)" : "sepia(0.12) saturate(0.95)" }}
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${mutedColor}`}>
        <span className="block w-px h-10 bg-current opacity-30 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
