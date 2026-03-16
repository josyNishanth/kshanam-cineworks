import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useBookNow } from '@/context/BookNowContext'

const SERVICES = [
  { label: 'Wedding Film',    emoji: '💍' },
  { label: 'Photography',     emoji: '📷' },
  { label: 'Real Estate',     emoji: '🏡' },
  { label: 'Corporate',       emoji: '🎬' },
  { label: 'Portrait',        emoji: '🌿' },
  { label: 'Something else',  emoji: '✨' },
]

export default function BookNowPopover() {
  const { open, setOpen } = useBookNow()
  const [name, setName]       = useState('')
  const [phone, setPhone]     = useState('')
  const [service, setService] = useState('')
  const [step, setStep]       = useState(1)   // 1 = service select, 2 = details

  // close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function handleClose() {
    setOpen(false)
    setTimeout(() => { setStep(1); setName(''); setPhone(''); setService('') }, 400)
  }

  function handleSend() {
    const msg = encodeURIComponent(
      `Hi Kshanam Cineworks! 👋\n\nI'm ${name || 'a potential client'} and I'm interested in *${service}*.\n\nMy phone: ${phone || 'Will share shortly'}\n\nLooking forward to hearing from you!`
    )
    window.open(`https://wa.me/9160071199?text=${msg}`, '_blank')
    handleClose()
  }

  const canProceed = !!service
  const canSend    = name.trim().length > 0

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ background: 'rgba(26,26,24,0.6)', backdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full flex flex-col"
              style={{
                maxWidth: 520,
                background: '#F4EFE7',
                borderRadius: 28,
                padding: '40px 36px 36px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
              }}
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1,    y: 0,  opacity: 1 }}
              exit={{   scale: 0.92, y: 24,  opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 flex items-center justify-center rounded-full transition-colors"
                style={{ width: 32, height: 32, background: 'rgba(0,0,0,0.07)', color: '#555' }}
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Step 1 — service select */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Header */}
                    <div className="mb-7">
                      <p className="font-sans font-medium text-xs uppercase tracking-widest mb-3" style={{ color: '#25D366', letterSpacing: '2px' }}>
                        Let's Get Started
                      </p>
                      <h2 className="font-serif italic font-normal leading-tight mb-2" style={{ fontSize: 'clamp(22px, 4vw, 30px)', color: '#1A1A18' }}>
                        What are you looking for?
                      </h2>
                      <p className="font-sans font-light" style={{ fontSize: 13.5, color: '#888880', lineHeight: 1.7 }}>
                        Pick a service and we'll open WhatsApp straight away — no forms, no waiting.
                      </p>
                    </div>

                    {/* Service grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {SERVICES.map((s) => (
                        <button
                          key={s.label}
                          onClick={() => setService(s.label)}
                          className="flex items-center gap-3 rounded-2xl text-left transition-all duration-200 font-sans"
                          style={{
                            padding: '14px 16px',
                            background: service === s.label ? '#1A1A18' : 'rgba(0,0,0,0.05)',
                            color: service === s.label ? '#F4EFE7' : '#444440',
                            border: service === s.label ? '2px solid #1A1A18' : '2px solid transparent',
                            fontSize: 13.5,
                            fontWeight: 500,
                          }}
                        >
                          <span style={{ fontSize: 18 }}>{s.emoji}</span>
                          {s.label}
                        </button>
                      ))}
                    </div>

                    <motion.button
                      onClick={() => canProceed && setStep(2)}
                      disabled={!canProceed}
                      className="w-full font-sans font-medium rounded-full transition-all duration-200"
                      style={{
                        padding: '14px',
                        fontSize: 14,
                        background: canProceed ? '#1A1A18' : 'rgba(0,0,0,0.1)',
                        color: canProceed ? '#F4EFE7' : '#aaa',
                        cursor: canProceed ? 'pointer' : 'not-allowed',
                      }}
                      whileHover={canProceed ? { opacity: 0.88 } : {}}
                      whileTap={canProceed ? { scale: 0.97 } : {}}
                    >
                      Continue →
                    </motion.button>
                  </motion.div>
                )}

                {/* Step 2 — details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Back + header */}
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1.5 font-sans font-medium text-xs mb-6 transition-opacity hover:opacity-60"
                      style={{ color: '#888880', letterSpacing: '0.5px' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                      Back
                    </button>

                    <div className="mb-7">
                      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4" style={{ background: 'rgba(0,0,0,0.06)' }}>
                        <span style={{ fontSize: 14 }}>
                          {SERVICES.find(s => s.label === service)?.emoji}
                        </span>
                        <span className="font-sans font-medium text-xs" style={{ color: '#666660' }}>{service}</span>
                      </div>
                      <h2 className="font-serif italic font-normal leading-tight mb-2" style={{ fontSize: 'clamp(22px, 4vw, 28px)', color: '#1A1A18' }}>
                        Just a couple of details.
                      </h2>
                      <p className="font-sans font-light" style={{ fontSize: 13.5, color: '#888880', lineHeight: 1.7 }}>
                        We'll open WhatsApp with everything pre-filled — just hit send.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 mb-7">
                      <div>
                        <label className="block font-sans font-medium text-xs uppercase tracking-wider mb-2" style={{ color: '#999', letterSpacing: '1px' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="e.g. Priya Sharma"
                          autoFocus
                          className="w-full font-sans rounded-xl outline-none transition-all"
                          style={{
                            padding: '13px 16px',
                            fontSize: 14,
                            background: '#fff',
                            border: '1.5px solid rgba(0,0,0,0.1)',
                            color: '#1A1A18',
                          }}
                          onFocus={e => (e.target.style.borderColor = '#1A1A18')}
                          onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
                        />
                      </div>
                      <div>
                        <label className="block font-sans font-medium text-xs uppercase tracking-wider mb-2" style={{ color: '#999', letterSpacing: '1px' }}>
                          Phone / WhatsApp <span style={{ color: '#bbb', fontWeight: 300 }}>(optional)</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full font-sans rounded-xl outline-none transition-all"
                          style={{
                            padding: '13px 16px',
                            fontSize: 14,
                            background: '#fff',
                            border: '1.5px solid rgba(0,0,0,0.1)',
                            color: '#1A1A18',
                          }}
                          onFocus={e => (e.target.style.borderColor = '#1A1A18')}
                          onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
                        />
                      </div>
                    </div>

                    <motion.button
                      onClick={handleSend}
                      disabled={!canSend}
                      className="w-full flex items-center justify-center gap-3 font-sans font-medium rounded-full transition-all duration-200"
                      style={{
                        padding: '14px',
                        fontSize: 14,
                        background: canSend ? '#25D366' : 'rgba(0,0,0,0.08)',
                        color: canSend ? '#fff' : '#bbb',
                        cursor: canSend ? 'pointer' : 'not-allowed',
                      }}
                      whileHover={canSend ? { opacity: 0.9, y: -1 } : {}}
                      whileTap={canSend ? { scale: 0.97 } : {}}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Open WhatsApp
                    </motion.button>

                    <p className="text-center font-sans mt-4" style={{ fontSize: 11.5, color: '#bbb' }}>
                      This opens WhatsApp with a pre-filled message. We usually reply within minutes.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
