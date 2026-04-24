"use client"

import { X } from "lucide-react"
import Image from "next/image"

/* 
  ===== EDIT PROJECTS HERE =====
  Add, remove, or modify projects in this array.
  Each project needs: id, title, description, thumbnail, category, year, and fullDescription
*/
const projects = [
  {
    id: "echoes",
    title: "Echoes of Tomorrow",
    description: "A contemplative short film exploring memory and loss through fragmented narratives.",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop",
    category: "Short Film",
    year: "2024",
    fullDescription: "Echoes of Tomorrow is a meditative exploration of how we reconstruct our past through the lens of present emotions. Shot over three weeks in coastal locations, the film weaves together non-linear storylines that mirror the way memory fragments and reforms. The cinematography emphasizes natural light and long takes, creating an immersive, dreamlike atmosphere that invites viewers to reflect on their own relationship with time and remembrance."
  },
  {
    id: "silent-frames",
    title: "Silent Frames",
    description: "Documentary following three generations of photographers in a small Italian town.",
    thumbnail: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&h=500&fit=crop",
    category: "Documentary",
    year: "2024",
    fullDescription: "Silent Frames documents the dying art of traditional photography in the digital age, told through the intimate stories of three photographers spanning three generations in Matera, Italy. The film captures not just their technical craft but the philosophical shifts in how we perceive and preserve visual memories. Through carefully composed interviews and observational footage, the documentary reveals how each generation adapts to changing times while holding onto the essence of their artistic vision."
  },
  {
    id: "between-lines",
    title: "Between the Lines",
    description: "Experimental narrative about a poet finding voice in a world of silence.",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=500&fit=crop",
    category: "Experimental",
    year: "2023",
    fullDescription: "Between the Lines pushes the boundaries of traditional storytelling through its unique visual language. Following a mute poet who communicates through written verse, the film employs innovative typography integration, where words literally become part of the visual landscape. The experimental approach includes manipulated frame rates, superimposition techniques, and a haunting score that bridges the gap between sound and silence."
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    description: "A visual poem capturing the magic of twilight in urban landscapes.",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop",
    category: "Visual Essay",
    year: "2023",
    fullDescription: "Golden Hour is a purely visual meditation on the transformation of urban spaces during the magical hour before sunset. Shot across twelve cities over the course of a year, the film presents a rhythmic montage of light, shadow, and human activity. Without narration or dialogue, the piece relies entirely on its carefully choreographed imagery and an original ambient score to evoke the universal human experience of pausing to witness natural beauty amidst urban chaos."
  }
]

interface ProjectsSectionProps {
  selectedProject: string | null
  setSelectedProject: (id: string | null) => void
}

export default function ProjectsSection({ selectedProject, setSelectedProject }: ProjectsSectionProps) {
  const activeProject = projects.find(p => p.id === selectedProject)

  return (
    <section className="relative py-24 md:py-32 px-6">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-film-cream mb-4">
          Selected Works
        </h2>
        <div className="w-24 h-px bg-film-gold/50" />
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative cursor-pointer"
            onClick={() => setSelectedProject(project.id)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-75"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-film-dark via-film-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Category badge */}
              <span className="absolute top-4 left-4 text-xs tracking-widest uppercase text-film-gold bg-film-dark/60 px-3 py-1 rounded-full">
                {project.category}
              </span>
              
              {/* Year */}
              <span className="absolute top-4 right-4 text-xs text-film-cream/60">
                {project.year}
              </span>
            </div>

            {/* Info */}
            <div className="mt-4">
              <h3 className="font-serif text-2xl text-film-cream group-hover:text-film-gold transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-2 text-film-cream/60 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 w-0 h-px bg-film-gold group-hover:w-full transition-all duration-500" />
          </article>
        ))}
      </div>

      {/* ===== PROJECT MODAL ===== */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-film-dark/95 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div 
            className="relative max-w-4xl w-full bg-film-charcoal rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-film-dark/80 text-film-cream hover:bg-film-gold hover:text-film-dark transition-colors duration-300"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Image */}
            <div className="relative aspect-video">
              <Image
                src={activeProject.thumbnail}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-film-charcoal via-transparent to-transparent" />
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-widest uppercase text-film-gold">
                  {activeProject.category}
                </span>
                <span className="text-xs text-film-cream/40">•</span>
                <span className="text-xs text-film-cream/60">
                  {activeProject.year}
                </span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl text-film-cream mb-6">
                {activeProject.title}
              </h3>
              
              <p className="text-film-cream/70 leading-relaxed">
                {activeProject.fullDescription}
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-film-gold text-film-dark font-medium rounded-lg hover:bg-film-gold/90 transition-colors duration-300">
                  Watch Trailer
                </button>
                <button className="px-6 py-3 border border-film-gold/30 text-film-cream rounded-lg hover:border-film-gold hover:text-film-gold transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
