import { ConcaveGallery } from "@/components/ui/concave-gallery"

const people = [
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=440&h=640&fit=crop&crop=center",
    name: "Alex",
    role: "Director",
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=440&h=640&fit=crop&crop=center",
    name: "Sarah",
    role: "Cinematographer",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=440&h=640&fit=crop&crop=center",
    name: "David",
    role: "Editor",
  },
  {
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=440&h=640&fit=crop&crop=center",
    name: "Emily",
    role: "Producer",
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=440&h=640&fit=crop&crop=center",
    name: "John",
    role: "Sound",
  },
  {
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=440&h=640&fit=crop&crop=center",
    name: "Michael",
    role: "Colorist",
  },
]

export default function ConcaveDemo() {
  return (
    <section className="w-full py-24" style={{ background: "#F4EFE7" }}>
      <div className="text-center mb-16 px-6">
        <h1
          className="font-serif italic font-normal"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#1A1A18" }}
        >
          Meet the Team
        </h1>
        <p className="mt-3 text-sm font-light" style={{ color: "#666660" }}>
          Storytellers, craftspeople, and visual artists.
        </p>
      </div>

      <ConcaveGallery items={people} fadeColor="#F4EFE7" />
    </section>
  )
}
