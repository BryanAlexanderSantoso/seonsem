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

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-6 p-6 group">
                {/* Number */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-border -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
