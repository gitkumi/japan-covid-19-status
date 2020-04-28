import React from 'react'
import Chart from 'chart.js'
import { formatNumber } from 'utils/helpers'

const prefectureChartOptions = {
  tooltips: {
    mode: 'index',
    intersect: false,
    itemSort: (arr) => arr,
    callbacks: {
      label: (tooltipItem) => {
        const categories = new Map()
          .set(0, 'Active')
          .set(1, 'Recovered')
          .set(2, 'Deaths')

        const category = categories.get(tooltipItem.datasetIndex)
        return `${category}: ${formatNumber(tooltipItem.value)}`
      }
    }
  },
  hover: {
    mode: 'index',
    intersect: false,
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          callback: value => formatNumber(value),
          fontColor: '#a0aec0'
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          callback: value => value,
          fontColor: '#a0aec0'
        },
      },
    ],
  },
}


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
            label: 'Active',
            backgroundColor: 'rgba(251, 211, 141, 1)',
            data: active,
          },
          {
            label: 'Recovered',
            backgroundColor: 'rgba(154, 230, 180, 1)',
            data: recovered,
          },
          {
            label: 'Deaths',
            backgroundColor: 'rgba(245, 101, 101, 1)',
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
