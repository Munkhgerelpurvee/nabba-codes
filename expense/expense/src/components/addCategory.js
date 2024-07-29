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
    title: "Home",
    icon: <AddHome />,
  },
  {
    title: "Gift",
    icon: <AddGift />,
  },
  {
    title: "Food",
    icon: <AddFood />,
  },
  {
    title: "Drink",
    icon: <AddDrink />,
  },
  {
    title: "Taxi",
    icon: <AddTaxi />,
  },
  {
    title: "Shoppping",
    icon: <AddShopping />,
  },
];
export const AddCategory = () => {
  return (
    <SelectContent className="flex flex-col">
      <div className="flex px-4 py-4 gap-3 border-b">
        <AddCategoryDialog />
      </div>
      {categoryData.map((item) => (
        <SelectItem value={item.title}>
          <div className="flex px-4 py-4 gap-3 items-center">
            <div>{item.icon}</div>
            <div className="text-[16px]">{item.title}</div>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  );
};
