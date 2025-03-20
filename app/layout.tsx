import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FoodReels",
  description: "Discover delicious food videos from around the world",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto h-[100dvh] w-full max-w-[430px] overflow-hidden bg-black">
          <div className="flex h-full flex-col">{children}</div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'