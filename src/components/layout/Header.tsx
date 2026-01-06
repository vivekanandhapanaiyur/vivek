'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 150) {
            setIsHidden(true)
        } else {
            setIsHidden(false)
        }

        if (latest > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    })

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={isHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
                isScrolled ? "py-3" : "py-6"
            )}
        >
            <div className={cn(
                "max-w-7xl mx-auto rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between",
                isScrolled
                    ? "glass-panel shadow-premium"
                    : "bg-transparent"
            )}>
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    >
                        V
                    </motion.div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "font-display font-bold text-lg leading-none transition-colors",
                            isScrolled ? "text-neutral-900" : "text-neutral-900"
                        )}>
                            VIVEKANANDHA
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-primary-600 font-bold">
                            Nursery & Primary School
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link href="#contact" className="btn-premium py-2 px-6 text-sm group">
                        Apply Now
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </motion.header>
    )
}
