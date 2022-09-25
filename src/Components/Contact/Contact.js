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
    <motion.section className='Contact' 
      initial={{ y: '20vw' }}
      animate={{ y: 0 }}
      transition= {{ duration: 2, type: "linear" }}
    >
        <ContactElement name='Github' link='www.github.com'/>
        <ContactElement name='Youtube' link='www.github.com'/>
        <ContactElement name='Facebook' link='www.github.com'/>
        <ContactElement name='Linkedin' link='www.github.com'/>
        <div className='line' />
    </motion.section>
  )
}

export default Contact