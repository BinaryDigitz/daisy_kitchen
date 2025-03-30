
import Title from '../components/Title'
import ProductForm from '../components/ProductForm'

function Products() {
  return (
    <div className='w-full grid place-items-center'>
      <Title text1='' text2='PRODUCTS' size='heading3 text-red-800'/>
      <div>
        <ProductForm />

      </div>
      
    </div>
  )
}

export default Products
