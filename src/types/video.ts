export interface Video {
  title: string
  thumbnailUrl: string
  slug: string
  mediaType: string
  mediaUrl: string
  author?: string
}
export type MediaType = "YOUTUBE" | "VIDEO"


export interface Category {
  category: {
    slug: string
    name: string
    iconUrl: string
  }
  contents: Video[]
}
