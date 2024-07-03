import { Button } from "./Button";

export const Part1Card = ({ img, title, description, tags }) => {
  return (
    <div className="w-[293px] h-[320px] rounded-md relative">
      <img src={img} className="rounded-md w-[100%] h-[100%] object-cover" />
      <div className="rounded-md z-10 absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.3)]"></div>
      <div className="absolute z-20 baottom-0 left-[20px] flex flex-col gap-[16px] pb-[28px]">
        <Button lai={tags} textColor="text-[#FFFFFF]" bgColor="bg-[#4B6BFB]" />
        <div className="text-[18px] font-semibold text-[#FFFFFF] h-[76px]">
          {title}
        </div>
      </div>
    </div>
  );
};
