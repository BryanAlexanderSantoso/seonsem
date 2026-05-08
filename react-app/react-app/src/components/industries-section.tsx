"use client"

import { motion } from "framer-motion"

const industries = [
  { name: "SaaS", icon: "S" },
  { name: "Lawyers", icon: "L" },
  { name: "Real Estate", icon: "R" },
  { name: "Insurance", icon: "I" },
  { name: "Crypto", icon: "C" },
  { name: "Private Equity", icon: "P" },
  { name: "Education", icon: "E" },
  { name: "Finance", icon: "F" },
  { name: "Healthcare", icon: "H" },
  { name: "Automotive", icon: "A" },
]

export function IndustriesSection() {
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
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Serving Diverse Industries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami telah membantu berbagai industri untuk tumbuh secara digital
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="p-6 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 hover:bg-secondary transition-all cursor-pointer text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <span className="text-lg font-bold gradient-text">{industry.icon}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{industry.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
