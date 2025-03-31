import { useEffect, useState } from "react";
import AdminContext from "./AdminContext";
import type { ProductType } from "../types";
import { myProducts } from "../assets/assets";

function AdminProvider({ children }) {

  
const [ showSidebar , setShowSidebar ] = useState(false);
const [ isLoading, setLoading ] = useState(false)
const [ products, setProducts ] = useState<ProductType[]>([
  {
    name: "",
    alergies: "",
    category: "",
    price: "",
    rating: "",
    description: "",
    bestseller: false,
    images:[]
  }
]);

 function clearToggles (){
  setShowSidebar(false)
 }
  const values = {
    showSidebar, 
    setShowSidebar,
    clearToggles,
    products,
    isLoading,
    setLoading,
    setProducts
  };

  useEffect(() =>{
    setProducts(myProducts)
  },[]);
  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
}

export default AdminProvider;
