import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'
import { DarkModeProvider } from './context/DarkModeContext'

function App() {
  return (
    <DarkModeProvider>
      <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <CursorGlow />
        <BackToTop />
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App
