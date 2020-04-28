import React from 'react'
import { toShortDate } from 'utils/helpers'

function TimelineReader({ event }) {
  return (
    <div>
      <p className="text-gray-400 mb-2 text-xs uppercase font-medium">
        { toShortDate(event.date) }
      </p>
      { event.events.map(desc => <p key={desc} className="text-gray-400 text-sm mb-2 last:mb-0">{ desc }</p>)}
    </div>
  )
}

export default TimelineReader
