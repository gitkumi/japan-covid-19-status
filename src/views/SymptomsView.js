import React from 'react'
import SymptomsChart from 'components/SymptomsChart'
import SUMMARY_DATA from 'data/summary.json'

function SymptomsView() {
  const symptoms = SUMMARY_DATA.map(summary => {
    return {
      label: summary.date,
      symptomatic: summary.data.cases_with_symptoms,
      asymptomatic: Number(summary.data.cases) - Number(summary.data.cases_with_symptoms),
    }
  })

  return (
    <section className="mb-6">
      <h3 className="font-medium text-center mb-6">Symptoms</h3>
      <SymptomsChart symptoms={symptoms}/>
    </section>
  )
}

export default SymptomsView
