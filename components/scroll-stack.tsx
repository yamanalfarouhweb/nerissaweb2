"use client"

import React, { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

export interface ScrollStackItemProps {
  itemClassName?: string
  children: ReactNode
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
)

interface ScrollStackProps {
  className?: string
  children: ReactNode
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  baseScale?: number
  blurAmount?: number
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  baseScale = 0.85,
  blurAmount = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cardStyles, setCardStyles] = useState<Record<number, React.CSSProperties>>({})
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = Array.from(container.querySelectorAll('.scroll-stack-card')) as HTMLElement[]
    if (!cards.length) return

    const updateCards = () => {
      const viewportHeight = window.innerHeight
      const stackTrigger = viewportHeight * 0.3 // When card reaches 30% from top, start stacking

      const newStyles: Record<number, React.CSSProperties> = {}

      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect()
        const cardTop = cardRect.top

        // Calculate how far the card has scrolled past the stack trigger point
        const distancePastTrigger = stackTrigger - cardTop
        const progress = Math.max(0, Math.min(1, distancePastTrigger / (viewportHeight * 0.4)))

        // Scale down as card moves up
        const targetScale = baseScale + (cards.length - 1 - i) * itemScale
        const scale = 1 - progress * (1 - targetScale)

        // Calculate blur based on how many cards are above this one
        let blur = 0
        if (blurAmount > 0) {
          let cardsAbove = 0
          for (let j = i + 1; j < cards.length; j++) {
            const otherCard = cards[j]
            const otherRect = otherCard.getBoundingClientRect()
            if (otherRect.top < stackTrigger + 100) {
              cardsAbove++
            }
          }
          blur = cardsAbove * blurAmount
        }

        // Sticky position offset
        const stickyOffset = i * itemStackDistance

        newStyles[i] = {
          position: 'sticky' as const,
          top: `calc(20vh + ${stickyOffset}px)`,
          transform: `scale(${scale})`,
          filter: blur > 0 ? `blur(${blur}px)` : 'none',
          zIndex: i + 1,
        }
      })

      setCardStyles(newStyles)
    }

    // Initial update
    updateCards()

    // Throttled scroll handler
    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        updateCards()
        rafRef.current = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [baseScale, blurAmount, itemScale, itemStackDistance])

  // Clone children and apply styles
  const styledChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<{ style?: React.CSSProperties }>, {
        style: {
          ...cardStyles[index],
          marginBottom: index < React.Children.count(children) - 1 ? `${itemDistance}px` : 0,
        },
      })
    }
    return child
  })

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`.trim()}
      style={{ paddingBottom: '30vh' }}
    >
      {styledChildren}
    </div>
  )
}

export default ScrollStack
