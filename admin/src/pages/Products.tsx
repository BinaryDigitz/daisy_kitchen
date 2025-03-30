
import Title from '../components/Title'
import ProductForm from '../components/ProductForm'
import ProductCard from '../components/ProductCard'

function Products() {
  return (
    <div className='w-full grid place-items-center'>
      <Title text1='' text2='PRODUCTS' size='heading3 text-red-800'/>
      <div>
        <ProductForm />

      </div>
        <ProductCard />
      
    </div>
  )
}

export default Products
