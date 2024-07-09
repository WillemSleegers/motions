import { Votes } from "@/components/charts/votes"

export default function Home() {
  return (
    <main className="p-3 max-w-2xl m-auto">
      <h1 className="text-4xl font-bold tracking-tight text-center">
        Animal welfare motions in the Dutch House of Representatives
      </h1>
      <Votes chartData={[{ yay: 41, nay: 109 }]} />
    </main>
  )
}
