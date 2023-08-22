import { SearchIcon } from "../Icons"

function SearchBar() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex">
          <input
            type="text"
            className=" w-96 px-4 py-2 text-purple-700 bg-white border rounded-l-full border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Tìm kiếm"
          />
          <button className=" px-3 text-white bg-white border border-purple-400 rounded-r-full hover:bg-slate-200 transition duration-300">
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
