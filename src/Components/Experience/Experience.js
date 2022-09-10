import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Data from './Data';
import './Experience.css'

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animationOfTitle = useAnimation();

  useEffect(() => {
    if(inView) {
      animationOfTitle.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 5, bounce: 0.4
        }
      })
    }
    else {
      animationOfTitle.start({
        opacity: 0, x: '-5vw'
      })
    }
  }, [inView, animationOfTitle]);

  const ExperienceElement = ({ data }) => {
      return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(21, 24, 31)', color: 'whitesmoke' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
            date={data.time}
            iconStyle={{ background: 'rgb(21, 24, 31)', color: 'whitesmoke' }}
            icon={<FontAwesomeIcon icon={data.icon === 'GraduationCap' ? faGraduationCap : faBriefcase}/>}
        >
            <h3 className="vertical-timeline-element-title">{data.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{data.institution}</h4>
            <h4 className="vertical-timeline-element-subtitle">{data.location}</h4>
            <p>
                {data.description}
            </p>
        </VerticalTimelineElement>
      );
  };
  
  return (
    <section className='Experience' id='experience' ref={ref}>
        <motion.div className='Title' animate={animationOfTitle}>
          Let me show you my journey!!!
        </motion.div>
        <VerticalTimeline>
            {Data.map((val, index) => {
              return <ExperienceElement data={val} />
            })}
        </VerticalTimeline>
    </section>
  )
}

export default Experience