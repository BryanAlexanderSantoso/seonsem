import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { ClientsSection } from "@/components/clients-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhySection } from "@/components/why-section"
import { ProgramSection } from "@/components/program-section"
import { FeatureHighlightSection } from "@/components/feature-highlight-section"
import { PricingSection } from "@/components/pricing-section"
import { RunningText } from "@/components/running-text"
import { TechStackSection } from "@/components/tech-stack-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { IndustriesSection } from "@/components/industries-section"
import { MidCTASection } from "@/components/mid-cta-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ClientsSection />
      <SolutionSection />
      <HowItWorksSection />
      <WhySection />
      <ProgramSection />
      <FeatureHighlightSection />
      <RunningText />
      <PricingSection />
      <TechStackSection />
      <PortfolioSection />
      <IndustriesSection />
      <MidCTASection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <FAQSection />
    </>
  )
}
