"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ahmad Rizki",
    role: "CEO, TechStartup.id",
    content: "Website yang dibuat Seonsem sangat profesional dan cepat. Traffic organik kami meningkat 300% dalam 6 bulan pertama setelah optimasi SEO.",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    role: "Owner, BoutiqueOnline",
    content: "Sangat puas dengan hasilnya. E-commerce kami sekarang mudah dikelola dan penjualan online meningkat drastis.",
    rating: 5,
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Marketing Director, KlinikSehat",
    content: "Dari halaman 5 Google sekarang sudah di halaman 1 untuk keyword utama kami. Tim Seonsem sangat responsif dan profesional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Diana Putri",
    role: "Founder, EduTech Academy",
    content: "Landing page yang dibuat berhasil meningkatkan conversion rate kami sebesar 150%. Highly recommended!",
    rating: 5,
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="p-8 lg:p-12 bg-secondary/50 border border-border rounded-2xl relative">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary/30 absolute top-8 left-8" />
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <p className="text-lg lg:text-xl text-foreground leading-relaxed">
                    {`"${testimonials[currentIndex].content}"`}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < testimonials[currentIndex].rating
                            ? "text-yellow-500"
                            : "text-muted"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-6 bg-primary"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
