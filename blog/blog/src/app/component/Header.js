import { Logo } from "../assets/logo"
import { SearchIcon } from "../assets/searchicon"

export const Header=()=>{
    return(
        <div className="flex w-[90%] items-center justify-between m-auto pt-[32px] pb-[32px]">
            <div className="flex gap-[8px]">
                <div className="w-[36px] h-[36px]"><Logo/></div>
                <div className="flex items-center">
                    <div className="text-[#141624] text-[24px]">Meta</div>
                    <div className="text-[#141624] text-[24px] font-bold">Blog</div>
                </div>
            </div>
            <div className="flex gap-[40px] text-[16px] text-[#3B3C4A] font-medium items-center">
                <div>Home</div>
                <div>Blog</div>
                <div>Contact</div>
            </div>
            <div className="flex items-center w-[166px] h-[36px] bg-[#F4F4F5] pt-[8px] pr-[8px] pb-[8px] pl-[16px]">
                <input type="text" placeholder="Search" className="w-[114px] bg-[#F4F4F5] text-[#A1A1AA] text-[14px]"></input>
                <div className="w-[16px] h-[16px]"><SearchIcon/></div>
            </div>
        </div>
    )
}