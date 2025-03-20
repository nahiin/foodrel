import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: "thai",
    name: "Thai",
    image: "/placeholder.svg?height=200&width=200&text=Thai+Food",
  },
  {
    id: "mexican",
    name: "Mexican",
    image: "/placeholder.svg?height=200&width=200&text=Mexican+Food",
  },
  {
    id: "korean",
    name: "Korean",
    image: "/placeholder.svg?height=200&width=200&text=Korean+Food",
  },
  {
    id: "chinese",
    name: "Chinese",
    image: "/placeholder.svg?height=200&width=200&text=Chinese+Food",
  },
  {
    id: "bengali",
    name: "Bengali",
    image: "/placeholder.svg?height=200&width=200&text=Bengali+Food",
  },
  {
    id: "italian",
    name: "Italian",
    image: "/placeholder.svg?height=200&width=200&text=Italian+Food",
  },
  {
    id: "japanese",
    name: "Japanese",
    image: "/placeholder.svg?height=200&width=200&text=Japanese+Food",
  },
  {
    id: "indian",
    name: "Indian",
    image: "/placeholder.svg?height=200&width=200&text=Indian+Food",
  },
]

export function FoodCategories() {
  return (
    <div className="grid grid-cols-2 gap-4 pb-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/videos/${category.id}`}
          className="group overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition-all duration-300 active:scale-95"
        >
          <div className="relative h-44 w-full">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="text-lg font-medium tracking-tight">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

