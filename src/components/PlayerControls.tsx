import { usePlayerStore } from "../store/playerStore"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"
import OpenInFullIcon from "@mui/icons-material/OpenInFull"

export default function PlayerControls({ video }: { video: any }) {
  const {
    isPlaying,
    togglePlay,
    isMini,
    minimize,
    restore,
  } = usePlayerStore()

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-black/80 backdrop-blur">
      {/* Video Info */}
      <div className="flex-1 min-w-0">
        <p className="truncate font-semibold">{video.title}</p>
        <p className="truncate text-xs text-gray-400">
          {video.author}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 ml-4">
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>

        {/* Mini / Restore */}
        {isMini ? (
          <button
            onClick={restore}
            className="p-2 rounded-full hover:bg-white/10 transition"
            title="Restore"
          >
            <OpenInFullIcon />
          </button>
        ) : (
          <button
            onClick={minimize}
            className="p-2 rounded-full hover:bg-white/10 transition"
            title="Mini player"
          >
            <CloseFullscreenIcon />
          </button>
        )}
      </div>
    </div>
  )
}
