import Link from "next/link"

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Moties",
    href: "/motions/",
  },
  {
    title: "Partijen",
    href: "/parties/",
  },
  {
    title: "Meer info",
    href: "/about/",
  },
]

export function Nav() {
  return (
    <nav className="m-auto py-3 flex justify-center">
      {items.map((e) => (
        <Link
          className="px-3 py-2 text-base text-gray-500  hover:text-black"
          href={e.href}
          key={e.title}
        >
          {e.title}
        </Link>
      ))}
    </nav>
  )
}
