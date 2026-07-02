import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

// Resets scroll position on route changes (e.g. clicking a project card,
// or the prev/next links on a writeup page). Skipped when Home.jsx is
// about to scroll to a specific section itself (see Nav.jsx + Home.jsx).
function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) return
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.state])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <button
        type="button"
        className="skip-link"
        onClick={() => document.getElementById('main')?.focus()}
      >
        Skip to content
      </button>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
