import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}

export default App;
