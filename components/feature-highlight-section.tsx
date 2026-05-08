"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  { name: "Web Dev", active: true },
  { name: "Revamp Website", active: true },
  { name: "Backlink", active: true },
  { name: "SEO", active: true },
  { name: "Local SEO", active: true },
]

export function FeatureHighlightSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Layanan Digital Lengkap untuk Bisnis Anda
              </h2>
              <p className="text-lg text-muted-foreground">
                Dari pembuatan website hingga optimasi SEO, kami menyediakan solusi digital end-to-end untuk pertumbuhan bisnis Anda.
              </p>
            </div>

            {/* Feature List */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full border ${
                    feature.active
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-secondary border-border text-muted-foreground"
                  }`}
                >
                  {feature.name}
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg">
              <Link href="/layanan">Explore All Services</Link>
            </Button>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-border">
              <Image
                src="/solution-hero.jpg"
                alt="Digital Solutions"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
