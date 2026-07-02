import { isPlaceholder } from '../utils/links.js'

// Renders a real link when `href` has been filled in, or a clearly-marked,
// inert "#" placeholder when it's still in [BRACKETS] (Section 2: "no dead
// links"). Using href="#" with onClick preventDefault keeps it inert even
// under HashRouter, which otherwise treats "#..." as a route change.
export default function SmartLink({ href, children, className = '', ...rest }) {
  if (isPlaceholder(href)) {
    return (
      <a
        href="#"
        className={`link-placeholder ${className}`.trim()}
        aria-disabled="true"
        title="Link not set yet"
        onClick={(e) => e.preventDefault()}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}
