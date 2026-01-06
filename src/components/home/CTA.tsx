'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
    return (
        <section id="admissions" className="section-container">
            <div className="relative overflow-hidden rounded-[3rem] premium-gradient p-12 md:p-24 text-center">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-900/40 blur-[100px] rounded-full -ml-48 -mb-48" />

                <div className="relative z-10 max-w-3xl mx-auto text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
                    >
                        Admissions for 2026 Now Open
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl font-bold mb-8"
                    >
                        Give Your Child <br />
                        The Gift Of A <span className="text-primary-200">Better Future.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg md:text-xl mb-12"
                    >
                        Join more than 500+ families who trust Vivekanandha School for their child foundation.
                        Limited seats available for the upcoming academic year.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link href="#contact" className="btn-premium px-12 py-5 bg-white text-primary-900 group">
                            Apply Online Today
                        </Link>
                        <Link href="tel:+917708290080" className="btn-premium px-12 py-5 bg-primary-900/30 text-white border border-white/20 group">
                            Call Admissions Office
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
