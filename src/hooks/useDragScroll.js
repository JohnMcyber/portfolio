import { useEffect, useRef } from 'react'

// Makes a horizontally-scrollable container mouse-draggable (grab and
// pan, like a filmstrip), optionally auto-scrolls it, and optionally
// redirects vertical wheel/trackpad input into horizontal scroll so
// interacting with it doesn't scroll the page. Touch/pen pointers are
// left alone entirely for the drag part — those already get native
// horizontal swipe scrolling from overflow-x:auto, and fighting that
// with JS-driven scrollLeft would just make it janky.
//
// autoScrollSpeed (px/frame) expects the rendered content to be
// duplicated back-to-back by the caller (two copies of the same items)
// — once scrolled exactly one copy's width, it jumps back by that same
// width, which looks seamless because the content repeats identically.
export function useDragScroll({ enableWheel = true, autoScrollSpeed = 0 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDragging = false
    let dragged = false
    let startX = 0
    let startScrollLeft = 0
    let paused = false
    let rafId = null

    function onPointerDown(e) {
      if (e.pointerType !== 'mouse') return
      isDragging = true
      dragged = false
      paused = true
      startX = e.clientX
      startScrollLeft = el.scrollLeft
      el.setPointerCapture(e.pointerId)
      el.classList.add('is-dragging')
    }

    function onPointerMove(e) {
      if (!isDragging) return
      const dx = e.clientX - startX
      if (Math.abs(dx) > 3) dragged = true
      el.scrollLeft = startScrollLeft - dx
    }

    function onPointerUp(e) {
      if (!isDragging) return
      isDragging = false
      paused = el.matches(':hover')
      el.releasePointerCapture(e.pointerId)
      el.classList.remove('is-dragging')
    }

    // A drag that happened to end over a link shouldn't also fire that
    // link's click.
    function onClickCapture(e) {
      if (dragged) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    function onWheel(e) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return // real horizontal gesture, leave it
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }

    function onMouseEnter() {
      paused = true
    }

    function onMouseLeave() {
      if (!isDragging) paused = false
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
    el.addEventListener('click', onClickCapture, true)
    if (enableWheel) el.addEventListener('wheel', onWheel, { passive: false })

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (autoScrollSpeed > 0 && !prefersReducedMotion) {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)

      const tick = () => {
        if (!paused) {
          el.scrollLeft += autoScrollSpeed
          const halfway = el.scrollWidth / 2
          if (el.scrollLeft >= halfway) el.scrollLeft -= halfway
        }
        rafId = requestAnimationFrame(tick)
      }
      rafId = requestAnimationFrame(tick)
    }

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
      el.removeEventListener('click', onClickCapture, true)
      if (enableWheel) el.removeEventListener('wheel', onWheel)
      el.removeEventListener('mouseenter', onMouseEnter)
      el.removeEventListener('mouseleave', onMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [enableWheel, autoScrollSpeed])

  return ref
}
