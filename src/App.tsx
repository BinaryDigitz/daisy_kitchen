import { useEffect, useState } from "react"
import { About, Contact,  Footer, Kitchen, Home, Navbar, Services, Sidebar } from "./components/exportComp"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { useContext } from "react"
import { AppContext } from "./providers/Context";
import { ProductTypes } from "./types"
import { products } from "./database"

const App = () => {
const [ data, setData ] = useState<ProductTypes[]>(products)
const [ filterProduct, setFilterProduct ] = useState('')
  
  
    const appContext = useContext(AppContext)
    useEffect(() => {
      if(filterProduct === ''){
        setData(products)
      }
      else{
        setData(products.filter(product => product.category === filterProduct))
      }
    },[filterProduct])
    const showSidebar = appContext?.showSidebar ? "translate-x-0" : "-translate-x-full"
  return (
    
    <BrowserRouter>
      <div id="app" className="relative trans bg-[var(--white-color)]">
        <div className={`${showSidebar } md:hidden bg-[var(--secondary-color)] absolute top-0 left-0 z-50 h-[100dvh] w-3/4  trans rounded-r-full overflow-hidden`}>
            <Sidebar/>
        </div>
          <header >
            <Navbar data={data}/>
          </header>
          <main id="main">
            
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/kitchen" element={<Kitchen filterProduct={filterProduct} data={data} onFilter={(filter) => setFilterProduct(filter)
                } />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="*" element={<h1>Not Found</h1>}/>
              </Routes>
          </main>
          <footer id="footer">
            <Footer/>
          </footer>
      </div>
    </BrowserRouter>
    
    
  )
}

export default App
