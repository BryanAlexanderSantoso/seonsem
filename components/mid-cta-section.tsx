"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function MidCTASection() {
  const features = [
    "Business-to-Business",
    "Business-to-Customer",
    "Nonprofit Organization",
    "Ecommerce",
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-zinc-900 min-h-[450px] flex items-center shadow-2xl"
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/70 z-10" />
          
          {/* Background Image (Blurred Office) */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
              filter: 'brightness(0.3)'
            }}
          />

          <div className="container relative z-20 mx-auto px-6 lg:px-12 py-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Marketing Boost <br />
                    <span className="text-primary">for Your Business</span>
                  </h2>
                  <p className="text-base md:text-lg text-zinc-300 max-w-lg leading-relaxed">
                    The marketing audit is typically carried out by a third party, not an internal member of the organization.
                  </p>
                </div>

                <div className="pt-2">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white border-none rounded-full px-10 shadow-lg shadow-primary/20">
                    <Link href="/konsultasi">
                      Get a Consultation
                    </Link>
                  </Button>
                </div>

                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 pt-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-zinc-300">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-primary/50 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="hidden lg:block relative h-full">
                <div className="absolute -right-20 -bottom-32 w-[550px] h-[550px]">
                  <img
                    src="/marketing-hero.png"
                    alt="Marketing Professional"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
