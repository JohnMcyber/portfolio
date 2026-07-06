import { useState } from 'react'

// Renders the tool's logo if public/icons/<name>.png actually exists;
// falls back to the blank placeholder tile if it 404s (or hasn't been
// added yet) instead of showing a broken-image icon.
export default function ToolIcon({ src, alt }) {
  const [errored, setErrored] = useState(false)

  if (!src || errored) {
    return <span className="tool-tile__icon tool-tile__icon--empty" aria-hidden="true" />
  }

  return (
    <img
      src={src}
      alt={alt}
      className="tool-tile__icon"
      onError={() => setErrored(true)}
    />
  )
}
