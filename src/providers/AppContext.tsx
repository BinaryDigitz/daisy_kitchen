import { useState } from "react";
import { AppContext } from "./Context";
import { ProductTypes } from "../types";
import { products } from "../../public/database";

interface Props {
  children: React.ReactNode;
}
// interface User{
//   fullName: string,
//   email:string,
//   cartData:[],
//   photo:string
// }
const user = {
  fullName: "Boris Ayam Ndoh",
  email: 'boris@email.com',
  phone: '+237 653 77 5159',
  cartData: [],
  photo:'http://cloudinary/image?1=0'
}

function AppContextProvider({ children }: Props) {
  const [ userData, setUserData ] = useState( user)
  const [filterData, setFilterData] = useState<ProductTypes[]>([]);
  const [search, setSearch] = useState({ displayBox: false, searchData: "" });
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [ showProfileLinks, setShowProfileLinks ] = useState(false);
  const [ userIsLoggedIn, setUserIsLoggedIn ] = useState(false)

  function closeAllMenues() {
    setShowSidebar(false);
    setShowSearchBar(false)
  }
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }
  const values = {
    showSidebar,
    setShowSidebar,
    closeAllMenues,
    toggleSidebar,
    showSearchBar,
    setShowSearchBar,
    filterData,
    setFilterData,
    search, 
    setSearch,
    showProfileLinks,
    setShowProfileLinks,
    userIsLoggedIn,
    setUserIsLoggedIn,
    userData,
    products

  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
