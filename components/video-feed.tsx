"use client"

import { useState, useRef, useEffect } from "react"
import { VideoPlayer } from "@/components/video-player"
import { foodVideos } from "@/lib/video-data"

export function VideoFeed({ category }: { category: string }) {
  const [videos, setVideos] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const feedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Get videos for the selected category
    const categoryVideos = foodVideos[category as keyof typeof foodVideos] || []
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