"use client"

import { motion } from "framer-motion"
import { SolutionSection } from "@/components/solution-section"
import { ProgramSection } from "@/components/program-section"
import { PricingSection } from "@/components/pricing-section"
import { MidCTASection } from "@/components/mid-cta-section"

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Layanan Kami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Solusi digital komprehensif mulai dari pengembangan website hingga optimasi SEO untuk pertumbuhan bisnis Anda.
          </motion.p>
        </div>
      </section>

      <SolutionSection />
      <ProgramSection />
      <PricingSection />
      <MidCTASection />
    </div>
  )
}
