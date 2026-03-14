import { motion } from 'framer-motion'

const CARDS = [
  {
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=260&fit=crop',
    tag: 'Case Study',
    title: 'How Acme Co. reduced project delays by 40%',
    desc: 'Discover how a 200-person team streamlined operations using our task tracking and real-time dashboards.',
  },
  {
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=260&fit=crop',
    tag: 'Success Story',
    title: 'Remote teams, same-day alignment with built-in chat',
    desc: 'Learn how distributed teams stay in sync across time zones without endless email threads.',
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=260&fit=crop',
    tag: 'Report',
    title: '2025 Productivity Report: What top teams do differently',
    desc: 'Data from 5,000+ teams reveals the habits and tools that separate high-performers from the rest.',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } }
const card      = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Results() {
  return (
    <section style={{ padding: '20px 24px 90px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}
      >
        <h2 style={{ fontSize: 'clamp(24px,4vw,34px)', fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 14 }}>
          Proven Results, Real Impact
        </h2>
        <p style={{ fontSize: 14, color: 'var(--mid)', fontWeight: 300, lineHeight: 1.7 }}>
          See how teams around the world are working faster, communicating better,
          and getting more done with our all-in-one management platform.
        </p>
      </motion.div>

      <motion.div
        variants={container} initial="hidden"
        whileInView="show" viewport={{ once: true, amount: 0.15 }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18, maxWidth: 'var(--max-w)', margin: '0 auto',
        }}
      >
        {CARDS.map(c => (
          <motion.div
            key={c.title}
            variants={card}
            whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.13)' }}
            style={{
              background: 'var(--white)', borderRadius: 'var(--r-lg)',
              overflow: 'hidden', boxShadow: 'var(--shadow)',
            }}
          >
            <img src={c.img} alt={c.title} style={{ height: 180, width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '22px 22px 26px' }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--light)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10, display: 'block' }}>
                {c.tag}
              </span>
              <h4 style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, marginBottom: 8 }}>{c.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--mid)', fontWeight: 300, lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
