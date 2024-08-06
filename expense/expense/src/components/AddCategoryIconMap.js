"use client";
import { HeaderLogo } from "@/assets/headerlogo";
import { Plus } from "@/assets/plus";
import React, { useState } from "react";
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
import { icons } from "lucide-react";

const categoryData = [
  {
    icon: FaBus,
  },
  {
    icon: FaApple,
  },
  {
    icon: FaAndroid,
  },
  {
    icon: FaAngellist,
  },
  {
    icon: FaApplePay,
  },
  {
    icon: FaArchway,
  },
  {
    icon: FaAppStore,
  },
  {
    icon: FaAtlas,
  },
  {
    icon: FaBabyCarriage,
  },
  {
    icon: FaBasketballBall,
  },
  {
    icon: FaBus,
  },
  {
    icon: FaApple,
  },
  {
    icon: FaAndroid,
  },
  {
    icon: FaAngellist,
  },
  {
    icon: FaApplePay,
  },
  {
    icon: FaArchway,
  },
  {
    icon: FaAppStore,
  },
  {
    icon: FaAtlas,
  },
  {
    icon: FaBabyCarriage,
  },
  {
    icon: FaBasketballBall,
  },
];
const ColorData = [
  {
    color: "#0166FF",
  },
  {
    color: "#01B3FF",
  },
  {
    color: "#41CC00",
  },
  {
    color: "#F9D100",
  },
  {
    color: "#FF7B01",
  },
  {
    color: "#AE01FF",
  },
  {
    color: "#FF0101",
  },
];
export const AddCategoryIconMap = () => {
  const [Color, setColor] = useState("");

  return (
    <SelectContent>
      <div className="px-6 py-6">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-5">
            {categoryData.map((item, index) => {
              const Icon = item.icon;
              return (
                <SelectItem value={index}>
                  <div className=" p-0 items-center">
                    <Icon style={{ color: Color }} className="text-[20px]" />
                    <div className="text-[16px]">{item.title}</div>
                  </div>
                </SelectItem>
              );
            })}
          </div>
          <div className="flex gap-4 border-t pt-6">
            {ColorData.map((item, index) => (
              <div
                className="w-8 h-8 rounded-[50%] ${item.color}"
                style={{ backgroundColor: item.color }}
                onClick={() => {
                  setColor(item.color);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </SelectContent>
  );
};
