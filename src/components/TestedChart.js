import React from 'react'
import Chart from 'chart.js'
import { testedChartOptions } from 'constants/chart-options'

function TestedChart({ tested }) {
  const chartRef = React.useRef(null)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    new Chart(contextRef, {
      type: 'bar',
      data: {
        labels: tested.map(t => t.date),
        datasets: [
          {
            label: 'Tested',
            backgroundColor: 'rgba(226, 232, 240, 1)',
            borderColor: 'rgba(226, 232, 240, 1)',
            data: tested.map(t => t.tested),
          },
          {
            label: 'Positive',
            backgroundColor: 'rgba(254, 215, 215, 1)',
            borderColor: 'rgba(254, 215, 215, 1)',
            data: tested.map(t => t.testedPositive),
          },
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
