"use client";
import { HeaderLogo } from "@/assets/headerlogo";
import { Plus } from "@/assets/plus";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AddIcon } from "@/assets/addIcon";
import { HomeIcon } from "@/assets/homeIcon";
import { FoodIcon } from "@/assets/foodIcon";
import { AddGift } from "@/assets/addGift";
import { AddFood } from "@/assets/addFood";
import { AddDrink } from "@/assets/addDrink";
import { AddTaxi } from "@/assets/addTaxi";
import { AddShopping } from "@/assets/addShopping";
import { AddHome } from "@/assets/addHome";
import { FaBus } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaArchway } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { FaAtlas } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddCategoryDialog } from "./AddCategoryDialog";

const categoryData = [
  {
    icon: <FaBus />,
  },
  {
    icon: <FaApple />,
  },
  {
    icon: <FaAndroid />,
  },
  {
    icon: <FaAngellist />,
  },
  {
    icon: <FaApplePay />,
  },
  {
    icon: <FaArchway />,
  },
  {
    icon: <FaAppStore />,
  },
  {
    icon: <FaAtlas />,
  },
  {
    icon: <FaBabyCarriage />,
  },
  {
    icon: <FaBasketballBall />,
  },
];
export const AddCategoryIconMap = () => {
  return (
    <SelectContent>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-5">
          {categoryData.map((item, index) => (
            <SelectItem value={index}>
              <div className=" p-0 items-center">
                <div>{item.icon}</div>
                <div className="text-[16px]">{item.title}</div>
              </div>
            </SelectItem>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded-[50%] bg-[#0166FF]"></div>
          <div className="w-6 h-6 rounded-[50%] bg-[#01B3FF]"></div>
          <div className="w-6 h-6 rounded-[50%] bg-[#41CC00]"></div>
          <div className="w-6 h-6 rounded-[50%] bg-[#F9D100]"></div>
          <div className="w-6 h-6 rounded-[50%] bg-[#FF7B01]"></div>
          <div className="w-6 h-6 rounded-[50%] bg-[#AE01FF]"></div>
          <div className="w-6 h-6 rounded-[50%] bg-[#FF0101]"></div>
        </div>
      </div>
    </SelectContent>
  );
};
