import Title from "../components/Title";
import ProductForm from "../components/ProductForm";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Products() {
  const [ showForm, setShowForm ] = useState(false);
  return (
    <div className="w-full grid place-items-center relative ">
      <Title text1="PRODUCTS" text2="-PAGE" size="heading3 text-red-800" />
      <button onClick={() => setShowForm(!showForm)} className="px-6 absolute z-10 top-5 left-5 py-2 rounded-sm  bg-red-300 text-red-800 cursor-pointer shadow-sm hover:bg-red-200 shadow-red-500">
       {
        showForm ? ' Hide Product Form' : 'Add Product'
       }
      </button>
      <div className={`${!showForm && "hidden"}`}>
        <ProductForm />
      </div>
      <ProductCard />
    </div>
  );
}

export default Products;
