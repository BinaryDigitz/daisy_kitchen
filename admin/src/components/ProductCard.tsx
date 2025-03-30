import React, { useContext } from "react";
import Title from "./Title";
import AdminContext from "../context/AdminContext";

function ProductCard() {
  const { products } = useContext(AdminContext);

  async function handleDelete(_id: string) {
    console.log(_id);
  }
  return (
    <div className=" grid place-items-cente mt-10  w-full">
      <Title text1="ALL-" text2="PRODUCTS" size="heading4 text-red-800 mb-8" />
      {products.map((product) => (
        <div key={product._id} className="flex justify-around items-center py-4 lg:py-6 text-red-950 border border-red-100 rounded-md shadow shadow-red-200 mt-">
          <img
            src={product.images[0]}
            className="size-11 h-14 bg-red-100"
            alt=""
          />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button
            onClick={() => handleDelete(product._id)}
            className="border cursor-pointer hover:bg-red-200 border-red-200 px-6 py-2 rounded-sm text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
