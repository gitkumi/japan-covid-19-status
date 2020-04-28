import React from 'react'
import { getPercentage, formatNumber } from 'utils/helpers'

const SUMMARY_COLORS = new Map()
  .set('cases', 'text-red-200')
  .set('new', 'text-orange-500')
  .set('active', 'text-orange-300')
  .set('recovered', 'text-green-300')
  .set('deaths', 'text-red-500')

function getColor(key) {
  return SUMMARY_COLORS.get(key)
}

function NumberSummary({ summary, cases }) {
  const shouldShowPercentage = (key) => {
    return !(key === 'cases')
  }

  return (
    <article className="flex flex-col mr-6 lg:mr-12 last:mr-0">
      <span className="uppercase text-sm font-medium tracking-wider">
        {summary.key}
      </span>
      <div>
        <span className={`tracking-tighter text-2xl lg:text-3xl ${getColor(summary.key)}`}>{formatNumber(summary.value)}</span>
        { shouldShowPercentage(summary.key) ? <span className={`ml-2 text-sm font-medium ${getColor(summary.key)}`}>({getPercentage(cases, summary.value)}%)</span> : null} 
      </div>
    </article>
  )
}

export default NumberSummary
