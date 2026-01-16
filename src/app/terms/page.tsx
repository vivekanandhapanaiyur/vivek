'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsOfService() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
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
                        className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
                    >
                        Terms of Service
                    </motion.h1>
                    <p className="text-neutral-500 font-medium">Effective Date: 2026</p>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-8 md:p-12 bg-white rounded-[2rem] shadow-premium space-y-8 text-neutral-700 leading-relaxed"
                >
                    <section>
                        <p>
                            By accessing or using the services, website, or facilities of VIVEKANANDHA NURSERY & PRIMARY SCHOOL, you agree to comply with the following Terms of Service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">1. Purpose</h2>
                        <p>
                            The school provides early childhood and primary education services in accordance with applicable educational standards and regulations.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">2. Admissions & Enrollment</h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Admission is subject to eligibility criteria and availability of seats.</li>
                            <li>Submission of accurate information is mandatory.</li>
                            <li>The school reserves the right to accept or reject any application.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">3. Student Conduct</h2>
                        <p>Students are expected to:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Follow school rules and discipline policies</li>
                            <li>Respect teachers, staff, and fellow students</li>
                            <li>Maintain a safe and positive learning environment</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">4. Parent/Guardian Responsibilities</h2>
                        <p>Parents/Guardians agree to:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Cooperate with school policies and staff</li>
                            <li>Ensure timely payment of fees</li>
                            <li>Support the child’s academic and behavioral development</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">5. Fees and Payments</h2>
                        <p>
                            All fees must be paid within the stipulated time. Non-payment may result in suspension of services as per school policy.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">6. Limitation of Liability</h2>
                        <p>The school is not responsible for:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Loss of personal belongings</li>
                            <li>Events beyond reasonable control (natural disasters, government orders)</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">7. Modification of Services</h2>
                        <p>
                            The school reserves the right to modify curriculum, policies, schedules, or facilities when necessary.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">8. Governing Law</h2>
                        <p>
                            These Terms shall be governed by the laws applicable in India (Tamil Nadu).
                        </p>
                    </section>

                    <section className="space-y-4 p-8 rounded-2xl bg-primary-50 border border-primary-100">
                        <h2 className="text-2xl font-bold text-neutral-900">9. Contact Details</h2>
                        <div className="mt-4 font-semibold text-neutral-900">
                            VIVEKANANDHA NURSERY & PRIMARY SCHOOL<br />
                            311, Perumal Kovil Street,<br />
                            Panaiyur – 627761<br />
                            Sankarankovil Taluk,<br />
                            Tenkasi District<br />
                            <div className="mt-2 text-primary-600">
                                Email: vivekanandhapanaiyur@gmail.com
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    )
}
