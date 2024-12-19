
import { ProductTypes } from "../types";
import { ProductCard } from "./exportComp"
interface Props{
    data: ProductTypes[]
}
function ProductGrid({data}: Props) {
    console.log(data);
    
    return <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 p-4 place-items-center px-3'>
        {
            data.map(product => <ProductCard key={product.id} product={product} />)
        }
    </div>
 
}

export default ProductGrid
