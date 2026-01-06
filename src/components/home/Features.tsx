'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
const features = [
    {
        title: 'Advanced Curriculum',
        description: 'A future-ready syllabus blending tradition with modern technology.',
        icon: '📚',
        color: 'bg-primary-50',
        textColor: 'text-primary-600'
    },
    {
        title: 'Expert Faculty',
        description: 'Dedicated educators committed to nurturing every child’s potential.',
        icon: '👩‍🏫',
        color: 'bg-accent-50',
        textColor: 'text-accent-600'
    },
    {
        title: 'Smart Learning',
        description: 'Equipped with digital tools to make learning interactive and fun.',
        icon: '💻',
        color: 'bg-blue-50',
        textColor: 'text-blue-600'
    },
    {
        title: 'Safe Environment',
        description: 'A secure, caring space where children feel home away from home.',
        icon: '🛡️',
        color: 'bg-green-50',
        textColor: 'text-green-600'
    }
]

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section id="about" className="section-container bg-white overflow-hidden">
            <div className="text-center mb-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-primary-600 font-bold uppercase tracking-widest text-xs"
                >
                    Why Choose Us
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-display text-4xl md:text-5xl font-bold mt-4"
                >
                    Empowering Children To <br />
                    <span className="text-primary-600">Believe & Achieve.</span>
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group glass-card p-10 hover:shadow-premium"
                    >
                        <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-neutral-500 leading-relaxed">
                            {feature.description}
                        </p>

                        <motion.div
                            className="mt-8 w-12 h-1 bg-primary-100 rounded-full overflow-hidden"
                            whileHover={{ width: '4rem' }}
                        >
                            <div className="w-full h-full bg-primary-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
