import { useTheme } from '../../ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
    { category: 'Tools & DevOps', items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes'] }
  ];

  return (
    <section 
      id="about" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience in creating 
              digital solutions that make a difference. My journey started with a curiosity about 
              how things work under the hood, which led me to dive deep into the world of programming.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              What drives me is the ability to transform complex problems into elegant, user-friendly 
              solutions. I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies and best practices in software development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I'm always eager to take on 
              new challenges and collaborate with like-minded individuals.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-200 border border-gray-600' 
                          : 'bg-white text-gray-700 border border-gray-300'
                      } hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Download Resume Button */}
            <div className="pt-6">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
