"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Globe, Search, RefreshCw, MapPin } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    description: "Website custom dengan performa tinggi dan desain modern. Kami membangun aset digital yang tidak hanya bagus dilihat, tapi juga cepat dan menghasilkan konversi.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/layanan/pembuatan-website",
    features: ["Custom UI/UX", "High Performance", "CMS Ready"]
  },
  {
    id: "revamp",
    title: "Revamp Website",
    icon: RefreshCw,
    description: "Perbarui tampilan dan performa website yang sudah ada. Kami mengubah website lama Anda menjadi mesin pertumbuhan bisnis yang modern dan kompetitif.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    link: "/layanan/revamp-website",
    features: ["Modern Design", "SEO Recovery", "Speed Boost"]
  },
  {
    id: "seo",
    title: "SEO Optimization",
    icon: Search,
    description: "Tingkatkan ranking website Anda di mesin pencari. Kami memastikan bisnis Anda mudah ditemukan oleh orang yang tepat saat mereka mencari produk Anda.",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=2029&auto=format&fit=crop",
    link: "/layanan/jasa-seo",
    features: ["Keyword Strategy", "On-page SEO", "Backlink Building"]
  },
  {
    id: "local-seo",
    title: "Local SEO",
    icon: MapPin,
    description: "Dominasi pencarian lokal untuk bisnis Anda. Sangat cocok untuk bisnis yang memiliki fisik toko atau melayani area tertentu (Service Area Business).",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    link: "/layanan/jasa-seo",
    features: ["Google Maps", "Local Citations", "Review Strategy"]
  },
]

export function ProgramSection() {
  const [activeTab, setActiveTab] = useState(programs[0])

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full uppercase tracking-wider">
            360 Growth Partner
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            From Strategy, To Execution.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Service List */}
          <div className="space-y-4">
            {programs.map((program) => (
              <button
                key={program.id}
                onMouseEnter={() => setActiveTab(program)}
                onClick={() => setActiveTab(program)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                  activeTab.id === program.id
                    ? "bg-slate-900 border-slate-900 shadow-xl translate-x-2"
                    : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeTab.id === program.id ? "bg-primary text-white" : "bg-slate-100 text-slate-400 group-hover:text-primary"
                  }`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold transition-colors ${
                      activeTab.id === program.id ? "text-white" : "text-slate-700"
                    }`}>
                      {program.title}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors ${
                      activeTab.id === program.id ? "text-slate-400" : "text-slate-500"
                    }`}>
                      {program.description.split(".")[0]}.
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right - Detail View */}
          <div className="relative aspect-[4/3] lg:aspect-square">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <div className="flex gap-2">
                    {activeTab.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    {activeTab.description}
                  </p>
                  <Link
                    href={activeTab.link}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Pelajari Selengkapnya <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
