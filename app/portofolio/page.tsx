"use client"

import { PortfolioSection } from "@/components/portfolio-section"
import { IndustriesSection } from "@/components/industries-section"
import { MidCTASection } from "@/components/mid-cta-section"

export default function PortfolioPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <PortfolioSection />
      <IndustriesSection />
      <MidCTASection />
    </div>
  )
}
