import React from 'react'
import Chart from 'chart.js'
import { formatNumber } from 'utils/helpers'
import TIMELINE from 'data/timeline.json'

function TimelineChart({ events, updateFeatured }) {
  const timelineChartOptions = {
    tooltips: {
      mode: 'index',
      intersect: false,
      itemSort: (arr) => arr,
      callbacks: {
        label: (tooltipItem) => {
          const date = tooltipItem.label

          const event = TIMELINE.find(t => t.date === date)
          if (!!event) {
            updateFeatured(event)
          }

          return tooltipItem.datasetIndex !== 0 ? `Cases: ${formatNumber(tooltipItem.value)}` : ''
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
        },
      ],
    },
  }

  const chartRef = React.useRef(null)

  React.useEffect(() => {
    const contextRef = chartRef.current.getContext('2d')

    const eventData = events.map(e => e.hasEvent ? Number(e.value) + 500 : 0)

    new Chart(contextRef, {
      data: {
        labels: events.map(e => e.label),
        datasets: [
          {
            type: 'scatter',
            label: 'Events',
            backgroundColor: '#63b3ed',
            data: eventData,
            pointRadius: eventData.map(val => val !== 0 ? 2 : 0),
            hitRadius: eventData.map(val => val !== 0 ? 1 : 0),
            hoverRadius: eventData.map(val => val !== 0 ? 4 : 0),
          },
          {
            type: 'line',
            label: 'Cases',
            backgroundColor: 'rgba(254, 215, 215, 0.8)',
            data: events.map(e => e.value),
            pointRadius: 0,
            hoverRadius: 0
          }
        ],
      },
      options: timelineChartOptions
    })
  })

  return (
    <div>
      <canvas height="100px" ref={chartRef} />
    </div>
  )
}

export default TimelineChart
