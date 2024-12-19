import { useState } from "react";
import { AppContext } from "./Context";

interface Props{
  children: React.ReactNode
}


function AppContextProvider({children}: Props) {
 const [showSidebar, setShowSidebar] = useState(false)
function closeAllMenues(){
    setShowSidebar(false)
}
function toggleSidebar(){
    setShowSidebar(!showSidebar)
   
    
}
 const values = {
    showSidebar,
    setShowSidebar,
    closeAllMenues,
    toggleSidebar
 }
 return <AppContext.Provider value={values}>
  {children}
  </AppContext.Provider>
}

export default AppContextProvider
