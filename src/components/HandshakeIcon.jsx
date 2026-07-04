// Simple original line-art handshake glyph (not traced from any stock
// image) — matches the site's existing minimal, monochrome icon style.
// Purely decorative, so hidden from assistive tech.
export default function HandshakeIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 18h13l7 7" />
      <path d="M44 18H31l-7 7" />
      <path d="M17 18l7 7 7-7" />
      <path d="M19 23l5 5 5-5" />
    </svg>
  )
}
