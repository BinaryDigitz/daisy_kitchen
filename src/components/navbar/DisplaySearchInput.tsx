import { useContext } from "react";
import { AppContext } from "../../providers/Context";

function DisplaySearchInput() {
  const { filterData, search, setSearch, setShowSearchBar } =
    useContext(AppContext);

  function handleSearch() {
    setShowSearchBar(false);
    setSearch({ ...search, displayBox: false });
    setSearch({ ...search, searchData: '' });
    return;
  }
  return (
    <div
      className={` ${
        !search.displayBox ? "hidden" : ""
      } max-h-[300px] overflow-auto bg-[var(--white-color)]  absolute top-[150px] lg:top-[170px] border p-3 rounded-md shadow-md  z-50 w-[80%] lg:w-[50%] translate-x-[50%] right-[50%]`}
    >
      <div title="Close" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-2  hover:scale-110 shadow-md cursor-pointer trans"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#900c3f"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
      {filterData.length > 0 && (
        <p className="flex mt-5 justify-around my-1 py-1  ">
          <span>NAME</span>
          <span>CATEGORY</span>
          <span>PRICE</span>
        </p>
      )}
      {filterData.map((item) => (
        <p
          key={item.id}
          onClick={() => {
            handleSearch();
            // IMPLEMENT NAVIGATION TO ITEM CARD
          }}
          title={`visit ${item.name}`}
          className="flex opacity-80 justify-around my-1 py-2 bg-slate-200 cursor-pointer hover:opacity-100 "
        >
          <span>{item.name}</span>
          <span>
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
          <span>{item.price} </span>
        </p>
      ))}
      {filterData.length == 0 && (
        <p className="flex flex-col text-center p-4 tex-[var(--danger-color)]">
          <span className="">ITEM NOT FOUND</span>
          <span className="text-sm  opacity-70">
            Please search by name or price
          </span>
        </p>
      )}
    </div>
  );
}

export default DisplaySearchInput;
