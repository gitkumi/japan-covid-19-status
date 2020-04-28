import React from 'react'
import { getPercentage, formatNumber } from 'utils/helpers'
import SUMMARY_DATA from 'data/summary.json'

const SUMMARY_COLORS = new Map()
  .set('cases', 'text-red-200')
  .set('active', 'text-orange-300')
  .set('recovered', 'text-green-300')
  .set('deaths', 'text-red-500')

function getColor(key) {
  return SUMMARY_COLORS.get(key)
}

function NumberSummary({ summary, cases }) {
  const isCases = (key) => {
    return key === 'cases'
  }

  const getLatestNew = () => {
    const value = SUMMARY_DATA[SUMMARY_DATA.length - 1].data.new
    return value > 0 ? `+${value}` : null
  }

  return (
    <article className="flex flex-col mr-6 lg:mr-12 last:mr-0">
      <span className="uppercase text-sm font-medium tracking-wider">
        {summary.key}
      </span>
      <div>
        <span className={`tracking-tighter text-2xl lg:text-3xl ${getColor(summary.key)}`}>{formatNumber(summary.value)}</span>
        { !isCases(summary.key) ? <span className={`ml-2 text-sm font-medium ${getColor(summary.key)}`}>({getPercentage(cases, summary.value)}%)</span> : null} 
        { isCases(summary.key) ? <span className="ml-2 text-sm font-medium text-red-400">{getLatestNew()}</span> : null}
      </div>
    </article>
  )
}

export default NumberSummary
