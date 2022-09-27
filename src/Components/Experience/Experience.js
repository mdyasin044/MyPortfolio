import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import 'react-vertical-timeline-component/style.min.css'
import Data from './Data';
import './Experience.css'

const Experience = () => {
  const ExperienceElement = ({ data }) => {
      return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0A131E', color: '#bcd4e1' }}
            contentArrowStyle={{ borderRight: '7px solid #0A131E' }}
            date={data.time}
            iconStyle={{ background: '#0A131E', color: '#bcd4e1' }}
            icon={<FontAwesomeIcon icon={data.icon === 'GraduationCap' ? faGraduationCap : faBriefcase}/>}
        >
            <h3 className="vertical-timeline-element-title" style={{color: '#bcd4e1'}}>{data.title}</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'aqua'}}>{data.institution}</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color: '#8bd0dd'}}>{data.location}</h4>
            <p style={{color: '#66ddaa'}}>
                {data.description}
            </p>
            <div className='Stacks'>
              {data.skills.map((val, index) => {
                return <div key={index}>{val}</div>
              })}
            </div>
        </VerticalTimelineElement>
      );
  };
  
  return (
    <section className='Experience' id='experience'>
        <div className='Title'>
          Let me show you my journey!!!
        </div>
        <div className='circle' />
        <VerticalTimeline>
            {Data.map((val, index) => {
              return <ExperienceElement key={index} data={val} />
            })}
        </VerticalTimeline>
        <div className='circle' />
    </section>
  )
}

export default Experience