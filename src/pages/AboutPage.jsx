import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn'
import ThreeDMarquee from '@/components/ui/3d-marquee'
import InfiniteGallery from '@/components/ui/3d-gallery-photography'
import { useNavigate } from 'react-router-dom'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&auto=format&fit=crop&q=80', alt: 'Wedding ceremony' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80', alt: 'Bridal portrait' },
  { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&auto=format&fit=crop&q=80', alt: 'Bride in golden light' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80', alt: 'Couple at sunset' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop&q=80', alt: 'Wedding reception' },
  { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80', alt: 'Camera close up' },
  { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80', alt: 'Portrait photography' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', alt: 'Mountain landscape' },
  { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&auto=format&fit=crop&q=80', alt: 'Ocean at sunrise' },
  { src: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&auto=format&fit=crop&q=80', alt: 'Fine art portrait' },
  { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80', alt: 'Wedding flowers' },
  { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&auto=format&fit=crop&q=80', alt: 'Cinematic portrait' },
]

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

const founders = [
  {
    name: 'Josyula Sai Nishanth',
    role: 'Founder',
    bio: 'Nishanth built Kshanam Cineworks on a single belief — that every person deserves to have their story told with the same care a filmmaker brings to a feature film. He leads the visual direction of every project, obsessing over light, composition, and the quiet details that make an image feel alive.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face',
    alt: 'Josyula Sai Nishanth — Founder, Kshanam Cineworks',
  },
  {
    name: 'Vankadari Rohith Kumar',
    role: 'Co-Founder',
    bio: 'Rohith brings an instinctive understanding of human emotion and narrative rhythm to every shoot. As the driving creative force behind Kshanam\'s videography work, he approaches each project as a director — crafting story arcs, building atmosphere, and capturing the moments between moments.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=face',
    alt: 'Vankadari Rohith Kumar — Co-Founder, Kshanam Cineworks',
  },
]

const values = [
  {
    number: '01',
    title: 'Every Kshanam Matters',
    body: 'Kshanam — the Sanskrit word for a fleeting moment. We named ourselves after this idea because we believe no moment is ever truly ordinary. A stolen glance, a nervous laugh, a hand held tight — these are the frames that outlast everything else.',
  },
  {
    number: '02',
    title: 'Story Over Spectacle',
    body: 'Anyone can take a technically perfect photograph. We are not interested in perfection alone. We are interested in truth — in the unguarded smile, the imperfect tear, the light that falls exactly right at exactly the wrong moment. That is the image worth making.',
  },
  {
    number: '03',
    title: 'Trust Is the First Frame',
    body: 'Before we ever lift a camera, we invest in understanding you — your relationship, your vision, what makes you laugh and what makes you nervous. The best work we create is never despite our clients. It is entirely because of them.',
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
            Every Moment Has a Story.
          </span>
        </motion.h1>

        <motion.p
          className="font-sans font-light"
          style={{ fontSize: 16, color: '#666660', maxWidth: 580, lineHeight: 1.9 }}
          {...fade(0.1)}
        >
          Kshanam Cineworks was born from a shared obsession between two friends —
          a belief that the moments life gives us deserve far more than a snapshot.
          Founded by <strong style={{ color: '#1A1A18', fontWeight: 500 }}>Nishanth</strong> and <strong style={{ color: '#1A1A18', fontWeight: 500 }}>Rohith</strong>,
          we are a Hyderabad-based cinematic photography and videography studio
          dedicated to turning your most meaningful moments into timeless visual stories.
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
          "A photograph is not taken — it is given. Given by the light, by the
          moment, by the trust between us and you. Our job is simply to be ready
          when it arrives."
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

      {/* ── 3D Gallery ───────────────────────────────────────────────────── */}
      <motion.section
        className="relative w-full"
        style={{ background: '#1A1A18' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Section header */}
        <div className="absolute top-10 left-0 right-0 z-10 flex flex-col items-center pointer-events-none">
          <span
            className="inline-block text-xs font-sans font-medium tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{ color: 'rgba(244,239,231,0.5)', background: 'rgba(244,239,231,0.08)', letterSpacing: '2px' }}
          >
            Our Work
          </span>
        </div>

        {/* Gallery canvas */}
        <InfiniteGallery
          images={galleryImages}
          speed={1.2}
          visibleCount={12}
          className="h-screen w-full"
          fadeSettings={{
            fadeIn: { start: 0.05, end: 0.25 },
            fadeOut: { start: 0.4, end: 0.43 },
          }}
          blurSettings={{
            blurIn: { start: 0.0, end: 0.1 },
            blurOut: { start: 0.4, end: 0.43 },
            maxBlur: 8.0,
          }}
        />

        {/* Overlay title */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-center px-6 mix-blend-exclusion">
          <h2
            className="font-serif italic font-normal"
            style={{ fontSize: 'clamp(32px, 6vw, 80px)', color: '#F4EFE7', letterSpacing: '-1px' }}
          >
            Kshanam
          </h2>
        </div>

        {/* Navigation hint */}
        <div
          className="absolute bottom-8 left-0 right-0 text-center font-sans uppercase pointer-events-none"
          style={{ fontSize: 10, letterSpacing: '2px', color: 'rgba(244,239,231,0.4)' }}
        >
          <p>Scroll or use arrow keys to explore</p>
        </div>
      </motion.section>

      {/* ── Founders ─────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <motion.span
          className="block text-center text-xs font-sans font-medium tracking-widest uppercase mb-14 px-4 py-1.5"
          style={{ color: '#888880', letterSpacing: '2px' }}
          {...fade(0)}
        >
          The People Behind the Lens
        </motion.span>

        <div className="grid md:grid-cols-2 gap-10">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              className="flex flex-col"
              {...fade(i * 0.12)}
            >
              {/* Portrait */}
              <div
                className="w-full overflow-hidden rounded-2xl mb-7"
                style={{ aspectRatio: '4/5', background: '#E8E3DA' }}
              >
                <img
                  src={f.img}
                  alt={f.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Role badge */}
              <span
                className="inline-block self-start font-sans font-medium text-xs uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: '#888880', background: 'rgba(0,0,0,0.06)', letterSpacing: '2px' }}
              >
                {f.role}
              </span>

              {/* Name */}
              <h3
                className="font-sans font-bold mb-4 leading-tight"
                style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#1A1A18', letterSpacing: '-0.4px' }}
              >
                {f.name}
              </h3>

              {/* Bio */}
              <p
                className="font-sans font-light"
                style={{ fontSize: 15, color: '#666660', lineHeight: 1.9 }}
              >
                {f.bio}
              </p>

              {/* Divider */}
              <div
                className="mt-8 h-px w-12"
                style={{ background: 'rgba(0,0,0,0.12)' }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-24">
        <motion.span
          className="block text-center text-xs font-sans font-medium tracking-widest uppercase mb-14 px-4 py-1.5"
          style={{ color: '#888880', letterSpacing: '2px' }}
          {...fade(0)}
        >
          What We Stand For
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
          Your story deserves to be told.
        </motion.h2>
        <motion.p
          className="font-sans font-light mb-10"
          style={{ fontSize: 15, color: 'rgba(244,239,231,0.6)', maxWidth: 440, lineHeight: 1.85 }}
          {...fade(0.1)}
        >
          Whether it is a wedding, a portrait, or a brand — Nishanth and Rohith
          would love to hear about your vision and create something that lasts
          a lifetime.
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
