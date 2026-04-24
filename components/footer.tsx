import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-film-cream border-t border-film-dark/10">
      {/* Subtle sunflower accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="40" height="40" viewBox="0 0 60 60" className="text-yellow-500">
          <circle cx="30" cy="30" r="6" fill="#3d2914" />
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx="30"
              cy="12"
              rx="4"
              ry="8"
              fill="currentColor"
              transform={`rotate(${i * 30} 30 30)`}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-film-dark">
              Nerissa Gladstone
            </h3>
            <p className="text-film-dark/50 text-sm mt-1">
              Screenwriter
            </p>
          </div>

          {/* Contact via Email */}
          <a
            href="mailto:nerissa.gladstone@example.com"
            className="group flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-film-dark text-film-dark hover:bg-yellow-500 hover:border-film-dark transition-all duration-300 rounded-md"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium tracking-wide">
              Contact via Email
            </span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-film-dark/10 text-center">
          <p className="text-film-dark/40 text-sm">
            © {new Date().getFullYear()} Nerissa Gladstone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
