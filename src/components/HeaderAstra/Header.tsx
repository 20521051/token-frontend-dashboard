import SearchBar from "./SearchBar";
import Logo from "./Logo";
import InfoBar from "./InfoBar";
import WandC from "./WandC";
import NavBar from "./NavBar";

function HeaderAstra() {
  return (
    <div className="w-auto bg-gradient-to-r from-green-300 to-blue-300">
      <InfoBar />
      <div className="sm:px-32 px-2 flex">
        <div className="flex basis-1/3">
          <Logo />
        </div>
        <div className="sm:flex hidden basis-1/3">
          <SearchBar />
        </div>
        <div className="flex basis-1/3 justify-end">
          <WandC />
        </div>

      </div >
      <NavBar />
    </div>
  );
}

export default HeaderAstra;
