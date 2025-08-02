import { useTheme } from '../../ThemeContext';
import { useState, useEffect } from 'react';

const About = () => {
  const { darkMode } = useTheme();
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    { 
      category: 'Frontend Magic', 
      emoji: '🎨',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      color: 'from-pink-500 to-purple-600'
    },
    { 
      category: 'Backend Wizardry', 
      emoji: '⚡',
      items: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
      color: 'from-green-500 to-blue-600'
    },
    { 
      category: 'Data Mastery', 
      emoji: '🗄️',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      category: 'DevOps & Tools', 
      emoji: '🚀',
      items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const personalityTraits = [
    { emoji: '🧠', label: 'Analytical Thinker', description: 'I love breaking down complex problems' },
    { emoji: '🎯', label: 'Detail-Oriented', description: 'Perfection is in the details' },
    { emoji: '🌱', label: 'Continuous Learner', description: 'Always exploring new technologies' },
    { emoji: '🤝', label: 'Team Player', description: 'Collaboration drives innovation' },
  ];

  return (
    <section 
      id="about" 
      className={`py-20 px-6 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Creative Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700">
            <span className="text-2xl animate-bounce">👨‍💻</span>
            <span className={`font-bold text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              About Me
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              The Story Behind
            </span>
            <br />
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
              The Code
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Every line of code tells a story. Here's mine - a journey of curiosity, 
            creativity, and countless cups of coffee ☕
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story with Interactive Elements */}
          <div className="space-y-8">
            {/* Story Cards */}
            <div className={`relative p-8 rounded-3xl ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80' 
                : 'bg-gradient-to-br from-white/80 to-blue-50/80'
            } backdrop-blur-sm border ${
              darkMode ? 'border-gray-700' : 'border-blue-200'
            } shadow-2xl group hover:scale-105 transition-all duration-500`}>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  My Journey
                </span>
              </h3>
              
              <div className="space-y-4">
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Started as a curious kid taking apart electronics, now I build digital experiences 
                  that millions might use. My journey through <span className="font-semibold text-blue-500">5+ years</span> of 
                  development has been filled with "aha!" moments and late-night debugging sessions.
                </p>
                
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  What drives me? The magical moment when complex problems become elegant solutions. 
                  I believe the best code is not just functional—it's <span className="font-semibold text-purple-500">beautiful</span>, 
                  <span className="font-semibold text-green-500"> maintainable</span>, and tells a story.
                </p>
              </div>
              
              {/* Floating Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                  <div className="text-3xl font-black text-blue-500">50+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Projects Built</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10">
                  <div className="text-3xl font-black text-green-500">∞</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Problems Solved</div>
                </div>
              </div>
            </div>

            {/* Personality Traits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalityTraits.map((trait, index) => (
                <div
                  key={trait.label}
                  className={`p-6 rounded-2xl border ${
                    darkMode 
                      ? 'bg-gray-800/60 border-gray-700 hover:border-gray-600' 
                      : 'bg-white/60 border-gray-200 hover:border-gray-300'
                  } backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group`}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {trait.emoji}
                  </div>
                  <h4 className="font-bold mb-2 text-sm">{trait.label}</h4>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Download Resume with Animated Button */}
            <div className="text-center pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download My Story
                  <span className="text-xl">📄</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Interactive Skills Showcase */}
          <div className="space-y-8">
            <div className={`p-8 rounded-3xl ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80' 
                : 'bg-gradient-to-br from-white/80 to-purple-50/80'
            } backdrop-blur-sm border ${
              darkMode ? 'border-gray-700' : 'border-purple-200'
            } shadow-2xl`}>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-3xl">⚡</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Technical Arsenal
                </span>
              </h3>

              {/* Skill Categories with Auto-Rotation */}
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div
                    key={skillGroup.category}
                    className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      index === activeSkill
                        ? `bg-gradient-to-r ${skillGroup.color} text-white border-transparent shadow-lg scale-105`
                        : darkMode 
                          ? 'bg-gray-700/50 border-gray-600 hover:border-gray-500' 
                          : 'bg-white/50 border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setActiveSkill(index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skillGroup.emoji}</span>
                        <h4 className="font-bold text-lg">{skillGroup.category}</h4>
                      </div>
                      
                      {index === activeSkill && (
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-300 ${
                            index === activeSkill
                              ? 'bg-white/20 text-white border border-white/30'
                              : darkMode 
                                ? 'bg-gray-600 text-gray-200' 
                                : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Progress Indicator */}
                    {index === activeSkill && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-b-2xl">
                        <div className="h-full bg-white rounded-b-2xl animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Skill Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {skills.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSkill(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeSkill
                        ? 'bg-purple-500 scale-125'
                        : darkMode
                          ? 'bg-gray-600 hover:bg-gray-500'
                          : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Fun Fact Card */}
            <div className={`p-6 rounded-2xl ${
              darkMode 
                ? 'bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-yellow-700' 
                : 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300'
            } border backdrop-blur-sm`}>
              <div className="flex items-start gap-4">
                <span className="text-4xl animate-bounce">💡</span>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-yellow-600 dark:text-yellow-400">
                    Fun Fact!
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                    I've debugged code at 3 AM with nothing but coffee and determination. 
                    The bug was a missing semicolon. True story! 😅
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
