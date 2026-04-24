"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, FileText, ExternalLink, ChevronDown, Headphones, Download } from "lucide-react"

const universityWork = {
  films: [
    {
      id: "odyssey",
      title: "Odyssey",
      type: "Documentary",
      description: "A short documentary, produced in my first year at Northumbria University, about the life of Kendra Gladstone.",
      youtubeUrl: "https://youtu.be/NwSmy-mXAoc?si=cRpbYHNx3ohMGNN0",
      crew: [
        { role: "Director", name: "Nerissa Gladstone" },
        { role: "Cinematographer & 1st Camera Op", name: "Erin Williams-Brown" },
        { role: "Producer, Sound & 2nd Camera Op", name: "Ben Reed" },
        { role: "Editor", name: "Annabel Rooks" }
      ],
      participants: ["John Gladstone", "Jo Gladstone", "Nerissa Gladstone"]
    },
    {
      id: "as-it-was-written",
      title: "As It Was Written",
      type: "Short Film",
      description: "A short film directed by Sam Stuart.",
      role: "Script Editor/Runner"
    }
  ],
  academicWork: [
    {
      id: "experimental-film-essay",
      title: "Experimental Film – Music Videos Essay",
      description: "An essay submitted during my first year at Northumbria University, as part of my Experimental Film module, detailing how music videos can be examples of experimental filmmaking.",
      pdfUrl: "https://blobs.vusercontent.net/blob/Experimental%20Film%20Essay-lKKYw5SToGLFMSRiQQWb0WOb7nSddz.pdf",
      pdfName: "Experimental Film Essay.pdf"
    },
    {
      id: "cult-cinema-essay",
      title: "Cult Cinema Essay",
      description: "An essay submitted during my third year at Northumbria University, as part of my Cult Film & Television module, detailing how cult cinema has changed from the 1970s – with examples taken from The Rocky Horror Picture Show (1975), But I'm A Cheerleader (1999) and The Substance (2024).",
      pdfUrl: "https://blobs.vusercontent.net/blob/Cult%20Film%20Essay-qZqh1cPAUXVDmmkQZhUHXVCbWeUjqX.pdf",
      pdfName: "Cult Film Essay.pdf"
    },
    {
      id: "cinema-society-essay",
      title: "Cinema & Society Essay",
      description: "An essay submitted during my third year at Northumbria University, as part of my Cinema & Society module, detailing how films engage with industrial, cultural and societal issues within the period they were produced – with reference to Carol Clover's 'Final Girl' theory in examples taken from Scream (1996) and I Know What You Did Last Summer (1997).",
      pdfUrl: "https://blobs.vusercontent.net/blob/Cinema%20and%20Society%20-%20Essay-VhFFdABT9bPHi9W3jE4TrJpkHItXs3.pdf",
      pdfName: "Cinema and Society Essay.pdf"
    }
  ],
  scriptDevelopment: [
    {
      id: "life-is-strange-adaptation",
      title: "Video Game Adaptation - Life is Strange 2",
      description: "Within my second year at Northumbria University, for my module 'Creative Development' I took on the challenge of adapting the episodic video game - 'Life is Strange 2'. Giving myself a heavy workload was a passion project for me as I hold the game closely to my heart, and in return, I developed ten episodes of the show whilst analysing both the statistical choices of previous players and the structure of the game.",
      additionalInfo: "Examples of the script treatment for Episode 1 is available, as well as the portfolio submitted as part of the module, detailing progress throughout completing the module.",
      downloads: [
        {
          name: "Episode 1 - 1452 Lame Avenue (Script Treatment)",
          url: "https://blobs.vusercontent.net/blob/Episode%201%20-%201452%20Lame%20Avenue-Vs5cHBVoOo6kpTyc3XWCr9CfkhiuzP.pdf"
        },
        {
          name: "Research and Development Portfolio",
          url: "https://blobs.vusercontent.net/blob/Research%20and%20Development%20Portfolio%20-%20Nerissa%20Gladstone-73QmHYj1kHxLrcPrxuoqZaoO1iRrNt.pdf"
        }
      ]
    }
  ]
}

const personalWork = [
  {
    id: "aces-brills",
    title: "Aces & Brills Podcast",
    type: "Podcast",
    description: "A fan-project podcast about the TV show, 'Dead Boys Detectives' (2024), analysing the first episode of the TV show.",
    highlight: "We were even recognised by Jayden Revri, who played one of the main characters, Charles Rowland, in the show.",
    youtubeUrl: "https://www.youtube.com/channel/UCMvAsSd0BRdStBT6AHU_t2w"
  }
]

