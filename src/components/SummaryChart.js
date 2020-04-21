import React from 'react'
import Chart from 'chart.js'
import { summaryChartOptions } from 'constants/chart-options'

function SummaryChart({ timeline }) {
  const japanActive = timeline.active
  const japanRecovered = timeline.recovered
  const japanDeaths = timeline.deaths

  const chartRef = React.useRef(null)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    new Chart(contextRef, {
      type: 'line',
      data: {
        labels: [...japanActive.map(t => t.label)],
        datasets: [
          {
            label: 'Deaths',
            backgroundColor: 'rgba(245, 101, 101, 1)',
            borderColor: 'rgba(245, 101, 101, 1)',
            pointRadius: 1,
            hitRadius: 5,
            data: japanDeaths.map(t => t.value),
          },
          {
            label: 'Recovered',
            backgroundColor: 'rgba(154, 230, 180, 1)',
            borderColor: 'rgba(154, 230, 180, 1)',
            pointRadius: 1,
            hitRadius: 5,
            data: japanRecovered.map(t => t.value),
          },
          {
            label: 'Active',
            backgroundColor: 'rgba(251, 211, 141, 1)',
            borderColor: 'rgba(251, 211, 141, 1)',
            pointRadius: 1,
            hitRadius: 5,
            data: japanActive.map(t => t.value),
          },
        ],
      },
      options: summaryChartOptions,
    })
  })

  return (
    <div>
      <canvas height="225px" ref={chartRef} />
    </div>
  )
}

export default SummaryChart
