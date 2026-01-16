'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
                        Privacy Policy
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
                            VIVEKANANDHA NURSERY & PRIMARY SCHOOL (“we”, “our”, “us”) is committed to protecting the privacy and personal information of students, parents, guardians, staff, and website visitors. This Privacy Policy explains how we collect, use, store, and protect your information.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">1. Information We Collect</h2>
                        <p>We may collect the following information:</p>
                        <div className="space-y-4 ml-4">
                            <div>
                                <h3 className="font-bold text-neutral-900 italic">a. Personal Information</h3>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Student name and date of birth</li>
                                    <li>Parent/Guardian name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Residential address</li>
                                    <li>Admission and academic-related information</li>
                                    <li>Any details voluntarily submitted through forms or email</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-900 italic">b. Non-Personal Information</h3>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>IP address</li>
                                    <li>Browser and device details</li>
                                    <li>Website usage data</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">2. How We Use the Information</h2>
                        <p>Collected information is used to:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Process admissions and school administration</li>
                            <li>Communicate with parents and guardians</li>
                            <li>Maintain academic and student records</li>
                            <li>Improve school services and website experience</li>
                            <li>Comply with legal and educational regulations</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">3. Sharing of Information</h2>
                        <p>We do not sell or rent personal information. Data may be shared only with:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Government or education authorities (when legally required)</li>
                            <li>Authorized service providers assisting school operations</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">4. Data Security</h2>
                        <p>
                            We take reasonable administrative and technical measures to safeguard personal information. While we strive to protect data, no method of electronic storage is completely secure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">5. Data Retention</h2>
                        <p>
                            Personal data is retained only for as long as necessary to meet educational, legal, and administrative purposes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">6. Children’s Privacy</h2>
                        <p>
                            We collect children’s data strictly for educational purposes and only with the consent of parents or guardians.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">7. Changes to This Policy</h2>
                        <p>
                            This Privacy Policy may be updated periodically. Continued use of our services implies acceptance of the updated policy.
                        </p>
                    </section>

                    <section className="space-y-4 p-8 rounded-2xl bg-primary-50 border border-primary-100">
                        <h2 className="text-2xl font-bold text-neutral-900">8. Contact Information</h2>
                        <p>For any privacy-related concerns, please contact:</p>
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
