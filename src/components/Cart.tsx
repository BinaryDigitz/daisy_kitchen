import { assets } from "../assets/assets"


function Cart() {
  return (
    <button title='Go to cart' className=' relative hover:opacity-80 px-1 py-1 flex items-center gap-3  text-[var(--white-color)] rounded-md trans'>
      <p className="sr-only">Cart</p>
      <span title="Items" className="absolute right-0.5 top-[-10px] bg-[var(--primary-color)] cursor-pointer  font-bold size-6 grid place-items-center text-sm md:text-md shadow-md rounded-full text-[var(--white-color)]">1</span>
      <img src={assets.cart_icon} className="size-6" alt="" />
p    </button>
  )
}

export default Cart
