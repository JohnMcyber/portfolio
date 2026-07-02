// A value like "[https://github.com/you]" is a placeholder the owner
// hasn't filled in yet. We detect it so placeholder links render as
// visibly inert instead of navigating somewhere broken.
export function isPlaceholder(value) {
  return typeof value === 'string' && value.startsWith('[') && value.endsWith(']')
}
