import { useState, useEffect } from 'react'
import NewsHeadlines from './components/NewsHeadlines'
import CountrySelect from './components/CountrySelect'
import Errors from './components/Errors'

import newsLogo from './assets/images/logo.svg'
import { countries } from './data'
import { getCountryByCode, getQueryString } from './functions.js'

import './assets/sass/main.scss'

function App() {
  const [headlines, setHeadlines] = useState([])
  const [country, setCountry] = useState(getCountryByCode('gb'))
  const [errorMessage, setErrorMessage] = useState(false)

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
        setErrorMessage(error?.message || 'Fetch error!')
      }
    }

    fetchNews()
  }, [country])

  return (
    <div className="news-app">
      <section className="news-app__header">
        <img src={newsLogo} alt="Global News" />
        <h1>Global Top News</h1>
      </section>
      <CountrySelect
        countryState={country}
        countries={countries}
        handleSetCountry={handleSetCountry}
      />
      {!errorMessage && headlines && headlines.length !== 0 &&
        <NewsHeadlines
          country={country}
          headlines={headlines}
        />
      }
      {errorMessage && <Errors message={errorMessage} />}
    </div>
  )
}

export default App
