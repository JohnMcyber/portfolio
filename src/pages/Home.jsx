import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import LearningPath from '../components/LearningPath.jsx'
import Contact from '../components/Contact.jsx'
// Writeups stays unmounted here until the owner publishes a first real
// writeup — see components/Writeups.jsx and Section 8 decisions log.

export default function Home() {
  const location = useLocation()
  // Tracks whether we've already handled this visit's scrollTo request, so
  // we don't need to mutate location.state (doing so via navigate() would
  // re-trigger App.jsx's ScrollToTop and immediately undo this scroll).
  const handledScroll = useRef(false)

  // If Nav sent us here from another page with a section to jump to
  // (see Nav.jsx goToSection), scroll to it now that Home has rendered.
  useEffect(() => {
    const targetId = location.state?.scrollTo
    if (targetId && !handledScroll.current) {
      handledScroll.current = true
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <LearningPath />
      <Contact />
    </>
  )
}
