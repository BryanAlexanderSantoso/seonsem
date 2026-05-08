"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas project. Landing page biasanya 1-2 minggu, company profile 2-3 minggu, dan e-commerce 4-6 minggu. Kami akan memberikan timeline yang jelas di awal project.",
  },
  {
    question: "Apakah ada garansi untuk layanan SEO?",
    answer: "Kami tidak memberikan garansi pasti untuk ranking tertentu karena algoritma Google terus berubah. Namun, kami berkomitmen untuk menggunakan best practices SEO dan memberikan laporan progress secara berkala.",
  },
  {
    question: "Bagaimana sistem pembayaran?",
    answer: "Untuk web development, sistem pembayaran adalah 50% di awal dan 50% setelah project selesai. Untuk SEO, pembayaran dilakukan per bulan di awal periode layanan.",
  },
  {
    question: "Apakah website yang dibuat mobile-friendly?",
    answer: "Ya, semua website yang kami buat sudah responsive dan dioptimasi untuk semua device (desktop, tablet, dan mobile). Ini juga penting untuk SEO karena Google mengutamakan mobile-first indexing.",
  },
  {
    question: "Apakah ada layanan maintenance setelah website jadi?",
    answer: "Ya, kami menyediakan layanan maintenance website dengan berbagai paket. Termasuk update security, backup rutin, dan minor changes. Silakan hubungi kami untuk detail lebih lanjut.",
  },
  {
    question: "Bagaimana cara memulai project dengan Seonsem?",
    answer: "Cukup hubungi kami melalui form contact atau WhatsApp. Kami akan mengatur jadwal konsultasi gratis untuk membahas kebutuhan Anda dan memberikan proposal yang sesuai.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
            </p>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
