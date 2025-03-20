export function AppLogo() {
  return (
    <div className="flex items-center">
      <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            fill="white"
          />
          <path
            d="M15.88 8.29L10.15 14.02L8.12 12.01C7.73 11.62 7.1 11.62 6.71 12.01C6.32 12.4 6.32 13.03 6.71 13.42L9.3 15.99C9.69 16.38 10.32 16.38 10.71 15.99L17 9.7C17.39 9.31 17.39 8.68 17 8.29C16.61 7.9 15.98 7.9 15.59 8.29H15.88Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight">FoodReels</span>
    </div>
  )
}

