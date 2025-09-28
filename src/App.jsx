import React, { useState } from 'react'
import Navbar from './components/navbar'
import Main from './components/main'

const App = () => {
  const [inputData , setInputData] = useState("")

  return (
    <div className=' '>
      <Navbar inputData={inputData} setInputData={setInputData}/>
      <div className='mx-10'>
        <Main inputData={inputData} setInputData={setInputData}/>
      </div>
    </div>
  )
}

export default App