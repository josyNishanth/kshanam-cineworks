import Nav           from './components/Nav'
import Hero          from './components/Hero'
import Services      from './components/Services'
import Portfolio     from './components/Portfolio'
import Testimonials  from './components/Testimonials'
import CTABanner     from './components/CTABanner'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import WhatsAppBtn   from './components/WhatsAppBtn'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <section id="home">  <Hero />       </section>
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
