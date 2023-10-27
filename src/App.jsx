import { useState, useEffect } from 'react'
import NewsHeadlines from './components/NewsHeadlines'
import CountrySelect from './components/CountrySelect'

import newsLogo from './assets/images/logo.svg'
import { countries } from './data'
import './assets/sass/main.scss'

function App() {
  const [headlines, setHeadlines] = useState([])

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dd96ce9bd71b4a96ba9ada85181978c6')
        const resData = await res.json()

        setHeadlines(resData?.articles)
      } catch (error) {
        console.log(error)
      }
    }

    fetchNews()
  }, [])

  return (
    <div className="news-app">
      <div className="news-app__header">
        <img src={newsLogo} alt="Global News" />
        <h1>Global Top News</h1>
      </div>
      <CountrySelect countries={countries} />
      <NewsHeadlines headlines={headlines} />
    </div>
  )
}

export default App
