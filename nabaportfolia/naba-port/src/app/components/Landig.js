import { JavascriptIcon } from "../assets/icons/javascriptsvg";
import { FaCircle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Landig = () => {
    return (
        <div className="w-[90%] m-auto flex items-center h-max py-[96px] gap-[48px]">
            <div className="flex-1 flex flex-col gap-[48px]">
                <div className="flex flex-col gap-[8px]">
                    <h1 className="text-4xl font-extrabold">Hi, I’m NABA 👋</h1>
                    <div className="text-gray-500">I specialize in full stack development, particularly with React.js and Node.js.
                        My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.
                    </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[8px] items-center">
                        < JavascriptIcon />
                        Ulaanbaatar, Mongolia
                    </div>
                    <div className="flex gap-[8px] items-center">
                        <div className="text-green-500 w-[24px] h-[24px] items-center flex justify-center"> < FaCircle /></div>
                        Available for new projects
                    </div>
                </div>
                <div className="flex gap-[8px] items-center">
                < FaFacebookSquare className="w-[24px] h-[24px]" />
                < FaInstagram className="w-[24px] h-[24px]" />
                < BiLogoGmail className="w-[24px] h-[24px]" />
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <img className="w-[320px] h-[320px] rounded-[20px]" src="/me.jpg" />
            </div>
        </div>
    )
}