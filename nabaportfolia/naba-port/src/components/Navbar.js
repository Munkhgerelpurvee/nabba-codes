import styles from "./Navbar.module.css"
import { FaListUl } from "react-icons/fa6";

export const Navbar = () => {
    return (
        <div className="w-[90%] m-auto flex justify-between items-center h-max rounded-[20px] py-[32px]">
            <div className="text-4xl font-extrabold">NABA</div>
            <div><FaListUl className="w-[36px] h-[36px] lg:hidden" /></div>
            <div className="lg:flex hidden">
                <div className="flex gap-[24px] border-r-2 border-grey pr-16 items-center">
                    <div>Миний тухай</div>
                    <div>Ажлын туршлага</div>
                    <div>Чадвар</div>
                    <div>Холбоо барих</div>
                </div>
                <div className="flex gap-[24px] pl-16 items-center">
                    <img className="w-[24px] h-[24px]" src="/Icon.png" />
                    <div className="px-[24px] py-[8px] rounded-[16px] bg-black text-white">CV татах</div>
                </div>
            </div>
        </div>
    )
}