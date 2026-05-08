"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
          className="fixed bottom-6 right-6 z-50 w-[320px] glass rounded-2xl p-6 shadow-2xl"
        >
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground pr-6">
              Get a Free Website Audit & Consultation
            </h3>
            
            <p className="text-sm text-muted-foreground">
              {"Let's analyze your current website and find growth opportunities..."}
            </p>

            <Button asChild className="w-full">
              <a href="/konsultasi">Claim Now</a>
            </Button>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>
                Offer expires in {String(timeLeft.hours).padStart(2, "0")}:
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
