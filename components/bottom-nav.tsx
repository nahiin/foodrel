"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const categories = [
  { id: "thai", name: "Thai" },
  { id: "mexican", name: "Mexican" },
  { id: "korean", name: "Korean" },
  { id: "chinese", name: "Chinese" },
  { id: "bengali", name: "Bengali" },
  { id: "italian", name: "Italian" },
  { id: "japanese", name: "Japanese" },
  { id: "indian", name: "Indian" },
]

export function BottomNav({ currentCategory }: { currentCategory: string }) {
  const pathname = usePathname()

  return (
    <div className="w-full bg-black/30 backdrop-blur-xl">
      <div className="no-scrollbar flex w-full items-center overflow-x-auto py-3">
        <Link href="/" className="mx-3 flex h-8 items-center justify-center rounded-full bg-zinc-800 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-xs font-medium">Home</span>
        </Link>

        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/videos/${category.id}`}
            className={`mx-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              category.id === currentCategory ? "bg-white text-black" : "bg-zinc-800 text-white"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

