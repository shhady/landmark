import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'

// Dynamically import components that are below the fold
// This dramatically reduces the initial Javascript bundle size
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'))
const Process = dynamic(() => import('@/components/sections/Process'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const CTA = dynamic(() => import('@/components/sections/CTA'))

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Critical Path - Loaded Immediately */}
      <Hero />
      <Services />
      
      {/* Deferred Loading - Loaded on Demand */}
      <WhyChooseUs />
      <Process />
      <FAQ />
      <CTA />
    </main>
  )
}
