import { createContext, Dispatch, SetStateAction } from "react";
import { ProductType } from "../types";

interface ContextTypes {
  showSidebar: boolean,
  setShowSidebar : Dispatch<SetStateAction<boolean>>,
  clearToggles: () => void,
  products: ProductType[],
  isLoading:boolean,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setProducts: Dispatch<SetStateAction<ProductType[]>>
}
const AdminContext = createContext<ContextTypes >();

export default AdminContext;
