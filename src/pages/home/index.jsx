import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Features from './components/Features'
import About from '../about'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home