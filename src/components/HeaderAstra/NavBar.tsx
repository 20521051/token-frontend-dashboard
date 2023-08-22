import CategoriesDropdown from "./CategoriesDropdown";

const menuItems = [
  "Trang Chủ",
  "Sản Phẩm",
  "Bài Viết",
  "Về Chúng Tôi",
  "Liên Hệ",
];

function Navbar() {
  return (
    <nav className="sm:flex hidden px-32 bg-white items-center border-b-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex">
          <CategoriesDropdown />
          {menuItems.map((menuItem, index) => (
            <button
              key={index}
              className="px-8 text-slate-500 hover:bg-sky-700 hover:text-white py-3 transition duration-700 rounded-sm text-sky-500 text-lg font-medium"
            >
              {menuItem}
            </button>
          ))}
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
