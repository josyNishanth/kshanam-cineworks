import { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn'
import { useBookNow } from '@/context/BookNowContext'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const STEPS = [
  {
    number: '01',
    title: 'Say hello.',
    body: 'Drop us a message on WhatsApp or fill the form below. Tell us a little about yourself — your event, your vision, your vibe. We love hearing the story behind the story.',
  },
  {
    number: '02',
    title: 'We have a chat.',
    body: 'Nishanth or Rohith will personally reach out within a few hours. No automated replies, no waiting rooms — just a real conversation with the people who will actually be behind your lens.',
  },
  {
    number: '03',
    title: 'We create together.',
    body: 'Once we understand your world, we craft a plan — dates, moods, locations, style. Then we show up and do what we love most: making you look and feel extraordinary.',
  },
]

const CONTACT_CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    accent: '#25D36620',
    label: 'WhatsApp',
    value: '+91 99999 99999',
    hint: 'Fastest way to reach us',
    href: 'https://wa.me/9160071199',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="1.7">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    accent: 'rgba(0,0,0,0.05)',
    label: 'Email',
    value: 'hello@kshanamcineworks.com',
    hint: 'We reply within 24 hours',
    href: 'mailto:hello@kshanamcineworks.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="1.7">
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 20h11a3.5 3.5 0 003.5-3.5v-11A3.5 3.5 0 0017.5 2h-11A3.5 3.5 0 003 5.5v11A3.5 3.5 0 006.5 20z"/>
      </svg>
    ),
    accent: '#C1358418',
    label: 'Instagram',
    value: '@kshanamcineworks',
    hint: 'See our latest work',
    href: 'https://instagram.com/kshanamcineworks',
  },
]

