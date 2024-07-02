export const Part1 = () => {
  return (
    <div className="w-[1220px] relative m-auto">
      <img src="/Image1.png" className=" w-[100%] g-[600px]" />
      <div className="absolute flex flex-col bg-[#FFFFFF] shadow-md rounded-md	bottom-[13px] left-[11px] w-[598px] h-[252px] justify-evenly">
        <div className="px-[50px]">
          <div className="px-[10px] py-[4px] w-fit bg-[#4B6BFB] text-center rounded-md text-[#FFFFFF] text-[14px] font-medium">
            Technology
          </div>

          <div className="text-[36px] font-semibold text-[#181A2A] w-[400px]">
            Grid system for better Design User Interface
          </div>

          <div className="text-[16px] font-normal text-[#97989F]">
            August 20, 2022
          </div>
        </div>
      </div>
    </div>
  );
};
