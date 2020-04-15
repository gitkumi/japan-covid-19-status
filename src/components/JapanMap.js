import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps'
import Japan from 'constants/japan-vector-map.json'
import styles from './japan-map.module.css'
import PREFECTURES from 'constants/prefectures.json'
import PREFECTURE_INFECTIONS from 'data/prefecture-infections.json'
import { uniqByKeepLast } from 'utils/helpers'

const prefectureInfections = uniqByKeepLast(PREFECTURE_INFECTIONS, it => it.data.prefecture)
  .sort((a, b) => b.data.cases - a.data.cases)
  .map(p => {
    return {
      prefecture: p.data.prefecture,
      cases: p.data.cases
    }
  })

function getSeverity(id) {
  const code = id.replace('jp-', '')
  const prefectureName = PREFECTURES.find(p => Number(p.code) === Number(code)).en
  const infection = prefectureInfections.find(p => p.prefecture === prefectureName)

  if (Number(infection.cases) === 0) {
    return ''
  }

  const ranking = prefectureInfections.indexOf(infection) + 1

  if (ranking <= 10) {
    return 'one'
  }

  if (ranking <= 20) {
    return 'two'
  }
  
  if (ranking <= 30) {
    return 'three'
  }
  
  if (ranking <= 40) {
    return 'four'
  }

  return 'five'
}

function JapanMap() {
  const updatedLayers = Japan.layers.map(l => {
    return {
      ...l,
      'data-severity': getSeverity(l.id)
    }
  })

  const paintedJapan = {
    ...Japan,
    layers: updatedLayers
  }
  
  return (
    <div className={styles.japan}>
      <VectorMap {...paintedJapan} />
    </div>
  )
}

export default JapanMap
