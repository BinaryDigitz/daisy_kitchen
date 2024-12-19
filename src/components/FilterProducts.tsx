import { useState } from 'react'
import { productsTypes } from '../data';
interface Props{
    onFilter: (filter: string) => void;
    filterProduct: string;
}
function FilterProducts({onFilter, filterProduct}: Props) {

    const [ showProducts, setShowProducts ] = useState(false)
  
    const bottonName = filterProduct && productsTypes.map(item => item.id === filterProduct && item.name )
  return (
    <section title='Select your preference' className='relative  trans p-4 z-2 '>
      <button  className="border  rounded-md py-1 max-w-[270px] px-2 md:p-2 md:px-4 flex border-[var(--secondary-color)] text-[var(--secondary-color)]" onClick={() => setShowProducts(!showProducts)}>
        Sort by:
      
      {bottonName || " " + 'All products'}
      <span className={`${showProducts ? 'rotate-180' : 'rotate-0'}  trans`}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill='#900c3f'><path d="M480-360 280-560h400L480-360Z"/></svg>
      </span>
      
    </button>
      <ul className={`absolute bg-[var(--black-color2)] p-6 top-16 text-[var(--white-color2)] shadow-lg rounded-lg w-52 z-40  ${showProducts ? 'block' : 'hidden'}`}>
        {
            productsTypes.map(product =>  <li onClick={() =>{
                setShowProducts(false)
                onFilter(product.id)
            }} className='cursor-pointer opacity-80 py-1 my-1 px-2 shadow-md  hover:opacity-100  hover:bg-[var(--secondary-color)] trans w-full' key={product.id}>{product.name}</li> )  
        }
      </ul>
    </section>
  )
}

export default FilterProducts
