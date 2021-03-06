import React from 'react'
import MetaTags from 'react-meta-tags'
import SummaryView from 'views/SummaryView'
import TitleView from 'views/TitleView'
import DemographyView from 'views/DemographyView'
import TestedView from 'views/TestedView'
import PrefectureView from 'views/PrefectureView'
import MapView from 'views/MapView'
import SymptomsView from 'views/SymptomsView'
import TimelineView from 'views/TimelineView'
import ThanksView from 'views/ThanksView'
import SUMMARY_DATA from 'data/summary.json'
import { toLongDate } from 'utils/helpers'

function Home() {
  const lastUpdated = toLongDate(SUMMARY_DATA[SUMMARY_DATA.length - 1].date)

  return (
    <main className="bg-gray-800 text-gray-400 text-lg">
      <MetaTags>
        <title>Japan COVID-19 Status</title>
        <meta name="description" content="Japan COVID-19 Status" />
        <meta property="og:title" content="Japan COVID-19 Status" />
      </MetaTags>

      <div className="container mx-auto p-4">
        <h1 className="font-medium text-gray-200 text-2xl mb-6 text-center">Japan COVID-19 Status as of { lastUpdated }</h1>
        <TitleView />

        <div className="mb-6 flex flex-col lg:flex-row">
          <div className="w-100 lg:w-3/5 lg:mr-24">
            <SummaryView />
            <PrefectureView />
          </div>
          <div className="w-100 lg:w-2/5">
            <MapView />
          </div>
        </div>


        <div className="mb-6">
          <TimelineView />
        </div>

        <div className="mb-6 flex flex-col lg:flex-row">
          <div className="w-100 lg:w-1/2 lg:mr-8">
            <DemographyView />
          </div>
          <div className="w-100 lg:w-1/2">
            <TestedView />
          </div>
        </div>

        <div className="mb-6 flex flex-col lg:flex-row">
          <div className="w-100 lg:w-1/2 lg:mr-12">
            <SymptomsView />
          </div>
          <div className="w-100 lg:w-1/2">
            <ThanksView />
          </div>
        </div>

        <span className="text-xs text-gray-500">
          Made by <a className="underline" href="https://tkmi.dev/" target="_blank" rel="noreferrer noopener">me</a>. Source code available <a className="underline" href="https://github.com/gitkumi/japan-covid-19-status" target="_blank" rel="noreferrer noopener">here</a>. Created with React.js, Chart.js, Tailwind, and the other 800+ Node.js libraries.
        </span>
      </div>
    </main>
  )
}

export default Home
