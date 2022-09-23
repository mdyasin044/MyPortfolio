import { Canvas } from '@react-three/fiber'
import './Skills.css'
import Cloud from './SkillCloud'
import SkillNames from './Data'

const Skills = () => {
  return (
    <section className='Skills' id='skills'>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={['#202025', 0, 80]} />
          <Cloud count={5} radius={18} names={SkillNames} />
        </Canvas>
    </section>
  )
}

export default Skills