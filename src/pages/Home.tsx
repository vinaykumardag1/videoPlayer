import { useQuery } from "@tanstack/react-query"
import { videoData } from "../data/videos"
import VideoCard from "../components/VideoCard"
import type { Category } from "../types/video"

import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Avatar,
} from "@mui/material"

const fetchVideos = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(videoData), 300)
  })
}

export default function Home() {
  const { data, isLoading, isError } = useQuery<Category[]>({
    queryKey: ["videos"],
    queryFn: fetchVideos,
  })

  if (isLoading) {
    return (
      <Box className="h-screen flex items-center justify-center">
        <CircularProgress />
      </Box>
    )
  }

  if (isError) {
    return (
      <Box p={2}>
        <Alert severity="error">Failed to load videos</Alert>
      </Box>
    )
  }

  return (
    <Box p={2}>
      {data?.map((cat) => (
        <Box key={cat.category.slug} mb={5}>
          {/* Section Header */}
          <Box className="flex py-5 items-center gap-2 mb-3">
            <Avatar
              src={cat.category.iconUrl}
              alt={cat.category.name}
              sx={{ width: 30, height: 30 }}
            />
            <Typography  variant="h6" fontWeight={700}>
              {cat.category.name}
            </Typography>
          </Box>

          {/* Responsive Grid */}
          <div className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
          ">
            {cat.contents.map((video,index) => (
              <div key={index}>
              <VideoCard  video={video} />
              </div>
            ))}
          </div>
        </Box>
      ))}
    </Box>
  )
}
