
import { usePlayerStore } from "../store/playerStore"

export default function MiniPlayer() {
  const { currentVideo, restore } = usePlayerStore()

  if (!currentVideo) return null

  return (
    <div
      onClick={restore}
      className="fixed bottom-2 right-2 w-40 bg-black text-white rounded-lg"
    >
      <p className="text-xs p-2">{currentVideo.title}</p>
    </div>
  )
}
