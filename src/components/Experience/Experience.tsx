import { useTheme } from '../../ThemeContext';
import { useState } from 'react';

const Experience = () => {
  const { darkMode } = useTheme();
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: '🌉 San Francisco, CA',
      description: 'Leading a talented team in crafting scalable web applications that serve millions of users. Turning complex problems into elegant solutions.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      achievements: [
        'Boosted performance by 40% through smart optimization',
        'Led a dream team of 5 developers on product redesign',
        'Streamlined deployments with CI/CD magic'
      ],
      color: 'from-blue-500 to-purple-600',
      icon: '🚀'
    },
    {
      id: 2,
      company: 'Digital Innovations Inc',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: '🤠 Austin, TX',
      description: 'Built amazing digital experiences from scratch. Collaborated with cross-functional teams to bring innovative ideas to life.',
      technologies: ['Vue.js', 'Python', 'Django', 'Docker', 'MongoDB'],
      achievements: [
        'Shipped 15+ responsive web applications',
        'Elevated code quality from 60% to 95%',
        'Reduced bugs by 50% with better testing'
      ],
      color: 'from-green-500 to-blue-600',
      icon: '💡'
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: '🌍 Remote',
      description: 'Focused on creating pixel-perfect user interfaces that users actually love. Made complex interactions feel simple and intuitive.',
      technologies: ['React', 'JavaScript', 'Sass', 'Firebase'],
      achievements: [
        'Increased user engagement by 30%',
        'Built a comprehensive design system',
        'Reduced bounce rate by 25%'
      ],
      color: 'from-pink-500 to-red-600',
      icon: '🎨'
    },
    {
      id: 4,
      company: 'WebDev Agency',
      position: 'Junior Developer',
      period: '2018 - 2019',
      location: '🗽 New York, NY',
      description: 'Where it all began! Started my professional journey building websites and falling in love with clean, maintainable code.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: [
        'Delivered 20+ client projects successfully',
        'Mastered 5+ programming languages',
        'Earned "Rising Star" recognition'
      ],
      color: 'from-yellow-500 to-orange-600',
      icon: '⭐'
    }
  ];

  return (
    <section 
      id="experience" 
      className={`py-20 px-6 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-100"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-0 right-1/3 w-4 h-4 bg-green-400 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Creative Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-700">
            <span className="text-2xl animate-bounce">💼</span>
            <span className={`font-bold text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Experience
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              My Professional
            </span>
            <br />
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
              Adventure
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            From junior developer to senior engineer - here's how I've grown, 
            learned, and made impact along the way 🚀
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Central Timeline Line - Hidden on mobile */}
          <div className={`absolute left-1/2 top-0 bottom-0 w-1 ${
            darkMode ? 'bg-gradient-to-b from-purple-500 to-blue-500' : 'bg-gradient-to-b from-blue-400 to-purple-400'
          } hidden lg:block transform -translate-x-1/2 rounded-full`}></div>

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveExp(index)}
              >
                {/* Timeline Node - Hidden on mobile */}
                <div className={`hidden lg:flex absolute left-1/2 w-16 h-16 rounded-full border-4 ${
                  activeExp === index
                    ? 'border-white bg-gradient-to-r ' + exp.color + ' scale-125 shadow-2xl'
                    : darkMode
                      ? 'border-gray-600 bg-gray-800'
                      : 'border-gray-300 bg-white'
                } transform -translate-x-1/2 z-20 items-center justify-center text-2xl transition-all duration-500`}>
                  <span className={activeExp === index ? 'animate-bounce' : ''}>{exp.icon}</span>
                </div>

                {/* Content Card */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  <div className={`group p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                    activeExp === index
                      ? `bg-gradient-to-br ${exp.color} text-white border-transparent shadow-2xl scale-105`
                      : darkMode
                        ? 'bg-gray-800/80 border-gray-700 hover:border-gray-600 backdrop-blur-sm'
                        : 'bg-white/80 border-gray-200 hover:border-gray-300 backdrop-blur-sm shadow-lg'
                  }`}>
                    
                    {/* Company Header */}
                    <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse lg:text-right'}`}>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
                        activeExp === index 
                          ? 'bg-white/20' 
                          : darkMode 
                            ? 'bg-gray-700' 
                            : 'bg-gray-100'
                      }`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                        <h4 className="text-lg font-semibold opacity-90">{exp.company}</h4>
                        <div className="flex items-center gap-4 mt-2 text-sm opacity-75">
                          <span>{exp.period}</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed mb-6 opacity-90">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-sm opacity-75">
                        🛠️ Tech Stack:
                      </h5>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-sm rounded-full font-medium ${
                              activeExp === index
                                ? 'bg-white/20 border border-white/30'
                                : darkMode
                                  ? 'bg-gray-700 text-gray-200'
                                  : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold mb-3 text-sm opacity-75">
                        🏆 Key Wins:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className={`text-sm opacity-90 flex items-start gap-2 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse lg:text-right'}`}
                          >
                            <span className="text-lg">✨</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Effect Overlay */}
                    {activeExp !== index && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                    )}
                  </div>
                </div>

                {/* Spacer for layout */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Navigation */}
        <div className="flex justify-center gap-3 mt-16">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveExp(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeExp
                  ? `bg-gradient-to-r ${experiences[index].color} scale-125 shadow-lg`
                  : darkMode
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className={`inline-flex items-center gap-4 p-6 rounded-2xl ${
            darkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
          }`}>
            <span className="text-3xl animate-pulse">📋</span>
            <div className="text-left">
              <p className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Want the full story?
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Download my detailed resume
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
