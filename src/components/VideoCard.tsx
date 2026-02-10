import type { Video } from "../types/video"
import { usePlayerStore } from "../store/playerStore"
import { useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  
} from "@mui/material"

interface Props {
  video: Video,
  
}

export default function VideoCard({ video }: Props) {
  const setVideo = usePlayerStore((s) => s.setVideo)
  const navigate=useNavigate()

  return (
    <Card
onClick={() => {
  setVideo(video)
  navigate(`/player/${video.slug}`)
}}
      elevation={0}
      className="cursor-pointer bg-transparent hover:bg-neutral-100 transition rounded-xl"
     
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
        <div className="flex bg-black w-full h-full justify-center items-center">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-[200px] h-full"
        />
        </div>
        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          { "5:30"}
        </span>
      </div>

      {/* Info */}
      <CardContent className="flex gap-3 px-0 pt-3">
        {/* Channel Avatar */}
        <Avatar
         
          className="w-9 h-9"
        />

        {/* Text */}
        <div className="flex flex-col gap-1">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            lineHeight={1.3}
            className="line-clamp-2"
          >
            {video.title}
          </Typography>

      
         
        </div>
      </CardContent>
    </Card>
  )
}
