import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import './About.css'
import dp from '../../Images/dp.jpg'

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animationOfIntro = useAnimation();
  const animationOfDp = useAnimation();

  useEffect(() => {
    if(inView) {
      animationOfIntro.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 5, bounce: 0.4
        }
      })
      animationOfDp.start({
        opacity: 1,
        transition: {
          type: 'spring', duration: 5, bounce: 0.4
        }
      })
    }
    else {
      animationOfIntro.start({
        opacity: 0, x: '-5vw'
      })
      animationOfDp.start({
        opacity: 0
      })
    }
  }, [inView, animationOfDp, animationOfIntro]);

  return (
    <section className='About' id='about' ref={ref}>
        <motion.img className='Dp' src={dp} alt='dp' animate={animationOfDp}/> 
        <motion.div className='Intro' animate={animationOfIntro}>
            Hi, <br />
            I am yasin. <br />
            A creative web developer. <br />
        </motion.div>
    </section>
  )
}

export default About