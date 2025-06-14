interface EnhancedPowerBarProps {
  health: number
  maxHealth: number
  name: string
  reversed?: boolean
  stats: {
    power: number
    speed: number
    defense: number
  }
}

export function EnhancedPowerBar({ health, maxHealth, name, reversed = false, stats }: EnhancedPowerBarProps) {
  const healthPercentage = (health / maxHealth) * 100
  const isLowHealth = healthPercentage < 25

  return (
    <div className={`flex flex-col ${reversed ? "items-end" : "items-start"} w-1/3`}>
      <div className="game-text mb-1 text-sm font-bold">{name}</div>
      <div className="power-bar w-full">
        <div
          className={`power-bar-fill ${isLowHealth ? "low-health" : ""}`}
          style={{
            width: `${healthPercentage}%`,
            float: reversed ? "right" : "left",
          }}
        />
      </div>

      {/* Fighter stats display */}
      <div className="mt-2 text-xs game-text opacity-80">
        <div className="flex gap-4">
          <span>PWR: {stats.power}</span>
          <span>SPD: {stats.speed}</span>
          <span>DEF: {stats.defense}</span>
        </div>
      </div>
    </div>
  )
}
