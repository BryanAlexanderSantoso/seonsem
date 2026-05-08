"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const whyReasons = [
  {
    title: "Pengalaman & Expertise",
    description: "Tim kami memiliki pengalaman bertahun-tahun dalam web development dan SEO untuk berbagai industri.",
    stats: "5+ Years",
  },
  {
    title: "Hasil Terukur",
    description: "Kami fokus pada hasil yang dapat diukur. Traffic, ranking, dan konversi yang meningkat.",
    stats: "100+ Projects",
  },
  {
    title: "Support Berkelanjutan",
    description: "Kami tidak hanya membuat dan meninggalkan. Support dan monitoring terus kami berikan.",
    stats: "24/7 Support",
  },
]

export function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Kenapa Memilih Seonsem.com?
            </h2>
            <p className="text-lg text-muted-foreground">
              Kami bukan sekadar membuat website. Kami membangun aset digital yang bekerja untuk bisnis Anda.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "100+", label: "Projects" },
                { value: "50+", label: "Clients" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Scrollable */}
          <div ref={containerRef} className="space-y-6">
            {whyReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full whitespace-nowrap">
                    {reason.stats}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
