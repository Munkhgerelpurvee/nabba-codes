export const Tcard = ({ img, title, description }) => {
  return (
    <div className="w-[293px] h-[320px] rounded-md relative">
      <img src={img} className="rounded-md w-[100%] h-[100%]" />
      <div className="absolute bottom-0 left-[20px]">
        <div className="px-[10px] py-[4px] w-fit bg-[#4B6BFB] text-center rounded-md text-[#FFFFFF] text-[14px] font-medium">
          {title}
        </div>

        <div className="text-[18px] font-semibold text-[#FFFFFF]">
          {description}
        </div>
      </div>
    </div>
  );
};
