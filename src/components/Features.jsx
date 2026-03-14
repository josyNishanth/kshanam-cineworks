import { motion } from 'framer-motion'

const ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    title: 'Real-Time Collaboration',
    desc: 'Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
    title: 'Task & Project Tracking',
    desc: "Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team's style.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Performance Insights',
    desc: 'Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Features() {
  return (
    <section style={{ padding: '90px 24px 70px' }}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
        }}
      >
        {ITEMS.map(f => (
          <motion.div key={f.title} variants={item} style={{ textAlign: 'center' }}>
            <div style={{
              width: 44, height: 44, margin: '0 auto 14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--dark)',
            }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
            <p style={{ fontSize: 13, color: 'var(--mid)', fontWeight: 300, lineHeight: 1.65 }}>{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
