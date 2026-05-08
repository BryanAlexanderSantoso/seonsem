"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const portfolioItems = [
  {
    id: 1,
    title: "How Seonsem achieved a 310% growth for E-Commerce Fashion",
    subtitle: "Membantu brand fashion lokal mengoptimalkan konversi dan visibilitas di Google melalui strategi SEO yang terintegrasi.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    link: "/portofolio/ecommerce-fashion",
    stats: [
      { label: "ROI increase over 3 years", value: "310%", color: "bg-orange-500" },
      { label: "In value due to increased team productivity", value: "$121k", color: "bg-blue-500" },
      { label: "Saved due to reduced administration time", value: "410%", color: "bg-cyan-400" },
    ]
  },
  {
    id: 2,
    title: "Boosting Tech Startup Authority in Competitive Market",
    subtitle: "Transformasi digital menyeluruh untuk startup teknologi, meningkatkan kepercayaan investor dan pengguna.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
    link: "/portofolio/tech-startup",
    stats: [
      { label: "User Acquisition Growth", value: "250%", color: "bg-emerald-500" },
      { label: "Organic Search Visibility", value: "5x", color: "bg-purple-500" },
      { label: "Cost Per Acquisition Reduced", value: "60%", color: "bg-rose-500" },
    ]
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
    <section className="py-20 lg:py-32 relative overflow-hidden bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our Recent Work
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Portfolio Slider */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="relative rounded-3xl overflow-hidden bg-zinc-900 aspect-[21/9] min-h-[400px] flex items-center">
                  {/* Background Image & Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={portfolioItems[currentIndex].image}
                      alt={portfolioItems[currentIndex].title}
                      className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                  </div>

                  <div className="relative z-10 w-full px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {portfolioItems[currentIndex].title}
                      </h3>
                      <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed">
                        {portfolioItems[currentIndex].subtitle}
                      </p>
                      
                      <Link 
                        href={portfolioItems[currentIndex].link}
                        className="inline-flex items-center gap-2 text-white font-bold group border-b-2 border-zinc-700 pb-1 hover:border-blue-500 transition-all"
                      >
                        Read case study
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Right Stats */}
                    <div className="space-y-8">
                      {portfolioItems[currentIndex].stats.map((stat, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className={`w-1 h-12 rounded-full ${stat.color}`} />
                          <div className="space-y-1">
                            <div className="text-2xl md:text-3xl font-black text-white leading-none">
                              {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-zinc-400 max-w-[200px]">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {portfolioItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-12 h-1 rounded-full transition-all ${
                i === currentIndex ? "bg-blue-500" : "bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
