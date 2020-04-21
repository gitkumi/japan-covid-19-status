import React from 'react'
import Chart from 'chart.js'
import { demographyChartOptions } from 'constants/chart-options'

function DemographyChart({ demography }) {
  const chartRef = React.useRef(null)

  const chartLabels = demography.map(d => d.generation)

  const deaths = demography.map(d => d.deaths)
  const infected = demography.map(d => d.others)
  const serious = demography.map(d => d.serious)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    new Chart(contextRef, {
      type: 'horizontalBar',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: 'infected',
            backgroundColor: 'rgba(254, 215, 215, 1)',
            data: infected,
          },
          {
            label: 'serious',
            backgroundColor: 'rgba(252, 129, 129, 1)',
            data: serious,
          },
          {
            label: 'deaths',
            backgroundColor: 'rgba(229, 62, 62, 1)',
            data: deaths,
          },
        ],
      },
      options: demographyChartOptions,
    })
  })


  return (
    <div>
      <canvas height="150px" ref={chartRef} />
    </div>
  )
}

export default DemographyChart
