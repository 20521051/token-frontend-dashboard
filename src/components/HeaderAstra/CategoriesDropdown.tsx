import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon, XmarkIcon } from "../Icons";

export const Categories = [
  "Ăn vặt",
  "Dược phẩm",
  "Đèn năng lượng",
  "Đồ chơi trẻ em",
  "Hạt dinh dưỡng",
  "Nước giải khát",
  "Phụ kiện điện tử",
  "Quà tết 2023",
  "Sức khỏe & Làm đẹp",
  "Thể thao & Du lịch",
  "Thiết bị điện tử",
  "Thời trang & Phụ kiện",
  "Thực phẩm bổ sung",
];

export default function CategoriesDropdown() {
  return (
    <div>
      <Menu as="div" className={`relative text-left`}>
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                className={`flex w-full sm:justify-center sm:hover:bg-sky-700 sm:px-8 sm:text-slate-500 sm:hover:text-white sm:py-3 transition duration-700 sm:rounded-sm sm:text-sky-500 sm:text-lg font-medium ${
                  open ? "sm:bg-sky-700" : ""
                }`}
              >
                {open ? (
                  <div className="text-sky-700 sm:hidden">
                    <XmarkIcon />
                  </div>
                ) : (
                  <div className="mt-[-3px] sm:hidden">
                    <MenuIcon />
                  </div>
                )}
                <p className={`${open ? "text-white" : ""} sm:flex hidden`}><MenuIcon /></p>
                <p className={`${open ? "text-white" : ""}`}>Danh Mục</p>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {Categories.map((cate, index) => (
                  <div key={index} className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-sky-700 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {cate}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
