import type { Metadata } from "next"
import "./globals.css"
import { Nav } from "@/components/nav"

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
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
