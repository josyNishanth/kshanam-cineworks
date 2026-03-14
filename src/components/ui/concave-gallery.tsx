"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type ClassValue = string | undefined | null | false
const cn = (...classes: ClassValue[]) => classes.filter(Boolean).join(" ")

export interface GalleryItem {
  image: string
  name?: string
  role?: string
}

interface ArcConfig {
  rotateY: number
  x: number
  scale: number
  zIndex: number
}

function buildArc(count: number): ArcConfig[] {
  const maxAngle = 35
  const maxX = 240
  const half = (count - 1) / 2

  return Array.from({ length: count }, (_, i) => {
    const offset = i - half
    const t = count > 1 ? offset / half : 0
    return {
      rotateY: t * maxAngle,          // positive left → angles right (concave inward)
      x: t * maxX,
      scale: 1 - Math.abs(t) * 0.18,
      zIndex: count - Math.round(Math.abs(offset)),
    }
  })
}

interface ArcCardProps {
  item: GalleryItem
  arc: ArcConfig
  index: number
}

function ArcCard({ item, arc, index }: ArcCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="absolute top-0 left-1/2"
      style={{
        width: 210,
        height: 315,
        marginLeft: -105,
        transformStyle: "preserve-3d",
        zIndex: hovered ? 50 : arc.zIndex,
        cursor: "pointer",
      }}
      initial={{ opacity: 0, y: 80, scale: 0.85 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: hovered ? arc.scale * 1.06 : arc.scale,
        x: arc.x,
        rotateY: hovered ? 0 : arc.rotateY,
      }}
      transition={{
        duration: hovered ? 0.25 : 0.8,
        delay: hovered ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -14 }}
    >
      <div
        className="w-full h-full rounded-2xl overflow-hidden"
        style={{
          boxShadow: hovered
            ? "0 32px 64px rgba(0,0,0,0.32), 0 0 0 1px rgba(255,255,255,0.14)"
            : "0 14px 40px rgba(0,0,0,0.20), 0 0 0 1px rgba(255,255,255,0.08)",
          transition: "box-shadow 0.3s",
        }}
      >
        <img
          src={item.image}
          alt={item.name ?? ""}
          className="w-full h-full object-cover object-center select-none"
          draggable={false}
        />

        {(item.name || item.role) && (
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            {item.name && <p className="font-semibold text-sm">{item.name}</p>}
            {item.role && <p className="text-xs opacity-70">{item.role}</p>}
          </div>
        )}
      </div>
    </motion.div>
  )
}

interface ArcCardMobileProps {
  item: GalleryItem
  index: number
}

function ArcCardMobile({ item, index }: ArcCardMobileProps) {
  return (
    <motion.div
      className="flex-shrink-0 rounded-2xl overflow-hidden relative"
      style={{ width: 155, height: 230, boxShadow: "0 8px 28px rgba(0,0,0,0.18)" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, y: -6 }}
    >
      <img
        src={item.image}
        alt={item.name ?? ""}
        className="w-full h-full object-cover object-center select-none"
        draggable={false}
      />
      {(item.name || item.role) && (
        <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
          {item.name && <p className="font-semibold text-xs">{item.name}</p>}
          {item.role && <p className="text-xs opacity-70">{item.role}</p>}
        </div>
      )}
    </motion.div>
  )
}

export interface ConcaveGalleryProps {
  items: GalleryItem[]
  /** Height of the desktop arc stage in px. Default: 370 */
  stageHeight?: number
  /** CSS background color that the edge fade blends into. Default: transparent */
  fadeColor?: string
  className?: string
}

export function ConcaveGallery({
  items,
  stageHeight = 370,
  fadeColor = "transparent",
  className,
}: ConcaveGalleryProps) {
  const arc = buildArc(items.length)

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop — concave 3-D arc */}
      <div
        className="hidden md:block relative mx-auto"
        style={{
          width: "100%",
          height: stageHeight,
          perspective: "1000px",
          perspectiveOrigin: "50% 10%",
        }}
      >
        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 z-20 pointer-events-none"
          style={{ width: "10%", background: `linear-gradient(to right, ${fadeColor}, transparent)` }}
        />
        <div
          className="absolute inset-y-0 right-0 z-20 pointer-events-none"
          style={{ width: "10%", background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
        />

        {items.map((item, i) => (
          <ArcCard key={i} item={item} arc={arc[i]} index={i} />
        ))}
      </div>

      {/* Mobile — horizontal scroll strip */}
      <div
        className="flex md:hidden gap-3 overflow-x-auto px-6 pb-8"
        style={{
          scrollbarWidth: "none",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {items.map((item, i) => (
          <ArcCardMobile key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}
