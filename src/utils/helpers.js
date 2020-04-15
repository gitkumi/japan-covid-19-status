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