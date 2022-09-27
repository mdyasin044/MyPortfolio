import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='Footer' id='contact'>
        <div className='ContactPart'>
          <div className='Title1'>What's Next?</div>
          <div className='Title2'>Get in touch</div>
          <div className='ContactText'>
            I am always interested to meet new people and share knowledge about new technologies. 
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </div>
          <div className='SayHelloButton'>Say Hello</div>
        </div>
        <div className='FooterPart'> 
          Design and Developed by Md.Yasin
        </div>
    </section>
  )
}

export default Footer