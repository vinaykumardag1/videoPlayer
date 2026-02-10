
import { useRef } from "react"
import { usePlayerStore } from "../store/playerStore"

export function useDrag() {
  const startY = useRef(0)
  const minimize = usePlayerStore((s) => s.minimize)

  return {
    onTouchStart: (e: React.TouchEvent) => {
      startY.current = e.touches[0].clientY
    },
    onTouchEnd: (e: React.TouchEvent) => {
      if (e.changedTouches[0].clientY - startY.current > 120) {
        minimize()
      }
    },
  }
}
