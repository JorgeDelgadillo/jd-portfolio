import { useTheme } from "../../ThemeContext";

const About = () => {
  const { darkMode } = useTheme();

  const skills = [
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "Kotlin", "Swift"],
    },
    { category: "Frameworks", items: ["React", "React Native", "Django"] },
    {
      category: "DevOps & Tools",
      items: ["Docker", "AWS (EC2, S3, KMS)", "Datadog", "Sentry", "Kubernetes"],
    },
    {
      category: "Databases & Testing",
      items: ["PostgreSQL", "MongoDB", "Jest", "Pytest", "Appium"],
    },
    {
      category: "Other",
      items: ["Stripe", "Hyperwallet", "LangChain", "GraphQL", "n8n"],
    },
  ];

  const stats = [
    { value: "5+", label: "Years of practice" },
    { value: "20+", label: "Projects shipped" },
    { value: "15+", label: "Tools in rotation" },
  ];

  const sectionText = darkMode ? "text-cream" : "text-ink";
  const bodyText = darkMode ? "text-cream-soft" : "text-ink-soft";
  const mutedText = darkMode ? "text-cream-muted" : "text-ink-muted";
  const accent = darkMode ? "text-gold" : "text-sepia";
  const hairline = darkMode ? "border-hairline-dark" : "border-hairline";

  return (
    <section
      id="about"
      className={`py-32 md:py-40 px-6 ${darkMode ? "bg-espresso-surface" : "bg-parchment-light"} transition-colors duration-500`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-20 md:mb-24">
          <p className={`text-[12px] uppercase tracking-[0.32em] mb-5 ${mutedText}`}>
            01 — About
          </p>
          <h2 className={`font-serif font-light text-4xl md:text-5xl tracking-[-0.02em] ${sectionText}`}>
            A short story about
            <br />
            <span className={`italic ${accent}`}>how I work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Story */}
          <div className="lg:col-span-7 space-y-6">
            <p className={`text-lg md:text-xl font-light leading-relaxed ${bodyText}`}>
              I'm a versatile, detail-oriented Fullstack Software Engineer with
              over five years of experience across startups and international
              teams — from critical payments infrastructure to cross-platform
              mobile apps serving thousands of users.
            </p>
            <p className={`text-base md:text-lg font-light leading-relaxed ${bodyText}`}>
              My work lives at the intersection of scalable backend systems,
              seamless user experience, and cloud infrastructure. I've led
              greenfield projects, refactors, and integrations with payment
              systems like Stripe and Hyperwallet, and recently built custom AI
              agents with LangChain and automation pipelines in n8n.
            </p>
            <p className={`text-base md:text-lg font-light leading-relaxed ${bodyText}`}>
              Based in Querétaro, Mexico, I work remotely with international
              teams — most often with San Francisco. I care about clean code,
              test-driven development, and AI solutions that quietly remove
              busywork.
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-8 pt-12 mt-4 border-t ${hairline}`}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className={`font-serif text-3xl md:text-4xl font-light ${sectionText}`}>
                    {s.value}
                  </div>
                  <div className={`mt-2 text-[12px] uppercase tracking-[0.16em] ${mutedText}`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-5 lg:pt-2">
            <p className={`text-[12px] uppercase tracking-[0.32em] mb-8 ${mutedText}`}>
              Toolkit
            </p>
            <div className="space-y-8">
              {skills.map((group) => (
                <div key={group.category} className={`pb-8 border-b ${hairline} last:border-0 last:pb-0`}>
                  <h3 className={`text-sm font-medium mb-4 ${sectionText}`}>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`text-sm font-light ${bodyText}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume link */}
            <a
              href="/jorge_delgadillo_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`group mt-10 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.16em] font-medium transition-colors duration-300 ${accent} ${darkMode ? "hover:text-cream" : "hover:text-ink"}`}
            >
              Download résumé
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &darr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
