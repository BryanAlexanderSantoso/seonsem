"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

const footerLinks = {
  layanan: [
    { label: "Pembuatan Website", href: "/layanan/pembuatan-website" },
    { label: "Revamp Website", href: "/layanan/revamp-website" },
    { label: "Jasa SEO", href: "/layanan/jasa-seo" },
    { label: "Website LPK", href: "/layanan/pembuatan-website-lpk" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Blog", href: "/blog" },
    { label: "Kontak", href: "/kontak" },
  ],
  resources: [
    { label: "Konsultasi Gratis", href: "/konsultasi" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

const aiTools = [
  { name: "Gemini", icon: "G" },
  { name: "ChatGPT", icon: "C" },
  { name: "Claude", icon: "Cl" },
  { name: "Grok", icon: "Gr" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-card border-t border-border">
      {/* AI CTA Banner */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gradient-to-r from-primary/10 via-card to-accent/10 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xl gradient-text">AI</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Ask AI why Seonsem might be a fit for you</p>
                <p className="text-sm text-muted-foreground">Get instant answers about our services</p>
              </div>
            </div>
            <Link
              href="/konsultasi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Try Now
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold gradient-text">Seonsem</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Membantu bisnis Indonesia tumbuh melalui website profesional dan optimasi SEO yang terukur.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@seonsem.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@seonsem.com
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +62 812-3456-7890
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Jakarta, Indonesia
              </div>
            </div>

            {/* AI Tools */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Powered by:</span>
              <div className="flex gap-2">
                {aiTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center"
                    title={tool.name}
                  >
                    <span className="text-xs font-medium text-muted-foreground">{tool.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Layanan</h3>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Seonsem.com. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
