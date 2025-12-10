"use client"

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
  console.log(chartData.length * 30)
  const height = chartData.length * 25
  return (
    <Card>
      <CardHeader>
        <CardTitle>Percentage stemmen 'Voor'</CardTitle>
        <CardDescription>Aantal 'Voor' stemmen / aantal moties</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="w-full"
          style={{ height: height }}
          config={chartConfig}
        >
          <BarChart accessibilityLayer data={chartData} layout="vertical">
            <XAxis type="number" dataKey="yea_prop" hide />
            <YAxis
              dataKey="party"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={200}
              interval={0}
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
        TBD
      </CardFooter>
    </Card>
  )
}
