"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play the Rocky animation
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's ok
      })
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home.JPG-rbZsPF1GVSJpcZ67sVID1dQFdBvFJQ.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-film-dark/60" />
      </div>

      {/* ===== BACKGROUND GRAIN TEXTURE ===== */}
      <div className="absolute inset-0 bg-film-grain opacity-30 pointer-events-none z-10" />
      
      {/* ===== CINEMATIC VIGNETTE ===== */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-film-dark/80 pointer-events-none z-10" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* ===== PROFILE PHOTO WITH ROCKY CHARACTER ===== */}
        <div className="relative inline-block mb-8">
          {/* Profile Photo Container */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
            <Image
              src="/nerissa-headshot.png"
              alt="Nerissa Gladstone - Screenwriter"
              fill
              className="object-cover rounded-full border-4 border-film-gold/30 shadow-2xl shadow-film-gold/20"
              priority
            />
            
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-film-gold/20 scale-110" />
            <div className="absolute inset-0 rounded-full border border-film-gold/10 scale-125" />
          </div>

          {/* 
            ===== ROCKY CHARACTER (Animated WebM) =====
            Positioned on top of the profile image, doubled in size
            Adjust positioning with: -top-X -right-X classes
          */}
          <div className="absolute -top-12 -right-8 md:-top-16 md:-right-12 w-40 h-40 md:w-48 md:h-48 z-10">
            <video
              ref={videoRef}
              src="/rocky.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain drop-shadow-lg"
              style={{ 
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                mixBlendMode: "normal"
              }}
            />
          </div>
        </div>

        {/* ===== NAME / HANDLE ===== */}
        {/* 
          ===== EDIT NAME HERE =====
          Change the text below to the student's name
        */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4 text-film-cream">
          Nerissa Gladstone
        </h1>

        {/* ===== TAGLINE ===== */}
        <p className="text-film-gold text-lg md:text-xl tracking-[0.3em] uppercase font-light mb-8">
          Screenwriter
        </p>

        {/* ===== SUBTITLE / BIO ===== */}
        <p className="text-film-cream/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Crafting cinematic narratives that explore the depths of human emotion 
          and the poetry of visual storytelling.
        </p>

        {/* ===== SCROLL INDICATOR ===== */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-film-gold/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-film-gold/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
