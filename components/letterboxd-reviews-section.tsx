"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Star, ExternalLink } from "lucide-react"

interface Review {
  id: number
  movieTitle: string
  year: string
  posterUrl: string
  rating: number
  reviewDate: string
  reviewText: string
  letterboxdUrl: string
}

const reviews: Review[] = [
  {
    id: 1,
    movieTitle: "Project Hail Mary",
    year: "2026",
    posterUrl: "https://image.tmdb.org/t/p/w500/xvGCCK8s11wxJHEJkBtvJcBy5Sz.jpg",
    rating: 5,
    reviewDate: "April 2026",
    letterboxdUrl: "https://letterboxd.com/nerissa_eryn/",
    reviewText: `GRACE ROCKY SAVE STARS

when i was taught film at a-level, we learnt that a film is comprised of mise-en-scene, cinematography, sound and editing.
this film somehow surpasses what i could believe could be done in terms of every single one of these components.

this film also comes at a history making moment, with me typing this on the 6th of april, days after watching this film for the second time - four astronauts aboard artemis ii have broken the record that was set by the apollo mission and are currently the furthest humans have ever ventured from earth. dr. genni gibbons replied to commander reid wiseman saying he could see both the moon and earth with his own eyes, saying "amaze amaze amaze". i couldn't help but cry.

this film's cinematography is breathtaking, with this being only my second time watching this film, i thought about how i knew this wouldn't be the last time i see it. i will watch this film for years to come and share it with every single person i know. the atmospheric sampling sequence is one that makes me cry every time i see it and the fishing scene is simply one of the best sequences of cinema this century.

this leads me into the editing - i knew i was in good hands when the first act flicked between grace waking up and remembering his own memories through the flashbacks. my favourite editing sequence is when grace is testing the astrophage with all of the officials watching him - it puts a smile on my face remembering it.

the mise en scene of this film is alluring, i could not think of anything greater that what i experienced. maybe if they released the six hour cut, i could be persuaded, but every single person who worked tirelessly on this film, i applaud you with everything i can. i'm struggling to put into words what i truly feel, maybe i could bring a notebook the next time i see this film to just try and understand what i loved so much.

and finally the sound. this soundtrack is one that i could listen to forever. just as i listen to the challengers soundtrack and it puts me right back in that cinema screen watching for the first time, and it has happened again with this soundtrack. i can almost hear the characters' thoughts through the non-diegetic sound, and it is incredible. if this film does not win best sound at the oscars, i will in fact riot because i haven't even seen anyone talk about how they literally created a language. one that had to be translated and understood, and i am still in shock from that.

and ryan gosling. he steals the fucking spotlight every single time he is on screen and he was born to play ryland grace.

when watching this film, i cannot wait to show it to everyone i know because the message of this film is one that everyone needs to hear. i could give my interpretation of the message that this film gives to me, but there are countless others who explain it better than i ever could - with their own experiences helping them to understand the films in ways i never will be able to. and that's what i love about cinema as a whole.

i would hope that people do not compare this film to what they know, but seeing as that is human nature, i can't fault them. but take the time to picture something more than you could ever know and maybe just maybe it will amaze amaze amaze you.`,
  },
  {
    id: 2,
    movieTitle: "Challengers",
    year: "2024",
    posterUrl: "https://image.tmdb.org/t/p/w500/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
    rating: 5,
    reviewDate: "April 2024",
    letterboxdUrl: "https://letterboxd.com/nerissa_eryn/",
    reviewText: `"you have a better shot with a handgun in your mouth"

zendaya, mike faist and josh o'connor collaboratively steal the show with a collective performance of betrayal and loyalty.
loyalty to the beautiful sport of tennis portrayed through strained and yet overwhelming camera work and movement through the match between art and patrick.
and betrayal, the true essence of human nature, between those who love you most consequently leading to a familial union.

the structure of the carefully crafted storytelling of balancing different periods in life without managing to confuse the audience is in of it self a marker of true talent for justin kuritzkes.
assisted by the constant referral back to the make-or-break match centres the audience within the main conflict: love.

and what would be a "challengers" review without talking about the amazing soundtrack by trent reznor and atticus ross? 
layers upon layers of heart-pounding tension attentively articulated through the music. although the mixing of the non-diegetic soundtrack ruins the importance of the diegetic dialogue, i can interpret it to a certain extent of through the lens of manipulation. 
in my opinion, it manipulates the audience towards focusing on the physicality of the words rather than the true meaning.

all in all, yet another triumph created by luca guadagnino and by watching this film in a cinema, it created this sense of authenticity and comprehensiveness that you cannot get anywhere else.`,
  },
  {
    id: 3,
    movieTitle: "Dune: Part Two",
    year: "2024",
    posterUrl: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    rating: 5,
    reviewDate: "March 2024",
    letterboxdUrl: "https://letterboxd.com/nerissa_eryn/",
    reviewText: `"there is no one in this room who can stand against me" - paul maud'dib usul atreides

dune: part two is a film that has a runtime of 167 minutes, and yet on my second rewatch of this film it felt like no time has passed at all - the storytelling is simply that good. 

normally in mainstream film, the structure is carefully orchestrated to appease the audience, to allow them to enjoy the thrill and the action. however, dune: part two does not follow this ideology as this film is not made to be enjoyed but to be admired.

one of the most notable moments of the film is the "lisan al gaib" speech - executed perfectly by timothée chalamet, the main protagonist who follows a journey from "forced messiah" to the "lisan al gaib".
his performance is only reinforced by both the ensemble cast and his fellow co-stars, such as zendaya and austin butler.

the editing works symbiotically with the structure creating a well-rehearsed play with events unfolding in front of our eyes.

and what would be a denis villeneuve "dune" film without spectacular cinematography from greig fraser - with one of the opening shots being of the harkonnen soliders floating seamlessly up a mountain obtaining a collective gasp from across the audience.

in conclusion, dune: part two is a film that cannot and will not be missed by all cinema-goers.`,
  },
]

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-500 text-yellow-500" : "text-film-dark/20"
        }`}
      />
    )
  }
  return <div className="flex gap-0.5">{stars}</div>
}

export default function LetterboxdReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Subtle sunflower pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="sunflower-pattern-reviews" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="12.5" cy="12.5" r="6" fill="none" stroke="#3d2914" strokeWidth="0.3" />
              <circle cx="12.5" cy="12.5" r="3" fill="#3d2914" />
              {[...Array(10)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="12.5"
                  cy="4"
                  rx="1.5"
                  ry="3"
                  fill="#eab308"
                  transform={`rotate(${i * 36} 12.5 12.5)`}
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sunflower-pattern-reviews)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex items-center gap-4 mb-4">
            {/* Letterboxd-style icon */}
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#00e054]" />
              <div className="w-3 h-3 rounded-full bg-[#40bcf4]" />
              <div className="w-3 h-3 rounded-full bg-[#ff8000]" />
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-yellow-600">
              Film Reviews
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-film-dark mb-4">
                Letterboxd Reviews
              </h2>
              <p className="text-film-dark/60 max-w-xl">
                My thoughts on films that have moved, inspired, and stayed with me.
              </p>
            </div>
            <a
              href="https://letterboxd.com/nerissa_eryn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-film-dark hover:text-yellow-600 transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider">View Profile</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="w-24 h-1 bg-yellow-500 mt-6" />
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-film-dark/20 flex items-center justify-center text-film-dark hover:bg-yellow-500 hover:border-film-dark transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-film-dark/20 flex items-center justify-center text-film-dark hover:bg-yellow-500 hover:border-film-dark transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable reviews */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto px-6 md:px-16 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <button
                key={review.id}
                onClick={() => setSelectedReview(review)}
                className="group flex-shrink-0 snap-center focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-lg"
              >
                <div className="relative w-48 md:w-56 overflow-hidden rounded-lg">
                  {/* Poster */}
                  <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-xl border-2 border-transparent group-hover:border-film-dark transition-colors">
                    <Image
                      src={review.posterUrl}
                      alt={review.movieTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-film-dark via-film-dark/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* "Read Review" hint on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium text-white bg-film-dark/60 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-500/50">
                        Read Review
                      </span>
                    </div>
                  </div>

                  {/* Info below poster */}
                  <div className="mt-4 text-left">
                    <h3 className="font-serif text-lg text-film-dark group-hover:text-yellow-600 transition-colors truncate">
                      {review.movieTitle}
                    </h3>
                    <p className="text-sm text-film-dark/50 mb-2">{review.year}</p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-film-dark/80 backdrop-blur-sm"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl border-2 border-film-dark/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-film-dark/10 hover:bg-yellow-500 flex items-center justify-center text-film-dark transition-colors"
              aria-label="Close review"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content */}
            <div className="flex flex-col md:flex-row">
              {/* Poster */}
              <div className="relative w-full md:w-48 aspect-[2/3] md:aspect-auto md:min-h-[400px] flex-shrink-0">
                <Image
                  src={selectedReview.posterUrl}
                  alt={selectedReview.movieTitle}
                  fill
                  className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                />
              </div>

              {/* Review content */}
              <div className="flex-1 p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-film-dark mb-1">
                    {selectedReview.movieTitle}
                  </h3>
                  <p className="text-film-dark/50 mb-3">
                    {selectedReview.year} &middot; Reviewed {selectedReview.reviewDate}
                  </p>
                  <StarRating rating={selectedReview.rating} />
                </div>

                <div className="prose prose-sm max-w-none">
                  <p className="text-film-dark/80 leading-relaxed whitespace-pre-line">
                    {selectedReview.reviewText}
                  </p>
                </div>

                {/* Letterboxd link */}
                <div className="mt-8 pt-6 border-t border-film-dark/10">
                  <a
                    href={selectedReview.letterboxdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-film-dark/60 hover:text-yellow-600 transition-colors group"
                  >
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#00e054]" />
                      <div className="w-2 h-2 rounded-full bg-[#40bcf4]" />
                      <div className="w-2 h-2 rounded-full bg-[#ff8000]" />
                    </div>
                    <span>View on Letterboxd</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
