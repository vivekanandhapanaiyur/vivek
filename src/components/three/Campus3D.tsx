'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Sparkles, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

function ParticleField() {
  return (
    <>
      <Sparkles
        count={200}
        scale={30}
        size={2}
        speed={0.3}
        opacity={0.6}
        color="#6366f1"
      />
      <Sparkles
        count={100}
        scale={25}
        size={1.5}
        speed={0.2}
        opacity={0.4}
        color="#f59e0b"
      />
    </>
  )
}

function FloatingShapes() {
  return (
    <>
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1}
        position={[-4, 2, -5]}
      >
        <mesh>
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      <Float
        speed={1.5}
        rotationIntensity={0.3}
        floatIntensity={0.8}
        position={[4, -1, -4]}
      >
        <mesh>
          <octahedronGeometry args={[1.2]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      <Float
        speed={2.5}
        rotationIntensity={0.7}
        floatIntensity={1.2}
        position={[0, 1, -6]}
      >
        <mesh>
          <icosahedronGeometry args={[0.8]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={0.4}
        floatIntensity={0.9}
        position={[-3, -2, -3]}
      >
        <mesh>
          <dodecahedronGeometry args={[1]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>
    </>
  )
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#6366f1" />
      <pointLight position={[10, 5, 5]} intensity={0.5} color="#f59e0b" />

      {/* Environment */}
      <Environment preset="sunset" />

      {/* Particles & Shapes */}
      <ParticleField />
      <FloatingShapes />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

export default function Campus3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ 
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-800/80 to-primary-900/90 pointer-events-none"></div>
    </div>
  )
}