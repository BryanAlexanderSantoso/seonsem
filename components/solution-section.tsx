"use client"

import { motion } from "framer-motion"
import { Globe, Search, TrendingUp, Users, Zap, Shield } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "High-Performance Website",
    description: "Website super cepat dan responsif yang dioptimasi untuk user experience maksimal.",
  },
  {
    icon: Search,
    title: "Advanced SEO Strategy",
    description: "Strategi SEO mendalam untuk mendominasi halaman pertama Google dan meningkatkan traffic.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Conversion",
    description: "Fokus pada metrik yang berarti: peningkatan leads, sales, dan pertumbuhan bisnis.",
  },
  {
    icon: Zap,
    title: "Fast Page Load",
    description: "Optimasi kecepatan loading untuk menurunkan bounce rate dan meningkatkan kepuasan user.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Infrastruktur website yang aman dengan sertifikat SSL dan proteksi berlapis.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Desain yang dirancang khusus untuk memudahkan audiens Anda melakukan konversi.",
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Seonsem.com membantu bisnis Anda
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-8 bg-white dark:bg-slate-900 border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
