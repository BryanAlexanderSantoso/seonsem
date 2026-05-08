"use client"

import { motion } from "framer-motion"

const clients = [
  "ClientA", "ClientB", "ClientC", "ClientD", "ClientE", "ClientF",
  "ClientG", "ClientH", "ClientI", "ClientJ", "ClientK", "ClientL",
]

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-4"
          >
            <span className="text-sm text-muted-foreground uppercase tracking-wider">CLIENTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Some of the brands {"we've"} worked with
            </h2>
          </motion.div>

          {/* Right Marquee */}
          <div className="lg:w-2/3 space-y-6 overflow-hidden">
            {/* Top Row - Move Left */}
            <div className="relative">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`top-${index}`}
                    className="mx-4 px-8 py-4 bg-card border border-border rounded-lg flex items-center justify-center min-w-[150px]"
                  >
                    <span className="text-lg font-semibold text-muted-foreground grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Move Right */}
            <div className="relative">
              <div className="flex animate-marquee-reverse whitespace-nowrap">
                {[...clients.reverse(), ...clients].map((client, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="mx-4 px-8 py-4 bg-card border border-border rounded-lg flex items-center justify-center min-w-[150px]"
                  >
                    <span className="text-lg font-semibold text-muted-foreground grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
