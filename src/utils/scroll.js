// Smoothly scrolls to a section by id, unless the visitor has asked the OS
// for reduced motion (accessibility floor, Section 2).
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches
  el.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}
