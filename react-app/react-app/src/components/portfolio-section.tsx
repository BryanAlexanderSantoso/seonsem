"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Fashion",
    category: "Web Development",
    description: "Website e-commerce dengan fitur lengkap untuk brand fashion lokal",
    image: "/portfolio-1.jpg",
    link: "/portofolio/ecommerce-fashion",
    tags: ["Next.js", "E-Commerce", "Payment Gateway"],
  },
  {
    id: 2,
    title: "Company Profile Tech Startup",
    category: "Web Development",
    description: "Website company profile modern untuk startup teknologi",
    image: "/portfolio-2.jpg",
    link: "/portofolio/tech-startup",
    tags: ["React", "Company Profile", "Animation"],
  },
  {
    id: 3,
    title: "SEO Project - Klinik Kesehatan",
    category: "SEO",
    description: "Optimasi SEO untuk klinik kesehatan, dari halaman 5 ke halaman 1",
    image: "/portfolio-3.jpg",
    link: "/portofolio/klinik-seo",
    tags: ["SEO", "Healthcare", "Local SEO"],
  },
  {
    id: 4,
    title: "Landing Page SaaS",
    category: "Web Development",
    description: "Landing page dengan konversi tinggi untuk produk SaaS",
    image: "/portfolio-1.jpg",
    link: "/portofolio/saas-landing",
    tags: ["Landing Page", "SaaS", "Conversion"],
  },
]

export function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our Recent Work
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Portfolio Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / 3)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                className="min-w-[calc(33.333%-16px)] lg:min-w-[calc(33.333%-16px)] shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href={item.link} className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border mb-4">
                    {/* Portfolio Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="font-medium">View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs text-primary font-medium">{item.category}</span>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/portofolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
