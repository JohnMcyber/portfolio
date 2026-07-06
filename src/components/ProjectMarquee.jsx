import { projectShowcase } from '../data/projectShowcase.js'
import { useDragScroll } from '../hooks/useDragScroll.js'

// Decorative "more real work, not featured" strip below the 3-project
// grid — auto-scrolls, is grab-to-drag, fades at both edges. Deliberately
// distinct from ProjectCard (smaller, muted, per-item status tag, no
// links) so it reads as a teaser, not additional full case studies —
// the site still shows exactly 3 real case studies per CLAUDE.md Section 7.
export default function ProjectMarquee() {
  const ref = useDragScroll({ autoScrollSpeed: 0.6 })
  // Rendered twice back-to-back so the auto-scroll loop (see
  // useDragScroll) can jump back by exactly one copy's width and look
  // seamless.
  const items = [...projectShowcase, ...projectShowcase]

  return (
    <div className="marquee-wrap">
      <p className="marquee-caption">A few more, not written up yet</p>
      <div
        ref={ref}
        className="marquee drag-scroll"
        tabIndex={0}
        role="region"
        aria-label="Additional projects, not yet documented as full case studies"
      >
        {items.map((item, i) => (
          <div className="marquee__card" key={`${item.title}-${i}`} aria-hidden={i >= projectShowcase.length}>
            <span className="tag">{item.tag}</span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
