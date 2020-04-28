import React from 'react'
import Chart from 'chart.js'
import { formatNumber } from 'utils/helpers'

const symptomsChartOptions = {
  tooltips: {
    mode: 'index',
    intersect: false,
    itemSort: (arr) => arr,
    callbacks: {
      label: (tooltipItem)=> {
      const categories = new Map()
        .set(0, 'Asymptomatic')
        .set(1, 'Symptomatic')

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
            const currentDate = new Date(value)
            currentDate.toLocaleDateString('en-US')

            return index % 2 !== 1 ? value.replace('2020/', '') : ''
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

function SymptomsChart({ symptoms }) {
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

export default SymptomsChart
