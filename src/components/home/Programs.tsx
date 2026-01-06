'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const programs = [
  {
    id: 1,
    title: 'Pre-Primary Education',
    duration: '3 Years',
    students: '100+',
    image: '/images/nursery.jpg',
    color: 'from-blue-500 to-blue-700',
    description: 'Nurturing the first steps with play-way methods for Nursery, LKG, and UKG.',
    specializations: ['Motor Skills', 'Cognitive Play', 'Language Basics', 'Socializing'],
  },
  {
    id: 2,
    title: 'Lower Primary',
    duration: '2 Years',
    students: '150+',
    image: '/images/primary1.jpg',
    color: 'from-primary-500 to-primary-700',
    description: 'Building strong foundations in Grade 1 and 2 through activity-based learning.',
    specializations: ['Numeracy', 'Literacy', 'Environmental Science', 'Moral Values'],
  },
  {
    id: 3,
    title: 'Upper Primary',
    duration: '3 Years',
    students: '200+',
    image: '/images/primary2.jpg',
    color: 'from-accent-500 to-accent-700',
    description: 'Comprehensive academic development for Grade 3 to 5.',
    specializations: ['Mathematics', 'Social Studies', 'Computer Basics', 'Creative Arts'],
  },
  {
    id: 4,
    title: 'Extracurriculars',
    duration: 'Year-round',
    students: 'All',
    image: '/images/sports.jpg',
    color: 'from-success-500 to-success-700',
    description: 'Holistic growth through sports, arts, and cultural activities.',
    specializations: ['Physical Ed', 'Dance & Music', 'Art & Craft', 'Yoga'],
  },
]

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="container-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4"
        >
          Our Programs
        </motion.span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
          Choose Your Path to
          <span className="block text-gradient-accent mt-2">
            Excellence
          </span>
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Discover diverse academic programs designed to shape future leaders and innovators
        </p>
      </motion.div>

      <div ref={ref} className="grid lg:grid-cols-2 gap-8">
        {/* Programs List */}
        <div className="space-y-4">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setActiveProgram(index)}
              className={`cursor-pointer transition-all duration-300 ${activeProgram === index ? 'scale-105' : 'scale-100'
                }`}
            >
              <div
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${activeProgram === index
                    ? 'bg-gradient-to-br ' + program.color + ' border-transparent shadow-2xl text-white'
                    : 'bg-white border-neutral-200 hover:border-primary-300 text-neutral-900'
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-2">
                      {program.title}
                    </h3>
                    <p className={`text-sm ${activeProgram === index ? 'text-white/90' : 'text-neutral-600'}`}>
                      {program.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: activeProgram === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>

                <div className="flex gap-4 mt-4">
                  <div className={`px-3 py-1 rounded-lg text-sm ${activeProgram === index ? 'bg-white/20' : 'bg-neutral-100'
                    }`}>
                    📅 {program.duration}
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-sm ${activeProgram === index ? 'bg-white/20' : 'bg-neutral-100'
                    }`}>
                    👥 {program.students}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Program Details */}
        <motion.div
          key={activeProgram}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-24 h-fit"
        >
          <div className="card-premium p-8 relative overflow-hidden">
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${programs[activeProgram].color} opacity-5`}></div>

            {/* Image Placeholder */}
            <div className={`relative w-full h-64 rounded-xl bg-gradient-to-br ${programs[activeProgram].color} mb-6 overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                {activeProgram === 0 && '💻'}
                {activeProgram === 1 && '📊'}
                {activeProgram === 2 && '🎨'}
                {activeProgram === 3 && '⚕️'}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-2xl font-bold">{programs[activeProgram].title}</div>
              </div>
            </div>

            {/* Specializations */}
            <div className="relative z-10">
              <h4 className="font-display text-xl font-bold text-neutral-900 mb-4">
                Specializations
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {programs[activeProgram].specializations.map((spec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`px-4 py-3 rounded-lg bg-gradient-to-br ${programs[activeProgram].color} text-white text-center font-semibold shadow-lg`}
                  >
                    {spec}
                  </motion.div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-neutral-700">
                  <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center text-success-600">
                    ✓
                  </div>
                  <span>Industry-recognized certification</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700">
                  <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center text-success-600">
                    ✓
                  </div>
                  <span>Hands-on practical training</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700">
                  <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center text-success-600">
                    ✓
                  </div>
                  <span>International exposure programs</span>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r ${programs[activeProgram].color}`}
              >
                Apply for {programs[activeProgram].title}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}