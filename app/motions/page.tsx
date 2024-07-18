"use client"

import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { MultiSelect } from "@/components/multi-select"

import motions from "@/assets/data/motions.json"
import { Votes } from "@/components/charts/votes"

import { useEffect, useState } from "react"

import { columnsVotes } from "@/components/tables/columns-votes"
import { DataTable } from "@/components/tables/data-table"

type dataProps = typeof motions

const motions2023 = motions.filter((m) => {
  const date = new Date(m.start_date)

  const cutoff = new Date("2023-01-01")

  return date >= cutoff
})

const Motions = () => {
  const [data, setData] = useState<dataProps>()

  useEffect(() => {
    setData(motions2023)
  }, [])

  const searchHandler = (e: { target: { value: string } }) => {
    if (data) {
      setData(
        motions2023.filter((d) => {
          return d.subject.toLowerCase().includes(e.target.value.toLowerCase())
        })
      )
    }
  }

  return (
    <main className="max-w-2xl m-auto">
      <h2 className="text-4xl font-bold text-center mt-6 mb-9">Moties</h2>
      <div className="flex flex-col gap-3 mb-6">
        <Input placeholder="Zoek moties..." onChange={searchHandler} />
        <MultiSelect label="Filter onderwerpen" />
      </div>
      <div>
        {data &&
          data.map((m) => {
            return (
              <div className="my-" key={m.motion}>
                <hr className="mb-6"></hr>
                <p className="font-medium text-center text-lg mb-3">
                  {m.subject}
                </p>

                <Votes
                  chartData={[
                    { yay: m.votes_yea, nay: m.votes_nay, na: m.votes_na },
                  ]}
                  seats={m.seats_total}
                />
                <p
                  className={`font-medium text- text-center text-lg ${
                    m.decision == "Aangenomen" ? "text-primary" : "text-black"
                  }`}
                >
                  {m.decision}
                </p>
                <Collapsible className="mb-6">
                  <CollapsibleTrigger>Detail stemming</CollapsibleTrigger>
                  <CollapsibleContent className="py-3">
                    <DataTable columns={columnsVotes} data={m.votes} />
                  </CollapsibleContent>
                </Collapsible>
              </div>
            )
          })}
      </div>
    </main>
  )
}

export default Motions
