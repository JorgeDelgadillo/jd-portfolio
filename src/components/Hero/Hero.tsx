import { useTheme } from '../../ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📱' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'Tailwind CSS', icon: '🎨' }
  ];

  return (
    <section 
      id="hero" 
      className={`min-h-screen flex items-center justify-center px-6 py-20 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              darkMode 
                ? 'from-blue-400 to-blue-600' 
                : 'from-blue-600 to-purple-600'
            }`}>
              Jorge Delgadillo
            </span>
          </h1>
          <p className={`text-xl md:text-2xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Full Stack Developer & Software Engineer
          </p>
          <p className={`text-lg max-w-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            I'm passionate about building scalable web applications and solving complex problems 
            with clean, efficient code. Welcome to my digital portfolio where creativity meets functionality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700`}
            >
              View My Work
            </a>
            <a
              href="#footer"
              className={`px-8 py-3 border-2 rounded-lg font-semibold transition-colors ${
                darkMode 
                  ? 'border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              Get In Touch
            </a>
          </div>

          {/* Technologies */}
          <div className="pt-8">
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform ${
                    darkMode 
                      ? 'bg-slate-800 text-gray-200 border border-slate-700' 
                      : 'bg-gray-100 text-gray-700 border border-gray-200'
                  }`}
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo/Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className={`w-80 h-80 rounded-full overflow-hidden shadow-2xl ${
              darkMode ? 'ring-4 ring-slate-700' : 'ring-4 ring-gray-200'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Jorge Delgadillo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-pulse bg-blue-500"></div>
            <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-pulse delay-300 ${
              darkMode ? 'bg-blue-400' : 'bg-purple-500'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
