import { useState } from 'react'
import NewsHeadlines from './components/NewsHeadlines'

import newsLogo from './assets/images/logo.svg'
import './assets/sass/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="news-app">
      <div className="news-app__header">
        <img src={newsLogo} alt="Global News" />
        <h1>Global Top News</h1>
      </div>
      <NewsHeadlines />
    </div>
  )
}

export default App
