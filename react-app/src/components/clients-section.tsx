"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Clarion Hotel", logo: "https://logo.clearbit.com/choicehotels.com" },
  { name: "Hästens", logo: "https://logo.clearbit.com/hastens.com" },
  { name: "Swedish Defense University", logo: "https://logo.clearbit.com/fhs.se" },
  { name: "JumpYard", logo: "https://logo.clearbit.com/jumpyard.se" },
  { name: "Smeg", logo: "https://logo.clearbit.com/smeg.com" },
  { name: "Quality Hotel", logo: "https://logo.clearbit.com/strawberry.se" },
  { name: "Lexus", logo: "https://logo.clearbit.com/lexus.com" },
  { name: "University of Gothenburg", logo: "https://logo.clearbit.com/gu.se" },
  { name: "Malmö Stad", logo: "https://logo.clearbit.com/malmo.se" },
  { name: "Electrolux", logo: "https://logo.clearbit.com/electrolux.com" },
  { name: "Hard Rock Cafe", logo: "https://logo.clearbit.com/hardrock.com" },
  { name: "AkzoNobel", logo: "https://logo.clearbit.com/akzonobel.com" },
]

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header Section - Left Aligned */}
        <div className="mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]"
          >
            Clients
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            Some of the brands we{"'"}ve
            <br />
            worked with
          </motion.h2>
        </div>

        {/* Clients Grid - View360 Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 lg:gap-y-24 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center group"
            >
              <div className="relative w-full aspect-[3/2] flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter brightness-0 dark:brightness-200"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
