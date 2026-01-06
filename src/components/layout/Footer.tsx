'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = {
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Faculty', href: '/faculty' },
  ],
  resources: [
    { name: 'Student Portal', href: '/portal' },
    { name: 'Library', href: '/library' },
    { name: 'Research', href: '/research' },
    { name: 'Alumni', href: '/alumni' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Career', href: '/career' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  { name: 'YouTube', icon: 'youtube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              >
                V
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
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:bg-white/15 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
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
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  aria-label={social.name}
                >
                  {social.icon === 'facebook' && '📘'}
                  {social.icon === 'twitter' && '🐦'}
                  {social.icon === 'instagram' && '📷'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'youtube' && '📺'}
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}