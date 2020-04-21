import React from 'react'
import TestedChart from 'components/TestedChart'
import SUMMARY_DATA from 'data/summary.json'

function TestedView() {
  const tested = SUMMARY_DATA.map(s => {
    return {
      date: s.date,
      tested: s.data.tested
    }
  })

  const cases = SUMMARY_DATA.map(s => {
    return {
      date: s.date,
      cases: s.data.cases
    }
  })

  return (
    <section className="mb-6">
      <h3 className="font-medium text-center mb-6">Tests</h3>
      <TestedChart tested={tested} cases={cases}/>
      <p className="text-xs text-gray-500 mt-6">Testing is done via PCR which can be inaccurate so multiple tests are done on a single person which only counts as one record in this data.</p>
    </section>
  )
}

export default TestedView
