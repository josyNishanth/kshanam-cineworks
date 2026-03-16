import { motion } from 'framer-motion'
import { useState } from 'react'

const SERVICES = ['Wedding Film', 'Photography', 'Real Estate', 'Corporate Shoot', 'Other']

const inputStyle = {
  width: '100%',
  padding: '13px 16px',
  borderRadius: 12,
  border: '1.5px solid rgba(0,0,0,0.12)',
  fontSize: 14,
  fontFamily: 'var(--sans)',
  background: '#fff',
  color: '#1A1A18',
  outline: 'none',
  transition: 'border-color 0.2s',
}

function Field({ label, children }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#888', marginBottom: 6, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    /* WhatsApp pre-fill */
    const text = encodeURIComponent(
      `Hi Kshanam Cineworks! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.open(`https://wa.me/9160071199?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <div style={{ padding: '20px 24px 90px' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 56px' }}
      >
        <span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-4"
          style={{ color: '#999', letterSpacing: '2px' }}
        >
          Get in Touch
        </span>
        <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 14 }}>
          Let's Make Something<br />
          <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400 }}>Unforgettable</span>
        </h2>
        <p style={{ fontSize: 14, color: '#777770', fontWeight: 300, lineHeight: 1.75 }}>
          Tell us about your project. We'll respond within 24 hours with a
          personalised quote — or simply ping us on WhatsApp right now.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* Left — quick info cards */}
        <motion.div
          initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          {/* WhatsApp card */}
          <motion.a
            href="https://wa.me/9160071199"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
            style={{
              display: 'flex', alignItems: 'center', gap: 18,
              background: '#fff', borderRadius: 18, padding: '22px 24px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              textDecoration: 'none', color: 'inherit',
              transition: 'box-shadow 0.3s',
            }}
          >
            <div style={{
              width: 50, height: 50, borderRadius: 14, flexShrink: 0,
              background: '#25D36618', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>WhatsApp Us</div>
              <div style={{ fontSize: 12.5, color: '#888', fontWeight: 300 }}>+91 9160071199</div>
              <div style={{ fontSize: 11, color: '#25D366', fontWeight: 500, marginTop: 3 }}>Usually replies within minutes</div>
            </div>
          </motion.a>

          {/* Email card */}
          <motion.a
            href="mailto:hello@kshanamcineworks.com"
            whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
            style={{
              display: 'flex', alignItems: 'center', gap: 18,
              background: '#fff', borderRadius: 18, padding: '22px 24px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              textDecoration: 'none', color: 'inherit',
              transition: 'box-shadow 0.3s',
            }}
          >
            <div style={{
              width: 50, height: 50, borderRadius: 14, flexShrink: 0,
              background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="1.7">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>Email Us</div>
              <div style={{ fontSize: 12.5, color: '#888', fontWeight: 300 }}>hello@kshanamcineworks.com</div>
              <div style={{ fontSize: 11, color: '#999', fontWeight: 300, marginTop: 3 }}>Response within 24 hours</div>
            </div>
          </motion.a>

          {/* Location card */}
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
            style={{
              display: 'flex', alignItems: 'center', gap: 18,
              background: '#fff', borderRadius: 18, padding: '22px 24px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              transition: 'box-shadow 0.3s',
            }}
          >
            <div style={{
              width: 50, height: 50, borderRadius: 14, flexShrink: 0,
              background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="1.7">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>Based in</div>
              <div style={{ fontSize: 12.5, color: '#888', fontWeight: 300 }}>Hyderabad, India</div>
              <div style={{ fontSize: 11, color: '#999', fontWeight: 300, marginTop: 3 }}>Available pan-India &amp; abroad</div>
            </div>
          </motion.div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 12, paddingTop: 4 }}>
            {[
              { label: 'Instagram', href: '#', icon: <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 20h11a3.5 3.5 0 003.5-3.5v-11A3.5 3.5 0 0017.5 2h-11A3.5 3.5 0 003 5.5v11A3.5 3.5 0 006.5 20z"/> },
              { label: 'YouTube',   href: '#', icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></> },
            ].map(s => (
              <motion.a
                key={s.label} href={s.href}
                whileHover={{ y: -3, background: '#1A1A18', color: '#fff' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 18px', borderRadius: 12, fontSize: 13, fontWeight: 500,
                  background: '#fff', color: '#1A1A18',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{s.icon}</svg>
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#fff', borderRadius: 22, padding: '36px 32px',
            boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
          }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '40px 0' }}
            >
              <div style={{ fontSize: 44, marginBottom: 16 }}>🎬</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Message Sent!</h3>
              <p style={{ fontSize: 14, color: '#777', lineHeight: 1.7 }}>
                We've opened WhatsApp for you. We'll get back to you very soon.
              </p>
              <button
                onClick={() => setSent(false)}
                style={{ marginTop: 24, padding: '10px 24px', borderRadius: 999, background: '#1A1A18', color: '#fff', fontSize: 13, fontWeight: 500, cursor: 'pointer', border: 'none' }}
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Send us a message</h3>
              <p style={{ fontSize: 13, color: '#999', marginBottom: 28, fontWeight: 300 }}>
                Fill in your details and we'll open WhatsApp pre-filled with your enquiry.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Field label="Your Name">
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      required placeholder="Priya Sharma"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#1A1A18'}
                      onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                    />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#1A1A18'}
                      onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                    />
                  </Field>
                </div>

                <Field label="Email">
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="priya@example.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#1A1A18'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                  />
                </Field>

                <Field label="Service Required">
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    required
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = '#1A1A18'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>

                <Field label="Tell us about your project">
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Wedding date, venue, style, special requests…"
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = '#1A1A18'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                  />
                </Field>

                <motion.button
                  type="submit"
                  whileHover={{ opacity: 0.88, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    background: '#1A1A18', color: '#fff',
                    padding: '14px 28px', borderRadius: 14,
                    fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--sans)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </motion.button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
