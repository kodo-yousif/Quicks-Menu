import { Suspense } from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Welcome to Quicks",
  description: "Fast food restaurant",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  )
}
