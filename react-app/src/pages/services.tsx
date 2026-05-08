"use client"

import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { PricingSection } from "@/components/pricing-section"
import { SolutionSection } from "@/components/solution-section"
import { ProgramSection } from "@/components/program-section"
import { MidCTASection } from "@/components/mid-cta-section"

const servicesData = {
  "revamp-website": {
    title: "Revamp Website",
    description: "Perbarui tampilan website Anda menjadi lebih modern, cepat, dan profesional.",
    benefits: [
      "Desain modern & up-to-date",
      "Peningkatan kecepatan loading",
      "Optimasi mobile responsive",
      "Struktur SEO yang lebih baik",
    ],
  },
  "pembuatan-website": {
    title: "Pembuatan Website",
    description: "Website custom yang dirancang khusus untuk kebutuhan bisnis dan target market Anda.",
    benefits: [
      "Custom design sesuai brand",
      "Fitur sesuai kebutuhan bisnis",
      "Integrasi sistem pembayaran/WA",
      "CMS yang mudah digunakan",
    ],
  },
  "pembuatan-website-lpk": {
    title: "Pembuatan Website LPK",
    description: "Solusi website khusus untuk Lembaga Pelatihan Kerja dengan fitur manajemen siswa.",
    benefits: [
      "Sistem pendaftaran online",
      "Manajemen kursus & jadwal",
      "Fitur cetak sertifikat otomatis",
      "Dashboard admin yang lengkap",
    ],
  },
  "jasa-seo": {
    title: "Jasa SEO",
    description: "Optimasi menyeluruh agar website Anda mendominasi halaman pertama pencarian Google.",
    benefits: [
      "Riset keyword potensial",
      "Optimasi on-page & off-page",
      "Peningkatan traffic organik",
      "Laporan bulanan yang detail",
    ],
  },
}

export function ServicesPage() {
  const { slug } = useParams()
  const service = slug ? servicesData[slug as keyof typeof servicesData] : null

  if (slug && !service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold text-foreground">Layanan tidak ditemukan</h1>
        <Button asChild className="mt-8">
          <Link to="/layanan">Kembali ke Layanan</Link>
        </Button>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="pt-24 lg:pt-32">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Layanan Kami
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto"
            >
              Solusi digital komprehensif mulai dari pengembangan website hingga optimasi SEO untuk pertumbuhan bisnis Anda.
            </motion.p>
          </div>
        </section>

        <SolutionSection />
        <ProgramSection />
        <PricingSection />
        <MidCTASection />
      </div>
    )
  }

  return (
    <div className="pt-24 lg:pt-32">
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-slate-400 mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/konsultasi">Konsultasi Sekarang</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portofolio">Lihat Portofolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Mengapa Memilih Layanan Ini?</h2>
              <div className="grid gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Siap untuk Memulai?</h3>
              <p className="text-slate-400 mb-8">
                Diskusikan kebutuhan bisnis Anda dengan tim ahli kami secara gratis.
              </p>
              <Button className="w-full h-14 text-lg font-bold" asChild>
                <Link to="/konsultasi" className="flex items-center justify-center gap-2">
                  Hubungi Kami <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
    </div>
  )
}
