import { useTheme } from '../../ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  const skills = [
    { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Kotlin', 'Swift'] },
    { category: 'Frameworks', items: ['React', 'React Native', 'Django'] },
    { category: 'DevOps & Tools', items: ['Docker', 'AWS (EC2, S3, KMS)', 'Datadog', 'Sentry', 'Kubernetes'] },
    { category: 'Databases & Testing', items: ['PostgreSQL', 'MongoDB', 'Jest', 'Pytest', 'Appium'] },
    { category: 'Other Technologies', items: ['Stripe', 'Hyperwallet', 'LangChain', 'GraphQL', 'Browserstack'] }
  ];

  return (
    <section
      id="about"
      className={`py-20 px-6 ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Get to know more about my background, skills, and passion for software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              I'm a versatile and detail-oriented Fullstack Software Engineer with over 5 years of experience
              in startups and international environments. My journey spans from building critical payments
              infrastructure to developing cross-platform mobile applications that serve thousands of users.
            </p>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              My expertise lies in creating scalable backend systems, designing seamless user experiences,
              and managing cloud infrastructure. I have a track record of leading greenfield projects,
              implementing automation solutions, and integrating complex payment systems like Stripe and Hyperwallet.
            </p>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Based in Querétaro, Mexico, I've had the privilege of working remotely with international teams,
              particularly in San Francisco. I'm passionate about clean code, test-driven development, and
              building AI-powered solutions that automate complex workflows.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>5+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>20+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>15+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Technologies</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <h4 className={`font-semibold text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm rounded-full hover:scale-105 transition-transform ${darkMode
                        ? 'bg-slate-800 text-gray-200 border border-slate-700'
                        : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Download Resume Button */}
            <div className="pt-6">
              <a
                href="/resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${darkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
