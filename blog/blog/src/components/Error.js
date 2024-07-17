import { NavList } from "@/assets/navlist";
import Link from "next/link";

export const Error = () => {
  return (
    <div className="flex flex-row lg:w-[1220px] w-[390px] items-center m-auto pt-[68px] pb-[32px] gap-[30px]">
      <div className="text-[72px] flex-1 self-center flex justify-end pr-[60px] border-r-2">
        <div>404</div>
      </div>
      <div className="flex-1 flex flex-col gap-[20px] pl-[60px]">
        <div className="text-[24px] font-semibold">Page Not Found</div>
        <div className="text-[18px] font-medium text-[#696A75]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </div>
        <Link href={`/`}>
          <div className="px-[16px] py-[10px] flex w-fit text-center rounded-md text-[14px] font-medium text-[#FFFFFF] bg-[#4B6BFB]">
            Back To Home
          </div>
        </Link>
      </div>
    </div>
  );
};
