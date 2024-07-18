import parties from "@/assets/data/parties.json"
import { BarYeaVotes } from "@/components/charts/bar-yea-votes"

const Parties = () => {
  const yea_votes = parties
    .map((party) => {
      const yea_n = party.motions.filter(
        (motion) => motion.vote == "Voor"
      ).length
      return {
        party: party.party,
        motions: party.motions.length,
        yea_n: yea_n,
        yea_prop: yea_n / party.motions.length,
      }
    })
    .sort((a, b) => b.yea_prop - a.yea_prop)

  return (
    <main className="max-w-2xl m-auto py-6">
      <BarYeaVotes chartData={yea_votes} />
    </main>
  )
}

export default Parties
