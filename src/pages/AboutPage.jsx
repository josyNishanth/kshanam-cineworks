import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn'
import ThreeDMarquee from '@/components/ui/3d-marquee'
import { useNavigate } from 'react-router-dom'

const marqueeImages = [
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
  'https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=450&fit=crop&crop=center&auto=format&q=80',
]

const values = [
  {
    number: '01',
    title: 'Every Kshanam Matters',
    body: 'Kshanam — the Sanskrit word for a fleeting moment. We believe no moment is too small to be felt. Our lens finds meaning in the blink of an eye, the nervous laugh, the quiet glance.',
  },
  {
    number: '02',
    title: 'Cinematic Precision',
    body: 'We approach every shoot as a director approaches a film — with intent, with light, with story arc. The result is not just a photo or video, it is a scene you can live inside.',
  },
  {
    number: '03',
    title: 'Emotion First',
    body: 'Technique serves emotion, never the other way around. We spend time understanding who you are before we ever lift a camera, because the best frame starts with trust.',
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#F4EFE7', minHeight: '100vh' }}>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center px-6 pt-32 pb-0">
        <motion.span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
          style={{ color: '#888880', background: 'rgba(0,0,0,0.06)', letterSpacing: '2px' }}
          {...fade(0)}
        >
          Our Story
        </motion.span>

        <motion.h1
          className="leading-tight tracking-tight mb-6"
          style={{ color: '#1A1A18', maxWidth: 780 }}
          {...fade(0.05)}
        >
          <span
            className="block font-serif font-normal italic"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
          >
            Every Kshanam,
          </span>
          <span
            className="block font-sans font-bold"
            style={{ fontSize: 'clamp(30px, 5.5vw, 58px)', lineHeight: 1.02, letterSpacing: '-1px' }}
          >
            a Story Worth Telling.
          </span>
        </motion.h1>

        <motion.p
          className="font-sans font-light"
          style={{ fontSize: 16, color: '#666660', maxWidth: 560, lineHeight: 1.9 }}
          {...fade(0.1)}
        >
          We believe every moment — every <em>kshanam</em> — carries a universe of
          emotion within it. Our calling is to catch that universe and present it
          back to you in a form that is timeless, cinematic, and unmistakably yours.
        </motion.p>
      </div>

      {/* ── 3D Marquee ───────────────────────────────────────────────────── */}
      <motion.div
        className="w-full mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <ThreeDMarquee images={marqueeImages} />
      </motion.div>

      {/* ── Philosophy ───────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
          style={{ color: '#888880', background: 'rgba(0,0,0,0.06)', letterSpacing: '2px' }}
          {...fade(0)}
        >
          Philosophy
        </motion.span>

        <motion.p
          className="font-serif italic font-normal"
          style={{ fontSize: 'clamp(20px, 3vw, 32px)', color: '#1A1A18', lineHeight: 1.7 }}
          {...fade(0.1)}
        >
          "We do not simply take photographs. We listen to the light, read the room,
          and translate what the eye misses into something the heart never forgets."
        </motion.p>

        <motion.div
          className="mt-6 flex items-center justify-center gap-3"
          {...fade(0.2)}
        >
          <div className="h-px w-10" style={{ background: 'rgba(0,0,0,0.15)' }} />
          <span className="text-sm font-sans" style={{ color: '#aaa' }}>Kshanam Cineworks</span>
          <div className="h-px w-10" style={{ background: 'rgba(0,0,0,0.15)' }} />
        </motion.div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <motion.span
          className="block text-center text-xs font-sans font-medium tracking-widest uppercase mb-14 px-4 py-1.5"
          style={{ color: '#888880', letterSpacing: '2px' }}
          {...fade(0)}
        >
          What Drives Us
        </motion.span>

        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div key={v.number} {...fade(i * 0.1)}>
              <span
                className="block font-sans font-light mb-4"
                style={{ fontSize: 11, color: '#bbb', letterSpacing: '2px' }}
              >
                {v.number}
              </span>
              <h3
                className="font-sans font-semibold mb-3"
                style={{ fontSize: 17, color: '#1A1A18', letterSpacing: '-0.3px' }}
              >
                {v.title}
              </h3>
              <p
                className="font-sans font-light"
                style={{ fontSize: 14.5, color: '#777770', lineHeight: 1.85 }}
              >
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
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
          Let's create something cinematic together. Reach out and let's begin
          turning your moments into memories.
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
