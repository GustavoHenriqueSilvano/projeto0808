import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { Environment } from './sections/Environment'
import { Pricing } from './sections/Pricing'
import { FinalCta } from './sections/FinalCta'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Environment />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
