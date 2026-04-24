"use client"

import DomeGallery from "./dome-gallery"

/* 
  ===== EDIT GALLERY IMAGES HERE =====
  Add your own film stills, behind-the-scenes photos, or portfolio images.
  Each image can be a string (URL) or an object with src and alt properties.
*/
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=600&fit=crop",
    alt: "Film production scene"
  },
  {
    src: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&h=600&fit=crop",
    alt: "Cinematic landscape"
  },
  {
    src: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=600&fit=crop",
    alt: "Documentary moment"
  },
  {
    src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&h=600&fit=crop",
    alt: "Behind the scenes"
  },
  {
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=600&fit=crop",
    alt: "Dramatic lighting"
  },
  {
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=600&fit=crop",
    alt: "Golden hour shot"
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=600&fit=crop",
    alt: "Portrait study"
  },
  {
    src: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=600&h=600&fit=crop",
    alt: "Visual composition"
  }
]

export default function DomeGallerySection() {
  return (
    <section className="relative">
      {/* Section Header */}
      <div className="py-24 px-6 bg-film-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-film-cream mb-4">
            Visual Gallery
          </h2>
          <p className="text-film-cream/60 max-w-xl mx-auto mb-6">
            Explore a curated collection of stills, behind-the-scenes moments, and visual studies. 
            Drag to rotate, click to expand.
          </p>
          <div className="w-24 h-px bg-film-gold/50 mx-auto" />
        </div>
      </div>

      {/* 
        ===== DOME GALLERY COMPONENT =====
        Customize these props to adjust the gallery behavior:
        - fit: how much the dome fills the viewport (0-1)
        - minRadius: minimum dome radius in pixels
        - segments: number of tile columns (more = smaller tiles)
        - grayscale: whether images are grayscale until hovered
        - dragDampening: how quickly rotation slows (0-1, higher = more inertia)
        - overlayBlurColor: the color that fades at edges
      */}
      <div className="w-full h-[80vh] bg-film-deep">
        <DomeGallery
          images={galleryImages}
          fit={0.8}
          minRadius={500}
          maxVerticalRotationDeg={5}
          segments={28}
          dragDampening={1.5}
          grayscale={true}
          overlayBlurColor="#0a0a0f"
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="500px"
          openedImageHeight="500px"
        />
      </div>
    </section>
  )
}
