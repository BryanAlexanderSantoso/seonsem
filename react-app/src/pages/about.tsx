import { motion } from "framer-motion"
import { WhySection } from "@/components/why-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { TestimonialSection } from "@/components/testimonial-section"

export function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-slate-900"
            >
              Tentang Seonsem.com
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Kami adalah partner pertumbuhan digital Anda, berfokus pada pembuatan website yang tidak hanya indah, tapi juga bekerja keras untuk bisnis Anda.
            </motion.p>
          </div>
        </div>
      </section>

      <WhySection />
      <TechStackSection />
      
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Visi & Misi Kami</h2>
              <p className="text-lg text-slate-600">
                Visi kami adalah menjadi agensi digital nomor satu di Indonesia yang membantu UMKM hingga korporasi untuk bertransformasi secara digital dengan hasil yang nyata dan terukur.
              </p>
              <ul className="space-y-4">
                {[
                  "Mengutamakan kualitas dan performa di setiap proyek.",
                  "Memberikan edukasi digital yang tepat bagi klien.",
                  "Berorientasi pada hasil (ROI) dan kepuasan pelanggan.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
    </div>
  )
}