export default function ContactPage() {
  const { setOpen } = useBookNow()
  const [form, setForm]   = useState({ name: '', phone: '', message: '' })
  const [sent, setSent]   = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi Kshanam Cineworks! 👋\n\nI'm *${form.name}*.\n\n${form.message}\n\nPhone: ${form.phone || 'Will share shortly'}`
    )
    window.open(`https://wa.me/9160071199?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <div style={{ background: '#F4EFE7', minHeight: '100vh' }}>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center px-6 pt-32 pb-16">
        <motion.span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
          style={{ color: '#888880', background: 'rgba(0,0,0,0.06)', letterSpacing: '2px' }}
          {...fade(0)}
        >
          Get in Touch
        </motion.span>

        <motion.h1
          className="leading-tight tracking-tight mb-6"
          style={{ color: '#1A1A18', maxWidth: 720 }}
          {...fade(0.05)}
        >
          <span className="block font-serif font-normal italic" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}>
            Every great story
          </span>
          <span className="block font-sans font-bold" style={{ fontSize: 'clamp(30px, 5.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-1px' }}>
            starts with a hello.
          </span>
        </motion.h1>

        <motion.p
          className="font-sans font-light"
          style={{ fontSize: 16, color: '#666660', maxWidth: 520, lineHeight: 1.9 }}
          {...fade(0.1)}
        >
          We are Nishanth and Rohith — and we would genuinely love to hear from
          you. Whether you have a date in mind or just a feeling, reach out. We
          don't bite, and we promise we respond faster than you'd expect.
        </motion.p>

        {/* Quick CTA */}
        <motion.div className="flex items-center gap-4 mt-8 flex-wrap justify-center" {...fade(0.15)}>
          <motion.button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 font-sans font-medium rounded-full"
            style={{ background: '#1A1A18', color: '#F4EFE7', padding: '13px 28px', fontSize: 14 }}
            whileHover={{ opacity: 0.85, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Session →
          </motion.button>
          <motion.a
            href="https://wa.me/9160071199"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans font-medium rounded-full border"
            style={{ padding: '13px 24px', fontSize: 14, color: '#1A1A18', borderColor: 'rgba(0,0,0,0.15)', background: 'transparent' }}
            whileHover={{ background: 'rgba(0,0,0,0.04)', y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* ── Personal note ────────────────────────────────────────────── */}
      <motion.section
        className="max-w-4xl mx-auto px-6 mb-20"
        {...fade(0)}
      >
        <div
          className="rounded-3xl px-10 py-10 flex flex-col md:flex-row items-start gap-8"
          style={{ background: '#1A1A18' }}
        >
          {/* Quote mark */}
          <span
            className="font-serif italic select-none flex-shrink-0"
            style={{ fontSize: 80, lineHeight: 0.8, color: 'rgba(244,239,231,0.12)', marginTop: 8 }}
          >
            "
          </span>
          <div>
            <p
              className="font-serif italic font-normal mb-5"
              style={{ fontSize: 'clamp(17px, 2.2vw, 22px)', color: 'rgba(244,239,231,0.9)', lineHeight: 1.75 }}
            >
              We started Kshanam Cineworks because we believe every single person
              has a story that deserves to be told beautifully. You don't have to
              be a celebrity or have a grand event. You just have to be{' '}
              <em>you</em> — and that is more than enough.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: 'rgba(244,239,231,0.2)' }} />
              <span className="font-sans font-light text-sm" style={{ color: 'rgba(244,239,231,0.5)' }}>
                Nishanth &amp; Rohith, Founders
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Contact cards ────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.span
          className="block text-xs font-sans font-medium tracking-widest uppercase mb-10 text-center"
          style={{ color: '#888880', letterSpacing: '2px' }}
          {...fade(0)}
        >
          Find Us Here
        </motion.span>

        <div className="grid md:grid-cols-3 gap-5">
          {CONTACT_CARDS.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex flex-col gap-4 rounded-2xl p-6 transition-all"
              style={{ background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', textDecoration: 'none', color: 'inherit' }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.11)' }}
              transition={{ duration: 0.25 }}
              {...fade(i * 0.08)}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 46, height: 46, background: card.accent }}
              >
                {card.icon}
              </div>
              <div>
                <p className="font-sans font-semibold mb-0.5" style={{ fontSize: 14, color: '#1A1A18' }}>{card.label}</p>
                <p className="font-sans font-light" style={{ fontSize: 13, color: '#555550', wordBreak: 'break-all' }}>{card.value}</p>
              </div>
              <p className="font-sans font-light text-xs mt-auto" style={{ color: '#aaa', letterSpacing: '0.3px' }}>{card.hint}</p>
            </motion.a>
          ))}
        </div>

        {/* Location strip */}
        <motion.div
          className="mt-5 rounded-2xl flex items-center gap-5 px-6 py-5"
          style={{ background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
          {...fade(0.2)}
        >
          <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{ width: 46, height: 46, background: 'rgba(0,0,0,0.05)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="1.7">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <p className="font-sans font-semibold" style={{ fontSize: 14, color: '#1A1A18' }}>Based in Hyderabad, India</p>
            <p className="font-sans font-light" style={{ fontSize: 13, color: '#888880' }}>Available pan-India &amp; for destination projects worldwide</p>
          </div>
        </motion.div>
      </section>

      {/* ── What happens next ────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.span
          className="block text-xs font-sans font-medium tracking-widest uppercase mb-12 text-center"
          style={{ color: '#888880', letterSpacing: '2px' }}
          {...fade(0)}
        >
          What Happens Next
        </motion.span>

        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-8 pb-12 relative"
              {...fade(i * 0.1)}
            >
              {/* Timeline line */}
              {i < STEPS.length - 1 && (
                <div
                  className="absolute left-[21px] top-12"
                  style={{ width: 1, bottom: 0, background: 'rgba(0,0,0,0.1)' }}
                />
              )}

              {/* Number circle */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full font-sans font-semibold"
                style={{
                  width: 44, height: 44,
                  background: '#1A1A18',
                  color: '#F4EFE7',
                  fontSize: 13,
                  letterSpacing: '0.5px',
                }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3
                  className="font-sans font-semibold mb-3"
                  style={{ fontSize: 18, color: '#1A1A18', letterSpacing: '-0.2px' }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: 14.5, color: '#777770', lineHeight: 1.85, maxWidth: 520 }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Message form ─────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.span
          className="block text-xs font-sans font-medium tracking-widest uppercase mb-10 text-center"
          style={{ color: '#888880', letterSpacing: '2px' }}
          {...fade(0)}
        >
          Drop Us a Note
        </motion.span>

        <motion.div
          className="rounded-3xl p-8 md:p-12"
          style={{ background: '#fff', boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}
          {...fade(0.05)}
        >
          {sent ? (
            <motion.div
              className="flex flex-col items-center text-center py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-5xl mb-5">🎬</div>
              <h3 className="font-sans font-bold mb-3" style={{ fontSize: 22, color: '#1A1A18' }}>
                WhatsApp is open!
              </h3>
              <p className="font-sans font-light mb-6" style={{ fontSize: 14.5, color: '#777', lineHeight: 1.8, maxWidth: 360 }}>
                Your message is pre-filled and ready to send. We'll get back to you shortly — promise.
              </p>
              <button
                onClick={() => setSent(false)}
                className="font-sans font-medium rounded-full px-6 py-3"
                style={{ background: '#1A1A18', color: '#F4EFE7', fontSize: 13 }}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <>
              <h3 className="font-sans font-semibold mb-2" style={{ fontSize: 20, color: '#1A1A18', letterSpacing: '-0.3px' }}>
                Tell us a little about yourself.
              </h3>
              <p className="font-sans font-light mb-8" style={{ fontSize: 14, color: '#888880', lineHeight: 1.7 }}>
                No essay needed — a sentence or two is plenty. We'll take it from there.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans font-medium text-xs uppercase tracking-wider mb-2" style={{ color: '#999', letterSpacing: '1px' }}>
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="What should we call you?"
                      className="w-full font-sans rounded-xl outline-none transition-all"
                      style={{ padding: '13px 16px', fontSize: 14, background: '#F9F7F3', border: '1.5px solid transparent', color: '#1A1A18' }}
                      onFocus={e => (e.target.style.borderColor = '#1A1A18')}
                      onBlur={e => (e.target.style.borderColor = 'transparent')}
                    />
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-xs uppercase tracking-wider mb-2" style={{ color: '#999', letterSpacing: '1px' }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full font-sans rounded-xl outline-none transition-all"
                      style={{ padding: '13px 16px', fontSize: 14, background: '#F9F7F3', border: '1.5px solid transparent', color: '#1A1A18' }}
                      onFocus={e => (e.target.style.borderColor = '#1A1A18')}
                      onBlur={e => (e.target.style.borderColor = 'transparent')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans font-medium text-xs uppercase tracking-wider mb-2" style={{ color: '#999', letterSpacing: '1px' }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your event, what you're envisioning, or just say hi — anything works."
                    className="w-full font-sans rounded-xl outline-none transition-all resize-none"
                    style={{ padding: '13px 16px', fontSize: 14, background: '#F9F7F3', border: '1.5px solid transparent', color: '#1A1A18', lineHeight: 1.7 }}
                    onFocus={e => (e.target.style.borderColor = '#1A1A18')}
                    onBlur={e => (e.target.style.borderColor = 'transparent')}
                  />
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4 mt-2">
                  <p className="font-sans font-light text-xs" style={{ color: '#bbb' }}>
                    Clicking send opens WhatsApp with your message pre-filled.
                  </p>
                  <motion.button
                    type="submit"
                    className="inline-flex items-center gap-2.5 font-sans font-medium rounded-full"
                    style={{ background: '#25D366', color: '#fff', padding: '13px 28px', fontSize: 14 }}
                    whileHover={{ opacity: 0.9, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </motion.button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </section>

      <Footer />
      <WhatsAppBtn />
    </div>
  )
}
