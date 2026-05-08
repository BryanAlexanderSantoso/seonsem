"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PromoFlyer() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 })

  useEffect(() => {
    // Show flyer after 2 seconds
    const showTimer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("promo-flyer-dismissed")
      if (!dismissed) {
        setIsVisible(true)
      }
    }, 2000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem("promo-flyer-dismissed", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-28 right-6 z-50 w-[320px] glass rounded-2xl p-6 shadow-2xl"
        >
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Limited Offer
            </div>
            
            <h3 className="text-xl font-bold text-foreground leading-tight">
              Get a Free Website Audit & Consultation
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Dapatkan analisa mendalam tentang performa website Anda dan strategi untuk mengalahkan kompetitor di Google."}
            </p>

            <Button asChild className="w-full h-12 text-md font-bold shadow-lg shadow-primary/20">
              <Link href="/konsultasi">Claim Now</Link>
            </Button>

            <div className="pt-2 border-t border-border flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground font-medium">OFFER EXPIRED AT:</span>
              <span className="text-xs font-bold text-destructive">
                48 Hours
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
