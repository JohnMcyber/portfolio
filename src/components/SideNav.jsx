import { useEffect, useState } from 'react'
import { scrollToId } from '../utils/scroll.js'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'learning', label: 'Learning' },
  { id: 'contact', label: 'Contact' },
]

// Fixed left-edge scroll-spy nav: a short tick line before each label
// that grows and brightens for whichever section is currently centered
// in the viewport — no connecting track line, no background fill, per
// the owner's reference. Home-page only — the sections it watches don't
// exist on the project writeup pages.
export default function SideNav() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    )
    if (elements.length === 0) return

    // A section counts as "active" once it's crossed the vertical center
    // band of the viewport, not merely visible at all.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        setActiveId(topMost.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))

    // Safety net for the last section: the observer's trigger band is a
    // thin 5vh slice of the viewport, and Contact doesn't have anything
    // below it (Footer is gone) to hand off an "entering" intersection
    // event to once scrolling stops at the very bottom of the page. If
    // the last event the observer happened to fire was "Learning
    // exiting" with no distinct "Contact entering" captured in the same
    // batch, activeId is left stuck on the previous section forever
    // (nothing further changes once scrolling stops). Explicitly force
    // the last section active whenever we're at (or essentially at) the
    // bottom of the page, overriding whatever the observer last said.
    function checkAtBottom() {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) setActiveId(SECTIONS[SECTIONS.length - 1].id)
    }
    window.addEventListener('scroll', checkAtBottom, { passive: true })
    checkAtBottom()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkAtBottom)
    }
  }, [])

  return (
    <nav className="side-nav" aria-label="Section">
      <ul className="side-nav__list">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              className={`side-nav__link${s.id === activeId ? ' is-active' : ''}`}
              onClick={() => scrollToId(s.id)}
            >
              <span className="side-nav__link-line" aria-hidden="true" />
              <span className="side-nav__link-label">{s.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
