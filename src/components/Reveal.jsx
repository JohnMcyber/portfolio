import { useInViewOnce } from '../hooks/useInView.js'

// Fades content up into place the first time it scrolls into view, rather
// than all at once on page load (the old .fade-in on the kicker pills
// fired on mount regardless of scroll position, so anything below the
// fold had already "revealed" itself before anyone ever saw it).
export default function Reveal({ as: Tag = 'div', className = '', children }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.12 })

  return (
    <Tag ref={ref} className={`reveal${inView ? ' in' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
