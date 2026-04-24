"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-film-cream overflow-hidden">
      {/* Subtle sunflower pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="sunflower-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="12.5" cy="12.5" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-film-dark" />
              <circle cx="12.5" cy="12.5" r="4" fill="currentColor" className="text-film-dark" />
              {/* Petals */}
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="12.5"
                  cy="3"
                  rx="2"
                  ry="4"
                  fill="currentColor"
                  className="text-yellow-500"
                  transform={`rotate(${i * 30} 12.5 12.5)`}
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sunflower-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-film-dark mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-film-dark/80 leading-relaxed text-lg"
        >
          <p>
            Originally from Bradford, I am a student based in Newcastle upon Tyne, studying BA (Hons) Film & Television Production at Northumbria University.
          </p>
          
          <p>
            When I was eighteen months old, my parents describe me dancing in front of a TV screen filled with ballet dancers, so they decided to send me to a ballet class. From this, at the age of sixteen, I was teaching dance classes as a student dance teacher. Growing up in a media influenced generation, media has shaped who I am. For me, film has always been integral to who I am in this world, as you can change people&apos;s awareness of the world around them by picking up a pen or a camera and seeing humanity either through the lens of fiction or through real-life stories.
          </p>
          
          <p>
            I first studied film, as part of my A-Levels, where I got to analyse films from <em className="text-film-dark font-medium">Sunrise</em> (1927, Dir. F.W Murnau) to <em className="text-film-dark font-medium">La La Land</em> (2016, Dir. Damien Chazelle) and broaden my knowledge of film techniques and theories. During this period, I also wrote my first screenplay – a short detailing a confession between two friends through the song &apos;Dover Beach Pt.2&apos; by Baby Queen.
          </p>
          
          <p>
            This led to me to move to Newcastle to study Film and Television Production at Northumbria University to follow my passions. Over these past three years, I have worked on several student productions and wrote many screenplays – honing my skills and preparing to work in the industry. I have had roles as Sound, Producer, Director, Screenwriter and Script Editor in these productions, and it has led me to find that I find myself most comfortable sharing my ideas amongst like-minded people, whether in pre-production and production itself.
          </p>
        </motion.div>

        {/* Decorative sunflower accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-yellow-500">
            <circle cx="30" cy="30" r="8" fill="#3d2914" />
            {[...Array(16)].map((_, i) => (
              <ellipse
                key={i}
                cx="30"
                cy="8"
                rx="5"
                ry="10"
                fill="currentColor"
                transform={`rotate(${i * 22.5} 30 30)`}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
