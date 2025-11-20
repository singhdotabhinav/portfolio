'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function ParticleNetwork() {
  const count = 100
  const radius = 2

  // Generate random points on a sphere
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      
      const x = radius * Math.sin(theta) * Math.cos(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(theta)
      
      temp.push(new THREE.Vector3(x, y, z))
    }
    return temp
  }, [])

  const linesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const points = []
    
    // Connect nearby particles
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (particles[i].distanceTo(particles[j]) < 1.2) {
          points.push(particles[i])
          points.push(particles[j])
        }
      }
    }
    geometry.setFromPoints(points)
    return geometry
  }, [particles])

  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {particles.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2} />
        </mesh>
      ))}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#a855f7" transparent opacity={0.3} />
      </lineSegments>
    </group>
  )
}

export function InteractiveScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleNetwork />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
