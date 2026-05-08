"use client"

import { motion } from "framer-motion"

const texts = [
  "FREE WEBSITE AUDIT",
  "SEO OPTIMIZED",
  "HIGH PERFORMANCE",
  "MOBILE RESPONSIVE",
  "CONVERSION FOCUS",
  "24/7 SUPPORT",
]

export function RunningText() {
  return (
    <div className="py-4 bg-primary overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 items-center"
        >
          {[...texts, ...texts, ...texts, ...texts].map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-primary-foreground font-bold text-xl lg:text-2xl tracking-tighter">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
