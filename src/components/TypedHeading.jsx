import { useEffect, useState } from 'react'
import { useInViewOnce } from '../hooks/useInView.js'

const MS_PER_CHAR = 55
const CURSOR_HOLD_MS = 3000

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

// Terminal-style typing effect for headings (Section 4.4 signature: mono
// labels styled like a terminal). Plays once when the heading scrolls into
// view. Reveals the text one character at a time via real state (not a CSS
// width/clip animation), because the cursor needs to sit right after
// whatever's been typed *so far* ("j_", "jo_", "joh_" ...) — a fixed-
// position cursor revealed by clipping only shows up once the clip
// boundary reaches it, i.e. at the very end, which is wrong.
//
// Accessibility: the heading's accessible name is set explicitly via
// aria-label to the full text, so screen readers announce it whole
// regardless of the mid-animation partial string; the animated visual
// content is aria-hidden. Reduced-motion visitors get the full text and
// no cursor from the very first render (computed in useState's
// initializer, not an effect) so there's no flash of partial text.
export default function TypedHeading({ as: Tag = 'h2', text, className = '' }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.4 })
  const [revealedCount, setRevealedCount] = useState(() =>
    prefersReducedMotion() ? text.length : 0
  )
  const [showCursor, setShowCursor] = useState(() => !prefersReducedMotion())

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return

    let charIndex = 0
    let hideTimer

    const typeInterval = setInterval(() => {
      charIndex += 1
      setRevealedCount(charIndex)
      if (charIndex >= text.length) {
        clearInterval(typeInterval)
        hideTimer = setTimeout(() => setShowCursor(false), CURSOR_HOLD_MS)
      }
    }, MS_PER_CHAR)

    return () => {
      clearInterval(typeInterval)
      clearTimeout(hideTimer)
    }
  }, [inView, text])

  return (
    <Tag ref={ref} className={`typed-heading ${className}`.trim()} aria-label={text}>
      <span aria-hidden="true">
        {text.slice(0, revealedCount)}
        <span className={`typed-heading__cursor${showCursor ? '' : ' is-hidden'}`}>
          _
        </span>
      </span>
    </Tag>
  )
}
