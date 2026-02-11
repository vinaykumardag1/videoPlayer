import { usePlayerStore } from "../store/playerStore"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"
import OpenInFullIcon from "@mui/icons-material/OpenInFull"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import type { Video } from "../types/video"

interface PlayerControlsProps {
  video: Video
}

export default function PlayerControls({ video }: PlayerControlsProps) {
  const {
    isPlaying,
    togglePlay,
    isMini,
    minimize,
    restore,
  } = usePlayerStore()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-black/80 backdrop-blur-sm"
    >
      {/* Video info */}
      <div className="flex-1 min-w-0">
        <p className="truncate text-sm sm:text-base font-semibold">
          {video.title}
        </p>
        <p className="truncate text-xs text-gray-400">
          {video.author ?? "Unknown"}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        {/* Play / Pause — tap gesture + transition */}
        <motion.button
          onClick={togglePlay}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors duration-150"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <motion.span
            key={isPlaying ? "playing" : "paused"}
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            {isPlaying ? (
              <PauseIcon className="text-[28px]! sm:text-[32px]!" />
            ) : (
              <PlayArrowIcon className="text-[28px]! sm:text-[32px]!" />
            )}
          </motion.span>
        </motion.button>

        {/* Mini / Restore */}
        {isMini ? (
          <motion.button
            onClick={restore}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors duration-150"
            title="Restore"
            aria-label="Restore"
          >
            <OpenInFullIcon className="text-2xl! sm:text-[28px]!" />
          </motion.button>
        ) : (
          <Link to="/">
            <motion.button
              onClick={minimize}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors duration-150"
              title="Mini player"
              aria-label="Mini player"
            >
              <CloseFullscreenIcon className="text-2xl! sm:text-[28px]!" />
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  )
}
