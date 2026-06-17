import { useTheme } from "../../ThemeContext";

const Experience = () => {
  const { darkMode } = useTheme();

  const experiences = [
    {
      id: 0,
      company: "Freelance",
      position: "Software Engineer",
      period: "Jun 2025 — Present",
      location: "Querétaro, Mexico · Remote",
      description:
        "Freelance work implementing payment infrastructures, building AI agents, and modernizing client applications and services.",
      technologies: ["Stripe", "TypeScript", "Python", "React", "LangChain", "n8n"],
      achievements: [
        "Implemented payment infrastructures with Stripe — subscription flows, webhook security, and multi-platform integration for SaaS and ecommerce clients.",
        "Built custom AI agents with LangChain to automate data processing, knowledge retrieval, and workflow orchestration.",
        "Designed AI automation pipelines in n8n, integrating LLMs, vector databases, and external APIs to reduce manual work.",
        "Migrated entire projects from JavaScript to TypeScript and modernized legacy React frontends.",
        "Developed and extended REST APIs and microservices in Python.",
      ],
    },
    {
      id: 1,
      company: "Instawork",
      position: "Software Engineer",
      period: "Dec 2021 — May 2025",
      location: "San Francisco, CA · Remote",
      description:
        "Maintained and supported critical Payments infrastructure using Python (Stripe, Hyperwallet). Built native Android and iOS components integrated with React Native.",
      technologies: ["Python", "React Native", "Kotlin", "Swift", "Stripe", "Hyperwallet", "LangChain"],
      achievements: [
        "Maintained critical Payments infrastructure in Python (Stripe, Hyperwallet).",
        "Implemented banking services module — transactions, 2FA, and card support.",
        "Built native Android and iOS components (Kotlin/Swift) integrated with React Native.",
        "Designed custom AI agents with LangChain for internal automation.",
        "Led greenfield projects, refactors, and module removals.",
        "Built end-to-end testing flows with Appium and Browserstack.",
      ],
    },
    {
      id: 2,
      company: "Stateoftheart.ai",
      position: "Fullstack Developer",
      period: "Aug 2020 — Nov 2021",
      location: "Querétaro, Mexico",
      description:
        "Developed fullstack features for web applications using React. Maintained Dockerized services and basic AWS infrastructure.",
      technologies: ["React", "Docker", "AWS", "TypeScript", "Python"],
      achievements: [
        "Developed fullstack features for web applications using React.",
        "Maintained Dockerized services and basic AWS infrastructure.",
        "Contributed across frontend and backend layers for fast-paced deployments.",
      ],
    },
    {
      id: 3,
      company: "Corebooks",
      position: "Software Developer",
      period: "Jan 2019 — Jun 2020",
      location: "Celaya, Mexico",
      description:
        "Built a cross-platform mobile point-of-sale system with React Native and a web version in React. Integrated Stripe payments and created ERP modules in Odoo.",
      technologies: ["React Native", "React", "Python", "Stripe", "Odoo"],
      achievements: [
        "Built cross-platform mobile point-of-sale system with React Native.",
        "Developed the web version using React.",
        "Integrated Stripe payments for transaction processing.",
        "Created ERP modules in Odoo using Python.",
      ],
    },
  ];

  const sectionText = darkMode ? "text-cream" : "text-ink";
  const bodyText = darkMode ? "text-cream-soft" : "text-ink-soft";
  const mutedText = darkMode ? "text-cream-muted" : "text-ink-muted";
  const accent = darkMode ? "text-gold" : "text-sepia";
  const hairline = darkMode ? "border-hairline-dark" : "border-hairline";
  const dotColor = darkMode ? "bg-gold" : "bg-sepia";

  return (
    <section
      id="experience"
      className={`py-32 md:py-40 px-6 ${darkMode ? "bg-espresso" : "bg-parchment"} transition-colors duration-500`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-20 md:mb-24">
          <p className={`text-[12px] uppercase tracking-[0.32em] mb-5 ${mutedText}`}>
            02 — Experience
          </p>
          <h2 className={`font-serif font-light text-4xl md:text-5xl tracking-[-0.02em] ${sectionText}`}>
            A timeline of
            <br />
            <span className={`italic ${accent}`}>the work so far.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className={`absolute left-0 top-2 bottom-2 w-px ${darkMode ? "bg-hairline-dark" : "bg-hairline"}`} />

          <div className="space-y-20">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 md:pl-14">
                {/* Dot */}
                <span
                  className={`absolute left-0 top-2.5 w-2 h-2 rounded-full -translate-x-[3px] ${dotColor}`}
                />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 mb-5">
                  <div>
                    <h3 className={`font-serif text-2xl md:text-3xl font-light tracking-[-0.01em] ${sectionText}`}>
                      {exp.position}
                    </h3>
                    <p className={`mt-1 text-sm ${bodyText}`}>
                      <span className={accent}>{exp.company}</span>
                      <span className={`mx-2 ${mutedText}`}>·</span>
                      <span className={mutedText}>{exp.location}</span>
                    </p>
                  </div>
                  <p className={`text-[12px] uppercase tracking-[0.18em] whitespace-nowrap ${mutedText}`}>
                    {exp.period}
                  </p>
                </div>

                <p className={`text-base md:text-lg font-light leading-relaxed max-w-2xl ${bodyText}`}>
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="mt-6 space-y-3 max-w-2xl">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      className={`flex gap-3 text-sm md:text-[15px] font-light leading-relaxed ${bodyText}`}
                    >
                      <span className={`mt-2.5 h-px w-4 flex-shrink-0 ${darkMode ? "bg-cream-muted" : "bg-ink-muted"} opacity-50`} />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies as inline text */}
                <p className={`mt-6 text-[13px] ${mutedText}`}>
                  <span className="uppercase tracking-[0.16em]">Stack — </span>
                  {exp.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <div className={`mt-24 pt-10 border-t ${hairline} text-center`}>
          <p className={`mb-5 text-sm font-light ${bodyText}`}>
            Want the full picture?
          </p>
          <a
            href="/jorge_delgadillo_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.16em] font-medium transition-colors duration-300 ${accent} ${darkMode ? "hover:text-cream" : "hover:text-ink"}`}
          >
            View full résumé
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
