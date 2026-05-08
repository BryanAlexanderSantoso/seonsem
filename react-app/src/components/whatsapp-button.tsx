"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "6281234567890" // Replace with real number
  const message = "Halo Seonsem, saya ingin konsultasi mengenai website/SEO."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Pulsing WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-40" />
        
        {/* Main Button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300">
          <MessageCircle className="w-8 h-8 text-white fill-current" />
        </div>

        {/* Desktop Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-slate-900 text-white text-[10px] font-bold py-2 px-4 rounded-full border border-white/10 shadow-2xl whitespace-nowrap">
            MULAI DISKUSI
          </div>
        </div>
      </motion.a>
    </div>
  )
}
