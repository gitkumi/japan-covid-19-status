import React from 'react'
import TopNumbers from 'components/TopNumbers'
import SUMMARY_DATA from 'data/summary.json'

function TitleView() {
  const total = {
    cases: SUMMARY_DATA[SUMMARY_DATA.length - 1].data.cases,
    active: SUMMARY_DATA[SUMMARY_DATA.length - 1].data.active,
    recovered: SUMMARY_DATA[SUMMARY_DATA.length - 1].data.recovered,
    deaths:  SUMMARY_DATA[SUMMARY_DATA.length - 1].data.deaths
  }

  return (
    <section className="mb-6">
      <TopNumbers total={total} />
    </section>
  )
}

export default TitleView
