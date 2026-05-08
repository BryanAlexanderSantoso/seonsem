"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Analisa kebutuhan bisnis",
    description: "Kami mulai dengan memahami bisnis, target market, dan tujuan Anda secara mendalam",
  },
  {
    number: "02",
    title: "Riset keyword & kompetitor",
    description: "Melakukan riset mendalam tentang keyword potensial dan analisis kompetitor",
  },
  {
    number: "03",
    title: "Pembuatan / optimasi website",
    description: "Membangun atau mengoptimasi website dengan standar terbaik",
  },
  {
    number: "04",
    title: "SEO implementation",
    description: "Implementasi strategi SEO on-page dan off-page yang terukur",
  },
  {
    number: "05",
    title: "Monitoring hasil",
    description: "Memantau dan mengoptimasi hasil secara berkelanjutan",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Work Progress in Digital Mastery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Semua dilakukan dengan sistem yang jelas & terarah
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 bg-white border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-xl">
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-14 left-[calc(100%-1.5rem)] w-12 border-t-2 border-dashed border-slate-200 z-0" />
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
