import React from 'react'

function TimelineReader({ event }) {

  const toShortDate = (dateString) => {
    const date = new Date(dateString)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
    return `${mo} ${da}, ${ye}`
  }

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
