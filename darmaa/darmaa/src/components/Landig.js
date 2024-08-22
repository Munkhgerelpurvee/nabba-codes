import { JavascriptIcon } from "../assets/icons/javascriptsvg";
import { FaCircle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export const Landig = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col   items-center h-max py-[40px] gap-[24px]">
      <div className="flex justify-between w-[80%]">
        <Link href={`/`}>
          <div className="cursor-pointer text-white bg-[#080062] w-[126px] h-[34px] rounded-lg items-center flex justify-center border  border-[#007EF2]">
            Танилцуулга
          </div>
        </Link>
        <Link href={`/hutulbur`}>
          <div className="cursor-pointer text-white bg-[#080062] w-[126px] h-[34px] rounded-lg items-center flex justify-center border  border-[#007EF2]">
            Хөтөлбөр
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="flex w-full justify-center text-center text-2xl font-extrabold text-[#FFCF54] dark:text-[#F9FAFB]">
          Монгол Улсын Начин
        </h1>
        <h1 className="text-2xl w-full justify-center text-center text-white font-extrabold dark:text-[#F9FAFB]">
          Галбадрахын Дармаажанцан
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex gap-8">
        <div className="flex flex-1 items-center justify-center">
          <Image
            className="w-full rounded-[20px]"
            src="/me.png"
            alt="Description of the image"
            width={500} // Replace with actual width
            height={500} // Replace with actual height
          />
        </div>
        <div className="flex-1 flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[8px] text-white">
            <div>Төрсөн өдөр: 2000 он 03 сар 29 өдөр</div>
            <div>
              Харьяалал: &quot;Ховд&quot; дэвжээ, &quot;Алдар&quot; спорт хороо,
              ЗХ-034 анги, Бүрэн Минж Транс ХХК, УСУГ
            </div>
            <div className="text-white dark:text-[#F9FAFB] text-justify">
              Ховд аймгийн Дөргөн суманд төрж өссөн.
            </div>
            <div>
              2020 онд Ховд аймгийн баяр наадамд зургаа давж, аймгийн арслан
              Ц.Төмөрцоожид өвдөг шороодон үзүүрлэж &quot;Аймгийн заан&quot; цол
              хүртсэн.
            </div>
            <div>
              2022 онд Ховд аймгийн баяр наадамд аймгийн арслан Б.Даваадалайгаар
              долоо даван түрүүлж &quot;Аймгийн арслан&quot; цол хүртсэн.
            </div>
            <div>
              2024 онд АХ-ын 103 жилийн ойн баяр наадамд улсын харцага
              Г.Бадрахаар дөрөв, цэргийн арслан Г.Жамбалдоржоор тав давж
              &quot;Монгол улсын начин&quot; цолыг хүртсэн.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
