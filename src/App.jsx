import { useState, useEffect } from 'react'
import NewsHeadlines from './components/NewsHeadlines'
import CountrySelect from './components/CountrySelect'

import newsLogo from './assets/images/logo.svg'
import { countries } from './data'
import { getQueryString } from './util'

import './assets/sass/main.scss'

const initialStateUkNews = countries.find((country) => country?.code === 'gb');

function App() {
  const [headlines, setHeadlines] = useState([])
  const [country, setCountry] = useState(initialStateUkNews)

  const handleSetCountry = (country) => {
    setCountry(country)
  }

  const queryParams = {
    country: country?.code,
    pageSize: 5,
    apiKey: 'dd96ce9bd71b4a96ba9ada85181978c6',
  }

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?${getQueryString(queryParams)}`)
        const responseData = await response.json()

        if(responseData.status !== 'ok') {
          throw new Error(responseData?.message)
        }

        setHeadlines(responseData?.articles)
      } catch (error) {
        console.log(error)
      }
    }

    fetchNews()
  }, [country])

  return (
    <div className="news-app">
      <div className="news-app__header">
        <img src={newsLogo} alt="Global News" />
        <h1>Global Top News</h1>
      </div>
      <CountrySelect
        countryState={country}
        countries={countries}
        handleSetCountry={handleSetCountry}
      />
      <NewsHeadlines
        headlines={headlines}
      />
    </div>
  )
}

export default App
