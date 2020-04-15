import React from 'react'
import PrefectureChart from 'components/PrefectureChart'
import PREFECTURE_INFECTIONS from 'data/prefecture-infections.json'
import { uniqByKeepLast } from 'utils/helpers'

function PrefectureView() {
  const latestPrefectureData = uniqByKeepLast(PREFECTURE_INFECTIONS, it => it.data.prefecture)
    .sort((a, b) => b.data.cases - a.data.cases)
  
  return (
    <section className="mb-6">
      <h3 className="font-medium text-center mb-2">Prefectures</h3>
      <PrefectureChart prefecture={latestPrefectureData} />
    </section>
  )
}

export default PrefectureView
