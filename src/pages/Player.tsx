import { usePlayerStore } from "../store/playerStore"
import PlayerControls from "../components/PlayerControls"
import { usePlayerGesture } from "../hooks/usePlayerGesture"
import { motion, AnimatePresence } from "framer-motion"

export default function Player() {
  const { currentVideo, isMini, closePlayer } = usePlayerStore()
  const bindGesture = usePlayerGesture(!!currentVideo)

  if (!currentVideo) return null

  return (
    <AnimatePresence mode="wait">
      {/* 👇 Gesture wrapper */}
      <div {...bindGesture()}>
        <motion.div
          initial={false}
          animate={
            isMini
              ? {
                  bottom: "1rem",
                  right: "1rem",
                  left: "auto",
                  top: "auto",
                  width: "min(18rem, 85vw)",
                  height: "auto",
                  borderRadius: "1rem",
                  boxShadow:
                    "0 25px 50px -12px rgba(0,0,0,0.5)",
                }
              : {
                  inset: 0,
                  borderRadius: 0,
                  boxShadow: "none",
                }
          }
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
          }}
          style={{
            aspectRatio: isMini ? "16/9" : undefined,
            maxHeight: isMini ? "min(14rem, 40vh)" : undefined,
          }}
          className={`no-pull-refresh fixed z-50 bg-black text-white overflow-hidden ${
            !isMini
              ? "flex flex-col inset-0 safe-top safe-bottom"
              : ""
          }`}
        >
          {/* Close (mini only) */}
          {isMini && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation()
                closePlayer()
              }}
              className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white text-sm transition-colors"
              aria-label="Close"
            >
              ✕
            </motion.button>
          )}

          {/* Video */}
          <div
            className={`w-full h-full ${
              isMini ? "aspect-video" : "flex-1 min-h-0"
            }`}
          >
            <iframe
              src={currentVideo.mediaUrl}
              className="w-full h-full"
              allow="autoplay;"
              allowFullScreen
              title={currentVideo.title}
            />
          </div>

          {/* Controls */}
          <motion.div
            className="shrink-0"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <PlayerControls video={currentVideo} />
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