export default function PreviousWorkSection() {
  const [activeTab, setActiveTab] = useState<"university" | "personal">("university")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <section id="previous-work" className="relative py-24 md:py-32 bg-film-cream overflow-hidden">
      {/* Subtle sunflower pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="sunflower-pattern-work" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="8" fill="none" stroke="#3d2914" strokeWidth="0.3" />
              <circle cx="15" cy="15" r="4" fill="#3d2914" />
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="15"
                  cy="4"
                  rx="2"
                  ry="4"
                  fill="#eab308"
                  transform={`rotate(${i * 30} 15 15)`}
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sunflower-pattern-work)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-film-dark mb-4">
            Previous Work
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            id="university"
            onClick={() => setActiveTab("university")}
            className={`px-6 py-3 text-sm uppercase tracking-wider rounded-lg border-2 transition-all duration-200 ${
              activeTab === "university"
                ? "bg-yellow-500 border-film-dark text-film-dark"
                : "bg-transparent border-film-dark/20 text-film-dark hover:border-film-dark hover:bg-yellow-50"
            }`}
          >
            University
          </button>
          <button
            id="personal"
            onClick={() => setActiveTab("personal")}
            className={`px-6 py-3 text-sm uppercase tracking-wider rounded-lg border-2 transition-all duration-200 ${
              activeTab === "personal"
                ? "bg-yellow-500 border-film-dark text-film-dark"
                : "bg-transparent border-film-dark/20 text-film-dark hover:border-film-dark hover:bg-yellow-50"
            }`}
          >
            Personal
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "university" && (
            <motion.div
              key="university"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Films */}
              <div>
                <h3 className="font-serif text-2xl text-film-dark mb-6 flex items-center gap-3">
                  <Play className="w-6 h-6 text-yellow-500" />
                  Films
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {universityWork.films.map((film) => (
                    <div
                      key={film.id}
                      className="bg-white rounded-xl p-6 border-2 border-transparent hover:border-film-dark transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-serif text-xl text-film-dark">{film.title}</h4>
                        <span className="text-xs uppercase tracking-wider text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                          {film.type}
                        </span>
                      </div>
                      <p className="text-film-dark/70 mb-4">{film.description}</p>
                      
                      {film.role && (
                        <p className="text-sm text-film-dark/60 mb-4">
                          <span className="font-medium">My Role:</span> {film.role}
                        </p>
                      )}

                      {film.crew && (
                        <button
                          onClick={() => toggleExpanded(film.id)}
                          className="flex items-center gap-2 text-sm text-film-dark/60 hover:text-yellow-600 transition-colors mb-3"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedItems.includes(film.id) ? 'rotate-180' : ''}`} />
                          View Credits
                        </button>
                      )}

                      <AnimatePresence>
                        {expandedItems.includes(film.id) && film.crew && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-film-cream rounded-lg p-4 mb-4">
                              <h5 className="text-xs uppercase tracking-wider text-film-dark/50 mb-2">Crew</h5>
                              <ul className="space-y-1 text-sm text-film-dark/70">
                                {film.crew.map((member, i) => (
                                  <li key={i}>
                                    <span className="font-medium">{member.role}:</span> {member.name}
                                  </li>
                                ))}
                              </ul>
                              {film.participants && (
                                <>
                                  <h5 className="text-xs uppercase tracking-wider text-film-dark/50 mt-4 mb-2">Participants</h5>
                                  <p className="text-sm text-film-dark/70">{film.participants.join(", ")}</p>
                                </>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {film.youtubeUrl && (
                        <a
                          href={film.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-film-dark hover:text-yellow-600 transition-colors"
                        >
                          <Play className="w-4 h-4" />
                          Watch on YouTube
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Work */}
              <div>
                <h3 className="font-serif text-2xl text-film-dark mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-yellow-500" />
                  Academic Work
                </h3>
                <div className="space-y-4">
                  {universityWork.academicWork.map((work) => (
                    <div
                      key={work.id}
                      className="bg-white rounded-xl p-6 border-2 border-transparent hover:border-film-dark transition-colors"
                    >
                      <h4 className="font-serif text-lg text-film-dark mb-2">{work.title}</h4>
                      <p className="text-film-dark/70 text-sm mb-4">{work.description}</p>
                      {work.pdfUrl && (
                        <a
                          href={work.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={work.pdfName}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-film-dark text-white text-sm rounded-lg hover:bg-yellow-500 hover:text-film-dark transition-all duration-200"
                        >
                          <Download className="w-4 h-4" />
                          Download Essay
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Script Development */}
              <div>
                <h3 className="font-serif text-2xl text-film-dark mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-yellow-500" />
                  Script Development
                </h3>
                <div className="space-y-4">
                  {universityWork.scriptDevelopment.map((work) => (
                    <div
                      key={work.id}
                      className="bg-white rounded-xl p-6 border-2 border-transparent hover:border-film-dark transition-colors"
                    >
                      <h4 className="font-serif text-lg text-film-dark mb-2">{work.title}</h4>
                      <p className="text-film-dark/70 text-sm mb-3">{work.description}</p>
                      {work.additionalInfo && (
                        <p className="text-film-dark/50 text-xs italic mb-4">{work.additionalInfo}</p>
                      )}
                      {work.downloads && work.downloads.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {work.downloads.map((download, i) => (
                            <a
                              key={i}
                              href={download.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-film-dark text-white text-sm rounded-lg hover:bg-yellow-500 hover:text-film-dark transition-all duration-200"
                            >
                              <Download className="w-4 h-4" />
                              {download.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "personal" && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {personalWork.map((work) => (
                <div
                  key={work.id}
                  className="bg-white rounded-xl p-8 border-2 border-transparent hover:border-film-dark transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-serif text-xl text-film-dark">{work.title}</h4>
                        <span className="text-xs uppercase tracking-wider text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                          {work.type}
                        </span>
                      </div>
                      <p className="text-film-dark/70 mb-3">{work.description}</p>
                      {work.highlight && (
                        <p className="text-film-dark/60 text-sm italic mb-4 bg-yellow-50 p-3 rounded-lg">
                          {work.highlight}
                        </p>
                      )}
                      {work.youtubeUrl && (
                        <a
                          href={work.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-film-dark hover:text-yellow-600 transition-colors"
                        >
                          <Play className="w-4 h-4" />
                          Listen on YouTube
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
