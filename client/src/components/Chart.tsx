import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", male: 222, female: 150 },
  { date: "2024-04-02", male: 97, female: 180 },
  { date: "2024-04-03", male: 167, female: 120 },
  { date: "2024-04-04", male: 242, female: 260 },
  { date: "2024-04-05", male: 373, female: 290 },
  { date: "2024-04-06", male: 301, female: 340 },
  { date: "2024-04-07", male: 245, female: 180 },
  { date: "2024-04-08", male: 409, female: 320 },
  { date: "2024-04-09", male: 59, female: 110 },
  { date: "2024-04-10", male: 261, female: 190 },
  { date: "2024-04-11", male: 327, female: 350 },
  { date: "2024-04-12", male: 292, female: 210 },
  { date: "2024-04-13", male: 342, female: 380 },
  { date: "2024-04-14", male: 137, female: 220 },
  { date: "2024-04-15", male: 120, female: 170 },
  { date: "2024-04-16", male: 138, female: 190 },
  { date: "2024-04-17", male: 446, female: 360 },
  { date: "2024-04-18", male: 364, female: 410 },
  { date: "2024-04-19", male: 243, female: 180 },
  { date: "2024-04-20", male: 89, female: 150 },
  { date: "2024-04-21", male: 137, female: 200 },
  { date: "2024-04-22", male: 224, female: 170 },
  { date: "2024-04-23", male: 138, female: 230 },
  { date: "2024-04-24", male: 387, female: 290 },
  { date: "2024-04-25", male: 215, female: 250 },
  { date: "2024-04-26", male: 75, female: 130 },
  { date: "2024-04-27", male: 383, female: 420 },
  { date: "2024-04-28", male: 122, female: 180 },
  { date: "2024-04-29", male: 315, female: 240 },
  { date: "2024-04-30", male: 454, female: 380 },
  { date: "2024-05-01", male: 165, female: 220 },
  { date: "2024-05-02", male: 293, female: 310 },
  { date: "2024-05-03", male: 247, female: 190 },
  { date: "2024-05-04", male: 385, female: 420 },
  { date: "2024-05-05", male: 481, female: 390 },
  { date: "2024-05-06", male: 498, female: 520 },
  { date: "2024-05-07", male: 388, female: 300 },
  { date: "2024-05-08", male: 149, female: 210 },
  { date: "2024-05-09", male: 227, female: 180 },
  { date: "2024-05-10", male: 293, female: 330 },
  { date: "2024-05-11", male: 335, female: 270 },
  { date: "2024-05-12", male: 197, female: 240 },
  { date: "2024-05-13", male: 197, female: 160 },
  { date: "2024-05-14", male: 448, female: 490 },
  { date: "2024-05-15", male: 473, female: 380 },
  { date: "2024-05-16", male: 338, female: 400 },
  { date: "2024-05-17", male: 499, female: 420 },
  { date: "2024-05-18", male: 315, female: 350 },
  { date: "2024-05-19", male: 235, female: 180 },
  { date: "2024-05-20", male: 177, female: 230 },
  { date: "2024-05-21", male: 82, female: 140 },
  { date: "2024-05-22", male: 81, female: 120 },
  { date: "2024-05-23", male: 252, female: 290 },
  { date: "2024-05-24", male: 294, female: 220 },
  { date: "2024-05-25", male: 201, female: 250 },
  { date: "2024-05-26", male: 213, female: 170 },
  { date: "2024-05-27", male: 420, female: 460 },
  { date: "2024-05-28", male: 233, female: 190 },
  { date: "2024-05-29", male: 78, female: 130 },
  { date: "2024-05-30", male: 340, female: 280 },
  { date: "2024-05-31", male: 178, female: 230 },
  { date: "2024-06-01", male: 178, female: 200 },
  { date: "2024-06-02", male: 470, female: 410 },
  { date: "2024-06-03", male: 103, female: 160 },
  { date: "2024-06-04", male: 439, female: 380 },
  { date: "2024-06-05", male: 88, female: 140 },
  { date: "2024-06-06", male: 294, female: 250 },
  { date: "2024-06-07", male: 323, female: 370 },
  { date: "2024-06-08", male: 385, female: 320 },
  { date: "2024-06-09", male: 438, female: 480 },
  { date: "2024-06-10", male: 155, female: 200 },
  { date: "2024-06-11", male: 92, female: 150 },
  { date: "2024-06-12", male: 492, female: 420 },
  { date: "2024-06-13", male: 81, female: 130 },
  { date: "2024-06-14", male: 426, female: 380 },
  { date: "2024-06-15", male: 307, female: 350 },
  { date: "2024-06-16", male: 371, female: 310 },
  { date: "2024-06-17", male: 475, female: 520 },
  { date: "2024-06-18", male: 107, female: 170 },
  { date: "2024-06-19", male: 341, female: 290 },
  { date: "2024-06-20", male: 408, female: 450 },
  { date: "2024-06-21", male: 169, female: 210 },
  { date: "2024-06-22", male: 317, female: 270 },
  { date: "2024-06-23", male: 480, female: 530 },
  { date: "2024-06-24", male: 132, female: 180 },
  { date: "2024-06-25", male: 141, female: 190 },
  { date: "2024-06-26", male: 434, female: 380 },
  { date: "2024-06-27", male: 448, female: 490 },
  { date: "2024-06-28", male: 149, female: 200 },
  { date: "2024-06-29", male: 103, female: 160 },
  { date: "2024-06-30", male: 446, female: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  male: {
    label: "Male",
    color: "hsl(var(--chart-1))",
  },
  female: {
    label: "Female",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function Chart() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>GEP Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total users for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillmale" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-male)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-male)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillfemale" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-female)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-female)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="female"
              type="natural"
              fill="url(#fillfemale)"
              stroke="var(--color-female)"
              stackId="a"
            />
            <Area
              dataKey="male"
              type="natural"
              fill="url(#fillmale)"
              stroke="var(--color-male)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
