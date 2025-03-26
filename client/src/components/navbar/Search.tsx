import { ChangeEvent, useContext } from "react";
import { AppContext } from "../../providers/Context";
interface Search {
  displayBox: boolean;
  searchData: string;
}
interface Props {
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  search: Search;
}

function Search({ handleInput, search }: Props) {
  const { showSearchBar, setShowSearchBar } = useContext(AppContext);

  return (
    <div
      className={`${
        showSearchBar ? "flex" : "hidden"
      } text-black m-auto my-[var(--sm-margin)] w-[90%] lg:w-1/2 gap-3 items-center`}
    >
      <div className="border m-auto py-2 rounded-md shadow-sm w-full flex border-red-200 bg-gradient-to-r from-white to-red-50">
        <input
          type="text"
          value={search.searchData}
          onChange={(event) => handleInput(event)}
          placeholder=" Search"
          className="outline-none border-none flex-1 text-red-950"
        />
      </div>
      <svg
        onClick={() => setShowSearchBar(false)}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        className="cursor-pointer size-9 fill-red-800 hover:scale-110 trans"
        viewBox="0 -960 960 960"
        width="24px"
        fill=""
        
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  );
}

export default Search;
