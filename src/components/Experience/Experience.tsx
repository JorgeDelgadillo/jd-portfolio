import { useTheme } from '../../ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();

  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      achievements: [
        'Reduced page load times by 40% through optimization',
        'Led a team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      company: 'Digital Innovations Inc',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Austin, TX',
      description: 'Developed and maintained multiple client applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      technologies: ['Vue.js', 'Python', 'Django', 'Docker', 'MongoDB'],
      achievements: [
        'Built 15+ responsive web applications',
        'Improved code coverage from 60% to 95%',
        'Reduced bug reports by 50% through better testing'
      ]
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'Remote',
      description: 'Focused on building responsive user interfaces and improving user experience. Worked closely with designers to implement pixel-perfect designs.',
      technologies: ['React', 'JavaScript', 'Sass', 'Firebase'],
      achievements: [
        'Increased user engagement by 30%',
        'Implemented responsive design system',
        'Reduced bounce rate by 25%'
      ]
    },
    {
      id: 4,
      company: 'WebDev Agency',
      position: 'Junior Developer',
      period: '2018 - 2019',
      location: 'New York, NY',
      description: 'Started my professional journey building websites and learning best practices in web development. Gained experience in multiple programming languages and frameworks.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: [
        'Completed 20+ client projects',
        'Learned 5+ programming languages',
        'Received "Rising Star" award'
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise in full-stack development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          } hidden md:block`}></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className="md:ml-20 flex-1">
                  <div className={`p-6 rounded-lg shadow-lg ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                  } hover:shadow-xl transition-shadow`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold mb-1">{exp.company}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                      } mt-2 sm:mt-0 self-start`}>
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 text-sm text-gray-700 dark:text-gray-300">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded ${
                              darkMode 
                                ? 'bg-gray-700 text-gray-200' 
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold mb-2 text-sm text-gray-700 dark:text-gray-300">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to know more about my professional background?
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
