import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import dp from '../../Images/dp.jpg'
import './About.css'

const About = () => {
  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
      if(hovered) {
          animation.start({
            width: 0,
            transition: {
              type: 'linear', duration: 0.6
            }
          })
      }
      else {
          animation.start({
            width: 300,
            transition: {
              type: 'linear', duration: 0.6
            }
          })
      }
  }, [hovered, animation]);

  const HighlightWord = ({text}) => {
    return <div className='Highlight'>{text}</div>
  }

  return (
    <section className='About' id='about'> 
      <div className='AboutTitle'>
        <div className='HorizontalLine' />
        <div className='AboutTitleText'> About Me </div>
        <div className='HorizontalLine' />
      </div>
      <div className='AboutContents'>
        <div className='Intro'>
          Hello! My name is Md. Yasin and I enjoy creating things that live on the internet. 
          My interest in web development started back in 2016 when I started to make projects for University Assignments 
          with <HighlightWord text='Laravel'/>. Later I learned about <HighlightWord text='DJango'/> and <HighlightWord text='NodeJS'/>.
          I have also built <HighlightWord text='Windows'/> & <HighlightWord text='Android'/> applications. 
          It feels great when people use my apps for their daily purposes. 
          <br /><br />

          Currently I am working at an Research and Development Center. My main focus these days is building accessible, 
          inclusive products and digital experiences at <HighlightWord text='Samsung R&D Institute Bangladesh'/> for 
          a variety of clients.
        </div>
        <div className='ImageContainer' onPointerOver={() => {setHovered(true)}} onPointerOut={() => {setHovered(false)}} >
          {!hovered ? <div className='DpShadow1' /> : <div className='DpShadow2' />}
          <img className='Dp' src={dp} alt='dp' />
          <motion.div className='DpCover' animate={animation} />
        </div>
      </div>
    </section>
  )
}

export default About