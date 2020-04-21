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
        stacked: true,
      },
    ],
  },
}

export const prefectureChartOptions = {
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

export const demographyChartOptions = {
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

export const testedChartOptions = {
  tooltips: {
    mode: 'index',
    intersect: false,
    itemSort: (arr) => arr,
    callbacks: {
      label: (tooltipItem)=> {
      const categories = new Map()
        .set(0, 'Positive')
        .set(1, 'Tested')

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