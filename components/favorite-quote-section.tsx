"use client"

import dynamic from 'next/dynamic'

// Dynamically import ScrambledText to avoid SSR issues with GSAP
const ScrambledText = dynamic(() => import('./scrambled-text'), { 
  ssr: false,
  loading: () => (
    <div className="max-w-4xl font-mono text-film-cream/60 text-sm md:text-lg leading-relaxed">
      Loading...
    </div>
  )
})

const quoteContent = `"amaze amaze amaze!" grace: "thumbs up." rocky: "no." when stratt sings "remember everything will be alright" and she points to grace carl: "you know who you are. you're going to do great." rocky can't find the word for "to risk self, to help others", grace calls himself dumb and types in "brave". everytime i've seen this film, people always laugh at rocky's ship following grace's movements (when they first meet) the music when grace sees outside the hail mary rocky asking "are you feeling it now?" when grace hugs him grace testing montage - "you're not going to believe this... nothing happened!" + "it's a cell!" the match cut editing in the first act - specifically when grace on the hail mary tosses the earth ball into the air and as it drops, we see the flashback of grace on earth "rocky happy not alone" + "only us" the cut away to the project hail mary briefing when grace asks "what's project hail mary?" the sound design!!! grace writing notes in the project hail mary brief - "space." rocky intiating the hug when he wakes up. when rocky and grace say goodbye to eachother`

export default function FavoriteQuoteSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle sunflower pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="sunflower-pattern-quote" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="12.5" cy="12.5" r="7" fill="none" stroke="#3d2914" strokeWidth="0.3" />
              <circle cx="12.5" cy="12.5" r="3.5" fill="#3d2914" />
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="12.5"
                  cy="3"
                  rx="1.8"
                  ry="3.5"
                  fill="#eab308"
                  transform={`rotate(${i * 30} 12.5 12.5)`}
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sunflower-pattern-quote)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-yellow-600 text-xs md:text-sm tracking-[0.3em] uppercase font-mono">
            Project Hail Mary
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-serif text-film-dark tracking-tight">
            My Favorite Quote
          </h2>
          <div className="mt-4 w-16 h-px bg-yellow-500" />
        </div>

        {/* Scrambled Text Quote */}
        <div className="relative">
          {/* Decorative quote mark */}
          <div className="absolute -top-8 -left-4 md:-top-12 md:-left-8 text-6xl md:text-8xl text-yellow-500/20 font-serif select-none pointer-events-none">
            &ldquo;
          </div>
          
          <ScrambledText
            radius={120}
            duration={1.0}
            speed={0.6}
            scrambleChars=".:-*"
            className="relative z-10 text-film-dark"
          >
            {quoteContent}
          </ScrambledText>
          
          {/* Decorative quote mark */}
          <div className="absolute -bottom-16 -right-4 md:-bottom-20 md:-right-8 text-6xl md:text-8xl text-yellow-500/20 font-serif select-none pointer-events-none">
            &rdquo;
          </div>
        </div>

        {/* Interaction hint */}
        <p className="mt-16 text-film-dark/40 text-xs md:text-sm font-mono tracking-wide">
          [ hover over the text to interact ]
        </p>
      </div>
    </section>
  )
}
