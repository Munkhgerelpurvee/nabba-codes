import { Left } from "../assets/left";
import { Right } from "../assets/right";

export const Part1 = () => {
  return (
    <div className="lg:w-[1220px] w-[390px] flex flex-col gap-[11px] m-auto">
      <div className="lg:w-[1220px] w-[390px] h-[600px] relative m-auto">
        <img
          src="/Image1.png"
          className=" w-[100%] h-[100%] object-cover rounded-md "
        />
        <div className="absolute flex flex-col gap-[24px] bg-[#FFFFFF] py-[40px] shadow-md rounded-md	bottom-[13px] lg:left-[11px] left-[5%] lg:w-[598px] w-[90%] lg:h-[252px] justify-evenly">
          <div className="px-[50px]">
            <div className="px-[10px] py-[4px] w-fit bg-[#4B6BFB] text-center rounded-md text-[#FFFFFF] text-[14px] font-medium">
              Technology
            </div>

            <div className="text-[36px] font-semibold text-[#181A2A] lg:w-[400px] w-fit">
              Grid system for better Design User Interface
            </div>

            <div className="text-[16px] font-normal text-[#97989F]">
              August 20, 2022
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-end justify-center gap-[9px] ">
        <div>
          <Left />
        </div>
        <div>
          <Right />
        </div>
      </div>
    </div>
  );
};
