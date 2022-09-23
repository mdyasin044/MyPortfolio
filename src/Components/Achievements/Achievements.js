import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import './Achievements.css' 
import image from '../../Images/swc.jpg'

const AchievementItem = (props) => {
    const {delay} = props;
    const { ref, inView } = useInView({ threshold: 0.5 });
    const animationOfIntro = useAnimation();
  
    useEffect(() => {
      if(inView) {
        animationOfIntro.start({
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring', duration: 3, delay: delay
          }
        })
      }
      else {
        animationOfIntro.start({
          opacity: 0, y: '-5vw'
        })
      }
    }, [inView, animationOfIntro, delay]);

    return (
        <motion.img className='AchievementItem' src={image} animate={animationOfIntro} ref={ref} />
    )
}

const Achievements = () => {
  return (
    <section className='Achievements' id='achievements'>
        <AchievementItem delay={0} />
        <AchievementItem delay={0.5} />
        <AchievementItem delay={1.0} />
    </section>
  )
}

export default Achievements