import { useDrag } from "@use-gesture/react"
import { usePlayerStore } from "../store/playerStore"

const SWIPE_THRESHOLD = 80
const VELOCITY_THRESHOLD = 0.3

/**
 * Hook for player gestures: swipe down to minimize (fullscreen only).
 * Returns bind to spread onto the player container.
 */
export function usePlayerGesture(enabled: boolean) {
  const minimize = usePlayerStore((s) => s.minimize)
  const isMini = usePlayerStore((s) => s.isMini)

  const bind = useDrag(
    ({ movement: [, my], velocity: [, vy], direction: [, dy], last }) => {
      if (!enabled || isMini) return
      if (last && dy > 0 && (my > SWIPE_THRESHOLD || vy > VELOCITY_THRESHOLD)) {
        minimize()
      }
    },
    {
      axis: "y",
      pointer: { touch: true },
      touch: { filter: () => true },
      enabled: enabled && !isMini,
    }
  )
  return bind
}
