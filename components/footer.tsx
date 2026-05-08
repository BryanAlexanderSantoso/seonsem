"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail as MailIcon } from "lucide-react"

const footerLinks = {
  layanan: [
    { label: "Pembuatan Website", href: "/layanan/pembuatan-website" },
    { label: "Jasa SEO", href: "/layanan/jasa-seo" },
    { label: "Revamp Website", href: "/layanan/revamp-website" },
    { label: "Website Khusus LPK", href: "/layanan/pembuatan-website-lpk" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Blog", href: "/blog" },
  ],
}

const aiIcons = [
  { name: "ChatGPT", icon: "https://tse3.mm.bing.net/th/id/OIP.MGwv0BQx9pJSCPJ4N2e2_AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Gemini", icon: "https://static.vecteezy.com/system/resources/previews/046/861/646/original/gemini-icon-on-a-transparent-background-free-png.png" },
  { name: "Claude", icon: "https://freepnglogo.com/images/all_img/claude-ai-icon-65aa.png" },
  { name: "Midjourney", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png" },
  { name: "Dall-E", icon: "https://openai.com/favicon.ico" },
  { name: "Makawa", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white pt-20 border-t border-zinc-800">
      <div className="container mx-auto px-4 pb-20 space-y-16">
        {/* Ask AI Top Section */}
        <div className="relative">
          <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Ask AI</h3>
              <p className="text-sm text-zinc-500">Ask AI why Seonsem might be a fit for you:</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {aiIcons.map((ai) => (
                <div key={ai.name} className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 p-2 flex items-center justify-center hover:border-blue-500/50 transition-colors group cursor-pointer" title={ai.name}>
                  <img src={ai.icon} alt={ai.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                </div>
              ))}
            </div>

            <Link href="/konsultasi" className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all group shadow-lg shadow-blue-600/20">
              Try Ask AI
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Tagline */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold tracking-tighter">SEONSEM</span>
            </Link>
            <p className="text-zinc-500 text-sm max-w-[280px] leading-relaxed">
              Partner strategis transformasi digital yang fokus pada pertumbuhan bisnis nyata melalui website modern dan SEO terarah.
            </p>
          </div>

          {/* Jasa & Layanan */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white">Jasa & Layanan</h3>
            <ul className="space-y-4">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white">Perusahaan</h3>
            <ul className="space-y-4">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty or Social column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white">Connect</h3>
            <div className="flex gap-4">
               <Link href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                 <Instagram className="w-5 h-5" />
               </Link>
               <Link href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                 <Linkedin className="w-5 h-5" />
               </Link>
               <Link href="mailto:hello@seonsem.com" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                 <MailIcon className="w-5 h-5" />
               </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Huge Background Text */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none pb-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 uppercase tracking-widest mb-4">
           <span>© {new Date().getFullYear()} SEONSEM. All rights reserved.</span>
           <div className="flex gap-8 pointer-events-auto">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
        <h2 className="text-[15vw] md:text-[20vw] font-black text-white leading-[0.8] tracking-tighter opacity-100 text-center w-full">
          SEONSEM
        </h2>
      </div>
    </footer>
  )
}
