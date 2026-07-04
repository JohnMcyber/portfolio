import { useEffect, useRef, useState } from 'react'

// Watches an element and reports once it has ever scrolled into view.
// Fires only the first time — scrolling past it again doesn't retrigger.
export function useInViewOnce(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, options])

  return [ref, inView]
}
