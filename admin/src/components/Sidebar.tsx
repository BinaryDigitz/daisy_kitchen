import { useContext } from "react";
import { Link } from "react-router-dom";
import AdminContext from "../context/AdminContext";

function Sidebar() {
  const { setShowSidebar } = useContext(AdminContext);
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Orders", link: "/orders" },
    { name: "Employees", link: "/employees" },
    { name: "Blogs", link: "/blogs" },
  ];
  return (
    <div className="grid place-content-center">
      <ul className="p-4" onClick={() => setShowSidebar(false)}>
        {navLinks.map((link) => (
          <Link to={link.link} key={link.name} className="">
            <li className="py-4 bg-red-50 text-center my-1 w-[300px] hover:bg-red-100 rounded-sm text-red-950">
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
