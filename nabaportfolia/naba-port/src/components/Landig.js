import { JavascriptIcon } from "../assets/icons/javascriptsvg";
import { FaCircle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Landig = () => {
    return (
        <div className="w-[90%] m-auto flex flex-col-reverse  lg:flex lg:flex-row items-center h-max py-[96px] gap-[48px]">
            <div className="flex-1 flex flex-col gap-[48px]">
                <div className="flex flex-col gap-[8px]">
                    <h1 className="text-4xl font-extrabold">Сайн уу, Наба байна 👋</h1>
                    <div className="text-gray-500"> Би 2021 онд МУИС-ыг Санхүү Менежмент мэргэжлээр 2021 оны 5 сараас 2024 оны 4 сар хүртэлх хугацаанд Зээлийн эдийн засагч, Онлайн хэрэглээний зээл хариуцсан мэргэжилтэн, Бүтээгдэхүүн хариуцсан мэргэжилтэн албан тушаалуудад тус тус ажилсан туршлагатай. Багаасаа технологийн салбарт сонирхолтой байсан боловч оролдож үзэлгүй явсаар 2023 оноос эхлэн Pinecone академийг сонирхон 2024 оны хаврын элсэлтээр LEAP хөтөлбөрт суралцаж байна. Ирээдүйд олон төслүүдэд оролцон чадвараа сайжруулан дэлхийд үнэлэгдсэн программ хөгжүүлэгч болохоор хичээн суралцах болно.
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