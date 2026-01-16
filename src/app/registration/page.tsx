'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function RegistrationPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [state, setState] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const data = new FormData(form)
        const object = Object.fromEntries(data.entries())

        // FormSubmit.co features
        object._subject = 'New Student Registration (AY 2024-25)'
        object._template = 'table'
        object._captcha = 'false'

        try {
            const response = await fetch('https://formsubmit.co/ajax/vivekanandhapanaiyur@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(object)
            })

            const result = await response.json().catch(() => ({ success: "false", message: "Invalid JSON response" }))

            if (response.ok && String(result.success) === "true") {
                setState('SUCCESS')
                form.reset()
            } else {
                console.error(`FormSubmit Failure (${response.status}):`, result)
                setState('ERROR')
            }
        } catch (error) {
            console.error('Submission Error:', error)
            setState('ERROR')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (state === 'SUCCESS') {
        return (
            <main className="min-h-screen pt-32 pb-20 bg-neutral-50 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-panel p-12 bg-white rounded-[3rem] shadow-premium"
                    >
                        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-4">Registration Submitted!</h1>
                        <p className="text-neutral-600 mb-8">
                            Thank you for choosing Vivekanandha Nursery & Primary School. We have received your application and will contact you shortly at the provided phone number.
                        </p>
                        <button
                            onClick={() => setState('IDLE')}
                            className="btn-premium px-8 py-4"
                        >
                            Register Another Student
                        </button>
                    </motion.div>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen pt-32 pb-20 bg-neutral-50 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4"
                    >
                        Registration Form <span className="text-primary-600">(AY 2024-25)</span>
                    </motion.h1>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Please fill out the form below carefully. All fields marked with * are mandatory.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel p-6 md:p-12 bg-white rounded-[3rem] shadow-premium"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Student Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center">
                                <span className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm">01</span>
                                Student Details
                            </h3>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">1. First Name *</label>
                                    <input required name="first_name" type="text" placeholder="First Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">2. Middle Name</label>
                                    <input name="middle_name" type="text" placeholder="Middle Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">3. Last Name</label>
                                    <input name="last_name" type="text" placeholder="Last Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">4. Student Mobile Number *</label>
                                    <input required name="student_mobile" type="tel" placeholder="Mobile Number" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">5. Date of Birth</label>
                                    <input name="dob" type="date" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">6. Gender</label>
                                    <select name="gender" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">7. Class seeking admission for *</label>
                                    <select required name="class_seeking" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                                        <option value="">Select Class</option>
                                        <option value="pre-kg">Pre-KG</option>
                                        <option value="lkg">L.K.G</option>
                                        <option value="ukg">U.K.G</option>
                                        <option value="grade-1">Grade 1</option>
                                        <option value="grade-2">Grade 2</option>
                                        <option value="grade-3">Grade 3</option>
                                        <option value="grade-4">Grade 4</option>
                                        <option value="grade-5">Grade 5</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Parent & School Details */}
                        <div className="pt-8 border-t border-neutral-100 space-y-6">
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center">
                                <span className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm">02</span>
                                Parent & Previous School Details
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">8. Father's Name</label>
                                    <input name="father_name" type="text" placeholder="Father's Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">9. Mother's Name</label>
                                    <input name="mother_name" type="text" placeholder="Mother's Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">10. School Name</label>
                                    <input name="previous_school" type="text" placeholder="Last School Attended" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">11. Medium of Instruction</label>
                                    <select name="medium" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                                        <option value="">Select Medium</option>
                                        <option value="english">English</option>
                                        <option value="tamil">Tamil</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-neutral-700 ml-1">12. T.C. Number</label>
                                <input name="tc_number" type="text" placeholder="Transfer Certificate Number" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                            </div>
                        </div>

                        {state === 'ERROR' && (
                            <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium border border-red-100">
                                Something went wrong. Please check your internet connection and try again.
                            </div>
                        )}

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full btn-premium py-5 text-lg group relative overflow-hidden disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting Form...
                                </span>
                            ) : (
                                "Submit Registration Form"
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    )
}
