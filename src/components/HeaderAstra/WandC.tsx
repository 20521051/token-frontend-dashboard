import { useState } from "react";
import { CartIcon, HeartIcon, MenuIcon, SearchIcon, XmarkIcon } from "../Icons";
import CategoriesDropdown from "./CategoriesDropdown";

const menuItems = [
  "Trang Chủ",
  "Sản Phẩm",
  "Bài Viết",
  "Về Chúng Tôi",
  "Liên Hệ",
];

function WandC() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex text-slate-50 space-x-5 pl-16">
      <button className="">
        <HeartIcon />
      </button>
      <button>
        <CartIcon />
      </button>
      <div className="sm:hidden flex space-x-5">
        <button>
          <SearchIcon />
        </button>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? <XmarkIcon /> : <MenuIcon />}
        </button>

        <div
          className={`
        ${
          !toggle ? "hidden" : "flex"
        }  bg-white absolute top-28 right-0 mx-4 my-2 min-w-[140px] 
        `}
        >
          <ul className=" list-none flex justify-end text-slate-500 items-start flex-1 flex-col">
            <li className=" pb-2 pl-2 border-b w-full"><CategoriesDropdown /></li>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="font-medium cursor-pointer text-[16px] pb-2 pl-2 border-b w-full"
                onClick={() => {}}
              >
                <a href="{`#`}">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WandC;
