import React from 'react'
// import WaterWave from 'react-water-wave';
import './App.css'
import About from './Components/About/About'
import Achievements from './Components/Achievements/Achievements';
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills'

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <div className='line1' />
      <Projects />
      <div className='line1' />
      <Achievements />
      <div className='line1' />
      <Contact />
    </div>
  )
}

export default App