import React from 'react'
import Chart from 'chart.js'
import { formatNumber } from 'utils/helpers'

const testedChartOptions = {
  tooltips: {
    mode: 'index',
    intersect: false,
    itemSort: (arr) => arr,
    callbacks: {
      label: (tooltipItem)=> {
      const categories = new Map()
        .set(0, 'Tested')
        .set(1, 'Positive')

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
        gridLines: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          callback: (value, index) => {
            return index % 3 === 0 ? value.replace('2020/', '') : ''
          },
          fontColor: '#a0aec0'
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          callback: value => formatNumber(value),
          fontColor: '#a0aec0'
        },
      },
    ],
  },
}

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
