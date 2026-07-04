import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import LearningPath from '../components/LearningPath.jsx'
import Contact from '../components/Contact.jsx'
import SideNav from '../components/SideNav.jsx'
// Writeups stays unmounted here until the owner publishes a first real
// writeup — see components/Writeups.jsx and Section 8 decisions log.

export default function Home() {
  return (
    <>
      <SideNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <LearningPath />
      <Contact />
    </>
  )
}
