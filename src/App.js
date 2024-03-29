import React from 'react'
// import WaterWave from 'react-water-wave';
import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer';
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
      <Projects />
      <Footer />
      <Contact />
    </div>
  )
}

export default App