"use client";

import { Plus } from "@/assets/plus";
import { useState } from "react";
import { Eye } from "@/assets/eye";
import { RDirect } from "@/assets/rdirect";
import { BluePlus } from "@/assets/blueplus";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@/assets/homeIcon";
import { FoodIcon } from "@/assets/foodIcon";
import { RecordsCard } from "./RecordsCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const data = [
  { title: "Food & Drinks" },
  { title: "Shopping" },
  { title: "Housing" },
  { title: "Transportation" },
  { title: "Vehicle" },
  { title: "Life & Entertainment" },
  { title: "Communication, PC" },
  { title: "Financial expenses" },
  { title: "Investments" },
  { title: "Income" },
  { title: "Others" },
];
const data1 = [
  {
    title: "Lending & Renting",
    date: "14:00",
    amount: -1000,
  },
  {
    title: "Food & Drinks",
    time: "14:00",
    amount: 1000,
  },
  {
    title: "Food & Drinks",
    time: "14:00",
    amount: -1000,
  },
  {
    title: "Food & Drinks",
    time: "14:00",
    amount: 1000,
  },
  {
    title: "Food & Drinks",
    time: "14:00",
    amount: -1000,
  },
];

export const Records = () => {
  const [activeButton, setActiveButton] = useState("expense");
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="flex flex-row lg:w-[1220px] w-[390px] font-normal m-auto pt-6 pb-6 gap-[100px]">
      <div className="flex-1 flex flex-col gap-[24px]  bg-white pl-4 pr-4 rounded-xl border pb-6">
        <div className="text-[24px] font-semibold">Records</div>

        <Dialog>
          <DialogTrigger>
            <div>
              <div className="flex items-center justify-center gap-[8px] w-[250px] bg-[#0166FF] text-[16px]  text-[#FFFFFF] rounded-3xl py-2 ">
                <Plus /> Add
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <div className=" flex flex-col bg-white gap-[20px]">
              <div className="flex  pb-[20px] border-b-[1px] border-slate-400">
                <div className="text-[20px] font-semibold">Add Record</div>
              </div>
              <div className="flex gap-[16px] ">
                <div className="flex-1 flex flex-col gap-4 ">
                  <div className="flex relative">
                    <div
                      className={`py-2 px-14 rounded-3xl z-10 transition-colors ${
                        activeButton === "expense"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 rounded-r-none"
                      }`}
                      onClick={() => handleButtonClick("expense")}
                    >
                      Expense
                    </div>
                    <div
                      className={`py-2 px-14 absolute top-0 left-40 rounded-r-3xl transition-colors ${
                        activeButton === "income"
                          ? "bg-green-600 text-white z-10 rounded-l-3xl"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleButtonClick("income")}
                    >
                      Income
                    </div>
                  </div>
                  <div className="border px-[16px] py-[12px] rounded-lg">
                    <div>Amount</div>
                    <div>
                      <input placeholder="₮ 000.00"></input>
                    </div>
                  </div>
                  <div>
                    <div>Category</div>
                    <div>
                      <Select>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className=" flex gap-3">
                    <div>
                      <div>Date</div>
                      <div>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <div>Date</div>
                      <div>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="text-white bg-[#0166FF] rounded-3xl flex justify-center items-center py-[8px]">
                    Add Record
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div>
                    <div>Payee</div>
                    <div>
                      <Input />
                    </div>
                  </div>
                  <div>
                    <div>Note</div>
                    <div>
                      <Textarea />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div>
          <input
            className=" w-[100%] rounded-xl pl-[16px] border bg-[#F3F4F6]"
            placeholder="Search"
          ></input>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="text-[16px] font-semibold">Types</div>
            <div className="flex-col gap-1">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Income</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-two">Expences</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="text-[16px] font-semibold">Category</div>
            <div className="text-[#1F2937] text-base opacity-20">clear</div>
          </div>
          <div className="flex flex-col gap-2">
            {data.map((item) => (
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div>{<Eye />}</div>
                  <div>{item.title}</div>
                </div>
                <div>
                  <RDirect />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <BluePlus /> Add Category
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[16px] font-semibold">Amount Range</div>
          <div className="flex gap-4">
            <div className="flex-1 flex items-center border rounded-lg h-12 pl-2 bg-[#F3F4F6]">
              0
            </div>
            <div className="flex-1 flex items-center border rounded-lg h-12 pl-2 bg-[#F3F4F6]">
              1000
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Slider defaultValue={[0]} max={1000} step={50} />
            <div className="flex justify-between">
              <div>0</div>
              <div>1000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6  flex-[4]">
        <div className="flex justify-between  ">
          <div className="w-[160px] pl-[48px]">
            <Carousel>
              <CarouselContent>
                <CarouselItem>Last 10 Days</CarouselItem>
                <CarouselItem>Last 20 Days</CarouselItem>
                <CarouselItem>Last 30 Days</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Newest First" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Newest First">Newest First</SelectItem>
                <SelectItem value="Oldest First">Oldest First</SelectItem>
                <SelectItem value="Highest First">Highest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" flex flex-col gap-6">
          <div className="flex justify-between bg-white py-[12px] px-[24px]">
            <div className="flex gap-4">
              <div>
                <Checkbox height={6} width={6} />
              </div>
              <div>Select all</div>
            </div>
            <div className="text-slate-400">-35,500₮</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[16px] font-semibold">Today</div>
            <div className="flex flex-col gap-3 ">
              {data1.map((item) => (
                <RecordsCard
                  title={item.title}
                  date={item.date}
                  amount={item.amount}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[16px] font-semibold">Yesterday</div>
            <div className="flex flex-col gap-3 ">
              {data1.map((item) => (
                <RecordsCard
                  title={item.title}
                  date={item.date}
                  amount={item.amount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
