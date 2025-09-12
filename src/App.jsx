import { useState } from 'react'

import MainPage from '../pages/MainPage.jsx'
import ThankYou from '../pages/ThankYou.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainPage />
  )
}

export default App
