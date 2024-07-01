import { Fb } from "../assets/fb"
import { In } from "../assets/in"
import { Insta } from "../assets/inst"
import { Logo } from "../assets/logo"
import { Twitter } from "../assets/twit"

export const Footer=()=>{
    return(
        <div className="flex w-[90%] flex-col m-auto pt-[64px] pb-[75px] gap-[25px] ">
            <div className="flex gap-[20px]">
                <div className="flex flex-1 flex-col gap-[12px]">
                    <div className="text-[18px] text-[#181A2A] font-semibold">About</div>
                    <div className="text-[18px] text-[#696A75] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                    <div className="flex flex-col gap-[4px] text-[16px] text-[#181A2A] font-normal">
                        <div>Email : info@jstemplate.net</div>
                        <div>Phone : 880 123 456 789</div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-[8px] text-[16px] items-center text-[#3B3C4A] font-normal">
                    <div>Home</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <div className="flex flex-1 gap-[26.67px]">
                    <div><Fb/></div>
                    <div><Twitter/></div>
                    <div><Insta/></div>
                    <div><In/></div>
                </div>
            </div>
            <div className="flex justify-between border-t-2 border-gray-200ls
         pt-[12px]">
                <div className="flex gap-[10px]">
                    <div className="flex items-center "><Logo className=""/></div>
                    <div className="flex flex-col">
                        <div className="flex">
                          <div className="text-[#141624] text-[24px]">Meta</div>
                          <div className="text-[#141624] text-[24px] font-bold">Blog</div>
                        </div>
                        <div>© All Rights Reserved.</div>
                    </div>
                </div>
                <div className="flex gap-[32px] items-center">
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                </div>
            </div>
            
        </div>
    )
}