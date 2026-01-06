import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Programs from '@/components/home/Programs'
import Achievements from '@/components/home/Achievements'
import Testimonials from '@/components/home/Testimonials'
import Campus3D from '@/components/three/Campus3D'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <section id="programs" className="section-container bg-neutral-50">
        <Programs />
      </section>

      <Achievements />
      <Testimonials />
      <CTA />
    </>
  )
}