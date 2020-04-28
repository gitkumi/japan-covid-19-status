import React from 'react'
import Chart from 'chart.js'
import { formatNumber } from 'utils/helpers'

export const summaryChartOptions = {
  tooltips: {
    mode: 'index',
    intersect: false,
    itemSort: (arr) => arr,
    callbacks: {
      title: (items, data) => {
        const date = items[2].label
        const deaths = data.datasets[items[0].datasetIndex].data[items[0].index]
        const recovered = data.datasets[items[1].datasetIndex].data[items[0].index]
        const active = data.datasets[items[2].datasetIndex].data[items[0].index]
        const cases = Number(deaths) + Number(recovered) + Number(active)
        return `${date} - Cases: ${formatNumber(cases)}`
      },
      label: (tooltipItem) => {
        const categories = new Map()
          .set(0, 'Deaths')
          .set(1, 'Recovered')
          .set(2, 'Active')

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
    display: false,
    // onHover: (e) => {
    //    e.target.style.cursor = 'pointer'
    // },
    // labels: {
    //   fontColor: '#f7fafc',
    // },
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          callback: (value, index, dataSet) => {
            const shouldShow = index === 0 
            || index === dataSet.length - 1
            || index % 2 === 0

            return shouldShow ? value.replace('2020/', '') : ''
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
        stacked: true,
      },
    ],
  },
}

function SummaryChart({ timeline }) {
  const japanActive = timeline.active
  const japanRecovered = timeline.recovered
  const japanDeaths = timeline.deaths

  const chartRef = React.useRef(null)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    new Chart(contextRef, {
      type: 'line',
      data: {
        labels: [...japanActive.map(t => t.label)],
        datasets: [
          {
            label: 'Deaths',
            backgroundColor: 'rgba(245, 101, 101, 1)',
            borderColor: 'rgba(245, 101, 101, 1)',
            pointRadius: 0,
            hitRadius: 5,
            data: japanDeaths.map(t => t.value),
          },
          {
            label: 'Recovered',
            backgroundColor: 'rgba(154, 230, 180, 1)',
            borderColor: 'rgba(154, 230, 180, 1)',
            pointRadius: 0,
            hitRadius: 5,
            data: japanRecovered.map(t => t.value),
          },
          {
            label: 'Active',
            backgroundColor: 'rgba(251, 211, 141, 1)',
            borderColor: 'rgba(251, 211, 141, 1)',
            pointRadius: 0,
            hitRadius: 5,
            data: japanActive.map(t => t.value),
          },
        ],
      },
      options: summaryChartOptions,
    })
  })

  return (
    <div>
      <canvas height="225px" ref={chartRef} />
    </div>
  )
}

export default SummaryChart
