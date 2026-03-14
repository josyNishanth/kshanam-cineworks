import { motion } from 'framer-motion'

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function CTABanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#1A1A18',
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        borderRadius: 22,
        padding: '72px 32px',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* subtle radial glow */}
      <div style={{
        position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(200,169,110,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <span
        className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-5"
        style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '2px' }}
      >
        Let's Create Together
      </span>

      <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 400, lineHeight: 1.18, color: '#fff', marginBottom: 16 }}>
        <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400 }}>
          Ready to preserve
        </em>
        <br />
        <strong style={{ fontFamily: 'var(--sans)', fontWeight: 700 }}>
          your most precious moments?
        </strong>
      </h2>

      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 300, marginBottom: 36, lineHeight: 1.75 }}>
        Weddings, events, real estate, corporate — let's talk about your vision
        and craft something extraordinary together.
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <motion.button
          onClick={() => scrollTo('#contact')}
          whileHover={{ opacity: 0.9, y: -2 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: '#1A1A18',
            padding: '13px 28px', borderRadius: 'var(--r-pill)',
            fontSize: 14, fontWeight: 500, fontFamily: 'var(--sans)',
          }}
        >
          Book a Free Consultation →
        </motion.button>

        <motion.a
          href="https://wa.me/919999999999"
          target="_blank" rel="noopener noreferrer"
          whileHover={{ opacity: 0.85, y: -2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#25D366', color: '#fff',
            padding: '13px 24px', borderRadius: 'var(--r-pill)',
            fontSize: 14, fontWeight: 500, fontFamily: 'var(--sans)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat on WhatsApp
        </motion.a>
      </div>
    </motion.section>
  )
}
