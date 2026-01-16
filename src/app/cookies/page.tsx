'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CookiesPolicy() {
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
                        Cookies Policy (Manage Cookies)
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
                            VIVEKANANDHA NURSERY & PRIMARY SCHOOL uses cookies and similar technologies to improve website functionality and user experience. This Cookies Policy explains what cookies are, how we use them, and how you can manage your preferences.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites function efficiently and provide information to website administrators.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">2. Types of Cookies We Use</h2>
                        <p>We may use the following types of cookies:</p>
                        <div className="space-y-4 ml-4">
                            <div>
                                <h3 className="font-bold text-neutral-900 italic">a. Essential Cookies</h3>
                                <p className="mt-1">These cookies are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas of the website.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-900 italic">b. Performance & Analytics Cookies</h3>
                                <p className="mt-1">These cookies help us understand how visitors interact with our website by collecting anonymous information such as pages visited, time spent on the site, and browser type. This helps us improve website performance.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-900 italic">c. Functional Cookies</h3>
                                <p className="mt-1">These cookies allow the website to remember your preferences (such as language or region) to provide a more personalized experience.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">3. How We Use Cookies</h2>
                        <p>Cookies are used to:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Ensure proper functioning of the website</li>
                            <li>Improve website performance and usability</li>
                            <li>Analyze traffic and usage patterns</li>
                            <li>Enhance user experience</li>
                        </ul>
                        <p>We do not use cookies to collect sensitive personal information.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">4. Managing Your Cookie Preferences</h2>
                        <p>
                            You can manage or disable cookies at any time through your browser settings. Please note that disabling certain cookies may affect the functionality and performance of the website.
                        </p>
                        <p>Common browser settings allow you to:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>View cookies stored on your device</li>
                            <li>Delete existing cookies</li>
                            <li>Block all or specific cookies</li>
                            <li>Set alerts before cookies are stored</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">5. Third-Party Cookies</h2>
                        <p>
                            Our website may use limited third-party services (such as analytics tools) that place cookies to help us understand website usage. These cookies are governed by the respective third-party privacy policies.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">6. Children’s Privacy</h2>
                        <p>
                            Our website is intended for parents, guardians, and the general public. We do not knowingly use cookies to collect personal information from children.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">7. Updates to This Cookies Policy</h2>
                        <p>
                            We may update this Cookies Policy from time to time. Any changes will be reflected on this page with an updated effective date.
                        </p>
                    </section>

                    <section className="space-y-4 p-8 rounded-2xl bg-primary-50 border border-primary-100">
                        <h2 className="text-2xl font-bold text-neutral-900">8. Contact Us</h2>
                        <p>For questions regarding this Cookies Policy or cookie management, please contact:</p>
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
