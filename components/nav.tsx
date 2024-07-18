"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Moties",
    href: "/motions",
  },
  {
    title: "Partijen",
    href: "/parties",
  },
  {
    title: "Meer info",
    href: "/about",
  },
]

export function Nav() {
  const currentPath = usePathname()

  return (
    <nav className="m-auto py-3 flex gap-3 justify-center border-b">
      {items.map((e) => (
        <Link
          className={cn(
            "px-3 py-1 text-base text-gray-500  hover:text-black",
            currentPath == e.href ? "bg-muted text-foreground rounded-full" : ""
          )}
          href={e.href}
          key={e.title}
        >
          {e.title}
        </Link>
      ))}
    </nav>
  )
}
