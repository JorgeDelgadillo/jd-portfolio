import { useTheme } from "../../ThemeContext";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Array<{
    name: string;
    color: string;
  }>;
  link: string;
}

const FeaturedProjects = () => {
  const { darkMode } = useTheme();

  const projects: Project[] = [
    {
      id: "1",
      title: "JD Portfolio",
      description:
        "This website! Built to showcase my skills, experience, and projects. Designed with a modern UI and responsive layout.",
      image: "/screenshot_portfolio.png",
      technologies: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
        { name: "Vite", color: "bg-yellow-100 text-yellow-800" },
        { name: "Tailwind CSS", color: "bg-sky-100 text-sky-800" },
        { name: "SCSS", color: "bg-pink-100 text-pink-800" },
      ],
      link: "https://github.com/JorgeDelgadillo/jd-portfolio",
    },
    {
      id: "2",
      title: "LazyWhats",
      description:
        "A WhatsApp Terminal User Interface (TUI) client with Vim-style keybindings. Features QR code authentication, real-time messaging, and smart notifications—all from your terminal.",
      image: "/lazywhats.png",
      technologies: [
        { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "Docker", color: "bg-cyan-100 text-cyan-800" },
        { name: "Blessed", color: "bg-indigo-100 text-indigo-800" },
      ],
      link: "https://github.com/JorgeDelgadillo/lazywhats",
    },
  ];

  const cards = Array.from({ length: 3 }, (_, index) => {
    const project = projects[index];
    return { project, index };
  });

  return (
    <section
      id="projects"
      className={`py-20 px-6 ${
        darkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of my best work and the technologies I've used to bring
            ideas to life.
            <br />
            <span className="block mt-2 font-medium">
              I will continue adding more projects as I build and grow!
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {cards.map(({ project, index }) =>
              project ? (
                <div
                  key={project.id}
                  className={`p-6 rounded-lg border-2 hover:border-blue-500 transition-colors ${
                    darkMode
                      ? "border-slate-600 bg-slate-800/30"
                      : "border-gray-300 bg-gray-100/50"
                  }`}
                >
                  <div
                    className={`w-full h-48 rounded-lg mb-4 overflow-hidden ${
                      darkMode ? "bg-slate-700" : "bg-gray-200"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p
                    className={`mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className={`px-2 py-1 rounded ${tech.color} text-xs font-semibold`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View Source
                  </a>
                </div>
              ) : (
                <div
                  key={`placeholder-${index}`}
                  className={`p-6 rounded-lg border-2 border-dashed hover:border-blue-500 transition-colors ${
                    darkMode
                      ? "border-slate-600 bg-slate-800/30"
                      : "border-gray-300 bg-gray-100/50"
                  }`}
                >
                  <div
                    className={`w-full h-48 rounded-lg mb-4 flex items-center justify-center ${
                      darkMode ? "bg-slate-700" : "bg-gray-200"
                    }`}
                  >
                    <svg
                      className={`w-12 h-12 ${darkMode ? "text-slate-600" : "text-gray-400"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <div
                      className={`h-4 rounded animate-pulse ${
                        darkMode ? "bg-slate-700" : "bg-gray-300"
                      }`}
                    ></div>
                    <div
                      className={`h-3 w-3/4 rounded animate-pulse ${
                        darkMode ? "bg-slate-700" : "bg-gray-300"
                      }`}
                    ></div>
                    <div
                      className={`h-3 w-1/2 rounded animate-pulse ${
                        darkMode ? "bg-slate-700" : "bg-gray-300"
                      }`}
                    ></div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
