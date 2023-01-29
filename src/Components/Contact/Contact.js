import React from 'react'
import { IoLogoGithub, IoLogoYoutube, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const Logo = ({name}) => {
    if(name === 'Facebook') return <IoLogoFacebook size={20} color='#DBE9FA'/>;
    if(name === 'Github') return <IoLogoGithub size={20} color='#DBE9FA'/>;
    if(name === 'Youtube') return <IoLogoYoutube size={20} color='#DBE9FA'/>;
    return <IoLogoLinkedin size={20} color='#DBE9FA'/>;
  }
  
  const ContactElement = (props) => {
    const {name, link} = props;
    return (
        <a className='Link' href={link}>
            <Logo name={name} />
        </a>
    );
  }
  
  return (
    <section>
      <motion.div className='Contact' 
        initial={{ y: '20vw' }}
        animate={{ y: 0 }}
        transition= {{ duration: 2, type: "linear" }}
      >
          <ContactElement name='Github' link='https://github.com/mdyasin044'/>
          <ContactElement name='Youtube' link='https://www.youtube.com/channel/UCfOw9TwswEpAZM-Nesv4BoQ'/>
          <ContactElement name='Facebook' link='https://www.facebook.com/yasin.islam.18'/>
          <ContactElement name='Linkedin' link='https://www.linkedin.com/in/mohammad-yasin'/>
          <div className='line' />
      </motion.div>
      <motion.div className='Email'
        initial={{ y: '-20vw', rotateZ: -180 }}
        animate={{ y: 0, rotateZ: -180 }}
        transition= {{ duration: 2, type: "linear" }}
      >
        <div className='EmailText'>yasinbuetcse14@gmail.com</div>
        <div className='line' />
      </motion.div>
    </section>
  )
}

export default Contact