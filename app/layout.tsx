import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Glegoo } from "next/font/google"
import "./globals.css"
import EnhancedInteractions from "@/components/enhanced-interactions"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

const glegoo = Glegoo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-glegoo",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Voice for Peace - Unite for a Better World",
  description:
    "Join the global movement for peace. Share your voice, connect with others, and help build a more peaceful world.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${glegoo.variable}`}>
      <body className="font-sans antialiased">
        <EnhancedInteractions />
        {children}
      </body>
    </html>
  )
}
