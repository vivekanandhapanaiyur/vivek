'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const footerLinks = {
  quickLinks: [
    { name: 'About Us', href: '/#about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Admissions', href: '/#admissions' },
    { name: 'Gallery', href: '/gallery' },
  ],
  resources: [
    { name: 'Student Portal', href: '#' },
    { name: 'Library', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Alumni', href: '#' },
  ],
  support: [
    { name: 'Contact Us', href: '/#contact' },
    { name: 'FAQ', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Sitemap', href: '#' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: 'https://www.facebook.com/profile.php?id=61577286920685'
  },
  {
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    href: 'https://www.instagram.com/vivekanandhaschool_panaiyur?igsh=bmg3N3k3bDVybjNi'
  },
  {
    name: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: 'https://youtube.com/@vivekanandhaschoolpanaiyur?si=Y2_WBchYA9V-W-oS'
  },
  {
    name: 'WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    href: 'https://wa.me/917708290080?text=Message%20Vivekanandha%20Nursery%20and%20Primary%20School%20Panaiyur%20on%20WhatsApp'
  },
]


export default function Footer() {
  const [subState, setSubState] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubState('LOADING');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email');

    try {
      const response = await fetch('https://formsubmit.co/ajax/vivekanandhapanaiyur@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          _subject: 'New Newsletter Subscription',
          _template: 'table'
        })
      });

      const result = await response.json();
      if (response.ok && result.success === "true") {
        setSubState('SUCCESS');
        form.reset();
      } else {
        setSubState('ERROR');
      }
    } catch (error) {
      setSubState('ERROR');
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-14 h-14 flex items-center justify-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="Vivekanandha School Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl">
                  VIVEKANANDHA
                </span>
                <span className="text-xs text-white/70">
                  Nursery & Primary School
                </span>
              </div>
            </Link>

            <p className="text-white/70 mb-6 leading-relaxed">
              Nurturing young minds through excellence in education and holistic development.
              Shape your child's future with Panaiyur's leading primary school.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  📍
                </div>
                <span>311 Perumal Kovil Street, Panaiyur-627761</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  🏙️
                </div>
                <span>Sankarankovil Taluk, Tenkasi District</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  📞
                </div>
                <span>+91 7708290080 / 81 / 82</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  📧
                </div>
                <span>vivekanandhapanaiyur@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display font-bold text-2xl mb-3">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter for the latest updates and announcements
            </p>
            {subState === 'SUCCESS' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 text-green-300 rounded-xl inline-block"
              >
                Thank you for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:bg-white/15 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={subState === 'LOADING'}
                  className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50"
                >
                  {subState === 'LOADING' ? 'Sending...' : 'Subscribe'}
                </motion.button>
              </form>
            )}
            {subState === 'ERROR' && (
              <p className="mt-4 text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} VIVEKANANDHA NURSERY & PRIMARY SCHOOL. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white/70 hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/copyright" className="hover:text-white transition-colors">
                Copyright
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}