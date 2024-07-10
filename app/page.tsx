import { Votes } from "@/components/charts/votes"

import motions from "@/assets/data/motions.json"

export default function Home() {
  const motions2013 = motions.filter((m) => {
    const date = new Date(m.start_date)
    const cutoff = new Date("2023-01-1")

    return date >= cutoff
  })

  return (
    <main className="p-3 max-w-2xl m-auto">
      <h1 className="text-4xl font-bold tracking-tight text-center">
        Animal welfare motions in the Dutch House of Representatives
      </h1>

      {motions2013.map((m) => {
        return (
          <div className="my-6" key={m.motion}>
            <p>{m.subject}</p>
            <p
              className={`font-semibold text-center text-lg mt-2 ${
                m.decision == "Accepted" ? "text-green-600" : "text-red-600"
              }`}
            >
              {m.decision}
            </p>
            <Votes chartData={[{ yay: m.votes_yea, nay: m.votes_nay }]} />
            <br></br>
          </div>
        )
      })}
    </main>
  )
}
