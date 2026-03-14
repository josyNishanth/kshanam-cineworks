import { motion } from 'framer-motion'

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
      </svg>
    ),
    title: 'Cinematic Videography',
    desc: 'From wedding films to brand stories — we capture emotion, light, and movement with a director\'s eye and a storyteller\'s heart.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
    title: 'Fine Art Photography',
    desc: 'Weddings, portraits, engagements &amp; lifestyle — timeless images styled with purpose, crafted to be treasured for generations.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Real Estate & Corporate',
    desc: 'Architectural walkthroughs, property showcases, brand films &amp; executive portraits — visuals that drive decisions and close deals.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <div style={{ padding: '90px 24px 70px' }}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 48,
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
        }}
        className="md:grid-cols-3 grid-cols-1"
      >
        {SERVICES.map(s => (
          <motion.div key={s.title} variants={item} className="text-center">
            <div className="flex items-center justify-center mb-4 mx-auto" style={{ width: 46, height: 46, color: '#1A1A18' }}>
              {s.icon}
            </div>
            <h3 className="font-sans font-semibold mb-2" style={{ fontSize: 14 }}>{s.title}</h3>
            <p
              className="font-sans font-light"
              style={{ fontSize: 13, color: '#666660', lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: s.desc }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
