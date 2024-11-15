import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Features from './components/Features'
import About from '../about'
import BlogPosts from './components/BlogPosts'
import ContactForm from './components/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <BlogPosts/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home