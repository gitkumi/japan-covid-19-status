export function uniqByKeepLast(a, key) {
  return [
      ...new Map(
          a.map(x => [key(x), x])
      ).values()
  ]
}

export function getPercentage(base, value) {
  return ((value / base) * 100).toFixed(2)
}

export function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const toShortDate = (dateString) => {
  const date = new Date(dateString)
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  return `${mo} ${da}, ${ye}`
}
export const toLongDate = (dateString) => {
  const date = new Date(dateString)
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(date)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  return `${mo} ${da}, ${ye}`
}