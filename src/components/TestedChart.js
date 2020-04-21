import React from 'react'
import Chart from 'chart.js'
import { testedChartOptions } from 'constants/chart-options'

function TestedChart({ tested, cases }) {
  const labels = tested.map(t => t.date)
  const testedData = tested.map(t => t.tested)
  const casesData = cases.map(t => t.cases)

  const chartRef = React.useRef(null)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    new Chart(contextRef, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Positive',
            backgroundColor: 'rgba(246, 173, 85, 0.8)',
            borderColor: 'rgba(246, 173, 85, 1)',
            pointRadius: 1,
            hitRadius: 5,
            data: casesData,
          },
          {
            label: 'PCR Tested',
            backgroundColor: 'rgba(226, 232, 240, 0.8)',
            borderColor: 'rgba(226, 232, 240, 1)',
            pointRadius: 1,
            hitRadius: 5,
            data: testedData,
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
