"use client"

import { useState, useEffect } from "react"

interface RoundCounterProps {
  round: number
  onComplete?: () => void
}

export function RoundCounter({ round, onComplete }: RoundCounterProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      onComplete?.()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!show) return null

  return <div className="round-counter game-title">ROUND {round}</div>
}
