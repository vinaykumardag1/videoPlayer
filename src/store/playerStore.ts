import { create } from "zustand"
import type { Video } from "../types/video"

type PlayerState = {
  currentVideo: Video | null
  isPlaying: boolean
  isMini: boolean
  setVideo: (video: Video) => void
  togglePlay: () => void
  minimize: () => void
  restore: () => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentVideo: null,
  isPlaying: true,
  isMini: false,

  setVideo: (video) =>
    set({ currentVideo: video, isPlaying: true, isMini: false }),

  togglePlay: () =>
    set((s) => ({ isPlaying: !s.isPlaying })),

  minimize: () => set({ isMini: true }),
  restore: () => set({ isMini: false }),
}))
