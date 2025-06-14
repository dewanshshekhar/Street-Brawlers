"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { fighters } from "@/lib/fighters"

export default function CharacterSelect() {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          setSelectedIndex((prev) => (prev + 1) % fighters.length)
          break
        case "ArrowLeft":
          setSelectedIndex((prev) => (prev - 1 + fighters.length) % fighters.length)
          break
        case "ArrowUp":
          setSelectedIndex((prev) => {
            if (prev < 3) return prev + 3
            return prev - 3
          })
          break
        case "ArrowDown":
          setSelectedIndex((prev) => {
            if (prev >= 3) return prev - 3
            return prev + 3
          })
          break
        case "Enter":
          router.push(`/fight?player=${fighters[selectedIndex].id}&round=1&difficulty=1.0&prevOpponents=`)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, router])

  const selectedFighter = fighters[selectedIndex]

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-black to-red-900">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="z-10 flex flex-col items-center justify-center w-full max-w-6xl px-8">
        <h2 className="game-title text-5xl mb-8">SELECT YOUR FIGHTER</h2>

        <div className="flex gap-12 items-start">
          {/* Character Grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-6">
            {fighters.map((fighter, index) => (
              <div
                key={fighter.id}
                className={`character-portrait ${selectedIndex === index ? "selected" : ""}`}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={fighter.portrait || "/placeholder.svg"}
                  alt={fighter.name}
                  width={120}
                  height={120}
                  className="pixelated w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-center text-xs py-1 game-text">
                  {fighter.name}
                </div>
              </div>
            ))}
          </div>

          {/* Fighter Details */}
          <div className="bg-black/60 p-6 rounded-lg border-2 border-orange-500 min-w-80">
            <div className="text-center mb-4">
              <h3 className="game-title text-3xl text-orange-400">{selectedFighter.name}</h3>
              <p className="game-text text-sm mt-2 text-gray-300">{selectedFighter.description}</p>
            </div>

            {/* Fighter Stats */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="game-text text-sm">POWER</span>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 ${i < selectedFighter.stats.power ? "bg-red-500" : "bg-gray-600"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="game-text text-sm">SPEED</span>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 ${i < selectedFighter.stats.speed ? "bg-yellow-500" : "bg-gray-600"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="game-text text-sm">DEFENSE</span>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 ${i < selectedFighter.stats.defense ? "bg-blue-500" : "bg-gray-600"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <div className="game-text text-sm text-orange-400">SPECIAL MOVE</div>
              <div className="game-text text-lg text-white">{selectedFighter.specialMove}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 game-text text-center">
          <div className="text-xl blink">PRESS ENTER TO FIGHT</div>
          <div className="text-sm mt-2 text-gray-400">Use Arrow Keys to Navigate</div>
        </div>
      </div>
    </div>
  )
}
