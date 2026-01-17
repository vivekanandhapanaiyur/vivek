'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const trustObjectives = [
    "Establish, maintain, run, develop, improve, extend, and grant donations for and to aid in the establishment, maintenance running development improvement and extension of schools, Teacher Training Schools and Colleges etc., in arts and vocational pursuits as calculated to be of use in imparting education to the student population in particular.",
    "To encourage studies of all faculties and to institute prizes, endowments, shields, Rolling Trophies, etc., for students in any School, College or Educational Institutions.",
    "To Establish and /or aid other institutions engaged in the advancement of study of or research works in science, literature etc.,",
    "To establish, maintain, run and administer orphanages, children home, free hostels, and such other institutions for providing accommodation and other facilities to the poor students.",
    "To promote mass integration to regenerating unity among the public through awareness, cultural sports and other cultural activities",
    "To work for eradicating AIDS by organizing and conducting AIDS awareness camps, distributing contraceptives, arranging meetings and seminars for propagating and creating awareness of AIDS",
    "To redress the grievances of victims of AIDS , Cancer and other life killing diseases",
    "To provide free legal assistance to the poor and the under privileged in respect of matters or disputes arising out of, or incidental to their RIGHT.",
    "To make the people aware of ENVIORMENTAL POLLUTION and take precautionary measures for control the same.",
    "To institute Scholarship, award for the studies, research and apprenticeship and pay out such stipends, school, college fees for study, funds for purchase of books and equipment and uniforms etc., on such terms as the office bearers deem fit commensurate with the source of the society.",
    "To promote Sports.",
    "To work for RURAL DEVELOPMENT.",
    "To develop human resources, conduct vocational training programmes, social economic and employment oriented schemes for poor weaker sections, Women, handicapped, aged, school, dropouts, unemployes, underemployed youths in rural and urban areas.",
    "To do all activities necessary for the promotion of education and for the upliftment of poor, downtrodden, disabled, uncared for the citizens, of this country.",
    "To enable young people learn about social development and communication through experimental learning and to encourage them to act on their understanding.",
    "To conduct special programmes for the development of downtrodden people.",
    "To redeem the drunkards and to redress the grievance, make arrangements and organize programmes for eradicating the social evil of drinking liquor.",
    "To establish DRUG DEADDICTION CENTRE so as to make the drunkards abstain from drugs and other narcotics.",
    "To help the old, disabled, destitute, orphans, handicapped and poor people by running homes, orphanages etc., for their welfare."
]

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Back Link */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="text-primary-600 font-semibold flex items-center gap-2 mb-8 hover:gap-3 transition-all"
                    >
                        ← Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
                    >
                        About <span className="text-primary-600">Our School</span>
                    </motion.h1>
                </div>

                {/* School Profile Section */}
                <section className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider">
                            School Profile
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900 leading-tight">
                            A Legacy of Excellence <br /> Since 1986
                        </h2>
                        <div className="space-y-4 text-neutral-600 leading-relaxed text-lg">
                            <p>
                                <span className="font-bold text-neutral-900">VIVEKANANDHA NURSERY & PRIMARY SCHOOL</span> is run by S.S PILLAIYAR RAJA LAKSHMIAMMAL EDUCATIONAL & CHARITABLE TRUST.
                            </p>
                            <p>
                                Located at 311-A Perumal Koil Street Panaiyur, Vivekanandha Nursery & Primary School was established in 1986 and recognized on 08-10-1993. What began with approximately 24 children has now grown into a thriving educational hub housing 319 students.
                            </p>
                            <p>
                                Our campus features 15 modern classrooms supported by a dedicated team of 16 full-time teaching staff, including specialists in physical education and music. We take pride in our administrative excellence and specialized educational support for Mathematics and Spoken English.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel p-8 bg-white shadow-premium rounded-[2.5rem]"
                    >
                        <h3 className="text-xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">👔</span>
                            Our Leadership
                        </h3>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 group hover:shadow-premium transition-all duration-300">
                                <div className="text-primary-600 text-sm font-bold mb-1">Correspondent</div>
                                <div className="text-xl font-bold text-neutral-900">Mrs. V. LALITHA</div>
                                <div className="text-neutral-500 text-sm font-medium">D.Pri.Ed., D.El.Ed.</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 group hover:shadow-premium transition-all duration-300">
                                <div className="text-primary-600 text-sm font-bold mb-1">Principal</div>
                                <div className="text-xl font-bold text-neutral-900">Mr. P. VASUDEVAN</div>
                                <div className="text-neutral-500 text-sm font-medium">M.Com., B.Ed.</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 group hover:shadow-premium transition-all duration-300">
                                <div className="text-primary-600 text-sm font-bold mb-1">Secretary</div>
                                <div className="text-xl font-bold text-neutral-900">Mr. V. VIGNESH</div>
                                <div className="text-neutral-500 text-sm font-medium">B.E., D.El.Ed., B.Sc.</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-primary-50 text-xl leading-relaxed">
                            To empower students to acquire, demonstrate, articulate and value knowledge and skills that will support them, as life-long learners, to participate in and contribute to the global world and practice the core values of the school: respect, tolerance & inclusion, and excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-10 rounded-[2.5rem] bg-white border border-primary-100 shadow-premium relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-32 h-32 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-neutral-900">Our Mission</h2>
                        <div className="space-y-4 text-neutral-600 leading-relaxed">
                            <p className="font-medium text-neutral-900">To enable all learners access to learning through the provision of:</p>
                            <ul className="space-y-3">
                                {[
                                    "Highly effective teachers focused on students outcomes",
                                    "Quality inclusive learning environment",
                                    "Enriching, engaging resource availability",
                                    "Community and parent participation opportunities"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-primary-600 font-bold">➢</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Objectives */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Trust Objectives</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">
                            The S.S PILLAIYAR RAJA LAKSHMIAMMAL EDUCATIONAL & CHARITABLE TRUST works towards a broader vision of social development and educational excellence.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trustObjectives.map((objective, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 3) * 0.1 }}
                                className="p-6 rounded-3xl bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-premium transition-all duration-300 flex gap-4 items-start"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold flex-shrink-0 mt-1 text-sm">
                                    {index + 1}
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    {objective}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
