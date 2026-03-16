function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Wedding Films',       href: '#services' },
      { label: 'Photography',         href: '#services' },
      { label: 'Real Estate Videos',  href: '#services' },
      { label: 'Corporate Shoots',    href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Work',     href: '#portfolio'     },
      { label: 'About Us',     href: '#testimonials'  },
      { label: 'Contact',      href: '#contact'       },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'YouTube',   href: '#' },
      { label: 'WhatsApp',  href: 'https://wa.me/9160071199' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ padding: '60px 24px 32px', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 52 }}>
          {/* brand */}
          <div>
            <button
              onClick={() => scrollTo('#home')}
              style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 20, color: '#1A1A18', marginBottom: 14, display: 'block' }}
            >
              Kshanam Cineworks
            </button>
            <p style={{ fontSize: 13.5, color: '#888', lineHeight: 1.75, fontWeight: 300, maxWidth: 280 }}>
              Cinematic photography &amp; videography for weddings, portraits,
              real estate &amp; corporate — crafted with intention.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['instagram', 'youtube', 'whatsapp'].map(s => (
                <a
                  key={s} href={s === 'whatsapp' ? 'https://wa.me/9160071199' : '#'}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(0,0,0,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#555', transition: 'background 0.2s',
                  }}
                >
                  {s === 'instagram' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 20h11a3.5 3.5 0 003.5-3.5v-11A3.5 3.5 0 0017.5 2h-11A3.5 3.5 0 003 5.5v11A3.5 3.5 0 006.5 20z"/>
                    </svg>
                  )}
                  {s === 'youtube' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                    </svg>
                  )}
                  {s === 'whatsapp' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 12, fontWeight: 600, color: '#1A1A18', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {col.title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={l.href.startsWith('#') ? e => { e.preventDefault(); scrollTo(l.href) } : undefined}
                      style={{ fontSize: 13.5, color: '#888', fontWeight: 300, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#1A1A18'}
                      onMouseLeave={e => e.target.style.color = '#888'}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.07)',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 12, color: '#aaa' }}>
            &#169; 2025 Kshanam Cineworks. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: '#aaa' }}>
            Crafted with ♥ in Hyderabad
          </span>
        </div>
      </div>
    </footer>
  )
}
