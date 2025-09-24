'use client'
import { Badge } from "./ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { BookText, ClipboardCheck, Clock, TrendingUp } from "lucide-react";

export default function DashboardComponent() {

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "black",
    },
    mobile: {
      label: "Mobile",
      color: "black",
    },
  } satisfies ChartConfig

  return (
    <main className="mx-11 mt-9 flex flex-col space-y-4">
      <h1 className="uppercase text-3xl text-amber-50">performance overview</h1>
      <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardDescription className="flex flex-col items-center">Completed Tasks <ClipboardCheck /></CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              247
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start text-sm">
            <div className="text-muted-foreground">
              +20.1% this month
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="flex flex-col items-center">Open Tasks <BookText /></CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              82
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="text-muted-foreground">
              -5.3% this week
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="flex flex-col items-center">average completion time <Clock /></CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              3 Day
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="text-muted-foreground">stable since last week</div>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-4 w-full m-auto">
        <CardHeader>
          <CardTitle>Monthly task progress</CardTitle>
          <CardDescription>task completion and status over time</CardDescription>
        </CardHeader>
        <CardContent className="w-full h-96">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex items-center justify-around gap-2 text-sm">
          <div className="leading-none font-medium">
            Completed Tasks
          </div>
          <div className="leading-none font-medium">
            Open Tasks
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
