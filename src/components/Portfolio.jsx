import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}

export default function Portfolio() {
  return (
    <div style={{ padding: '20px 24px 90px' }}>
      {/* Header */}
      <motion.div
        variants={container} initial="hidden"
        whileInView="show" viewport={{ once: true, amount: 0.4 }}
        style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 52px' }}
      >
        <motion.span
          variants={fadeUp}
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-4"
          style={{ color: '#999', letterSpacing: '2px' }}
        >
          Our Work
        </motion.span>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 400,
          lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: 14,
        }}>
          Every Frame Tells<br />
          <strong style={{ fontWeight: 700 }}>a Different Story</strong>
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize: 14, color: '#777770', fontWeight: 300, lineHeight: 1.75 }}>
          From intimate weddings to sprawling estates — explore a glimpse
          of the moments we've had the honour of capturing.
        </motion.p>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        variants={container} initial="hidden"
        whileInView="show" viewport={{ once: true, amount: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '310px 250px',
          gap: 14,
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
        }}
      >
        {/* Large — Weddings */}
        <motion.div variants={fadeUp} style={{
          gridColumn: '1 / 3', gridRow: 1,
          borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.09)', position: 'relative',
        }}>
          <motion.img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop"
            alt="Wedding Film"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.55 }}
          />
          {/* play button overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
          }} />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center rounded-full" style={{
              width: 60, height: 60,
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
            </div>
          </motion.div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 22px 22px' }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 4 }}>
              Wedding Films
            </span>
            <span style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>Timeless Love Stories</span>
          </div>
        </motion.div>

        {/* Tall right — Portraits */}
        <motion.div variants={fadeUp} style={{
          gridColumn: 3, gridRow: '1 / 3',
          borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.09)', position: 'relative',
          background: '#EDE8DF',
        }}>
          <img
            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=750&fit=crop"
            alt="Portraits"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, padding: '60px 22px 22px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 4 }}>
              Portrait Sessions
            </span>
            <span style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>Faces. Emotions. Truth.</span>
          </div>
        </motion.div>

        {/* Bottom left — Real Estate */}
        <motion.div variants={fadeUp} style={{
          gridColumn: 1, gridRow: 2,
          borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.09)', position: 'relative',
          background: '#8A9E82',
        }}>
          <div style={{ padding: '28px 26px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10, display: 'block' }}>
              Real Estate &amp; Corporate
            </span>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>
              Spaces That Sell Themselves
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)', fontWeight: 300, lineHeight: 1.65 }}>
              Architectural walkthroughs, aerial footage &amp; brand films that elevate every listing.
            </p>
          </div>
        </motion.div>

        {/* Bottom right — Corporate */}
        <motion.div variants={fadeUp} style={{
          gridColumn: 2, gridRow: 2,
          borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.09)', position: 'relative',
        }}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
            alt="Corporate"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, padding: '50px 20px 20px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.62), transparent)',
          }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 4 }}>
              Corporate Shoots
            </span>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>Brands with Vision</h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
