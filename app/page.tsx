"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import PreviousWorkSection from "@/components/previous-work-section"
import FavoriteQuoteSection from "@/components/favorite-quote-section"
import LetterboxdReviewsSection from "@/components/letterboxd-reviews-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-film-cream text-film-dark">
      {/* ===== NAVIGATION ===== */}
      <Navigation />

      {/* ===== HERO SECTION ===== */}
      <HeroSection />

      {/* ===== ABOUT SECTION ===== */}
      <AboutSection />

      {/* ===== PORTFOLIO SECTION ===== */}
      <PortfolioSection />

      {/* ===== PREVIOUS WORK SECTION ===== */}
      <PreviousWorkSection />

      {/* ===== FAVORITE QUOTE SECTION ===== */}
      <FavoriteQuoteSection />

      {/* ===== LETTERBOXD REVIEWS SECTION ===== */}
      <LetterboxdReviewsSection />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  )
}
