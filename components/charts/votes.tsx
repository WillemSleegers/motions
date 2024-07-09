"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartConfig = {
  nay: {
    label: "Nay",
    color: "hsl(var(--chart-1))",
  },
  yay: {
    label: "Yay",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

type VotesProps = {
  chartData: {
    yay: number
    nay: number
  }[]
}

export const Votes = ({ chartData }: VotesProps) => {
  return (
    <ChartContainer config={chartConfig} className="h-[80px] w-full">
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <XAxis
          dataKey="yay"
          type="number"
          domain={[0, 150]}
          ticks={[0, 75, 150]}
          axisLine={false}
        />
        <YAxis type="category" hide />
        <CartesianGrid horizontal={false} />
        <Bar dataKey="yay" stackId="a" fill="var(--color-yay)" radius={5}>
          <LabelList
            dataKey="yay"
            position="insideLeft"
            offset={8}
            className="fill-white"
            fontSize={12}
          />
        </Bar>
        <Bar dataKey="nay" stackId="a" fill="var(--color-nay)" radius={5}>
          <LabelList
            dataKey="nay"
            position="insideLeft"
            offset={8}
            className="fill-white"
            fontSize={12}
          />
        </Bar>
        <ReferenceLine x={75} strokeDasharray="5 5" />
      </BarChart>
    </ChartContainer>
  )
}
