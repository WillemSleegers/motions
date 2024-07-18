import type { Metadata } from "next"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { Nav } from "@/components/nav"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Animal Motions in NL",
  description:
    "A website to check the voting behavior of Dutch political parties on motions related to animal welfare.",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Nav />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
