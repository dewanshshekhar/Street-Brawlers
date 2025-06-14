export function FightControls() {
  return (
    <div className="bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 w-full py-3 px-6 flex justify-center gap-8 text-xs game-text border-t-2 border-orange-500">
      <div className="flex items-center gap-2">
        <span className="text-orange-400">MOVE:</span>
        <span>← →</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-400">JUMP:</span>
        <span>↑</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-400">DUCK:</span>
        <span>↓</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-400">KICK:</span>
        <span>A</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-400">DEFENSE:</span>
        <span>S</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-400">PUNCH:</span>
        <span>D</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-400">SPECIAL:</span>
        <span>↑+A</span>
      </div>
    </div>
  )
}
