import Hero from "@/components/hero-section"
import Solution from "@/components/treatments-section"
import Advantage from "@/components/why-choose-section"
import { FAQSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import ClinicLocationMap from "@/components/maps"
import Problem from "@/components/about-section"
import FinalCTA from "@/components/caurosel"
import CombinedTrustEnquiry from "@/components/doctor-section"
import ProcessTimeline from "@/components/process"
import Footerone from "@/components/footer"
import CombinedSection from "@/components/consultation-modal"
import Footer from "@/components/footer"
import BeforeAfterGallery from "@/components/doctor-section"
import TrustHighlights from "@/components/why-choose-section"
import Testimonials from "@/components/creative"




export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustHighlights />
      <Problem />
      <section id="services">
      <Solution />
      </section>
      <ProcessTimeline />
      <section id="testimonials"> 
      <Testimonials />
      </section>
      <section id="gallery">
       <BeforeAfterGallery />
       </section>
      <FinalCTA/>

     <CombinedSection />
      <FAQSection />
      <Footer />    
    </main>
    </>
  )
}
