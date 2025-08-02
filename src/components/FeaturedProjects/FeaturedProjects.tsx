import { useTheme } from '../../ThemeContext';
import { useState } from 'react';

const FeaturedProjects = () => {
  const { darkMode } = useTheme();
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "A sophisticated analytics platform that transforms complex data into actionable insights using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "D3.js"],
      features: [
        "Real-time data visualization",
        "Predictive analytics engine",
        "Interactive dashboard widgets",
        "Custom report generation"
      ],
      status: "In Development",
      color: "from-blue-500 to-purple-600",
      icon: "🤖"
    },
    {
      id: 2,
      title: "EcoTrack Sustainability App",
      description: "A mobile-first application helping users track their carbon footprint and discover eco-friendly alternatives.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
      features: [
        "Carbon footprint calculator",
        "Eco-friendly location finder",
        "Social challenges & rewards",
        "Progress tracking & analytics"
      ],
      status: "Coming Soon",
      color: "from-green-500 to-emerald-600",
      icon: "🌱"
    },
    {
      id: 3,
      title: "CollabSpace Virtual Office",
      description: "A virtual workspace platform designed for remote teams, featuring immersive collaboration tools and spatial audio.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      technologies: ["WebRTC", "Three.js", "Socket.io", "Redis", "AWS"],
      features: [
        "3D virtual office spaces",
        "Spatial audio technology",
        "Real-time collaboration tools",
        "Customizable avatars"
      ],
      status: "Beta Testing",
      color: "from-purple-500 to-pink-600",
      icon: "🏢"
    }
  ];

  const comingSoonProjects = [
    {
      title: "Blockchain Portfolio Tracker",
      description: "Track your crypto investments with advanced portfolio analytics",
      icon: "₿",
      eta: "Q2 2024"
    },
    {
      title: "AR Interior Designer",
      description: "Visualize furniture in your space using augmented reality",
      icon: "🏠",
      eta: "Q3 2024"
    },
    {
      title: "Voice-Controlled Smart Home",
      description: "Complete IoT solution for modern smart homes",
      icon: "🏡",
      eta: "Q4 2024"
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-20 px-6 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-white via-blue-50/50 to-purple-50'
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-2 h-32 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-0 w-2 h-24 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Creative Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700">
            <span className="text-2xl animate-bounce">🎨</span>
            <span className={`font-bold text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Featured Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects That
            </span>
            <br />
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
              Inspire & Impact
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            From concept to code, these projects showcase my passion for creating 
            meaningful digital experiences ✨
          </p>
        </div>

        {/* Featured Projects Showcase */}
        <div className="mb-20">
          {/* Project Navigation */}
          <div className="flex justify-center mb-12">
            <div className={`flex p-2 rounded-2xl ${
              darkMode ? 'bg-gray-800/80' : 'bg-white/80'
            } backdrop-blur-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            } shadow-lg`}>
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    index === activeProject
                      ? `bg-gradient-to-r ${project.color} text-white shadow-lg`
                      : darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{project.icon}</span>
                  <span className="hidden sm:block">{project.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Project Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-500">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold ${
                  projects[activeProject].status === 'In Development'
                    ? 'bg-yellow-500 text-yellow-900'
                    : projects[activeProject].status === 'Beta Testing'
                      ? 'bg-blue-500 text-white'
                      : 'bg-green-500 text-white'
                } backdrop-blur-sm`}>
                  {projects[activeProject].status}
                </div>

                {/* Project Icon */}
                <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl">
                  {projects[activeProject].icon}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  {projects[activeProject].title}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {projects[activeProject].description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🛠️</span>
                  Built With:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        darkMode
                          ? 'bg-gray-800 text-gray-200 border border-gray-700'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      } hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✨</span>
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {projects[activeProject].features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className={`px-6 py-3 bg-gradient-to-r ${projects[activeProject].color} text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  View Project
                </button>
                <button className={`px-6 py-3 border-2 rounded-xl font-bold hover:scale-105 transition-all duration-300 ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}>
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className={`p-8 rounded-3xl ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700'
            : 'bg-gradient-to-br from-white/60 to-blue-50/60 border border-blue-200'
        } backdrop-blur-sm`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-3">
              <span className="text-3xl animate-pulse">🚧</span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Innovation in Progress
              </span>
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Exciting projects currently in development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoonProjects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  darkMode
                    ? 'bg-gray-800/40 border-gray-600 hover:border-gray-500'
                    : 'bg-white/40 border-gray-300 hover:border-gray-400'
                } backdrop-blur-sm`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                    {project.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {project.description}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    darkMode ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'
                  }`}>
                    ETA: {project.eta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className={`inline-flex items-center gap-4 p-6 rounded-2xl ${
            darkMode
              ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-700'
              : 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200'
          } backdrop-blur-sm`}>
            <span className="text-4xl animate-bounce">🚀</span>
            <div className="text-left">
              <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Have an exciting project in mind?
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Let's bring your ideas to life together!
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
