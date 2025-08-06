import { useTheme } from '../../ThemeContext';

const FeaturedProjects = () => {
  const { darkMode } = useTheme();

  return (
    <section 
      id="projects" 
      className={`py-20 px-6 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my best work and the technologies I've used to bring ideas to life
          </p>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 ${
            darkMode ? 'bg-slate-800' : 'bg-gray-200'
          }`}>
            <svg 
              className={`w-16 h-16 ${darkMode ? 'text-slate-600' : 'text-gray-400'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
              />
            </svg>
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Projects Coming Soon
          </h3>
          
          <p className={`text-center max-w-md mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I'm currently working on showcasing my best projects here. Each project will include 
            detailed case studies, live demos, and source code links.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {/* Placeholder Project Cards */}
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className={`p-6 rounded-lg border-2 border-dashed hover:border-blue-500 transition-colors ${
                  darkMode 
                    ? 'border-slate-600 bg-slate-800/30' 
                    : 'border-gray-300 bg-gray-100/50'
                }`}
              >
                <div className={`w-full h-48 rounded-lg mb-4 flex items-center justify-center ${
                  darkMode ? 'bg-slate-700' : 'bg-gray-200'
                }`}>
                  <svg 
                    className={`w-12 h-12 ${darkMode ? 'text-slate-600' : 'text-gray-400'}`} 
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
                  <div className={`h-4 rounded animate-pulse ${
                    darkMode ? 'bg-slate-700' : 'bg-gray-300'
                  }`}></div>
                  <div className={`h-3 w-3/4 rounded animate-pulse ${
                    darkMode ? 'bg-slate-700' : 'bg-gray-300'
                  }`}></div>
                  <div className={`h-3 w-1/2 rounded animate-pulse ${
                    darkMode ? 'bg-slate-700' : 'bg-gray-300'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <p className={`text-sm mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              In the meantime, check out my GitHub for current projects
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                darkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Visit GitHub
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
