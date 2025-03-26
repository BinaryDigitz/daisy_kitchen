import { useContext, useState } from "react";
import { productsTypes } from "../data";
import { AppContext } from "../providers/Context";
interface Props {
  onFilter: (filter: string) => void;
  filterProduct: string;
}
function FilterProducts({ onFilter, filterProduct }: Props) {
  const { closeAllMenues } = useContext(AppContext);
  const [showProducts, setShowProducts] = useState(false);
  const [active, setActive] = useState("all");

  const bottonName =
    filterProduct &&
    productsTypes.map((item) => item.id === filterProduct && item.name);
  return (
    <section className="relative trans p-4 z-2 w-full lg:grid place-items-center">
      <div className="hidden lg:flex ">
        {productsTypes.map((item, index) => (
          <button
            onClick={() => {
              if (item.id === "") {
                setActive("all");
              }
              setActive(item.id);
              setShowProducts(false);
              onFilter(item.id);
            }}
            className={`px-4 py-2 opacity-95 text-[var(--black-color)] hover:bg-red-50 shadow-md shadow-red-200 mx-1  text-sm rounded-lg  ${
              active === item.id
                ? "bg-red-200 text-[var(--secondary-color)] "
                : "bg-white text-red-950 "
            }`}
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="flex justify-start w-full">
        <button
          className="border lg:hidden  rounded-md py-2 px-3 w-56 flex border-[var(--secondary-color)] text-[var(--secondary-color)]"
          onClick={() => {
            closeAllMenues()
            setShowProducts(!showProducts)
          }}
        >
          Sort by:
          {bottonName || " " + "All products"}
          <span
            className={`${showProducts ? "rotate-180" : "rotate-0"} trans`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#900c3f"
            >
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </span>
        </button>
      </div>
      <ul
        className={`absolute  py- top-16  bg-white border border-red-50 rounded-lg w-56 z-10  ${
          showProducts ? "block" : "hidden"
        }`}
      >
        {productsTypes.map((product) => (
          <li
            onClick={() => {
              closeAllMenues();
              setShowProducts(false);
              onFilter(product.id);
            }}
            className={`cursor-pointer opacity-80 py-2 my-1 hover:bg-red-200 px-2 shadow-md shadow-red-200 ${
              active === product.id
                ? "bg-white text-[var(--secondary-color)] "
                : "bg-red-50 text-red-950 "
            } trans w-full`}
            key={product.id}
          >
            {product.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FilterProducts;
