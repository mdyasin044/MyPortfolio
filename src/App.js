import React from 'react'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Experience />  
      <Contact />
    </div>
  )
}

export default App