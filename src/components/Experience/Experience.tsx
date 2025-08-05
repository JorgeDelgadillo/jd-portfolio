import { useTheme } from '../../ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();

  const experiences = [
    {
      id: 1,
      company: 'Instawork',
      position: 'Software Engineer',
      period: 'Dec 2021 – May 2025',
      location: 'San Francisco, CA (Remote from Mexico)',
      description: 'Maintained and supported critical Payments infrastructure using Python (Stripe, Hyperwallet). Built native Android and iOS components and integrated with React Native.',
      technologies: ['Python', 'React Native', 'Kotlin', 'Swift', 'Stripe', 'Hyperwallet', 'LangChain'],
      achievements: [
        'Maintained critical Payments infrastructure using Python (Stripe, Hyperwallet)',
        'Implemented banking services module including transactions, 2FA, and card support',
        'Built native Android and iOS components (Kotlin/Swift) integrated with React Native',
        'Designed custom AI agents with LangChain for internal automation',
        'Led greenfield projects, refactors, and module removals',
        'Built end-to-end testing flows with Appium and Browserstack'
      ]
    },
    {
      id: 2,
      company: 'Stateoftheart.ai',
      position: 'Fullstack Developer',
      period: 'Aug 2020 – Nov 2021',
      location: 'Querétaro, Mexico',
      description: 'Developed fullstack features for web applications using React. Maintained Dockerized services and basic AWS infrastructure.',
      technologies: ['React', 'Docker', 'AWS', 'TypeScript', 'Python'],
      achievements: [
        'Developed fullstack features for web applications using React',
        'Maintained Dockerized services and basic AWS infrastructure',
        'Contributed across frontend/backend layers for fast-paced deployments'
      ]
    },
    {
      id: 3,
      company: 'Corebooks',
      position: 'Software Developer',
      period: 'Jan 2019 – Jun 2020',
      location: 'Celaya, Mexico',
      description: 'Built cross-platform mobile point-of-sale system with React Native for mobile and React for web. Integrated Stripe payments and created ERP modules in Odoo.',
      technologies: ['React Native', 'React', 'Python', 'Stripe', 'Odoo'],
      achievements: [
        'Built cross-platform mobile point-of-sale system with React Native',
        'Developed web version using React',
        'Integrated Stripe payments for transaction processing',
        'Created ERP modules in Odoo using Python'
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My journey through various roles and companies, building expertise in full-stack development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 hidden md:block ${
            darkMode ? 'bg-slate-700' : 'bg-gray-300'
          }`}></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row gap-8">
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-6 w-4 h-4 rounded-full border-4 z-10 ${
                  darkMode 
                    ? 'bg-blue-600 border-black' 
                    : 'bg-blue-600 border-white'
                }`}></div>

                {/* Content */}
                <div className="md:ml-20 flex-1">
                  <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                    darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold mb-1">{exp.company}</h4>
                        <p className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{exp.location}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0 self-start ${
                        darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className={`font-semibold mb-2 text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded ${
                              darkMode 
                                ? 'bg-slate-800 text-gray-200' 
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
                      <h5 className={`font-semibold mb-2 text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className={`text-sm flex items-start gap-2 ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            <span className={`mt-1 ${
                              darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>•</span>
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

        {/* View Resume CTA */}
        <div className="text-center mt-16">
          <p className={`mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Want to know more about my professional background?
          </p>
          <a 
            href="/resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 ${
            darkMode 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
