"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Revamp Website",
    description: "Perbarui tampilan website Anda menjadi lebih modern dan profesional",
    href: "/layanan/revamp-website",
  },
  {
    title: "Pembuatan Website",
    description: "Website custom sesuai kebutuhan bisnis Anda",
    href: "/layanan/pembuatan-website",
  },
  {
    title: "Pembuatan Website LPK",
    description: "Website khusus untuk Lembaga Pelatihan Kerja",
    href: "/layanan/pembuatan-website-lpk",
  },
  {
    title: "Jasa SEO",
    description: "Optimasi website agar muncul di halaman pertama Google",
    href: "/layanan/jasa-seo",
  },
]

const navItems = [
  { label: "Layanan", href: "/layanan", hasDropdown: true },
  { label: "Portofolio", href: "/portofolio", hasDropdown: false },
  { label: "Tentang Kami", href: "/tentang-kami", hasDropdown: false },
  { label: "Blog", href: "/blog", hasDropdown: false },
  { label: "Kontak", href: "/kontak", hasDropdown: false },
]

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://ik.imagekit.io/1yqrowr2y/seonsem.png?updatedAt=1777898562554"
              alt="Seonsem Logo"
              width={140}
              height={40}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Mega Menu for Services */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="w-[600px] p-6 bg-card border border-border rounded-xl shadow-2xl">
                          <div className="grid grid-cols-2 gap-4">
                            {/* Preview Image */}
                            <div className="relative h-full min-h-[200px] rounded-lg overflow-hidden bg-secondary">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-4">
                                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Image
                                      src="https://ik.imagekit.io/1yqrowr2y/seonsem.png?updatedAt=1777898562554"
                                      alt="Seonsem"
                                      width={48}
                                      height={48}
                                      className="w-10 h-10 object-contain"
                                    />
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Layanan digital untuk pertumbuhan bisnis Anda
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Services List */}
                            <div className="space-y-2">
                              {services.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="block p-3 rounded-lg hover:bg-secondary transition-colors group"
                                >
                                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                    {service.title}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">
                                    {service.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
            <Button asChild>
              <Link href="/konsultasi">Konsultasi</Link>
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-foreground rounded-lg hover:bg-secondary"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-foreground rounded-lg hover:bg-secondary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full">
                  <Link href="/konsultasi">Konsultasi Gratis</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
