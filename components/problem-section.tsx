"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

const problems = [
  "Website sudah dibuat, tapi tidak ada yang datang",
  "Sudah coba iklan, tapi mahal dan tidak stabil",
  "Kompetitor muncul di Google, Anda tidak",
  "Sudah keluar biaya, tapi belum ada hasil",
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-12"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive text-sm font-medium rounded-full">
              Problem Agitation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Apakah ini terjadi pada Anda?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl text-left hover:border-destructive/50 transition-colors"
              >
                <AlertCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                <p className="text-foreground">{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 bg-destructive/10 border border-destructive/20 rounded-xl"
          >
            <p className="text-lg text-foreground font-medium">
              Kalau iya, berarti website Anda belum bekerja.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
