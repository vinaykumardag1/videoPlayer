import { useQuery } from "@tanstack/react-query"
import { videoData } from "../data/videos"
import VideoCard from "../components/VideoCard"
import type { Category } from "../types/video"
import { motion } from "framer-motion"
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center safe-top safe-bottom"
      >
        <CircularProgress />
      </motion.div>
    )
  }

  if (isError) {
    return (
      <Box p={2} className="pt-20 safe-top safe-bottom">
        <Alert severity="error">Failed to load videos</Alert>
      </Box>
    )
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="px-3 py-4 pt-20 pb-8 sm:px-4 sm:py-6 sm:pt-24 safe-top safe-bottom max-w-6xl mx-auto"
    >
      {data?.map((cat, catIndex) => (
        <motion.section
          key={cat.category.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: catIndex * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-8 sm:mb-10"
        >
          {/* Section header */}
          <Box className="flex py-4 sm:py-5 items-center gap-2 mb-3">
            <Avatar
              src={cat.category.iconUrl}
              alt={cat.category.name}
              className="w-8 h-8 sm:w-[30px] sm:h-[30px]"
            />
            <Typography variant="h6" fontWeight={700} className="text-base sm:text-lg">
              {cat.category.name}
            </Typography>
          </Box>

          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {cat.contents.map((video, index) => (
              <VideoCard key={video.slug} video={video} index={index} />
            ))}
          </div>
        </motion.section>
      ))}
    </motion.main>
  )
}
