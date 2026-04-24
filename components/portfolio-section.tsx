"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FileText, ChevronRight, Download } from "lucide-react"

const portfolioItems = [
  {
    id: "remnant",
    title: "Remnant",
    category: "Screenplay",
    synopsis: "In the aftermath of a zombie apocalypse, a group of friends learn to live in the new world whilst discovering that not everyone and everything is as it seems.",
    pdfUrl: "https://blobs.vusercontent.net/blob/Remnant-QXybzm3Vth73x12Bsq5cP3gSnJiZLf.pdf",
    pdfName: "Remnant.pdf",
    scriptExcerpt: {
      title: "Opening Sequence",
      content: `FADE IN:

EXT. ABANDONED CITY STREET - DAY

Sunlight filters through the haze of dust and debris. The street is eerily quiet—cars frozen mid-journey, shop windows shattered, nature beginning to reclaim the concrete.

A FIGURE moves through the shadows.

MAYA (20s), cautious eyes scanning every direction, grips a makeshift weapon. Her clothes are worn, layered for survival rather than style.

MAYA (V.O.)
Day four hundred and seventeen. Or maybe four hundred and eighteen. Hard to keep track when every day feels the same.

She pauses at a corner, listening intently.

MAYA (V.O.) (CONT'D)
The world ended. But we didn't. Not all of us, anyway.

In the distance, a SOUND—something moving. Maya presses herself against a wall, barely breathing.

From around the corner emerges JAKE (20s), equally disheveled, carrying a backpack stuffed with supplies. He spots Maya and freezes.

A tense beat.

Then Maya's face breaks into recognition.

MAYA
(whispering)
Jake?

JAKE
(relieved smile)
Took you long enough to find us.

They embrace quickly, efficiently—this is not a world for long reunions.

JAKE (CONT'D)
The others are at the safe house. We found something. Something big.

Maya pulls back, studying his face.

MAYA
Good something or bad something?

JAKE
(beat)
That's what we need to figure out.

CUT TO:`
    }
  },
  {
    id: "solus-experiments",
    title: "The Solus Experiments",
    category: "Screenplay",
    synopsis: "A scientist is tasked to document the Solus Experiments, unaware that she is the true focus of the experiment.",
    pdfUrl: "https://blobs.vusercontent.net/blob/The%20Solus%20Experiments-RHLLN0jsde9tmu4JTCGipMN0cUxxNc.pdf",
    pdfName: "The Solus Experiments.pdf",
    hasFullScript: true,
    scriptPages: 11,
    scriptContent: `FADE IN:

INT. SOLUS RESEARCH FACILITY - OBSERVATION ROOM - NIGHT

Clinical white walls. Banks of monitors displaying various readouts. The hum of machinery provides a constant backdrop.

DR. ELENA VANCE (30s), meticulous and focused, sits at a workstation. She adjusts her glasses, reviewing footage on her screen.

ELENA (V.O.)
Day one of documentation. Subject appears stable. All vital signs within normal parameters.

ON SCREEN: A figure sits alone in a sparse white room, performing simple tasks—writing, reading, pacing.

Elena makes notes, her pen scratching against paper.

DR. HARRISON (60s, distinguished but cold) enters behind her. She doesn't turn around.

HARRISON
How's our subject progressing?

ELENA
According to protocol, sir. No anomalies to report.

HARRISON
(studying the monitors)
Good. Remember, Dr. Vance, objectivity is paramount. We observe, we document, we do not intervene.

ELENA
Understood.

Harrison leaves. Elena continues her work, but something catches her eye on the monitor—the subject has stopped moving, staring directly at the camera.

Elena leans closer.

The subject's lips move. No sound comes through.

Elena adjusts the audio feed. Static.

ON SCREEN: The subject returns to their tasks as if nothing happened.

Elena frowns, rewinding the footage. She plays it again.

The subject never looked at the camera.

ELENA (V.O.)
Day one. Possible visual fatigue. Recommend shorter observation shifts.

She writes this down, but her hand trembles slightly.

INT. CORRIDOR - CONTINUOUS

Elena walks through sterile hallways, badge scanning at each checkpoint. Other researchers pass by, nodding curtly.

She pauses at a window overlooking a courtyard—manicured grass, benches, soft lighting. Everything perfect. Everything controlled.

ELENA (V.O.)
The facility provides everything we need. Food, shelter, purpose. Sometimes I forget there's a world outside these walls.

INT. ELENA'S QUARTERS - NIGHT

Sparse but comfortable. Elena sits on her bed, staring at the ceiling.

A KNOCK at the door startles her.

She opens it to find a FACILITY AIDE, young and nervous.

AIDE
Dr. Vance? Dr. Harrison requests your presence in Lab Seven. Immediately.

ELENA
Lab Seven? I don't have clearance for—

AIDE
You do now.

The aide hands her a new badge, marked with a red stripe. Elena examines it, confusion crossing her face.

ELENA
What's in Lab Seven?

AIDE
(already walking away)
The true experiment.

Elena watches him go, then looks down at the badge in her hand.

INT. LAB SEVEN - NIGHT

Elena scans her new badge. The heavy door slides open.

Inside: more monitors, more equipment, but these displays show something different. They show HER. In her quarters. In the observation room. In the corridor.

Every moment of her day, recorded.

Elena's blood runs cold.

HARRISON (O.S.)
Ah, Dr. Vance. Welcome to the real study.

She turns to find Harrison standing in the shadows, flanked by other researchers.

HARRISON (CONT'D)
The Solus Experiments were never about the subject in the white room. They were always about the observer.

(beat)

They were always about you.

Elena backs toward the door, but it's already sealed.

HARRISON (CONT'D)
Don't worry, Doctor. We still need you to document everything. That part hasn't changed.

He gestures to the chair in front of the monitors.

HARRISON (CONT'D)
Please. Have a seat. Your work is just beginning.

FADE TO BLACK.

THE END`
  }
]

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [showScript, setShowScript] = useState(false)

  const activeItem = portfolioItems.find(item => item.id === selectedItem)

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle sunflower pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="sunflower-pattern-portfolio" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="6" fill="none" stroke="#3d2914" strokeWidth="0.3" />
              <circle cx="10" cy="10" r="3" fill="#3d2914" />
              {[...Array(10)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="10"
                  cy="2"
                  rx="1.5"
                  ry="3"
                  fill="#eab308"
                  transform={`rotate(${i * 36} 10 10)`}
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sunflower-pattern-portfolio)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-film-dark mb-4">
            Portfolio
          </h2>
          <p className="text-film-dark/60 max-w-xl mx-auto">
            Original screenplays exploring themes of survival, identity, and human nature.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6" />
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="bg-film-cream rounded-2xl p-8 border-2 border-transparent hover:border-film-dark hover:bg-yellow-50 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-yellow-600 font-medium bg-yellow-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <FileText className="w-6 h-6 text-film-dark/30 group-hover:text-yellow-500 transition-colors" />
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl text-film-dark mb-4 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-film-dark/70 leading-relaxed mb-6">
                  {item.synopsis}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-film-dark/50 group-hover:text-yellow-600 transition-colors">
                  <span>Read more</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-film-dark/80 backdrop-blur-sm"
            onClick={() => {
              setSelectedItem(null)
              setShowScript(false)
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => {
                  setSelectedItem(null)
                  setShowScript(false)
                }}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-film-dark/10 hover:bg-yellow-500 flex items-center justify-center text-film-dark transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <span className="text-xs uppercase tracking-wider text-yellow-600 font-medium bg-yellow-100 px-3 py-1 rounded-full">
                  {activeItem.category}
                </span>
                
                <h3 className="font-serif text-3xl md:text-4xl text-film-dark mt-6 mb-4">
                  {activeItem.title}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-film-dark/50 mb-2">Synopsis</h4>
                  <p className="text-film-dark/80 leading-relaxed text-lg">
                    {activeItem.synopsis}
                  </p>
                </div>

                {/* Download Script Button */}
                {activeItem.pdfUrl && (
                  <div className="border-t border-film-dark/10 pt-8">
                    <a
                      href={activeItem.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={activeItem.pdfName}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-film-dark text-white rounded-lg hover:bg-yellow-500 hover:text-film-dark transition-all duration-200 group"
                    >
                      <Download className="w-5 h-5" />
                      <span className="font-medium">Download Full Script (PDF)</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
