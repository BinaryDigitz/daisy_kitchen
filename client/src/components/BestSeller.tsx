import { useContext } from "react";
import { AppContext } from "../providers/Context";

import ProductCard from "./ProductCard";

import { Title } from "./exportComp";
import { useNavigate } from "react-router-dom";

function BestSeller() {
  const navigate = useNavigate();
  const { products } = useContext(AppContext);

  // ....filter and select best sellers products from the products
  const bestSellers = products.slice(0, 6);

  return (
    <section className="mt-20 p-[var(--sm-padding)]">
      <Title text1={"Best"} text2="Sellers" size="heading2" />
      <p className="text-center text-gray-600">Frequent indemand products</p>
      <div className="grid grid-cols-2 mt-[var(--lg-margin)] md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-10 2xl:gap-y-14">
        {bestSellers.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
      <div className="grid place-items-center">
        <button
          onClick={() => navigate("/kitchen")}
          className="border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white font-medium text-sm px-6 py-3 shadow-lg rounded-md text-[var(--secondary-color)] my-10 trans 2xl:px-8"
        >
          View more products
        </button>
      </div>
    </section>
  );
}

export default BestSeller;
