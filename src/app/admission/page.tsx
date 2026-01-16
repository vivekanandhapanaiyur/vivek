'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AdmissionPage() {
    const [state, setState] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorDetails, setErrorDetails] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const data = new FormData(form)
        const object = Object.fromEntries(data.entries())

        // FormSubmit.co features
        object._subject = 'New Admission Application (AY 2026-27)'
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

            const result = await response.json().catch(() => ({ success: "false", message: "Server returned non-JSON response" }))

            if (response.ok && String(result.success) === "true") {
                setState('SUCCESS')
                form.reset()
                setErrorDetails(null)
            } else {
                const errorMsg = result.message || `Status: ${response.status}`
                console.error('FormSubmit Failure Details:', {
                    status: response.status,
                    result: result
                })
                setErrorDetails(errorMsg)
                setState('ERROR')
            }
        } catch (error: any) {
            console.error('Network Error:', error)
            setErrorDetails(error?.message || 'Network unreachable')
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
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="glass-panel p-12 bg-white rounded-[3rem] shadow-premium"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                            ✓
                        </div>
                        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-4">Admission Application Received!</h1>
                        <p className="text-neutral-600 mb-8">
                            Thank you for applying. We have received your admission form for AY 2026-27 and will get back to you shortly.
                        </p>
                        <button
                            onClick={() => setState('IDLE')}
                            className="btn-premium px-8 py-4"
                        >
                            Return to Form
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
                        className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4 uppercase"
                    >
                        ADMISSION FORM
                    </motion.h1>
                    <p className="text-primary-600 font-bold tracking-widest uppercase mb-4">Session: AY 2026-27</p>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Please fill out the form carefully for admission. All fields marked with * are mandatory.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel p-6 md:p-12 bg-white rounded-[3rem] shadow-premium"
                >
                    <form onSubmit={handleSubmit} className="space-y-12">
                        {/* Basic Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center border-b pb-4 border-neutral-100">
                                <span className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm">01</span>
                                Basic Details
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">First Name *</label>
                                    <input required name="first_name" type="text" placeholder="First Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Last Name</label>
                                    <input name="last_name" type="text" placeholder="Last Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Student Mobile Number *</label>
                                    <input required name="student_mobile" type="tel" placeholder="Mobile Number" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Date of Birth</label>
                                    <input name="dob" type="date" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Gender</label>
                                    <select name="gender" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Blood Group</label>
                                    <input name="blood_group" type="text" placeholder="e.g. A+ve" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Class seeking admission for *</label>
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

                        {/* Address Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center border-b pb-4 border-neutral-100">
                                <span className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm">02</span>
                                Address Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Address Line 1</label>
                                    <input name="address_1" type="text" placeholder="House No / Street" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Address Line 2</label>
                                    <input name="address_2" type="text" placeholder="Area / Locality" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">City/Town</label>
                                    <input name="city" type="text" placeholder="City" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">State</label>
                                    <input name="state" type="text" placeholder="State" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">PIN Code</label>
                                    <input name="pin_code" type="text" placeholder="XXXXXX" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Country</label>
                                    <input name="country" type="text" defaultValue="India" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Father's Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center border-b pb-4 border-neutral-100">
                                <span className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm">03</span>
                                Father's Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Name</label>
                                    <input name="father_name" type="text" placeholder="Father's Full Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Mobile Number</label>
                                    <input name="father_mobile" type="tel" placeholder="Mobile Number" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Educational Qualification</label>
                                    <input name="father_qualification" type="text" placeholder="Qualification" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Occupation</label>
                                    <input name="father_occupation" type="text" placeholder="Occupation" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Annual Income</label>
                                    <input name="father_income" type="text" placeholder="Annual Income" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Mother's Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center border-b pb-4 border-neutral-100">
                                <span className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm">04</span>
                                Mother's Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Name</label>
                                    <input name="mother_name" type="text" placeholder="Mother's Full Name" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Mobile Number</label>
                                    <input name="mother_mobile" type="tel" placeholder="Mobile Number" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Occupation</label>
                                    <input name="mother_occupation" type="text" placeholder="Occupation" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Additional Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center border-b pb-4 border-neutral-100">
                                <span className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-sm">05</span>
                                Additional Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Religion</label>
                                    <input name="religion" type="text" placeholder="Religion" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Mother Tongue</label>
                                    <input name="mother_tongue" type="text" placeholder="Language" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Emergency Contact Number</label>
                                    <input name="emergency_phone" type="tel" placeholder="Emergency Number" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Nationality</label>
                                    <input name="nationality" type="text" defaultValue="Indian" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Right To Education (RTE)</label>
                                    <select name="rte" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Person with Disability (PwD)</label>
                                    <select name="pwd" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Type of Disability (if any)</label>
                                    <input name="disability_type" type="text" placeholder="Type" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Identification Mark</label>
                                    <input name="id_mark" type="text" placeholder="Identification Mark" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Declaration */}
                        <div className="pt-8 border-t border-neutral-100 space-y-4">
                            <h3 className="text-xl font-bold text-neutral-900">Declaration</h3>
                            <div className="space-y-3 text-sm text-neutral-600 bg-neutral-50 p-6 rounded-2xl">
                                <p>1. I/We hereby certify that the information provided is correct.</p>
                                <p>2. I/We understand that if the information is found to be incorrect or false, my ward will be automatically debarred from the selection/admission process without any correspondence in this regard.</p>
                                <p>3. I/We also understand that the application/registration/waitlisting does not guarantee admission to my ward.</p>
                                <p>4. I/We accept the process of admission undertaken by the school and I/We will abide by the decision taken by the school authorities.</p>

                                <div className="mt-6 flex items-start space-x-3 pt-4 border-t border-neutral-200">
                                    <input required type="checkbox" name="agree" id="agree" className="mt-1 w-5 h-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                                    <label htmlFor="agree" className="font-bold text-neutral-900 select-none cursor-pointer">
                                        I/We agree to the mentioned terms & conditions.
                                    </label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Place *</label>
                                    <input required name="place" type="text" placeholder="Place" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Date *</label>
                                    <input required name="submission_date" type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Signature of the Parent/Guardian (Type Name) *</label>
                                    <input required name="signature_name" type="text" placeholder="Full name as signature" className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-display italic" />
                                </div>
                            </div>
                        </div>

                        {state === 'ERROR' && (
                            <div className="p-6 bg-red-50 text-red-600 rounded-2xl border border-red-100 space-y-2">
                                <p className="font-bold">Submission failed</p>
                                <p className="text-sm opacity-80">Reason: {errorDetails || 'Please check your internet connection and try again.'}</p>
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
                                    Processing Application...
                                </span>
                            ) : (
                                "Submit ADMISSION FORM"
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    )
}
