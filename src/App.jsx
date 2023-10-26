import { useState } from 'react'

import newsLogo from './assets/images/logo.svg'
import './assets/sass/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="news-app">
      <div className="news-app__header">
        <img src={newsLogo} className="logo react" alt="Global News" />
        <h1>Global Top News</h1>
      </div>
    </div>
  )
}

export default App
