import { createContext, Dispatch, SetStateAction } from "react";
import { ProductTypes } from "../types";

interface Search {
  displayBox: boolean;
  searchData: string;
}
interface User {
  fullName: string;
  email: string;
  cartData: [];
  photo: string;
  phone:string
}

interface ContextProps {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
  closeAllMenues: () => void;
  toggleSidebar: () => void;
  showSearchBar: boolean;
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
  filterData: ProductTypes[];
  setFilterData: Dispatch<SetStateAction<ProductTypes[]>>;
  search: Search;
  setSearch: Dispatch<SetStateAction<Search>>;
  showProfileLinks: boolean;
  setShowProfileLinks: Dispatch<SetStateAction<boolean>>;
  userIsLoggedIn: boolean;
  setUserIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  userData: User;
  setUserData: Dispatch<SetStateAction<User>>;
  products: ProductTypes[]
}
export const AppContext = createContext({} as ContextProps);
