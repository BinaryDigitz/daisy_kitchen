
import { useContext } from "react";
import { AppContext } from "../../providers/Context";

function NavbarMenu() {
   const appContext = useContext(AppContext)
  return (
    <button onClick={appContext?.toggleSidebar} className='md:hidden cursor-pointer trans hover:bg-[var(--secondary-color)]  rounded-full'>
      {appContext.showSidebar ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" className='size-9 hover:scale-110 trans' viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      : <svg xmlns="http://www.w3.org/2000/svg" height="24px " className='size-9 hover:scale-110 trans' viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>}
    </button>
  )
}

export default NavbarMenu
