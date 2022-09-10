import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActivity = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div className='Navbar'>
        <div className='ProfileName'>Md. Yasin</div>
        <div className='MenuItems'>
          <a className='Child_home' href='#home' data-text='Home'>Home</a>
          <a className='Child_about' href='#about' data-text='About'>About</a>
          <a className='Child_experience' href='#experience' data-text='Experience'>Experience</a>
          <a className='Child_skills' href='#skills' data-text='Skills'>Skills</a>
          <a className='Child_projects' href='#projects' data-text='Projects'>Projects</a>
          <a className='Child_achievements' href='#achievements' data-text='Achievements'>Achievements</a>
        </div>
        <div className='MenuBars'>
          <motion.div animate={{ rotate: isActive ? 90 : 0 }}>
            <FontAwesomeIcon icon={faBars} onClick={toggleActivity}/>
          </motion.div>
        </div>
      </div>

      {isActive ? (
        <motion.div className='Menu' 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.95, scale: 1 }}
          exit = {{ opacity: 0, scale: 0.5 }}
          transition= {{ delay: "0.1s", type: "spring" }}
        >
          <a className='Child_home' href='#home' data-text='Home' onClick={toggleActivity}>Home</a>
          <a className='Child_about' href='#about' data-text='About' onClick={toggleActivity}>About</a>
          <a className='Child_experience' href='#experience' data-text='Experience' onClick={toggleActivity}>Experience</a>
          <a className='Child_skills' href='#skills' data-text='Skills' onClick={toggleActivity}>Skills</a>
          <a className='Child_projects' href='#projects' data-text='Projects' onClick={toggleActivity}>Projects</a>
          <a className='Child_achievements' href='#achievements' data-text='Achievements' onClick={toggleActivity}>Achievements</a>
        </motion.div>
      ) : null}
    </>
  )
}

export default Navbar