import { Canvas } from '@react-three/fiber'
import './Skills.css'
import Cloud from './SkillCloud'
import SkillNames from './Data'

const Skills = () => {
  return (
    <section className='Skills' id='skills'>
        <div className='SkillDetails'>
          <div className='SkillTitle'>Skills & Expertise</div>
          <div>
            The main area of my expertise is web technologies such as HTML, CSS, Javascript, building small and medium web apps with 
            React and NodeJS. <br /><br />
            I have also experience of mobile app development, worked with both Android and iOS platform. <br /><br />
            I have also expertise in Data structures and Algorithms. <br /><br />
            Visit my linkedin profile for more details.
          </div>
        </div>
        <div className='CloudSkill'>
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 40], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={5} radius={18} names={SkillNames} />
          </Canvas>
        </div>
    </section>
  )
}

export default Skills