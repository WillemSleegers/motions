import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header"

export type Vote = {
  party: string
  seats: number
  vote: string
  mistake: boolean
}

export const columnsVotes: ColumnDef<Vote>[] = [
  {
    accessorKey: "party",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Partij" />
    ),
  },
  {
    accessorKey: "seats",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Zetels" />
    ),
  },
  {
    accessorKey: "vote",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stem" />
    ),
  },
]
