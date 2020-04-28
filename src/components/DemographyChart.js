import React from 'react'
import Chart from 'chart.js'
import { formatNumber } from 'utils/helpers'

const demographyChartOptions = {
  tooltips: {
    mode: 'index',
    intersect: false,
    itemSort: (arr) => arr,
    callbacks: {
      label: (tooltipItem) => {
        const categories = new Map()
          .set(0, 'Infected')
          .set(1, 'Serious')
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
