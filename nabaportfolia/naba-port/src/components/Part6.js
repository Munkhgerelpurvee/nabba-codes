import { Button } from "./Button";
import { Part6Card } from "./Part6-card";

// const data = [{ title: "dhed", src: "Picture.png" }, { title: "fjhgjh", src: "Picture2.png" }, { title: "hgfruyg", src: "Picture3.png" }]

export const Part6 = () => {
    return (
        <div className="w-[90%] m-auto flex flex-col gap-[48px]  h-max rounded-[20px] py-[96px]">
            <div className="flex items-center flex-col gap-[16px]">
                <div className=" flex items-center m-auto">
                    <Button value="Work" />
                </div>
                <div className="flex ">
                    <div className="flex m-auto items-center justify-center">Some of the noteworthy projects I have built:</div>
                </div>

            </div>
            {/* {data.map((item) => (
                <Part6Card title={item.title} src={item.src} reverse />
            ))} */}
            <Part6Card title="UBCab" src="Picture.png" />
            <Part6Card title="Mentorhub" src="Picture2.png" reverse />
            <Part6Card title="iToim" src="Picture3.png" />
        </div>

    )
}