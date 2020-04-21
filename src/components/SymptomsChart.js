import React from 'react'
import Chart from 'chart.js'
import { symptomsChartOptions } from 'constants/chart-options'

function SummaryChart({ symptoms }) {
  const chartRef = React.useRef(null)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    new Chart(contextRef, {
      type: 'bar',
      data: {
        labels: [...symptoms.map(s => s.label)],
        datasets: [
          {
            label: 'Asymptomatic',
            backgroundColor: 'rgba(226, 232, 240, 1)',
            borderColor: 'rgba(226, 232, 240, 1)',
            data: symptoms.map(s => s.asymptomatic),
          },
          {
            label: 'Symptomatic',
            backgroundColor: 'rgba(254, 215, 215, 1)',
            borderColor: 'rgba(254, 215, 215, 1)',
            data: symptoms.map(s => s.symptomatic),
          }
        ],
      },
      options: symptomsChartOptions,
    })
  })

  return (
    <div>
      <canvas height="150px" ref={chartRef} />
    </div>
  )
}

export default SummaryChart
