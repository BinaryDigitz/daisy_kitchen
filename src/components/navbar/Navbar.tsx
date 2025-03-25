import {
  InputSearch,
  Logo,
  NavbarItems,
  NavbarMenu,
  Cart,
  User,
  Search,
  DisplaySearchInput,
} from "../exportComp";
import { ProductTypes } from "../../types";
import { ChangeEvent, useContext, useEffect } from "react";
import { AppContext } from "../../providers/Context";

interface Props {
  data: ProductTypes[];
}
function Navbar({ data }: Props) {
 const{  setFilterData, search, setSearch } = useContext(AppContext)
 

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const searchData = event.target.value;
    setSearch({ ...search, searchData: searchData });
    setFilterData(
      data.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
      )
    );
  }
  useEffect(() => {
    if (search.searchData.length > 0) {
      return setSearch({ ...search, displayBox: true });
    } else {
      return setSearch({ ...search, displayBox: false });
    }
  }, [search.searchData]);

  return (
    <nav>
      <div className=" relative flex md:justify-around gap-3 justify-between items-center p-3 py-4 mt-4 text-[var(--black-color1)] b-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] ">
        <Logo />
        <NavbarItems />
        <div className="flex h-14 gap-4 items-center">
          <InputSearch  />
          <Cart />
          <User />
        <NavbarMenu />
        </div>
        <DisplaySearchInput />
       
      </div>
       
      <Search handleInput={handleInput} search={search} />
    </nav>
  );
}

export default Navbar;
