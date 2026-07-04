import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

// Resets scroll position on route changes (e.g. clicking a project card,
// or the prev/next links on a writeup page).
function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

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
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
    </>
  )
}
