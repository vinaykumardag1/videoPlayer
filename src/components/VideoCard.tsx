import type { Video } from "../types/video"
import { usePlayerStore } from "../store/playerStore"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material"

interface Props {
  video: Video
  index?: number
}

export default function VideoCard({ video, index = 0 }: Props) {
  const setVideo = usePlayerStore((s) => s.setVideo)
  const navigate = useNavigate()

  const handleOpen = () => {
    setVideo(video)
    navigate(`/player/${video.slug}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Card
        onClick={handleOpen}
        elevation={0}
        className="cursor-pointer bg-transparent hover:bg-neutral-100 active:bg-neutral-200 transition-colors duration-200 rounded-xl overflow-hidden"
      >
        {/* Thumbnail */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative w-full aspect-video overflow-hidden rounded-xl"
        >
          <div className="flex bg-black w-full h-full justify-center items-center">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full max-w-[320px] h-full object-cover"
            />
          </div>
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
            5:30
          </span>
        </motion.div>

        {/* Info */}
        <CardContent className="flex gap-3 px-0 pt-3 pb-2 sm:pb-3">
          <Avatar className="w-9 h-9 shrink-0" />
          <div className="flex-1 min-w-0">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              lineHeight={1.3}
              className="line-clamp-2 text-sm sm:text-base"
            >
              {video.title}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
