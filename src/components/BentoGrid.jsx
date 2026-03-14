import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function BentoGrid() {
  return (
    <section style={{ padding: '20px 24px 90px' }}>
      {/* Header */}
      <motion.div
        variants={container} initial="hidden"
        whileInView="show" viewport={{ once: true, amount: 0.4 }}
        style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}
      >
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 400,
          lineHeight: 1.25, letterSpacing: '-0.3px', marginBottom: 14,
        }}>
          Everything Your Team Needs to<br />
          <strong style={{ fontWeight: 700 }}>Work Smarter</strong>
        </motion.h2>
        <motion.p variants={fadeUp} style={{
          fontSize: 14, color: 'var(--mid)', fontWeight: 300, lineHeight: 1.7,
        }}>
          From task tracking to real-time chat, our features are built to keep your
          team connected, organized, and moving forward—together.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container} initial="hidden"
        whileInView="show" viewport={{ once: true, amount: 0.15 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '300px 240px',
          gap: 14,
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
        }}
      >
        {/* Large photo */}
        <motion.div variants={fadeUp} style={{
          gridColumn: '1 / 3', gridRow: 1,
          borderRadius: 'var(--r-lg)', overflow: 'hidden',
          boxShadow: 'var(--shadow)', position: 'relative',
        }}>
          <motion.img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=500&fit=crop"
            alt="Team Chat"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '60px 22px 22px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.62), transparent)',
          }}>
            <span style={{ display: 'block', fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 4 }}>
              Built-In Team Chat
            </span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: 300, lineHeight: 1.5 }}>
              Communicate instantly within your workspace and across teams.
            </span>
          </div>
        </motion.div>

        {/* Tall text card */}
        <motion.div variants={fadeUp} style={{
          gridColumn: 3, gridRow: '1 / 3',
          borderRadius: 'var(--r-lg)', background: 'var(--bg-card)',
          boxShadow: 'var(--shadow)', padding: '36px 28px',
          display: 'flex', alignItems: 'flex-start',
        }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, lineHeight: 1.3 }}>
              Task Assignment
            </h3>
            <p style={{ fontSize: 13.5, color: 'var(--mid)', fontWeight: 300, lineHeight: 1.65 }}>
              Easily create, assign, and track tasks to keep everyone aligned and accountable.
            </p>
          </div>
        </motion.div>

        {/* Sage card */}
        <motion.div variants={fadeUp} style={{
          gridColumn: 1, gridRow: 2,
          borderRadius: 'var(--r-lg)', background: 'var(--bg-sage)',
          boxShadow: 'var(--shadow)', overflow: 'hidden',
        }}>
          <div style={{ padding: '26px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10, display: 'block' }}>
              Scheduling
            </span>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>
              Real-Time Scheduling
            </h3>
            <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.8)', fontWeight: 300, lineHeight: 1.6 }}>
              Plan meetings, set deadlines, and sync calendars so your team always stays on the same page.
            </p>
          </div>
        </motion.div>

        {/* Photo small */}
        <motion.div variants={fadeUp} style={{
          gridColumn: 2, gridRow: 2,
          borderRadius: 'var(--r-lg)', overflow: 'hidden',
          boxShadow: 'var(--shadow)', position: 'relative',
        }}>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
            alt="Progress Tracking"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '50px 20px 18px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.62), transparent)',
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Progress Tracking</h3>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: 300, lineHeight: 1.5 }}>
              Visualize team performance with dashboards that highlight what's done and what's next.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
