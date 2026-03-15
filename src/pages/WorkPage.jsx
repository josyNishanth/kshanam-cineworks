import { motion } from 'framer-motion'
import { ImageGallery } from '@/components/ui/image-gallery'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn'

export default function WorkPage() {
  return (
    <div style={{ background: '#F4EFE7', minHeight: '100vh' }}>
      <Nav />

      {/* Page header */}
      <div className="flex flex-col items-center text-center px-6 pt-32 pb-6">
        <motion.span
          className="inline-block text-xs font-sans font-medium tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
          style={{ color: '#888880', background: 'rgba(0,0,0,0.06)', letterSpacing: '2px' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Portfolio
        </motion.span>

        <motion.h1
          className="font-sans font-bold leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)', color: '#1A1A18' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-serif font-normal italic"
            style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
          >
            Our Work,{' '}
          </span>
          Unfiltered.
        </motion.h1>

        <motion.p
          className="font-sans font-light"
          style={{ fontSize: 15.5, color: '#888880', maxWidth: 480, lineHeight: 1.85 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          Every image is a moment frozen in intention — weddings, portraits,
          architecture, and stories told one frame at a time.
        </motion.p>
      </div>

      {/* Masonry image gallery */}
      <ImageGallery />

      <Footer />
      <WhatsAppBtn />
    </div>
  )
}
