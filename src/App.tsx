import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ResumePage from './pages/ResumePage'

const App = () => {
  const params = new URLSearchParams(window.location.search)
  const view = params.get('view')

  if (view === 'resume') {
    return (
      <ResumePage
        onBack={() => {
          window.location.href = '/'
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App