"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function MidCTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]" />
          
          {/* Content */}
          <div className="relative z-10 p-8 lg:p-16 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-medium rounded-full">
                Saatnya Website Anda Bekerja untuk Bisnis Anda
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Jangan Biarkan Kompetitor Mengambil Pelanggan Anda di Google
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Semakin lama Anda menunda optimasi, semakin banyak peluang yang hilang.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="group">
                  <Link to="/konsultasi">
                    Konsultasi Gratis Sekarang
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/kontak">Diskusikan Kebutuhan Website / SEO Anda</Link>
                </Button>
              </div>

              <div className="pt-8 border-t border-border/50 mt-8">
                <p className="text-muted-foreground italic">
                  Setiap bisnis punya kesempatan untuk berkembang.
                  <br />
                  Yang membedakan hanya satu:
                  <br />
                  <span className="text-foreground font-medium">
                    apakah website Anda sudah bekerja... atau hanya sekadar online?
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
