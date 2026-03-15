import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn'
import { FlipReveal, FlipRevealItem } from '@/components/ui/flip-reveal'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const CATEGORIES = [
  { value: 'all',        label: 'All' },
  { value: 'wedding',    label: 'Wedding' },
  { value: 'portrait',   label: 'Portrait' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'corporate',  label: 'Corporate' },
]

const SERVICES = [
  {
    key: 'wedding',
    title: 'Wedding Films',
    desc: 'Cinematic documentary coverage of your entire wedding day.',
    img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=500&fit=crop&crop=center',
    tag: 'Videography',
  },
  {
    key: 'portrait',
    title: 'Bridal Portraits',
    desc: 'Editorial fine art portraits that capture your radiance.',
    img: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=500&fit=crop&crop=center',
    tag: 'Photography',
  },
  {
    key: 'realestate',
    title: 'Luxury Homes',
    desc: 'Architectural walkthroughs that sell properties before a visit.',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=500&fit=crop&crop=center',
    tag: 'Videography',
  },
  {
    key: 'corporate',
    title: 'Brand Films',
    desc: 'Story-driven films that communicate your brand\'s soul.',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=500&fit=crop&crop=center',
    tag: 'Videography',
  },
  {
    key: 'wedding',
    title: 'Reception Coverage',
    desc: 'Every dance, speech, and tear — captured in full cinematic detail.',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=500&fit=crop&crop=center',
    tag: 'Videography',
  },
  {
    key: 'portrait',
    title: 'Couple Sessions',
    desc: 'Lifestyle and golden hour sessions for couples in love.',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=500&fit=crop&crop=center',
    tag: 'Photography',
  },
  {
    key: 'corporate',
    title: 'Executive Portraits',
    desc: 'Professional headshots and leadership portraits with intention.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop&crop=center',
    tag: 'Photography',
  },
  {
    key: 'realestate',
    title: 'Aerial Footage',
    desc: 'Drone cinematography that frames properties in their full context.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=500&fit=crop&crop=center',
    tag: 'Videography',
  },
  {
    key: 'wedding',
    title: 'Wedding Details',
    desc: 'Rings, florals, and moments that define the story of your day.',
    img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=500&fit=crop&crop=center',
    tag: 'Photography',
  },
  {
    key: 'portrait',
    title: 'Fine Art Portraits',
    desc: 'Conceptual photography that turns emotion into timeless imagery.',
    img: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&h=500&fit=crop&crop=center',
    tag: 'Photography',
  },
  {
    key: 'corporate',
    title: 'Event Coverage',
    desc: 'Conferences, launches, and brand activations documented with flair.',
    img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=500&fit=crop&crop=center',
    tag: 'Videography',
  },
  {
    key: 'realestate',
    title: 'Interior Showcase',
    desc: 'Still and motion imagery that highlights every design detail.',
    img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=500&fit=crop&crop=center',
    tag: 'Photography',
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function ServicesPage() {
  const [activeKey, setActiveKey] = useState('all')
  const navigate = useNavigate()

  return (
    <div style={{ background: '#F4EFE7', minHeight: '100vh' }}>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center px-6 pt-32 pb-12">
        <motion.span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
          style={{ color: '#888880', background: 'rgba(0,0,0,0.06)', letterSpacing: '2px' }}
          {...fade(0)}
        >
          What We Offer
        </motion.span>

        <motion.h1
          className="leading-tight tracking-tight mb-6"
          style={{ color: '#1A1A18', maxWidth: 760 }}
          {...fade(0.05)}
        >
          <span
            className="block font-serif font-normal italic"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
          >
            Every frame,
          </span>
          <span
            className="block font-sans font-bold"
            style={{ fontSize: 'clamp(30px, 5.5vw, 58px)', lineHeight: 1.02, letterSpacing: '-1px' }}
          >
            a Deliberate Choice.
          </span>
        </motion.h1>

        <motion.p
          className="font-sans font-light"
          style={{ fontSize: 16, color: '#666660', maxWidth: 520, lineHeight: 1.9 }}
          {...fade(0.1)}
        >
          From intimate wedding films to architectural cinematography — browse our
          services and find the perfect fit for your vision.
        </motion.p>
      </div>

      {/* ── Filter Toggle ─────────────────────────────────────────────── */}
      <motion.div
        className="flex justify-center px-6 pb-14"
        {...fade(0.15)}
      >
        <ToggleGroup
          type="single"
          value={activeKey}
          onValueChange={(val) => { if (val) setActiveKey(val) }}
          className="rounded-full p-1.5 gap-0.5 flex-wrap justify-center"
          style={{ background: 'rgba(0,0,0,0.06)' }}
        >
          {CATEGORIES.map((cat) => (
            <ToggleGroupItem
              key={cat.value}
              value={cat.value}
              className="rounded-full font-sans font-medium text-sm transition-all duration-200"
              style={{
                color: activeKey === cat.value ? '#F4EFE7' : '#555550',
                background: activeKey === cat.value ? '#1A1A18' : 'transparent',
                padding: '8px 20px',
                height: 'auto',
              }}
            >
              {cat.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </motion.div>

      {/* ── Flip Gallery ──────────────────────────────────────────────── */}
      <div className="px-6 pb-24" style={{ maxWidth: 1080, margin: '0 auto' }}>
        <FlipReveal
          keys={[activeKey]}
          showClass="flex"
          hideClass="hidden"
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {SERVICES.map((service, i) => (
            <FlipRevealItem key={`${service.key}-${i}`} flipKey={service.key}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl w-full cursor-pointer"
                style={{
                  background: '#E8E3DA',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  aspectRatio: '4/3',
                }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(26,26,24,0.85) 0%, rgba(26,26,24,0.1) 55%, transparent 100%)' }}
                />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="font-sans font-medium text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: 'rgba(244,239,231,0.15)', color: 'rgba(244,239,231,0.9)', letterSpacing: '1.5px', backdropFilter: 'blur(8px)' }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="font-sans font-semibold mb-1 leading-tight"
                    style={{ fontSize: 17, color: '#F4EFE7' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-sans font-light leading-relaxed"
                    style={{ fontSize: 13, color: 'rgba(244,239,231,0.7)' }}
                  >
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            </FlipRevealItem>
          ))}
        </FlipReveal>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        className="mx-6 mb-20 rounded-3xl flex flex-col items-center text-center px-8 py-20"
        style={{ background: '#1A1A18' }}
      >
        <motion.h2
          className="font-sans font-bold mb-4"
          style={{ fontSize: 'clamp(22px, 4vw, 42px)', color: '#F4EFE7', letterSpacing: '-0.5px' }}
          {...fade(0)}
        >
          Ready to tell your story?
        </motion.h2>
        <motion.p
          className="font-sans font-light mb-10"
          style={{ fontSize: 15, color: 'rgba(244,239,231,0.6)', maxWidth: 420, lineHeight: 1.85 }}
          {...fade(0.1)}
        >
          Every project is unique. Let's talk about yours and craft something
          extraordinary together.
        </motion.p>
        <motion.button
          onClick={() => { navigate('/'); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 120) }}
          className="inline-flex items-center gap-2 font-sans font-medium rounded-full"
          style={{ background: '#F4EFE7', color: '#1A1A18', padding: '14px 32px', fontSize: 14 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ opacity: 0.9, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Book Your Session →
        </motion.button>
      </section>

      <Footer />
      <WhatsAppBtn />
    </div>
  )
}
