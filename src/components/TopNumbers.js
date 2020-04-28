import React from 'react'
import NumberSummary from 'components/NumberSummary'

function TopNumbers({ total }) {
  const summaries = Object.entries(total)
    .map(arr => {
      return {
        key: arr[0],
        value: arr[1]
      }
    })

  return (
    <div className="flex overflow-auto md:justify-center mb-6">
      {summaries.map(summary => (
        <NumberSummary summary={summary} key={summary.key} cases={total.cases} />
      ))}
    </div>
  )
}

export default TopNumbers
