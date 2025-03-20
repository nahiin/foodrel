import { VideoFeed } from "@/components/video-feed"
import { BottomNav } from "@/components/bottom-nav"
import { StatusBar } from "@/components/status-bar"

export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <main className="relative flex h-full w-full flex-col bg-black">
      <StatusBar />
      <div className="flex-1 overflow-hidden">
        <VideoFeed category={params.category} />
      </div>
      <BottomNav currentCategory={params.category} />
    </main>
  )
}

