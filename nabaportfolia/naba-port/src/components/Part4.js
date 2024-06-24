import { JavaIcon } from "../assets/icons/javaicon";
import { Button } from "./Button";
export const Part4 = () => {
    return (
        <div className="w-[90%] m-auto flex flex-col gap-[24px]  h-max rounded-[20px] py-[96px]">
            <div className=" flex items-center m-auto">
                <Button value="Skills" />
            </div>
            <div className="flex ">
                <div className="flex m-auto items-center justify-center">  The skills, tools and technologies I am really good at:</div>
            </div>
            <div className=" flex gap-[64px] flex-wrap justify-center">
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
                <JavaIcon />
            </div>
        </div>
    )
}