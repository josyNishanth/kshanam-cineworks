import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const path      = location.pathname   // '/' | '/work' | '/about'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // For links that should scroll the home page
  function handleScrollLink(href) {
    if (path !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(href), 120)
    } else {
      scrollTo(href)
    }
    setMenuOpen(false)
  }

  function handleLogoClick() {
    if (path !== '/') navigate('/')
    else scrollTo('#home')
  }

  const activeColor = (p) => path === p ? '#1A1A18' : '#777770'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(244,239,231,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.07)' : 'none',
        }}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">

          {/* left — Work + Services */}
          <ul className="hidden md:flex items-center gap-7">
            <li>
              <button
                onClick={() => { navigate('/work'); setMenuOpen(false) }}
                className="text-sm font-sans transition-colors duration-200"
                style={{ color: activeColor('/work') }}
                onMouseEnter={e => (e.target.style.color = '#1A1A18')}
                onMouseLeave={e => (e.target.style.color = activeColor('/work'))}
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollLink('#services')}
                className="text-sm font-sans transition-colors duration-200"
                style={{ color: '#777770' }}
                onMouseEnter={e => (e.target.style.color = '#1A1A18')}
                onMouseLeave={e => (e.target.style.color = '#777770')}
              >
                Services
              </button>
            </li>
          </ul>

          {/* logo */}
          <button
            onClick={handleLogoClick}
            className="font-serif font-bold tracking-tight select-none"
            style={{ fontSize: 18, color: '#1A1A18', letterSpacing: '-0.2px' }}
          >
            Kshanam Cineworks
          </button>

          {/* right — About + Contact + Book Now */}
          <div className="hidden md:flex items-center gap-7">
            <button
              onClick={() => { navigate('/about'); setMenuOpen(false) }}
              className="text-sm font-sans transition-colors duration-200"
              style={{ color: activeColor('/about') }}
              onMouseEnter={e => (e.target.style.color = '#1A1A18')}
              onMouseLeave={e => (e.target.style.color = activeColor('/about'))}
            >
              About
            </button>
            <button
              onClick={() => handleScrollLink('#contact')}
              className="text-sm font-sans transition-colors duration-200"
              style={{ color: '#777770' }}
              onMouseEnter={e => (e.target.style.color = '#1A1A18')}
              onMouseLeave={e => (e.target.style.color = '#777770')}
            >
              Contact
            </button>
            <motion.button
              onClick={() => handleScrollLink('#contact')}
              whileHover={{ opacity: 0.85, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm font-medium font-sans text-white rounded-full px-5 py-2"
              style={{ background: '#1A1A18' }}
            >
              Book Now
            </motion.button>
          </div>

          {/* hamburger — mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="block h-0.5 rounded-full"
                style={{ background: '#1A1A18', width: i === 1 ? 20 : 26 }}
                animate={{ width: menuOpen ? 26 : (i === 1 ? 20 : 26) }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: '#F4EFE7' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { label: 'Work',     action: () => { navigate('/work');  setMenuOpen(false) } },
              { label: 'Services', action: () => handleScrollLink('#services') },
              { label: 'About',    action: () => { navigate('/about'); setMenuOpen(false) } },
              { label: 'Contact',  action: () => handleScrollLink('#contact') },
            ].map(({ label, action }, i) => (
              <motion.button
                key={label}
                onClick={action}
                className="font-serif italic text-3xl"
                style={{ color: '#1A1A18' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {label}
              </motion.button>
            ))}

            <motion.button
              onClick={() => handleScrollLink('#contact')}
              className="mt-4 text-white font-sans font-medium px-8 py-3 rounded-full"
              style={{ background: '#1A1A18' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
