"use client"

import ScrollStack, { ScrollStackItem } from "./scroll-stack"
import Image from "next/image"

/* 
  ===== EDIT SCROLL STACK CARDS HERE =====
  Each card represents a "chapter" or highlight from the filmmaker's journey.
  Customize images, titles, and descriptions below.
*/
const stackCards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?w=1200&h=600&fit=crop",
    title: "The Journey Begins",
    subtitle: "Chapter One",
    description: "Every filmmaker's story starts with a single frame. For me, it was the moment I realized that light could paint emotions."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=600&fit=crop",
    title: "Finding My Voice",
    subtitle: "Chapter Two",
    description: "Through countless hours behind the lens, I discovered that true storytelling comes from listening—to the world, to subjects, to silence."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=1200&h=600&fit=crop",
    title: "The Art of Seeing",
    subtitle: "Chapter Three",
    description: "Composition isn't just about what's in the frame—it's about the conversations between elements, the dance of shadow and light."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&h=600&fit=crop",
    title: "Stories Untold",
    subtitle: "Chapter Four",
    description: "The most powerful narratives are often the ones waiting to be discovered in ordinary moments transformed by an extraordinary perspective."
  }
]

export default function ScrollStackSection() {
  return (
    <section className="relative bg-film-charcoal">
      {/* Section Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-film-cream mb-4">
            The Creative Process
          </h2>
          <p className="text-film-cream/60 max-w-xl">
            Scroll through the chapters of my filmmaking journey—each frame a lesson, each story a step forward.
          </p>
          <div className="w-24 h-px bg-film-gold/50 mt-6" />
        </div>
      </div>

      {/* 
        ===== SCROLL STACK COMPONENT =====
        Adjust these props to customize the stacking behavior:
        - itemDistance: space between cards (default: 100)
        - itemScale: how much cards scale when stacked (default: 0.03)
        - itemStackDistance: vertical offset when stacked (default: 30)
        - blurAmount: blur intensity for stacked cards (default: 0)
      */}
      <div className="max-w-6xl mx-auto px-6">
        <ScrollStack
          itemDistance={80}
          itemScale={0.04}
          itemStackDistance={20}
          blurAmount={1}
        >
        {stackCards.map((card) => (
          <ScrollStackItem 
            key={card.id}
            itemClassName="bg-film-dark border border-film-gold/10"
          >
            <div className="relative h-full w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-8">
              {/* 
                ===== CARD IMAGE =====
                Replace the src with your own image paths
              */}
              <div className="relative w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-film-dark/40 to-transparent" />
              </div>

              {/* 
                ===== CARD CONTENT =====
                Edit title, subtitle, and description for each card
              */}
              <div className="w-full md:w-1/2 text-left">
                <span className="text-film-gold text-sm tracking-[0.2em] uppercase">
                  {card.subtitle}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-film-cream mt-2 mb-4">
                  {card.title}
                </h3>
                <p className="text-film-cream/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </ScrollStackItem>
        ))}
        </ScrollStack>
      </div>
    </section>
  )
}
