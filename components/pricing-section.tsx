"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const webDevPricing = [
  {
    name: "BASIC WEBSITE",
    price: "Rp 1.5 Jt",
    period: "one-time",
    description: "Cocok untuk UMKM / Bisnis yang baru memulai kehadiran digital",
    features: [
      "1-3 Halaman Profesional",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "WhatsApp Integration",
      "1 Bulan Maintenance Gratis",
      "SSL Security Certificate",
      "Hosting & Domain 1 Tahun",
    ],
    benefits: ["Harga terjangkau", "Cepat tayang (3-5 hari)"],
    popular: false,
  },
  {
    name: "PRO WEBSITE",
    price: "Rp 2.5 Jt",
    period: "one-time",
    description: "Website lebih lengkap dengan fitur SEO yang lebih kuat",
    features: [
      "5-8 Halaman Lengkap",
      "Intermediate SEO Optimization",
      "Custom Design (Premium)",
      "Speed Optimization",
      "Google Business Setup",
      "Social Media Integration",
      "Contact Form & Maps",
    ],
    benefits: ["Tampilan lebih kredibel", "SEO lebih optimal"],
    popular: true,
  },
  {
    name: "EXCLUSIVE WEBSITE",
    price: "Rp 4.5 Jt",
    period: "one-time",
    description: "Solusi lengkap untuk dominasi pasar dan brand authority",
    features: [
      "10-15 Halaman",
      "Advanced SEO & Copywriting",
      "CMS (Bisa edit konten sendiri)",
      "Premium Asset & Stock Images",
      "Analytic Dashboard Setup",
      "Priority Support 24/7",
      "Full Optimization (Core Web Vitals)",
    ],
    benefits: ["Authority brand tinggi", "Fitur sangat lengkap"],
    popular: false,
  },
  {
    name: "CUSTOM WEBSITE & SYSTEM",
    price: "Contact Us",
    period: "",
    description: "Sistem custom, Dashboard, API, dan arsitektur skala besar",
    features: [
      "Custom Functionality",
      "Scalable Architecture",
      "Database Integration",
      "Third-party API Integration",
      "Advanced User Management",
      "High-Security Standards",
      "Dedicated Project Manager",
    ],
    benefits: ["Solusi spesifik bisnis", "Scalable & Future-proof"],
    popular: false,
  },
]

const seoPricing = [
  {
    name: "Starter",
    price: "Rp 3.5 Jt",
    period: "/bulan",
    description: "Untuk bisnis yang baru memulai optimasi SEO",
    features: [
      "3-5 keyword utama",
      "4 artikel SEO / bulan",
      "On-page optimization",
      "Technical SEO basic",
      "Monthly report",
    ],
    output: ["Keyword mulai ranking", "Traffic organik bertambah"],
    popular: false,
  },
  {
    name: "Growth",
    price: "Rp 7 Jt",
    period: "/bulan",
    description: "Untuk bisnis kompetitif / ingin scaling",
    features: [
      "6-10 keyword utama",
      "8 artikel SEO / bulan (1.200 kata)",
      "SEO content strategy",
      "Backlink building",
      "Technical SEO deep optimization",
      "Competitor analysis",
      "Landing page optimization",
      "Tracking setup",
    ],
    output: ["Banyak keyword masuk halaman 1", "Traffic naik signifikan", "Brand makin kuat"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Rp 15 Jt",
    period: "/bulan",
    description: "Untuk bisnis besar dengan target agresif",
    features: [
      "15+ keyword utama",
      "16 artikel SEO / bulan",
      "Full SEO strategy",
      "Premium backlink building",
      "Dedicated SEO specialist",
      "Weekly consultation",
      "Comprehensive analytics",
      "Priority support",
    ],
    output: ["Dominasi halaman 1 Google", "Traffic explosion", "Market leader positioning"],
    popular: false,
  },
]

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<"webdev" | "seo">("webdev")
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const currentPricing = activeTab === "webdev" ? webDevPricing : seoPricing

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Pilih Paket Sesuai Kebutuhan Anda
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-secondary rounded-lg">
            <button
              onClick={() => setActiveTab("webdev")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "webdev"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "seo"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              SEO Services
            </button>
          </div>
        </div>

        {/* Billing Toggle for SEO */}
        {activeTab === "seo" && (
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={`text-sm ${billingPeriod === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-7 bg-secondary rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-primary rounded-full transition-transform ${
                  billingPeriod === "yearly" ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${billingPeriod === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
              Billed Yearly
              <span className="ml-1 text-xs text-primary">(Save 20%)</span>
            </span>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {currentPricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? "bg-white/10 border-primary/50 backdrop-blur-sm"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? "default" : "secondary"}
                >
                  <Link href="/konsultasi">Get Started</Link>
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">
                      {activeTab === "webdev" ? "Detail Paket:" : "Layanan:"}
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits/Output */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">
                      {activeTab === "webdev" ? "Kelebihan:" : "Output:"}
                    </h4>
                    <ul className="space-y-2">
                      {(activeTab === "webdev" ? (plan as typeof webDevPricing[0]).benefits : (plan as typeof seoPricing[0]).output).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-primary font-medium">
                          <Check className="w-4 h-4 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
