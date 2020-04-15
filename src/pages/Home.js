import React from 'react'
import SummaryView from 'views/SummaryView'
import TitleView from 'views/TitleView'
import DemographyView from 'views/DemographyView'
import TestedView from 'views/TestedView'
import PrefectureView from 'views/PrefectureView'
import MapView from 'views/MapView'

function Home() {
  return (
    <main className="bg-gray-800 text-gray-200 text-lg">
      <div className="container mx-auto p-4">
        <h1 className="font-medium text-3xl mb-6 text-center">Japan COVID-19 Status</h1>
        <TitleView />

        <div className="mb-6 flex flex-col lg:flex-row">
          <div className="w-100 lg:w-1/2 lg:mr-24">
            <SummaryView />
            <PrefectureView />
          </div>
          <div className="w-100 lg:w-1/2">
            <MapView />
          </div>
        </div>

        <div className="mb-6 flex flex-col lg:flex-row">
          <div className="w-100 lg:w-1/2 lg:mr-12">
            <DemographyView />
          </div>
          <div className="w-100 lg:w-1/2">
            <TestedView />
          </div>
        </div>

        <span className="text-xs text-gray-500">
          Made by <a className="underline" href="https://tkmi.dev/" target="_blank" rel="noreferrer noopener">me</a>.
        </span>
      </div>
    </main>
  )
}

export default Home