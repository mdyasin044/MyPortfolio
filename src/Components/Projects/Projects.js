import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Data from './Data';
import './Projects.css'

const ProjectTemplate = ({ data }) => {
    const [linkHover, setLinkHover] = useState(false);
    const [imgHovered, setImgHovered] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.3 });
    const animationOfTemplate = useAnimation();
    const animation = useAnimation();

    useEffect(() => {
        if(imgHovered) {
            animation.start({
                width: 0,
                transition: {
                    type: 'linear', duration: 0.6
                }
            })
        }
        else {
            animation.start({
                width: 500,
                transition: {
                    type: 'linear', duration: 0.6
                }
            })
        }
    }, [imgHovered, animation]);

    useEffect(() => {
        if(inView) {
            animationOfTemplate.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'linear', duration: 1, bounce: 0
                }
            })
        }
        else {
            animationOfTemplate.start({
                opacity: 0, y: '5vw'
            })
        }
    }, [inView, animationOfTemplate]);

    const ProjectCoverTemplate = () => {
        return (
            <div className='ProjectInfo'>
                <div style={{color: 'aqua'}}>Featured Project</div>
                <div style={{color: 'whitesmoke'}}>{data.title}</div>
                <div style={{color: 'aquamarine', padding: '10px'}}>{data.description}</div>
                <div style={{display: 'flex', color: 'greenyellow'}}>
                    {data.tools.map((val, index) => {
                        return <div key={index} style={{marginRight: '15px'}}>{val}</div>
                    })}
                </div>
                <div>
                    <a href={data.link} target="_blank" rel="noreferrer" onPointerOver={() => setLinkHover(true)} onPointerOut={() => setLinkHover(false)}>
                        <IoArrowForwardCircleOutline size={25} color={linkHover ? 'aqua' : 'aliceblue'}/>
                    </a>
                </div>
            </div>
        )
    }

    return (
        <motion.div className='ProjectTemplate' animate={animationOfTemplate} ref={ref}
            onPointerOver={() => {setImgHovered(true)}} onPointerOut={() => {setImgHovered(false)}}
        >
            <img className='ProjectImage' src={data.imageUrl} alt='project' />
            <motion.div className='ProjectImageCover' animate={animation} />
            <ProjectCoverTemplate />
            <div className='ProjectDetails'>{data.description}</div>
            <div className='ProjectTitle'>Featured Project</div>
            <div className='ProjectName'>{data.title}</div>
            <div className='ProjectTools'>
                {data.tools.map((val, index) => {
                    return <div key={index} style={{marginLeft: '15px'}}>{val}</div>
                })}
            </div>
            <div className='ProjectLink'>
                <a href={data.link} onPointerOver={() => setLinkHover(true)} onPointerOut={() => setLinkHover(false)}>
                    <IoArrowForwardCircleOutline size={linkHover ? 27 : 25} color={linkHover ? 'aqua' : 'aliceblue'}/>
                </a>
            </div>
        </motion.div>
    )
}

const Projects = () => {
  return (
    <section className='Projects' id='projects'>
        <div className='ProjectTitleDiv'>
            <div className='ProjectTitleText'>Some projects I’ve worked on :</div>
        </div>
        {Data.map((val, index) => {
            return <ProjectTemplate key={index} data={val} />
        })}
    </section>
  )
}

export default Projects