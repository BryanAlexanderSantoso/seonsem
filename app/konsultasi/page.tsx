"use client"

import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"

export default function ConsultationPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <ContactSection />
      <FAQSection />
    </div>
  )
}
