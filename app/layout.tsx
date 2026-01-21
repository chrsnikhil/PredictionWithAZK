import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"
import { ThemeSwitcher } from "@/components/theme-switcher"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistMono.variable} antialiased`}>
      <body className={`font-mono min-h-screen bg-background text-foreground`}>
        <Suspense>{children}</Suspense>
        <ThemeSwitcher />
      </body>
    </html>
  )
}
