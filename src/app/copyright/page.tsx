'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CopyrightPolicy() {
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
                        Copyright & Intellectual Property Policy
                    </motion.h1>
                    <p className="text-neutral-500 font-medium">Last Updated: 2026</p>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-8 md:p-12 bg-white rounded-[2rem] shadow-premium space-y-8 text-neutral-700 leading-relaxed"
                >
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">1. Ownership</h2>
                        <p>All content created and published by VIVEKANANDHA NURSERY & PRIMARY SCHOOL, including:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Text, notices, and circulars</li>
                            <li>Educational materials, worksheets, and lesson plans</li>
                            <li>School logo, name, photographs, and videos</li>
                            <li>Website content and downloadable resources</li>
                        </ul>
                        <p>are the intellectual property of the school unless otherwise stated.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">2. Permitted Use</h2>
                        <p>Users may:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>View content for personal and educational purposes</li>
                            <li>Download materials only where explicitly permitted</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">3. Prohibited Use</h2>
                        <p>Without prior written permission, users may not:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Reproduce or redistribute content</li>
                            <li>Modify or create derivative works</li>
                            <li>Use school materials for commercial purposes</li>
                            <li>Publish content on third-party platforms</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">4. Trademarks</h2>
                        <p>
                            The name VIVEKANANDHA NURSERY & PRIMARY SCHOOL and all associated logos and branding are protected identifiers.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-900">5. Enforcement</h2>
                        <p>
                            Unauthorized use may result in legal action under applicable copyright laws.
                        </p>
                    </section>

                    <section className="space-y-4 p-8 rounded-2xl bg-primary-50 border border-primary-100">
                        <h2 className="text-2xl font-bold text-neutral-900">6. Permission Requests</h2>
                        <p>For permission to use any content, please contact:</p>
                        <div className="mt-4 font-semibold text-neutral-900">
                            VIVEKANANDHA NURSERY & PRIMARY SCHOOL<br />
                            <div className="mt-2 text-primary-600">
                                Email: vivekanandhapanaiyur@gmail.com
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-primary-200 text-sm text-neutral-500">
                            © 2026 VIVEKANANDHA NURSERY & PRIMARY SCHOOL. All Rights Reserved.
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    )
}
