import { motion } from 'framer-motion'

const REVIEWS = [
  {
    name: 'Priya & Arjun',
    event: 'Wedding — Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    quote: 'Kshanam Cineworks didn\'t just film our wedding — they made us relive every single emotion all over again. The cinematic quality left every guest speechless.',
    stars: 5,
  },
  {
    name: 'Rahul Mehta',
    event: 'Real Estate — Bangalore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    quote: 'The property walkthroughs they created for our luxury project sold three units in the first week of launch. Incredible visual storytelling, incredible team.',
    stars: 5,
  },
  {
    name: 'Sneha Krishnan',
    event: 'Corporate Shoot — Chennai',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
    quote: 'Our brand film has been the centrepiece of every pitch deck. Professional, efficient, and the final edit was beyond what we imagined. 10/10 recommend.',
    stars: 5,
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } }
const card      = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C8A96E">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <div style={{ padding: '20px 24px 90px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 52px' }}
      >
        <span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-4"
          style={{ color: '#999', letterSpacing: '2px' }}
        >
          Client Stories
        </span>
        <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 14 }}>
          Moments That Matter,<br />Words That Speak
        </h2>
        <p style={{ fontSize: 14, color: '#777770', fontWeight: 300, lineHeight: 1.75 }}>
          From intimate celebrations to high-stakes corporate launches — here's
          what our clients say about working with us.
        </p>
      </motion.div>

      <motion.div
        variants={container} initial="hidden"
        whileInView="show" viewport={{ once: true, amount: 0.15 }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: 18, maxWidth: 'var(--max-w)', margin: '0 auto',
        }}
      >
        {REVIEWS.map(r => (
          <motion.div
            key={r.name} variants={card}
            whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
            style={{
              background: '#fff', borderRadius: 20,
              padding: '28px 26px 30px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              transition: 'box-shadow 0.3s',
            }}
          >
            <Stars n={r.stars} />
            <p style={{ fontSize: 14, color: '#444440', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>
              "{r.quote}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={r.avatar} alt={r.name}
                style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#1A1A18' }}>{r.name}</div>
                <div style={{ fontSize: 12, color: '#999', fontWeight: 300 }}>{r.event}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
