import React from 'react'
import Chart from 'chart.js'
import { testedChartOptions } from 'constants/chart-options'

function TestedChart({ tested }) {
  const labels = tested.map(t => t.date)
  const data = tested.map(t => t.tested)

  const chartRef = React.useRef(null)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    new Chart(contextRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'PCR Tested',
            backgroundColor: 'rgba(254, 215, 215, 0.8)',
            borderColor: 'rgba(254, 215, 215, 1)',
            pointRadius: 1,
            hitRadius: 5,
            data: data,
          }
        ],
      },
      options: testedChartOptions,
    })
  })

  return (
    <div>
      <canvas height="150px" ref={chartRef} />
    </div>
  )
}

export default TestedChart
