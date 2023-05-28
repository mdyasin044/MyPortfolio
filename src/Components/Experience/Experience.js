import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Data from './Data'
import './Experience.css'
import dp from '../../Images/BUET_LOGO.svg.png'

const ExperienceElement = ({ data }) => {
  const [detailsblk, setDetailsblk] = useState(false)

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#0A131E', color: '#bcd4e1' }}
      contentArrowStyle={{ borderRight: '7px solid #0A131E' }}
      date={data.time}
      iconStyle={{ background: '#0A131E', color: '#bcd4e1' }}
      icon={
        <div className='ExperienceIcon'>
          <img height='80%' width='80%' src={data.icon} alt='dp' />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title" style={{ color: '#bcd4e1' }}>{data.title}</h3>
      <h4 className="vertical-timeline-element-subtitle" style={{ color: 'aqua' }}>{data.institution}</h4>
      <h4 className="vertical-timeline-element-subtitle" style={{ color: '#8bd0dd' }}>{data.location}</h4>
      <p style={{ color: '#66ddaa' }}>
        {data.description}
      </p>
      <div className='Stacks'>
        {data.skills.map((val, index) => {
          return <div key={index}>{val}</div>
        })}
      </div>
      <div className='Role' hidden={!detailsblk}>
        Role:
        <ul>
          {data.role.map((val, index) => {
            return <li key={index}>{val}</li>
          })}
        </ul>
      </div>
      <div className='DetailsBLK' hidden={data.role.length === 0} onClick={() => setDetailsblk(status => !status)}>
        {detailsblk ? 'Hide Details' : 'View Details'}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className='Experience' id='experience'>
      <div className='Title'>
        Let me show you my journey!
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