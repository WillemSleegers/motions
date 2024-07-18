"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type BarYeaVotesProps = {
  chartData: { party: string; yea_n: number; yea_prop: number }[]
}

const chartConfig = {
  party: {
    label: "Party",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export const BarYeaVotes = (props: BarYeaVotesProps) => {
  const { chartData } = props
  return (
    <Card>
      <CardHeader>
        <CardTitle>Percentage stemmen 'Voor'</CardTitle>
        <CardDescription>Aantal 'Voor' stemmen / aantal moties</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[1000px] w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="yea_prop" hide />
            <YAxis
              dataKey="party"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={200}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="yea_prop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        Iets hier zeggen?
      </CardFooter>
    </Card>
  )
}
