import React from 'react'
import TimelineChart from 'components/TimelineChart'
import SUMMARY_DATA from 'data/summary.json'
import TIMELINE from 'data/timeline.json'
import { uniqByKeepLast } from 'utils/helpers'
import TimelineInfo from 'components/TimelineInfo'

function TimelineView() {
  const [featured, updateFeatured] = React.useState(TIMELINE[TIMELINE.length - 1])

  const dates = [
    ...SUMMARY_DATA.map(s => s.date),
    ...TIMELINE.map(t => t.date)
  ]

  const combinedDates = uniqByKeepLast(dates, val => val)
    .sort((a, b) => b.date - a.date)

  const events = combinedDates.map(date => {
    const infection = SUMMARY_DATA.find(c => c.date === date)
    const event = TIMELINE.find(t => t.date === date)

    return {
      label: date,
      value: infection ? infection.data.cases : '',
      hasEvent: !!event
    }
  })

  return (
    <>
      <h3 className="font-medium text-center mb-6">Timeline</h3>
      <section className="flex flex-col lg:flex-row">
        <div className="w-100 lg:w-3/5 lg:mr-2">
          <TimelineChart events={events} updateFeatured={updateFeatured} />
        </div>
        <div className="w-100 lg:w-2/5">
          <TimelineInfo event={featured}/>
        </div>
      </section>
    </>
  )
}

export default TimelineView
