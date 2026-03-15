import React from 'react'
import { motion } from 'framer-motion'
import { ZoomParallax } from '@/components/ui/zoom-parallax'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1280&h=720&fit=crop&crop=center&auto=format&q=80',
    alt: 'Bride and groom — wedding ceremony',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1280&h=720&fit=crop&crop=center&auto=format&q=80',
    alt: 'Golden hour portrait session',
  },
  {
    src: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=800&fit=crop&crop=center&auto=format&q=80',
    alt: 'Fine art conceptual photography',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1280&h=720&fit=crop&crop=center&auto=format&q=80',
    alt: 'Couple lifestyle photography at sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=800&fit=crop&crop=center&auto=format&q=80',
    alt: 'Behind the lens — the craft of cinema',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1280&h=720&fit=crop&crop=center&auto=format&q=80',
    alt: 'Architectural real estate cinematography',
  },
  {
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1280&h=720&fit=crop&crop=center&auto=format&q=80',
    alt: 'Bridal editorial fine art portrait',
  },
]

export default function ZoomParallaxSection() {
  return (
    <section style={{ background: '#F4EFE7' }}>
      {/* Section label */}
      <div className="flex flex-col items-center text-center px-6 pt-20 pb-4">
        <motion.span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
          style={{ color: '#888880', background: 'rgba(0,0,0,0.06)', letterSpacing: '2px' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Work
        </motion.span>
        <motion.h2
          className="font-sans font-bold leading-tight tracking-tight mb-3"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)', color: '#1A1A18' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Every Frame, a Story
        </motion.h2>
        <motion.p
          className="font-sans font-light"
          style={{ fontSize: 15, color: '#888880', maxWidth: 440, lineHeight: 1.8 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          Scroll to journey through our cinematic world — weddings, portraits, architecture and beyond.
        </motion.p>
      </div>

      {/* Zoom parallax */}
      <ZoomParallax images={images} />
    </section>
  )
}
