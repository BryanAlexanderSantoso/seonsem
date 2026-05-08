"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {"Let's Work Together"}
              </h2>
              <p className="text-lg text-muted-foreground">
                Siap untuk memulai project Anda? Hubungi kami sekarang untuk konsultasi gratis.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <a href="mailto:hello@seonsem.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@seonsem.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Phone / WhatsApp</h3>
                  <a href="tel:+6281234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="p-8 bg-secondary/50 border border-border rounded-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone / WhatsApp
                </label>
                <Input
                  id="phone"
                  placeholder="+62 xxx-xxxx-xxxx"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground">
                  Layanan yang Dibutuhkan
                </label>
                <select
                  id="service"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
                >
                  <option value="">Pilih layanan...</option>
                  <option value="webdev">Web Development</option>
                  <option value="revamp">Revamp Website</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" className="w-full group">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
