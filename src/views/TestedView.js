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

  return (
    <section className="mb-6">
      <h3 className="font-medium text-center mb-6">Tests</h3>
      <TestedChart tested={tested}/>
      <p className="text-xs text-gray-500 mt-6">Due to the inaccuracy of PCR testing, multiple tests are done on a single person. All tests done in a single person only counts as one PCR test record.</p>
    </section>
  )
}

export default TestedView
