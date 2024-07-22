"use client";
import { HeaderLogo } from "@/assets/headerlogo";
import { Plus } from "@/assets/plus";
import { useState } from "react";


export const Header = () => {
  return (
    <div className="flex lg:w-[1220px] w-[390px] h-[72px] font-normal text-[16px] items-center justify-between m-auto">
        <div className="flex items-center gap-[24px]">
            <div><HeaderLogo/></div>
            <div>Dashboard</div>
            <div>Records</div>
        </div>
        <div className="flex items-center gap-[24px]">
            <div className="flex items-center bg-[#0166FF] text-[16px] rounded-xl text-[#FFFFFF] gap-[8px] px-2 py-2 ">
                <div className="text-[24px]"><Plus/></div>
                <div>Record</div>
            </div>
            <div><img
              className="shadow-about w-[40px] h-[40px]  rounded-[20px]"
              src="/Placeholder.png"
            /></div>
        </div>
      
    </div>
  );
};
