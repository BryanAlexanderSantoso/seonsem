"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "Web Development",
    description: "Website custom dengan performa tinggi dan desain modern",
    image: "/images/web-dev.jpg",
    link: "/layanan/pembuatan-website",
  },
  {
    title: "Revamp Website",
    description: "Perbarui tampilan dan performa website yang sudah ada",
    image: "/images/revamp.jpg",
    link: "/layanan/revamp-website",
  },
  {
    title: "SEO Optimization",
    description: "Tingkatkan ranking website Anda di mesin pencari",
    image: "/images/seo.jpg",
    link: "/layanan/jasa-seo",
  },
  {
    title: "Local SEO",
    description: "Dominasi pencarian lokal untuk bisnis Anda",
    image: "/images/local-seo.jpg",
    link: "/layanan/jasa-seo",
  },
]

export function ProgramSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
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
            360 Growth Partner
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            From Strategy, To Execution.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {"At Seonsem, we don't just provide the strategy—we walk the path with you. From bold vision to actionable plans, we help you implement, optimize, and scale."}
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={program.link}
                className="group block relative h-[300px] rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20 opacity-50" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {program.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
