import { useState } from 'react'

import MainPage from '../pages/MainPage.jsx'
import ThankYou from '../pages/ThankYou.jsx'
import { Routes,Route } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/thank-you' element={<ThankYou/>}/>
    </Routes>
  )
}

export default App
