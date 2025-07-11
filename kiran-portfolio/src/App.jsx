import React from 'react'
import { NavLink } from 'react-router'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App