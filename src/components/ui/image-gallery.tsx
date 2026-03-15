'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryImage {
  src: string;
  alt: string;
  ratio: number; // width / height  e.g. 9/16 = portrait, 16/9 = landscape
}

// 3 columns × 10 rows = 30 cineworks-themed images
// ratio < 1  → portrait  |  ratio > 1 → landscape
const GALLERY_IMAGES: GalleryImage[][] = [
  // ── Column 1 ──────────────────────────────────────────────────────────────
  [
    { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Wedding ceremony — bride & groom', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Golden hour outdoor portrait', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Bridal fine-art editorial', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Behind the lens — cinematographer at work', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Couple lifestyle session at sunset', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Architectural real-estate cinematography', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Fine art conceptual portrait', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Corporate brand storytelling shoot', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Ocean seascape cinematography', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Dramatic mountain landscape', ratio: 16 / 9 },
  ],
  // ── Column 2 ──────────────────────────────────────────────────────────────
  [
    { src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Wedding reception first dance', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Groom portrait — cinematic style', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1574801678419-3d3d51f8c4db?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Couple in field — lifestyle portrait', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Tech corporate campaign photography', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Environmental nature storytelling', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Cinematic portrait — directional light', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Creative workspace brand shoot', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Floral wedding detail photography', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Men portrait editorial shoot', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Paris landmark travel cinematography', ratio: 9 / 16 },
  ],
  // ── Column 3 ──────────────────────────────────────────────────────────────
  [
    { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Fitness lifestyle photography', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Landscape — mountain vista', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Women portrait — natural light', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Modern architecture exterior', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Bride walking — cinematic documentary', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Forest canopy — nature storytelling', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Editorial fashion portrait', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Travel landscape cinematography', ratio: 16 / 9 },
    { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=1200&fit=crop&crop=center&auto=format&q=80', alt: 'Wedding couple — romantic portrait', ratio: 9 / 16 },
    { src: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=800&fit=crop&crop=center&auto=format&q=80', alt: 'Sunset seascape — coastal cinematography', ratio: 16 / 9 },
  ],
]

export function ImageGallery() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-10 px-4">
      <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_IMAGES.map((column, col) => (
          <div key={col} className="grid gap-6">
            {column.map((image, index) => (
              <AnimatedImage
                key={`${col}-${index}`}
                src={image.src}
                alt={image.alt}
                ratio={image.ratio}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  ratio: number;
}

function AnimatedImage({ alt, src, ratio, className }: AnimatedImageProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isLoading, setIsLoading] = React.useState(true)
  const [imgSrc, setImgSrc] = React.useState(src)

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className={cn('relative size-full overflow-hidden rounded-2xl border border-black/5', className)}
    >
      <img
        alt={alt}
        src={imgSrc}
        className={cn(
          'size-full object-cover opacity-0 transition-all duration-1000 ease-in-out',
          { 'opacity-100': isInView && !isLoading },
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => setImgSrc(`https://placehold.co/800x1200/F4EFE7/888880?text=Kshanam`)}
        loading="lazy"
      />
    </AspectRatio>
  )
}
