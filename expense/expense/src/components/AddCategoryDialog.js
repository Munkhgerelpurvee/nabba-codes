"use client";

import { Plus } from "@/assets/plus";
import { useState, useEffect } from "react";
import { Eye } from "@/assets/eye";
import { RDirect } from "@/assets/rdirect";
import { BluePlus } from "@/assets/blueplus";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { AddIcon } from "@/assets/addIcon";

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
import { AddCategory } from "./addCategory";
import { AddHome } from "@/assets/addHome";
import { AddCategoryIconMap } from "./AddCategoryIconMap";
import { Axios } from "axios";

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

export const AddCategoryDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div>
            <div className="flex items-center gap-2">
              <BluePlus /> Add Category
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className=" flex flex-col bg-white gap-[20px]">
            <div className="flex  pb-[20px] border-b-[1px] border-slate-400">
              <div className="text-[20px] font-semibold">Add Category</div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="w-[100%] h-12 ">
                    <SelectValue placeholder={<AddHome />} />
                  </SelectTrigger>
                  <AddCategoryIconMap />
                </Select>
              </div>
              <div className="flex-[3]">
                <input
                  placeholder="Name"
                  className="bg-[#F9FAFB] text-[#D1D5DB] w-[100%] h-12 rounded-lg pl-4"
                ></input>
              </div>
            </div>
            <button className="text-white bg-[#16A34A] rounded-3xl flex justify-center items-center py-[8px]">
              Add Category
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
