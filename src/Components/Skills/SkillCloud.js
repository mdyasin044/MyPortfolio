import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => {e.stopPropagation(); setHovered(true)}
  const out = () => setHovered(false)

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'greenyellow'), 0.1)
  })

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current.rotation.y = -a/2;
  });

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function Cloud({ count = 4, radius = 20, names = [] }) {
  const myMesh = useRef();

  shuffleArray(names);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a/2;
  });

  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) 
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), names[(i-1)*count + j]])
    return temp
  }, [count, radius, names])
  return (
    <mesh ref={myMesh} rotateX={Math.PI/4.0} roa>
      {words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)}
    </mesh>
  )
}

export default Cloud