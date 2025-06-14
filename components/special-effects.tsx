"use client"

import { useState, useEffect } from "react"

interface SpecialEffectsProps {
  trigger: boolean
  type: "hit" | "special" | "victory"
  onComplete?: () => void
}

export function SpecialEffects({ trigger, type, onComplete }: SpecialEffectsProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (trigger) {
      setShow(true)
      const timer = setTimeout(() => {
        setShow(false)
        onComplete?.()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [trigger, onComplete])

  if (!show) return null

  const effectClass = {
    hit: "special-move-effect",
    special: "special-move-effect",
    victory: "special-move-effect",
  }[type]

  return <div className={effectClass} />
}
