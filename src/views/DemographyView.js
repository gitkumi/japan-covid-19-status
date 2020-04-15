import React from 'react'
import DemographyChart from 'components/DemographyChart'
import DEMOGRAPHY from 'data/demography.json'

function DemographyView() {
  return (
    <section className="mb-6">
      <h3 className="font-medium text-center mb-6">Demography</h3>
      <DemographyChart demography={DEMOGRAPHY}/>
      <p className="text-xs text-gray-500 mt-6">
        "Unknown" includes undisclosed or under confirmation. This data has different publication date from MHLW so it may be inconsistent with other data.</p>
    </section>
  )
}

export default DemographyView
