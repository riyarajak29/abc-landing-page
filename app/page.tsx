import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DailyRewards } from "@/components/daily-rewards"
import { ProgressTracking } from "@/components/progress-tracking"
import { Microlearning } from "@/components/microlearning"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DailyRewards />
      <ProgressTracking />
      <Microlearning />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
