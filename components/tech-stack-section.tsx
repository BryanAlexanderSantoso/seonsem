"use client"

import { motion } from "framer-motion"

const integrations = [
  "Next.js",
  "React",
  "WordPress",
  "Shopify",
  "Google Analytics",
  "Search Console",
  "Ahrefs",
  "SEMrush",
  "Vercel",
  "AWS",
  "Cloudflare",
  "PostgreSQL",
]

export function TechStackSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Ultimate Integration linked up
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menggunakan teknologi dan tools terbaik untuk memastikan hasil optimal untuk bisnis Anda
          </p>
        </motion.div>

        {/* Integration Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Connection Lines Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-full h-full max-w-4xl mx-auto relative">
              {/* Horizontal Lines */}
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              {/* Vertical Lines */}
              <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
              <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
            </div>
          </div>

          {/* Integration Cards */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 relative z-10">
            {integrations.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="aspect-square p-4 bg-secondary/50 border border-border rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-secondary transition-all cursor-pointer">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <span className="text-lg font-bold gradient-text">{tech.charAt(0)}</span>
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center z-20 hidden lg:flex">
            <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">S</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
