import { usePlayerStore } from "../store/playerStore"
import PlayerControls from "../components/PlayerControls"

export default function Player() {
  const { currentVideo, isMini } = usePlayerStore()

  if (!currentVideo) return null

  return (
    <div
      className={`
        fixed z-50 bg-black text-white transition-all duration-300
        ${isMini
          ? "bottom-4 right-4 w-72 h-52 rounded-xl shadow-2xl"
          : "inset-0 flex flex-col"}
      `}
    >
      {/* Video */}
      <div className={`${isMini ? "aspect-video" : "flex-1"} w-full`}>
        <iframe
          src={currentVideo.mediaUrl}
          className="w-full h-full"
          allow="autoplay;"
          allowFullScreen
        />
      </div>

      {/* Controls */}
      <div className="shrink-0">
        <PlayerControls video={currentVideo} />
      </div>
    </div>
  )
}
