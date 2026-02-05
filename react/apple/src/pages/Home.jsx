import React from 'react'
import Header from '../components/Header'
import MackPro from "../components/MackPro"
import MackBook from '../components/MackBook'
import Iphone from '../components/Iphone'

function Home() {
  return (
    <div>
        <Header/>
        <MackBook/>
        <Iphone/>
        {/* <MackPro/> */}

    </div>
  )
}

export default Home
