import React from 'react'
import { IoLogoGithub, IoLogoYoutube, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import './Contact.css'

const Contact = () => {

  const Logo = ({name}) => {
    if(name === 'Facebook') return <IoLogoFacebook color='#4267B2'/>;
    if(name === 'Github') return <IoLogoGithub color='whitesmoke'/>;
    if(name === 'Youtube') return <IoLogoYoutube color='#FF0000'/>;
    return <IoLogoLinkedin color='#0072b1'/>;
  }
  
  const ContactElement = (props) => {
    const {name, link} = props;
    return (
        <a className='Link' href={link}>
            <Logo name={name} />
            <p>{name}</p>
        </a>
    );
  }
  
  return (
    <section className='Contact' id='projects'>
        <div className='ContactTitle'> Let's be connected on </div>
        <div className='LinkTray'>
            <ContactElement name='Github' link='www.github.com'/>
            <ContactElement name='Youtube' link='www.github.com'/>
            <ContactElement name='Facebook' link='www.github.com'/>
            <ContactElement name='Linkedin' link='www.github.com'/>
        </div>
    </section>
  )
}

export default Contact