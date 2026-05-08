"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight } from "lucide-react"
import Link from "next/link"

export function PromoFlyer() {
  const [isVisible, setIsVisible] = useState(false)

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
          className="fixed bottom-28 right-6 z-50 w-[280px] bg-white rounded-[24px] overflow-hidden shadow-2xl border border-zinc-100"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Image Section */}
          <div className="relative h-40">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
              alt="Website Audit" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            
            {/* Badge Overlay */}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-wider rounded-md">
                Limited Offer
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5 pt-2 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-zinc-900 leading-tight">
                Get a Free Website Audit & Consultation
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Let&apos;s analyze your current website and find growth opportunities...
              </p>
            </div>

            <Link href="/konsultasi" className="group">
              <div className="w-full h-12 bg-zinc-900 rounded-xl flex items-center justify-between px-5 text-white font-bold text-sm hover:bg-black transition-all">
                <span>Claim Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <p className="text-center text-[10px] text-zinc-400 font-medium italic">
              *Offer expires in 48 hours
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
