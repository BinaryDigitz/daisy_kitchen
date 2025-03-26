
import { useContext } from "react";
import { AppContext } from "../../providers/Context";
import { assets } from "../../assets/assets";

function NavbarMenu() {
   const appContext = useContext(AppContext)
  return (
    <button onClick={appContext?.toggleSidebar} className='md:hidden cursor-pointer trans w-12 p-2 '>
      {appContext.showSidebar ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" className='size-10 hover:scale-110 trans' viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      :<img src={assets.menu_icon}  className="size-6"/> }
    </button>
  )
}

export default NavbarMenu
