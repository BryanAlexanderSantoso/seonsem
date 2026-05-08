"use client"

import { motion } from "framer-motion"
import { Globe, Search, TrendingUp, Users, Zap, Shield } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "Website Cepat & Profesional",
    description: "Membuat website yang cepat, responsif, dan profesional untuk bisnis Anda",
  },
  {
    icon: Search,
    title: "Optimasi SEO",
    description: "Mengoptimasi website agar muncul di halaman pertama Google",
  },
  {
    icon: TrendingUp,
    title: "Traffic Potensial",
    description: "Menarik traffic yang benar-benar potensial dan tertarget",
  },
  {
    icon: Users,
    title: "Konversi Tinggi",
    description: "Mengubah pengunjung menjadi pelanggan dengan strategi yang tepat",
  },
]

const features = [
  {
    icon: Zap,
    title: "Performance First",
    description: "Website dengan loading time super cepat untuk user experience terbaik",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Keamanan website terjamin dengan standar security terkini",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Struktur website yang SEO-friendly dari awal development",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
              <p className="text-sm text-muted-foreground">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Explore Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Explore Our Solutions
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solusi digital lengkap untuk pertumbuhan bisnis Anda, dari pembuatan website hingga optimasi SEO
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-card to-secondary/50 border border-border rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
