import React from 'react'
import Chart from 'chart.js'
import { prefectureChartOptions } from 'constants/chart-options'

function PrefectureChart({ prefecture }) {
  const chartRef = React.useRef(null)

  const chartLabels = prefecture.map(d => d.data.prefecture)
  const active = prefecture.map(d => d.data.active)
  const recovered = prefecture.map(d => d.data.recovered)
  const deaths = prefecture.map(d => d.data.deaths)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    new Chart(contextRef, {
      type: 'horizontalBar',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: 'active',
            backgroundColor: 'rgba(254, 215, 215, 0.9)',
            data: active,
          },
          {
            label: 'recovered',
            backgroundColor: 'rgba(154, 230, 180, 0.9)',
            data: recovered,
          },
          {
            label: 'deaths',
            backgroundColor: 'rgba(245, 101, 101, 0.9)',
            data: deaths,
          },
        ],
      },
      options: prefectureChartOptions,
    })
  })

  return (
    <div>
      <canvas height="500px" ref={chartRef} />
    </div>
  )
}

export default PrefectureChart
