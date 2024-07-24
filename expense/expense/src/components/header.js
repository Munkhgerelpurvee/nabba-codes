"use client";
import { HeaderLogo } from "@/assets/headerlogo";
import { Plus } from "@/assets/plus";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="flex lg:w-[1220px] w-[390px] h-[72px] font-normal text-[16px] items-center justify-between m-auto">
      <div className="flex items-center gap-[24px]">
        <div>
          <HeaderLogo />
        </div>
        <div>Dashboard</div>
        <div className="font-semibold">Records</div>
      </div>
      <div className="flex items-center gap-[24px]">
        <Button>
          <div className="flex items-center bg-[#0166FF] text-[16px] text-[#FFFFFF] gap-[8px]">
            <div>
              <Plus />
            </div>
            <div>Record</div>
          </div>
        </Button>
        <div>
          <img
            className="shadow-about w-[40px] h-[40px]  rounded-[20px]"
            src="/Placeholder.png"
          />
        </div>
      </div>
    </div>
  );
};
