'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ThreeDMarqueeProps {
  images?: string[]
  className?: string
}

const ThreeDMarquee = ({ images = [], className }: ThreeDMarqueeProps) => {
  const chunkSize = Math.ceil(images.length / 3)
  const chunks = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * chunkSize
    return images.slice(start, start + chunkSize)
  })

  return (
    <div
      className={cn('mx-auto block w-full overflow-hidden rounded-md', className)}
      style={{ height: 'clamp(400px, 55vh, 560px)' }}
    >
      <div className="flex size-full items-center justify-center">
        <div
          style={{
            width: 'min(720px, 100%)',
            height: 'min(720px, 100%)',
            flexShrink: 0,
            transform: 'scale(1.35)',
          }}
        >
          <div
            className="relative grid size-full origin-top-left grid-cols-3 gap-5"
            style={{
              transform: 'rotateX(45deg) rotateY(0deg) rotateZ(45deg)',
              transformStyle: 'preserve-3d',
              top: 0,
              right: '-55%',
            }}
          >
            {chunks.map((subarray, colIndex) => (
              <motion.figure
                animate={{ y: colIndex % 2 === 0 ? 60 : -60 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                key={colIndex + 'marquee'}
                className="flex flex-col items-start gap-5"
                style={{ margin: 0, padding: 0 }}
              >
                {subarray.map((src, imageIndex) => (
                  <div className="relative w-full" key={imageIndex + src}>
                    <img
                      className="w-full rounded-xl bg-neutral-100 object-cover select-none"
                      style={{ aspectRatio: '4/3' }}
                      src={src}
                      draggable={false}
                      alt={`Gallery image ${imageIndex + 1}`}
                    />
                  </div>
                ))}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeDMarquee
