"use client";

import { Plus } from "@/assets/plus";
import { useState } from "react";


export const Records = () => {
  return (
    <div className="flex flex-row lg:w-[1220px] w-[390px] font-normal m-auto">
        <div className="flex-1">
          <div>Records</div>
          <div className="flex items-center justify-center gap-[8px] bg-[#0166FF] text-[16px] rounded-xl text-[#FFFFFF] w-[250px]"><Plus/> Add</div>
          <div><input placeholder="Search"></input></div>
          <div>
            <div>
              <div>Types</div>
              <div>
                <div>
                  <input></input>
                  <div>All</div>
                </div>
                <div>
                  <input></input>
                  <div>Income</div>
                </div>
                <div>
                  <input></input>
                  <div>Expense</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      
    </div>
  );
};
