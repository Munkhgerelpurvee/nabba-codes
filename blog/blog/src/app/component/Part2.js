import { Tcard } from "./Tcard";

export const Part2 = ({ data }) => {
  return (
    <div className="lg:w-[1220px] w-[390px] m-auto flex flex-col gap-[30px] pt-[100px] ">
      <div className="text-[24px] text-[#181A2A] font-bold">Trending</div>
      <div className="overflow-x-scroll w-[100%]">
        <div className="flex w-fit gap-[20px]">
          {data.slice(1, 12).map((item) => (
            <Tcard
              img={item.cover_image}
              title={item.title}
              description={item.description}
              tags={item.tag_list}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
