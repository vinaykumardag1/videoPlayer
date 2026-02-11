import { create } from "zustand"
import type { Video } from "../types/video"

type PlayerState = {
  currentVideo: Video | null
  isPlaying: boolean
  isMini: boolean
  videoRef: HTMLVideoElement | null

  setVideo: (video: Video) => void
  setVideoRef: (ref: HTMLVideoElement | null) => void
  togglePlay: () => void
  minimize: () => void
  restore: () => void
  seek: (seconds: number) => void
  closePlayer: () => void   // ✅ added
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentVideo: null,
  isPlaying: true,
  isMini: false,
  videoRef: null,

  setVideo: (video) =>
    set({
      currentVideo: video,
      isPlaying: true,
      isMini: false,
    }),

  setVideoRef: (ref) =>
    set({ videoRef: ref }),

  togglePlay: () => {
    const video = get().videoRef
    if (!video) return

    if (video.paused) {
      video.play()
      set({ isPlaying: true })
    } else {
      video.pause()
      set({ isPlaying: false })
    }
  },

  minimize: () => set({ isMini: true }),
  restore: () => set({ isMini: false }),

  seek: (seconds) => {
    const video = get().videoRef
    if (!video) return

    video.currentTime += seconds
  },

  // ✅ Close Player Implementation
  closePlayer: () => {
    const video = get().videoRef

    if (video) {
      video.pause()
      video.currentTime = 0
    }

    set({
      currentVideo: null,
      isPlaying: false,
      isMini: false,
      videoRef: null,
    })
  },
}))
