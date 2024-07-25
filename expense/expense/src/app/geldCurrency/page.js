"use client";

import { HeaderLogo } from "@/assets/headerlogo";
import Link from "next/link";

const GeldCurrency = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <div className="flex items-center justify-center gap-3">
        <Link href={`/`}>
          <div>
            <HeaderLogo />
          </div>
        </Link>
        <div className="text-[64px] font-bold">Geld</div>
      </div>
      <div className="flex items-center">
        <div className="border flex flex-col items-center justify-center gap-4px">
            <div className="w-[24px] h-[24px] bg-[#0166FF] rounded-[50%] text-sm text-white flex justify-center items-center ">1</div>
            <div className="text-[14px] text-slate-900">Currency</div>
        </div>
        <div className="w-[92px] h-[2px] border-4 border-[#E5E7EB] "></div>
        <div className="border flex flex-col items-center justify-center gap-4px">
            <div className="w-[24px] h-[24px] bg-[#E5E7EB] rounded-[50%] text-sm text-black flex justify-center items-center ">2</div>
            <div className="text-[14px] text-slate-900">Balance</div>
        </div>
        <div className="w-[92px] h-[2px] border-4 border-[#E5E7EB] "></div>
        <div className="border flex flex-col items-center justify-center gap-4px">
            <div className="w-[24px] h-[24px] bg-[#E5E7EB] rounded-[50%] text-sm text-black flex justify-center items-center ">3</div>
            <div className="text-[14px] text-slate-900">Finish</div>
        </div>
      </div>
    </main>
  );
};
export default GeldCurrency;
