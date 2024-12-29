import { HeroSection } from "./components/hero"
import { WhatIsSection } from "./components/what-is"
import { FeaturesSection } from "./components/features"
import { HowItWorksSection } from "./components/how-it-works"
import { WhoIsForSection } from "./components/who-is-for"
import { TestimonialsSection } from "./components/testimonials"
import { CtaSection } from "./components/cta"
import PageWithAppbar from "@/components/layout/pageWithAppbar"

export default function Home() {
  return (
    <PageWithAppbar>
      <HeroSection />
      <WhatIsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoIsForSection />
      <TestimonialsSection />
      <CtaSection />
    </PageWithAppbar>
  )
}
