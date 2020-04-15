import React from 'react'
import styles from './japan-map-label.module.css'

function JapanMapLabel() {
  return (
    <div className={`${styles.mapLabel} flex flex-col`}>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-sm bg-red-600 mr-2"/>
        <span className="text-xs text-gray-500">top 10 in # of cases</span>
      </div>

      <div className="flex items-center">
        <div className="w-3 h-3 rounded-sm bg-red-400 mr-2"/>
        <span className="text-xs text-gray-500">top 11-20 in # of cases</span>
      </div>

      <div className="flex items-center">
        <div className="w-3 h-3 rounded-sm bg-orange-400 mr-2"/>
        <span className="text-xs text-gray-500">top 21-30 in # of cases</span>
      </div>

      <div className="flex items-center">
        <div className="w-3 h-3 rounded-sm bg-orange-300 mr-2"/>
        <span className="text-xs text-gray-500">top 31-40 in # of cases</span>
      </div>

      <div className="flex items-center">
        <div className="w-3 h-3 rounded-sm bg-orange-200 mr-2"/>
        <span className="text-xs text-gray-500">top 41+ in # of cases</span>
      </div>

      <div className="flex items-center">
        <div className="w-3 h-3 rounded-sm bg-gray-600 mr-2"/>
        <span className="text-xs text-gray-500">no cases</span>
      </div>
    </div>
  )
}

export default JapanMapLabel
