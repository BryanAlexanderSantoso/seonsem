"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const whyReasons = [
  {
    title: "Pengalaman & Expertise",
    description: "Tim kami memiliki pengalaman bertahun-tahun dalam web development dan SEO untuk berbagai industri.",
    stats: "5+ Years",
  },
  {
    title: "Hasil Terukur",
    description: "Kami fokus pada hasil yang dapat diukur. Traffic, ranking, dan konversi yang meningkat.",
    stats: "100+ Projects",
  },
  {
    title: "Support Berkelanjutan",
    description: "Kami tidak hanya membuat dan meninggalkan. Support dan monitoring terus kami berikan.",
    stats: "24/7 Support",
  },
]

export function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                Solusi Website dan Aplikasi yang Dirancang untuk Bekerja Secara Nyata
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Kami bukan sekadar membuat website. Kami membangun aset digital yang bekerja 24/7 untuk pertumbuhan bisnis Anda.
              </p>
            </div>

            {/* CTA instead of Stats */}
            <div className="pt-4">
              <Button size="lg" asChild className="h-14 px-8 text-lg font-bold">
                <Link to="/kontak">Hubungi Kami Sekarang</Link>
              </Button>
              <p className="text-sm text-slate-500 mt-4 italic">
                Sudah lebih dari 100+ project kami selesaikan dengan hasil nyata.
              </p>
            </div>
          </motion.div>

          {/* Right - Scrollable */}
          <div ref={containerRef} className="space-y-8">
            {whyReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{reason.title}</h3>
                  <span className="px-4 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full whitespace-nowrap">
                    {reason.stats}
                  </span>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
