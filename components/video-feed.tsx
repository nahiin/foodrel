"use client"

import { useState, useRef, useEffect } from "react"
import { VideoPlayer } from "@/components/video-player"

// Mock data - in a real app, this would come from an API
const getVideosForCategory = (category: string) => {
  // These would be actual videos from YouTube or another source
  return [
    {
      id: `${category}-1`,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail: `/placeholder.svg?height=400&width=400&text=${category}+Dish+1`,
      title: `Delicious ${category} dish 1`,
      username: "foodlover1",
      likes: "23.5K",
      comments: "1.2K",
    },
    {
      id: `${category}-2`,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: `/placeholder.svg?height=400&width=400&text=${category}+Dish+2`,
      title: `Amazing ${category} recipe`,
      username: "chefmaster",
      likes: "45.2K",
      comments: "3.7K",
    },
    {
      id: `${category}-3`,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: `/placeholder.svg?height=400&width=400&text=${category}+Dish+3`,
      title: `${category} street food tour`,
      username: "foodtraveler",
      likes: "89.1K",
      comments: "5.3K",
    },
    {
      id: `${category}-4`,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      thumbnail: `/placeholder.svg?height=400&width=400&text=${category}+Dish+4`,
      title: `Traditional ${category} cooking`,
      username: "culinaryarts",
      likes: "67.8K",
      comments: "4.1K",
    },
  ]
}

export function VideoFeed({ category }: { category: string }) {
  const [videos, setVideos] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const feedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fetch videos when category changes
    const categoryVideos = getVideosForCategory(category)
    setVideos(categoryVideos)
    setCurrentIndex(0)

    // Reset scroll position when category changes
    if (feedRef.current) {
      feedRef.current.scrollTop = 0
    }
  }, [category])

  useEffect(() => {
    const handleScroll = () => {
      if (!feedRef.current) return

      const videoHeight = feedRef.current.clientHeight
      const scrollPosition = feedRef.current.scrollTop
      const newIndex = Math.round(scrollPosition / videoHeight)

      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < videos.length) {
        setCurrentIndex(newIndex)
      }
    }

    const feedElement = feedRef.current
    if (feedElement) {
      feedElement.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (feedElement) {
        feedElement.removeEventListener("scroll", handleScroll)
      }
    }
  }, [currentIndex, videos.length])

  if (videos.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-white">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          <p className="mt-4 text-sm font-medium">Loading videos...</p>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={feedRef}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {videos.map((video, index) => (
        <div key={video.id} className="h-full w-full snap-start snap-always">
          <VideoPlayer video={video} isActive={index === currentIndex} />
        </div>
      ))}
    </div>
  )
}

