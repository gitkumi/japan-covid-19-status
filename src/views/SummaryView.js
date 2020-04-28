import React from 'react'
import SummaryChart from 'components/SummaryChart'
import SUMMARY_DATA from 'data/summary.json'

function SummaryView() {
  const cases = SUMMARY_DATA.map(summary => {
    return {
      label: summary.date,
      value: summary.data.cases
    }
  })

  const recovered = SUMMARY_DATA.map(summary => {
    return {
      label: summary.date,
      value: summary.data.recovered
    }
  })

  const deaths = SUMMARY_DATA.map(summary => {
    return {
      label: summary.date,
      value: summary.data.deaths
    }
  })

  const active = SUMMARY_DATA.map(summary => {
    return {
      label: summary.date,
      value: summary.data.active
    }
  })

  const newCases = SUMMARY_DATA.map(summary => {
    return {
      label: summary.date,
      value: summary.data.new
    }
  })

  const timeline = {
    cases: cases,
    active: active,
    recovered: recovered,
    deaths:  deaths,
    new: newCases
  }

  return (
    <section className="mb-6">
      <SummaryChart timeline={timeline} />
    </section>
  )
}

export default SummaryView
