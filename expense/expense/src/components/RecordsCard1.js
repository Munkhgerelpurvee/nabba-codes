"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { FoodIcon } from "@/assets/foodIcon";
import { HomeIcon } from "@/assets/homeIcon";

export const RecordsCard1 = ({ title, date, amount }) => {
  return (
    <div className="flex justify-between bg-white items-center px-6 py-3  border-t-slate-200 border-t-[1px]">
      <div className="flex gap-4 items-center">
        <div>{title === "Food & Drinks" ? <FoodIcon /> : <HomeIcon />}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-[12px] text-[#6B7280]">{date}</div>
        </div>
      </div>
      <div className={`${amount > 0 ? "text-[#23E01F]" : "text-[#F54949]"}`}>
        {amount}₮
      </div>
    </div>
  );
};
