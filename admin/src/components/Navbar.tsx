import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import AdminContext from "../context/AdminContext";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Orders", link: "/orders" },
  { name: "Employees", link: "/employees" },
  { name: "Blogs", link: "/blogs" },
];
function Navbar() {
  const { showSidebar, setShowSidebar } = useContext(AdminContext);
  return (
    <nav className="w-full h-14 p-8 lg:py-14 mb-5 ">
      <div className="flex justify-between md:justify-around items-center">
        <Link to="/" className="heading3 font-bold text-red-900">
          Admin
        </Link>
        <div className="hidden md:flex gap-20">
          <ul className="flex items-center justify-arround gap-4">
            {navLinks.map((item) => (
              <Link key={item.name} to={item.link}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
          <button className="text-red-600 font-medium px-6 py-2 border border-red-300 rounded-md shadow cursor-pointer shadow-red-300 hover:bg-red-500 hover:text-white trans">
            Log out
          </button>
        </div>
        <p onClick={() => setShowSidebar(prev => !prev)} className="cursor-pointer md:hidden bg-slate-50 hover:bg-slate-100 shadow size-10  grid place-items-center ">
          {
            showSidebar ? ( 
              <span className="text-lg font-bold text-red-900">X</span>
            ) :(
              <img src={assets.menu_icon} className="size-6 " alt="" />

            )
          }
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
