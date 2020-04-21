const csv = require('csv-parser')
const fse = require('fs-extra')

const summary = []
const demography = []
const prefectures = []
const prefectures2 = []
 
const PREFECTURES = require('../src/constants/prefectures.json')

function getPrefectureEnglishName(string) {
  const prefecture = PREFECTURES.find(p => p.ja.includes(string))

  if (prefecture && prefecture.en) {
    return prefecture.en
  }

  console.log('Prefecture not found: ', string)
}

function getGenerationEnglishName(string) {
  const genMap = new Map()
    .set('10歳未満', '<10')
    .set('10代', '10s')
    .set('20代', '20s')
    .set('30代', '30s')
    .set('40代', '40s')
    .set('50代', '50s')
    .set('60代', '60s')
    .set('70代', '70s')
    .set('80代以上', '80+')
    .set('不明', 'unknown')

    return genMap.get(string)
}

fse.createReadStream('./raw-data/summary.csv')
  .pipe(csv())
  .on('data', (data) => {
    const newEntry = {
      date: `${data['年']}/${data['月']}/${data['日']}`,
      data: {
        cases: data['PCR検査陽性者'],
        cases_with_symptoms: data['有症状者'],
        recovered: data['退院した者'],
        serious: data['人工呼吸器又は集中治療室に入院している者'],
        active: data['PCR検査陽性者'] - data['退院した者'] - data['人工呼吸器又は集中治療室に入院している者'],
        deaths: data['死亡者'],
        tested: data['PCR検査実施人数'],
      }
    }
    summary.push(newEntry)
  })
  .on('end', () => {
    fse.writeFile(
      `../src/data/summary.json`,
      JSON.stringify(summary)
    )
  })
 
fse.createReadStream('./raw-data/demography.csv')
  .pipe(csv())
  .on('data', (data) => {
    const newEntry = {
      generation: getGenerationEnglishName(data['年代']),
      deaths: data['死亡'],
      serious: data['重症'],
      others: data['陽性者']
    }
    demography.push(newEntry)
  })
  .on('end', () => {
    
    fse.writeFile(
      `../src/data/demography.json`,
      JSON.stringify(demography)
    )
  })
 
fse.createReadStream('./raw-data/prefectures.csv')
  .pipe(csv())
  .on('data', (data) => {
    const prefectureName = getPrefectureEnglishName(data['都道府県'])
    if (!prefectureName) return

    const newEntry = {
      date: `${data['年']}/${data['月']}/${data['日']}`,
      data: {
        prefecture: prefectureName,
        cases: data['患者数（2020年3月28日からは感染者数）'],
        active: data['現在は入院等'],
        recovered: data['退院者'],
        deaths: data['死亡者']
      }
    }
    prefectures.push(newEntry)
  })
  .on('end', () => {
    
    fse.writeFile(
      `../src/data/prefecture-infections.json`,
      JSON.stringify(prefectures)
    )
  })
 
fse.createReadStream('./raw-data/prefectures-2.csv')
  .pipe(csv())
  .on('data', (data) => {
    const prefectureName = getPrefectureEnglishName(data['都道府県'])
    if (!prefectureName) return

    const newEntry = {
      date: `${data['年']}/${data['月']}/${data['日']}`,
      data: {
        prefecture: prefectureName,
        tested: data['PCR検査人数'],
        tested_positive: data['PCR検査陽性者数']
      }
    }
    prefectures2.push(newEntry)
  })
  .on('end', () => {
    
    fse.writeFile(
      `../src/data/prefectures-infections-detailed.json`,
      JSON.stringify(prefectures2)
    )
  })