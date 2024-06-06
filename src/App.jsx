// import React from 'react'

import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NextPage from "./components/NextPage"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NextPage/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App