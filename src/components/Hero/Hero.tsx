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
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jorge Delgadillo
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg">
            I'm passionate about building scalable web applications and solving complex problems 
            with clean, efficient code. Welcome to my digital portfolio where creativity meets functionality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#footer"
              className={`px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors ${
                darkMode ? 'hover:text-white' : ''
              }`}
            >
              Get In Touch
            </a>
          </div>

          {/* Technologies */}
          <div className="pt-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode 
                      ? 'bg-gray-800 text-gray-200 border border-gray-700' 
                      : 'bg-gray-100 text-gray-700 border border-gray-200'
                  } hover:scale-105 transition-transform`}
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
            <div className={`w-80 h-80 rounded-full overflow-hidden ${
              darkMode ? 'ring-4 ring-gray-700' : 'ring-4 ring-gray-200'
            } shadow-2xl`}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Jorge Delgadillo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
