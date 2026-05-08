import { Routes, Route } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PromoFlyer } from "@/components/promo-flyer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Home } from "@/pages/home"
import { ServicesPage } from "@/pages/services"
import { AboutPage } from "@/pages/about"
import { ContactPage } from "@/pages/contact"
import { PortfolioPage } from "@/pages/portfolio"
import { BlogPage } from "@/pages/blog"

function App() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<ServicesPage />} />
        <Route path="/layanan/:slug" element={<ServicesPage />} />
        <Route path="/portofolio" element={<PortfolioPage />} />
        <Route path="/tentang-kami" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/kontak" element={<ContactPage />} />
        <Route path="/konsultasi" element={<ContactPage />} />
      </Routes>
      <Footer />
      <PromoFlyer />
      <WhatsAppButton />
    </main>
  )
}

export default App
