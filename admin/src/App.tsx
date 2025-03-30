import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Apps from "./digital_watch/App";
import {
  Home,
  Footer,
  Navbar,
  Employees,
  Orders,
  Blogs,
  Sidebar,
  ProductStatus, 
  ViewMessage
} from "./components/exporComp";
import Products from "./pages/Products";
import { useContext } from "react";
import AdminContext from "./context/AdminContext";

function App() {
  const { showSidebar } = useContext(AdminContext);
 
  return (
    <div className="w-full p-4 relative">
      <header>
        <Navbar />
      </header>
      <main>
        <aside className="absolute md:hidden top-24 w-full">
          {showSidebar && (
            <section className={`w-full h-[700px] bg-white`}>
              <Sidebar />
            </section>
          )}
        </aside>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/product/:productId" element={<ProductStatus />} />
          <Route path="/message/:messageId" element={<ViewMessage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
