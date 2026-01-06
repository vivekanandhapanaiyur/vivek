'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, Text } from '@react-three/drei'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

function FloatingIcons() {
    const meshRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        meshRef.current.rotation.x = Math.cos(t / 4) / 8
        meshRef.current.rotation.y = Math.sin(t / 4) / 8
        meshRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-2, 1, -2]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color="#525df1" opacity={0.6} transparent />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
                <mesh position={[2, -1, -3]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color="#f59e0b" opacity={0.6} transparent />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
                <mesh position={[0, -2, -1]}>
                    <coneGeometry args={[0.4, 0.8, 32]} />
                    <meshStandardMaterial color="#4045de" opacity={0.6} transparent />
                </mesh>
            </Float>
        </group>
    )
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Intro Animation
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
            })
                .from(subtitleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                }, '-=0.8')
                .from(ctaRef.current, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                }, '-=0.4')

            // Scroll Animation
            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
                opacity: 0,
                y: 100,
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <FloatingIcons />
                </Canvas>
            </div>

            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 blur-[120px] rounded-full animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />
            </div>

            {/* Content */}
            <div className="container-padding relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-2 mb-8 glass-panel rounded-full text-xs font-bold tracking-[0.2em] uppercase text-primary-600"
                >
                    Welcome to the Future of Learning
                </motion.div>

                <h1 ref={titleRef} className="heading-xl mb-8">
                    Nurturing Minds, <br />
                    <span className="text-gradient">Shaping Excellence.</span>
                </h1>

                <div ref={subtitleRef} className="max-w-2xl mx-auto mb-12">
                    <p className="text-xl text-neutral-600 leading-relaxed">
                        Experience the pinnacle of primary education at VIVEKANANDHA.
                        Where Every Child Finds Their Wings.
                    </p>
                </div>

                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="#admissions" className="btn-premium group">
                        Join Our Community
                    </Link>
                    <Link href="#about" className="group flex items-center gap-3 font-bold text-neutral-900 hover:text-primary-600 transition-colors">
                        Learn More
                        <span className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-primary-600 transition-colors">
                            ↓
                        </span>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary-600 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Scroll</span>
            </motion.div>
        </section>
    )
}
