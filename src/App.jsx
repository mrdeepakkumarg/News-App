import React, { useState } from 'react'
import Navbars from './components/Navbars'
import NewsBoard from './components/NewsBoard'
import Footer from './components/Footer'

const App = () => {

  const [category, setCategory] = useState("general")
  
  return (
    <div>
      <Navbars setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer/>
    </div>
  )
}

export default App
