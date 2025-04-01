import { productsTypes } from "../data";
import {  FilterProducts, ProductGrid } from "./exportComp";
import { ProductTypes } from "../types";

interface Props{
  data: ProductTypes[];
  onFilter: (filter: string) => void;
  filterProduct: string;
}
function Kitchen( {data, onFilter, filterProduct}: Props) {
     const heading = filterProduct && productsTypes.map(item => item.id === filterProduct && "Daisy's" + " " + item.name )
  return (
    <section className="trans mt-[var(--sm-margin)]">
   <div className="flex justify-around items-center ">
   <FilterProducts filterProduct={filterProduct} onFilter={onFilter}/>
    
   </div>
   <div className=" mt-8 min-h-14 text-xl lg:text-3xl font-bold text-[var(--primary-color)] p-2 px-7 agu-font">
    {
      heading || "Definitely, you are in the right place"
    }
    </div>
    <ProductGrid data={data}/>
    </section>
  )
}

export default Kitchen
