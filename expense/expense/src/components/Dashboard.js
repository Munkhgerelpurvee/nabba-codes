"use client";
import { HeaderLogo } from "@/assets/headerlogo";
import { Plus } from "@/assets/plus";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CardLogo } from "@/assets/cardLogo";
import { Payway } from "@/assets/payWay";
import { GreenDot } from "@/assets/greenDot";
import { GreenUp } from "@/assets/greenUp";
import { GreenDown } from "@/assets/greenDown";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CircleChart } from "./circleChart";
import { RecordsCard1 } from "./RecordsCard1";

export const Dashboard = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  };

  const data1 = [
    {
      title: "Lending & Renting",
      date: "3 hours ago",
      amount: -1000,
    },
    {
      title: "Lending & Renting",
      date: "3 hours ago",
      amount: 1000,
    },
    {
      title: "Lending & Renting",
      date: "3 hours ago",
      amount: -1000,
    },
    {
      title: "Lending & Renting",
      date: "3 hours ago",
      amount: 1000,
    },
    {
      title: "Lending & Renting",
      date: "3 hours ago",
      amount: -1000,
    },
  ];
  return (
    <div className="flex flex-col lg:w-[1220px] w-[390px] font-normal text-[16px] items-center justify-between m-auto pt-[32px] pb-[40px] gap-6">
      <div className="flex flex-row w-full gap-[24px]">
        <div className="flex-1 flex flex-col bg-[#0166FF] h-[216px] rounded-2xl px-[32px] py-[32px] justify-between">
          <div>
            <CardLogo />
          </div>
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <div className="text-white opacity-50">Cash</div>
              <div className=" text-white text-[24px] font-semibold">
                10,000,00
              </div>
            </div>
            <div className="flex items-center">
              {" "}
              <Payway />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-white h-[216px] rounded-2xl px-[24px] py-[24px]">
          <div className="flex pb-[16px] border-b-slate-400 border-b-[1px] gap-[8px]">
            <div className="flex items-center">
              <GreenDot Color={"#84CC16"} />
            </div>
            <div className="font-semibold">Your Income</div>
          </div>
          <div className="flex flex-col  pt-[16px]">
            <div className="text-[36px] font-semibold">1,200,000₮</div>
            <div className="text-[18px] text-[#64748B]">Your Income Amount</div>
            <div className="flex gap-2">
              <div>
                <GreenUp />
              </div>
              <div className="text-[18px]">32% from last month</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col bg-white h-[216px] rounded-2xl px-[24px] py-[24px]">
          <div className="flex pb-[16px] border-b-slate-400 border-b-[1px] gap-[8px]">
            <div className="flex items-center">
              <GreenDot Color={"#0166FF"} />
            </div>
            <div className="font-semibold">Total Expenses</div>
          </div>
          <div className="flex flex-col  pt-[16px]">
            <div className="text-[36px] font-semibold">-1,200,000₮</div>
            <div className="text-[18px] text-[#64748B]">Your Income Amount</div>
            <div className="flex gap-2">
              <div>
                <GreenDown />
              </div>
              <div className="text-[18px]">32% from last month</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-1 flex-col">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Income - Expense</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
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
                    <Bar
                      dataKey="desktop"
                      fill="var(--color-desktop)"
                      radius={4}
                    />
                    <Bar
                      dataKey="mobile"
                      fill="var(--color-mobile)"
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-1 flex-col ">
          <div>
            <CircleChart />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 bg-white py-[16px] px-[24px] rounded-lg">
            <div className="text-[16px] font-semibold">Last Records</div>
            <div className="flex flex-col gap-3 ">
              {data1.map((item) => (
                <RecordsCard1
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  amount={item.amount}
                />
              ))}
            </div>
          </div>
    </div>
  );
};
