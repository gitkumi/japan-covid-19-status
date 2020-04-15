import React from 'react'
import JapanMap from 'components/JapanMap'
import JapanMapLabel from 'components/JapanMapLabel'

function MapView() {
  const style = {
    top: '6rem',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  }

  return (
    <div className="sticky" style={style}>
      <JapanMap />  
      <JapanMapLabel />
    </div>
  )
}

export default MapView
