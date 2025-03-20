import { StatusBar } from "@/components/status-bar"
import { FoodCategories } from "@/components/food-categories"
import { AppLogo } from "@/components/app-logo"

export default function HomePage() {
  return (
    <main className="flex h-full flex-col bg-black text-white">
      <StatusBar />
      <div className="flex flex-1 flex-col overflow-auto px-5 pt-14">
        <div className="mb-6 mt-4 flex items-center justify-between">
          <AppLogo />
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-medium text-zinc-400">Discover delicious food videos from around the world</h2>
        </div>

        <FoodCategories />
      </div>
    </main>
  )
}

