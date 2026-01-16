'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// This will dynamically load images from the public/images/gallery folder
// For now, we'll use a placeholder or check if any files exist.
// Since we can't easily list files in the browser at runtime without an API,
// we will provide a way to easily update this list or use a naming convention.

const galleryImages = [
    { src: '/images/gallery/v1 (1).png', alt: 'School Activity 1' },
    { src: '/images/gallery/v1 (2).png', alt: 'School Activity 2' },
    { src: '/images/gallery/v1 (3).png', alt: 'School Activity 3' },
    { src: '/images/gallery/v1 (4).png', alt: 'School Activity 4' },
    { src: '/images/gallery/v1 (5).png', alt: 'School Activity 5' },
    { src: '/images/gallery/v1 (6).png', alt: 'School Activity 6' },
    { src: '/images/gallery/v1 (7).png', alt: 'School Activity 7' },
    { src: '/images/gallery/v1 (8).png', alt: 'School Activity 8' },
    { src: '/images/gallery/v1 (9).png', alt: 'School Activity 9' },
    { src: '/images/gallery/v1 (10).png', alt: 'School Activity 10' },
    { src: '/images/gallery/v1 (11).png', alt: 'School Activity 11' },
    { src: '/images/gallery/v1 (12).png', alt: 'School Activity 12' },
    { src: '/images/gallery/v1 (13).png', alt: 'School Activity 13' },
    { src: '/images/gallery/v1 (14).png', alt: 'School Activity 14' },
    { src: '/images/gallery/v1 (15).png', alt: 'School Activity 15' },
    { src: '/images/gallery/v1 (16).png', alt: 'School Activity 16' },
    { src: '/images/gallery/v1 (17).png', alt: 'School Activity 17' },
    { src: '/images/gallery/v1 (18).png', alt: 'School Activity 18' },
    { src: '/images/gallery/v1 (19).png', alt: 'School Activity 19' },
    { src: '/images/gallery/v1 (20).png', alt: 'School Activity 20' },
    { src: '/images/gallery/v1 (21).png', alt: 'School Activity 21' },
    { src: '/images/gallery/v1 (22).png', alt: 'School Activity 22' },
    { src: '/images/gallery/v1 (23).png', alt: 'School Activity 23' },
    { src: '/images/gallery/v1 (24).png', alt: 'School Activity 24' },
    { src: '/images/gallery/v1 (25).png', alt: 'School Activity 25' },
    { src: '/images/gallery/v1 (26).png', alt: 'School Activity 26' },
    { src: '/images/gallery/v1 (27).png', alt: 'School Activity 27' },
    { src: '/images/gallery/v1 (28).png', alt: 'School Activity 28' },
    { src: '/images/gallery/v1 (29).png', alt: 'School Activity 29' },
    { src: '/images/gallery/v1 (30).png', alt: 'School Activity 30' },
    { src: '/images/gallery/v1 (31).png', alt: 'School Activity 31' },
    { src: '/images/gallery/v1 (32).png', alt: 'School Activity 32' },
    { src: '/images/gallery/v1 (33).png', alt: 'School Activity 33' },
    { src: '/images/gallery/v1 (34).png', alt: 'School Activity 34' },
    { src: '/images/gallery/v1 (35).png', alt: 'School Activity 35' },
    { src: '/images/gallery/v1 (36).png', alt: 'School Activity 36' },
    { src: '/images/gallery/v1 (37).png', alt: 'School Activity 37' },
]

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null)
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [])

    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4"
                    >
                        Our <span className="text-primary-600">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-600 max-w-2xl mx-auto"
                    >
                        A glimpse into the vibrant life at Vivekanandha Nursery & Primary School.
                        Moments of learning, joy, and achievement.
                    </motion.p>
                </div>

                {galleryImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedImage(image)}
                                className="group relative aspect-square overflow-hidden rounded-3xl bg-neutral-100 shadow-premium cursor-pointer"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex items-center space-x-2 text-white">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                        <p className="font-medium text-sm">Click to Enlarge</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-neutral-50 rounded-3xl border-2 border-dashed border-neutral-200">
                        <div className="mb-6 inline-flex w-16 h-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">No Images Yet</h3>
                        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                            The gallery is currently empty. Upload your school photos to the <code className="bg-neutral-100 px-2 py-1 rounded text-primary-700">public/images/gallery</code> folder to see them here!
                        </p>
                        <Link href="/" className="btn-premium py-3 px-8">
                            Back to Home
                        </Link>
                    </div>
                )}
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors p-2 z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-full max-h-[85vh] rounded-2xl overflow-hidden cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain shadown-2xl"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-lg font-medium text-center">{selectedImage.alt}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
