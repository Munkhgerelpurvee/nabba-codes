import { Logo } from "../assets/logo"
import { SearchIcon } from "../assets/searchicon"

export const Header=()=>{
    return(
        <div className="flex justify-between">
            <div className="flex">
                <div><Logo/></div>
                <div className="flex">
                    <div>Meta</div>
                    <div>Blog</div>
                </div>
            </div>
            <div className="flex">
                <div>Home</div>
                <div>Blog</div>
                <div>Contact</div>
            </div>
            <div className="flex">
                <input type="text" placeholder="Search"></input>
                <div className="w-[16px] h-[16px]"><SearchIcon/></div>
            </div>
        </div>
    )
}