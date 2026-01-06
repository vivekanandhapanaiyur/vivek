'use client'

import { motion } from 'framer-motion'

const stats = [
    { label: 'Qualified Teachers', value: '25+', icon: '🎓' },
    { label: 'Happy Students', value: '500+', icon: '😊' },
    { label: 'Years of Excellence', value: '15+', icon: '⭐' },
    { label: 'Awards Won', value: '50+', icon: '🏆' }
]

export default function Achievements() {
    return (
        <section className="section-container bg-neutral-900 text-white overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-primary-400 font-bold uppercase tracking-widest text-xs"
                    >
                        Our Legacy
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl font-bold mt-4 mb-8"
                    >
                        A Journey of <br />
                        <span className="text-gradient">Inspired Learning.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg leading-relaxed mb-12"
                    >
                        Since our inception, we have been committed to providing an environment
                        where excellence is not just a goal, but a way of life. Our statistics
                        speak volumes about our dedication.
                    </motion.p>

                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10"
                            >
                                <div className="text-3xl mb-4">{stat.icon}</div>
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-white/40 text-sm font-bold uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="relative aspect-square rounded-[3rem] overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-primary-600/10 transition-colors duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-white/10 blur-3xl animate-pulse" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center p-20">
                        <h3 className="font-display text-8xl md:text-9xl font-bold text-white/10 select-none">V</h3>
                    </div>
                    {/* Decorative lines */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary-500/30" />
                        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary-500/30" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
