'use client'

import { motion } from 'framer-motion'

const testimonials = [
    {
        name: 'Senthil Kumar',
        role: 'Parent of Grade 3 Student',
        content: 'The personal attention and care given to each child at Vivekanandha School is truly remarkable. My son has grown so much in his confidence.',
        image: '👤'
    },
    {
        name: 'Priya Dharshini',
        role: 'Parent of UKG Student',
        content: 'A perfect blend of academics and values. The teachers are incredibly patient and encouraging.',
        image: '👤'
    },
    {
        name: 'Ramesh Balan',
        role: 'Parent of Grade 1 Student',
        content: 'Interactive learning methods have made my daughter fall in love with school. Highly recommended for primary education.',
        image: '👤'
    }
]

export default function Testimonials() {
    return (
        <section className="section-container bg-white overflow-hidden">
            <div className="text-center mb-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-primary-600 font-bold uppercase tracking-widest text-xs"
                >
                    Parent Testimonials
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-display text-4xl md:text-5xl font-bold mt-4"
                >
                    What Our <span className="text-primary-600">Community Says.</span>
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-premium transition-all duration-500"
                    >
                        <div className="text-primary-600 text-4xl mb-6">"</div>
                        <p className="text-neutral-600 text-lg leading-relaxed mb-8 italic">
                            {t.content}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-xl">
                                {t.image}
                            </div>
                            <div>
                                <div className="font-bold text-neutral-900">{t.name}</div>
                                <div className="text-sm text-neutral-400">{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
