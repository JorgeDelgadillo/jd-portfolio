import { useTheme } from "../../ThemeContext";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const FeaturedProjects = () => {
  const { darkMode } = useTheme();

  const projects: Project[] = [
    {
      id: "1",
      title: "JD Portfolio",
      description:
        "This very site — built to showcase my work, experience, and projects with a restrained, vintage-modern interface and a responsive layout.",
      image: "/screenshot_portfolio.png",
      technologies: ["React", "TypeScript", "Vite", "Tailwind", "SCSS"],
      link: "https://github.com/JorgeDelgadillo/jd-portfolio",
    },
    {
      id: "2",
      title: "LazyWhats",
      description:
        "A WhatsApp terminal UI with Vim-style keybindings — QR authentication, real-time messaging, and smart notifications, all from the terminal.",
      image: "/lazywhats.png",
      technologies: ["TypeScript", "Node.js", "Docker", "Blessed"],
      link: "https://github.com/JorgeDelgadillo/lazywhats",
    },
  ];

  const sectionText = darkMode ? "text-cream" : "text-ink";
  const bodyText = darkMode ? "text-cream-soft" : "text-ink-soft";
  const mutedText = darkMode ? "text-cream-muted" : "text-ink-muted";
  const accent = darkMode ? "text-gold" : "text-sepia";
  const hairline = darkMode ? "border-hairline-dark" : "border-hairline";

  return (
    <section
      id="projects"
      className={`py-32 md:py-40 px-6 ${darkMode ? "bg-espresso-surface" : "bg-parchment-light"} transition-colors duration-500`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-20 md:mb-24">
          <p className={`text-[12px] uppercase tracking-[0.32em] mb-5 ${mutedText}`}>
            03 — Projects
          </p>
          <h2 className={`font-serif font-light text-4xl md:text-5xl tracking-[-0.02em] ${sectionText}`}>
            A few things
            <br />
            <span className={`italic ${accent}`}>I've made.</span>
          </h2>
          <p className={`mt-8 text-base md:text-lg font-light max-w-xl ${bodyText}`}>
            A small, growing collection. More will appear here as I keep
            building.
          </p>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-px overflow-hidden rounded-2xl border ${hairline}`}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-8 md:p-10 transition-colors duration-500 ${darkMode ? "bg-espresso hover:bg-espresso-elevated" : "bg-parchment hover:bg-parchment-dark"}`}
            >
              {/* Image */}
              <div className={`aspect-[16/10] rounded-xl overflow-hidden mb-8 border ${hairline}`}>
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ filter: darkMode ? "saturate(0.85)" : "sepia(0.08) saturate(0.95)" }}
                />
              </div>

              {/* Title */}
              <h3 className={`font-serif text-2xl md:text-3xl font-light tracking-[-0.01em] ${sectionText}`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className={`mt-4 text-[15px] md:text-base font-light leading-relaxed ${bodyText}`}>
                {project.description}
              </p>

              {/* Stack */}
              <p className={`mt-6 text-[13px] ${mutedText}`}>
                {project.technologies.join(" · ")}
              </p>

              {/* Link */}
              <p className={`mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${accent} ${darkMode ? "group-hover:text-cream" : "group-hover:text-ink"}`}>
                View source
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
