import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import './Projects.css'
import project1 from '../../Images/project1.PNG'

const ProjectTemplate = (props) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const animationOfTemplate = useAnimation();

    useEffect(() => {
        if(inView) {
            animationOfTemplate.start({
            y: 0,
            opacity: 1,
            transition: {
            type: 'spring', duration: 5, bounce: 0
            }
        })
        }
        else {
            animationOfTemplate.start({
            opacity: 0, y: '5vw'
        })
        }
    }, [inView, animationOfTemplate]);

    return (
        <motion.div className='ProjectTemplate' animate={animationOfTemplate} ref={ref}>
            <img className='ProjectImage' src={project1} alt='project1'/>
            <div className='ProjectInfo'>Featured Project</div>
            <div className='ProjectDetails'> hi, Its a beautiful project. please help. </div>
            <div className='ProjectTitle'>Featured Project</div>
            <div className='ProjectName'>Featured Project</div>
            <div className='ProjectTools'>Featured Project</div>
        </motion.div>
    )
}

const Projects = () => {
  return (
    <section className='Projects' id='projects'>
        <ProjectTemplate />
        <ProjectTemplate />
    </section>
  )
}

export default Projects