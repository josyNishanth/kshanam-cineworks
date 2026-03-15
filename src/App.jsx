import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import BookNowPopover       from './components/BookNowPopover'
import Nav                  from './components/Nav'
import Hero                 from './components/Hero'
import ZoomParallaxSection  from './components/ZoomParallaxSection'
import Services             from './components/Services'
import Portfolio            from './components/Portfolio'
import Testimonials         from './components/Testimonials'
import CTABanner            from './components/CTABanner'
import Contact              from './components/Contact'
import Footer               from './components/Footer'
import WhatsAppBtn          from './components/WhatsAppBtn'

const WorkPage      = lazy(() => import('./pages/WorkPage'))
const AboutPage     = lazy(() => import('./pages/AboutPage'))
const ServicesPage  = lazy(() => import('./pages/ServicesPage'))
const ContactPage   = lazy(() => import('./pages/ContactPage'))

function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <section id="home"><Hero /></section>
        <ZoomParallaxSection />
        <section id="services"><Services /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="testimonials"><Testimonials /></section>
        <CTABanner />
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  )
}

export default function App() {
  return (
    <>
      <BookNowPopover />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/work"     element={<WorkPage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
