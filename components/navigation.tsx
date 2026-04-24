"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Portfolio",
    href: "#portfolio",
    submenu: [
      { label: "Remnant", href: "#remnant" },
      { label: "The Solus Experiments", href: "#solus-experiments" },
    ],
  },
  {
    label: "Previous Work",
    href: "#previous-work",
    submenu: [
      { label: "University", href: "#university" },
      { label: "Personal", href: "#personal" },
    ],
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            className={`font-serif text-xl md:text-2xl transition-colors ${
              scrolled ? "text-film-dark" : "text-film-cream"
            }`}
          >
            Nerissa Gladstone
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm uppercase tracking-wider transition-all duration-200 border-2 border-transparent rounded-md ${
                    scrolled
                      ? "text-film-dark hover:bg-film-yellow hover:border-film-dark"
                      : "text-film-cream hover:bg-film-yellow hover:text-film-dark hover:border-film-dark"
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-film-dark hover:bg-film-yellow hover:text-film-dark transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-film-dark" : "text-film-cream"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.submenu && setIsOpen(false)}
                  className="block py-3 text-film-dark text-sm uppercase tracking-wider border-2 border-transparent hover:bg-film-yellow hover:border-film-dark rounded-md px-3 transition-colors"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 px-3 text-film-dark/70 text-sm hover:bg-film-yellow hover:text-film-dark rounded-md transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
