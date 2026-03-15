import { motion } from 'framer-motion'
import { CircularGallery } from '@/components/ui/circular-gallery'

const cinematicItems = [
  {
    common: 'Wedding Films',
    binomial: 'Cinematic Documentary',
    photo: {
      url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop&crop=center',
      text: 'Bride and groom during wedding ceremony',
      pos: '50% 30%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Bridal Portraits',
    binomial: 'Editorial & Fine Art',
    photo: {
      url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=800&fit=crop&crop=center',
      text: 'Bride in golden light',
      pos: '50% 20%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Couple Sessions',
    binomial: 'Lifestyle Photography',
    photo: {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop&crop=center',
      text: 'Couple walking together at sunset',
      pos: '50% 40%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Golden Hour',
    binomial: 'Natural Light Portraits',
    photo: {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&crop=center',
      text: 'Portrait during golden hour',
      pos: '50% 25%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Real Estate',
    binomial: 'Architectural Cinematography',
    photo: {
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop&crop=center',
      text: 'Luxurious real estate interior',
      pos: '50% 50%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Behind the Lens',
    binomial: 'The Craft of Cinema',
    photo: {
      url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=800&fit=crop&crop=center',
      text: 'Photographer with camera',
      pos: '50% 35%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Corporate Video',
    binomial: 'Brand Storytelling',
    photo: {
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=800&fit=crop&crop=center',
      text: 'Professional corporate shoot',
      pos: '50% 30%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Landscapes',
    binomial: 'Environmental Storytelling',
    photo: {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&crop=center',
      text: 'Dramatic mountain landscape',
      pos: '50% 60%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Ocean Stories',
    binomial: 'Seascape Cinematography',
    photo: {
      url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=800&fit=crop&crop=center',
      text: 'Ocean waves at sunrise',
      pos: '50% 50%',
      by: 'Kshanam Cineworks',
    },
  },
  {
    common: 'Fine Art',
    binomial: 'Conceptual Photography',
    photo: {
      url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&h=800&fit=crop&crop=center',
      text: 'Fine art portrait photography',
      pos: '50% 20%',
      by: 'Kshanam Cineworks',
    },
  },
]

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col"
      style={{ background: '#F4EFE7' }}
    >
      {/* Headline + CTA — top section */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-12">
        <motion.span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
          style={{ color: '#888880', background: 'rgba(0,0,0,0.06)', letterSpacing: '2px' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Cinematic Photography &amp; Videography
        </motion.span>

        <motion.h1
          className="leading-tight tracking-tight mb-5"
          style={{ color: '#1A1A18', maxWidth: 760 }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="block font-serif font-normal italic"
            style={{ fontSize: 'clamp(28px, 4.5vw, 50px)' }}
          >
            Your Story,
          </span>
          <span
            className="block font-sans font-bold"
            style={{ fontSize: 'clamp(32px, 5.8vw, 58px)', lineHeight: 1.02, letterSpacing: '-1px' }}
          >
            Cinematically Told.
          </span>
        </motion.h1>

        <motion.p
          className="font-sans font-light mb-9"
          style={{ fontSize: 15.5, color: '#666660', lineHeight: 1.8, maxWidth: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Weddings, portraits, real estate &amp; corporate — we craft every frame
          with intention, emotion, and cinematic precision.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 font-sans font-medium text-white rounded-full"
            style={{ background: '#1A1A18', padding: '13px 28px', fontSize: 14 }}
            whileHover={{ opacity: 0.85, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Session
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            onClick={() => scrollTo('#portfolio')}
            className="inline-flex items-center gap-2 font-sans font-medium rounded-full border"
            style={{
              padding: '13px 28px',
              fontSize: 14,
              color: '#1A1A18',
              borderColor: 'rgba(0,0,0,0.18)',
              background: 'rgba(244,239,231,0.6)',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{ background: 'rgba(0,0,0,0.05)', y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>

      {/* Circular Gallery — below the title */}
      <div className="relative z-0 w-full" style={{ height: '60vh' }}>
        <CircularGallery
          items={cinematicItems}
          radius={580}
          autoRotateSpeed={0.025}
          className="w-full h-full"
        />
      </div>
    </section>
  )
}
