import React from 'react'

function ThanksView() {
  const sources = [
    {
      title: 'Quarantine Now',
      author: 'by Ben Kuhn and Yuri Vishnevsky',
      link: 'https://observablehq.com/@yurivish/quarantine-now',
      desc: 'My initial inspiration for creating this project.'
    },
    {
      title: 'COVID-19 Situation Report in Japan',
      author: 'by toyokeizai.net and Kazuki Ogiwara',
      link: 'https://toyokeizai.net/sp/visual/tko/covid19/en.html',
      desc: 'My main source of data.'
    },
    {
      title: 'Coronavirus Cases in Japan by Prefecture',
      author: 'by nippon.com',
      link: 'https://www.nippon.com/en/japan-data/h00657/coronavirus-cases-in-japan-by-prefecture.html',
      desc: 'The source of data in timeline events. If you want a more detailed data, I recommend reading the article.'
    },
  ]


  return (
    <section className="mb-6">
      <h3 className="font-medium text-center mb-6">Thanks</h3>
      <ul className="text-gray-400 text-sm list-disc">
        {sources.map(source => {
          return (
            <li className="mb-6 last:mb-0">
              <div className="flex">
                <a href={source.link} target="_blank" rel="noreferrer noopener" className="font-medium mr-2 hover:underline">{ source.title}</a>
                <span className="text-gray-500">{source.author}</span>
              </div>
              <p>
                { source.desc }
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ThanksView
