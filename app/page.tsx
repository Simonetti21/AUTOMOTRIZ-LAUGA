"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesGallery from "@/components/services-gallery"
import ContactInfo from "@/components/contact-info"
import QuoteForm from "@/components/quote-form"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ContactInfo />
      <ServicesGallery />

      <section className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <QuoteForm />
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
