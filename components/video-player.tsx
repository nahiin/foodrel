"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Video {
  id: string
  url: string
  thumbnail: string
  title: string
  username: string
  likes: string
  comments: string
}

export function VideoPlayer({ video, isActive }: { video: Video; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error)
        })
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        setIsPlaying(false)
      }
    }
  }, [isActive])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleVideoLoaded = () => {
    setIsLoaded(true)
  }

  return (
    <div className="relative h-full w-full bg-black" onClick={togglePlay}>
      {/* Thumbnail shown until video is loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-black">
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 animate-pulse rounded-full bg-white/20 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        src={video.url}
        className="h-full w-full object-contain"
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoaded}
      />

      {/* Play/Pause indicator (shows briefly when tapped) */}
      {!isPlaying && isLoaded && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/30 p-4 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      )}

      {/* Video overlay with info and actions */}
      <div className="absolute bottom-16 left-0 right-0 p-5 text-white">
        <div className="mb-2">
          <h3 className="text-lg font-medium">{video.title}</h3>
          <div className="mt-1 flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-zinc-700">
              <Image src="/placeholder.svg?height=24&width=24" alt={video.username} fill className="object-cover" />
            </div>
            <span className="text-sm font-medium">@{video.username}</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-20 right-4 flex flex-col gap-6">
        <button
          className="flex flex-col items-center"
          onClick={(e) => {
            e.stopPropagation()
            toggleLike()
          }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isLiked ? "#FF2D55" : "none"}
              stroke={isLiked ? "#FF2D55" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <span className="mt-1 text-xs font-medium text-white">{video.likes}</span>
        </button>
        <button className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <span className="mt-1 text-xs font-medium text-white">{video.comments}</span>
        </button>
        <button className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </div>
          <span className="mt-1 text-xs font-medium text-white">Share</span>
        </button>
      </div>
    </div>
  )
}

