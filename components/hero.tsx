"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary">Web Development & SEO Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-foreground">Website Anda </span>
              <br />
              <span className="gradient-text">Tidak Akan Menghasilkan Apa-Apa </span>
              <br />
              <span className="text-foreground">Jika Tidak Muncul di Google</span>
            </h1>

            <div className="space-y-3 text-lg text-muted-foreground">
              <p>Banyak bisnis sudah punya website...</p>
              <p>Tapi tetap sepi pengunjung, sepi order, dan tidak menghasilkan.</p>
              <p>Itu bukan karena bisnisnya jelek.</p>
              <p className="text-foreground font-medium">Tapi karena tidak dioptimasi dengan benar.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/konsultasi">
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portofolio">Lihat Portofolio</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { value: "100+", label: "Projects" },
                { value: "50+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Mockup */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-secondary/50 flex flex-col">
                    {/* Browser Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                      </div>
                      <div className="flex-1 mx-4 px-4 py-1.5 bg-secondary rounded-lg text-xs text-muted-foreground">
                        seonsem.com
                      </div>
                    </div>
                    {/* Content Preview */}
                    <div className="flex-1 p-6 space-y-4">
                      <div className="w-1/3 h-4 bg-primary/30 rounded" />
                      <div className="w-2/3 h-3 bg-border rounded" />
                      <div className="w-1/2 h-3 bg-border rounded" />
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square rounded-lg bg-card border border-border" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 glass rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="text-sm font-medium text-foreground">SEO Optimized</div>
                    <div className="text-xs text-muted-foreground">Page 1 Google</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-6 p-4 glass rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">+</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Traffic Increase</div>
                    <div className="text-xs text-green-500">+250% Growth</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
