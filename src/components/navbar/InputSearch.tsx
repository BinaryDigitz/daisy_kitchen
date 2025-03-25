import { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../providers/Context";
import { useLocation, useNavigate } from "react-router-dom";

function InputSearch() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { setShowSearchBar, closeAllMenues } = useContext(AppContext);

  function handleSearch() {
    if (pathname !== "/kitchen") {
      navigate("/kitchen");
      closeAllMenues();
      setShowSearchBar(true);
      return;
    }
    closeAllMenues();
    setShowSearchBar(true);
  }
  useEffect(() => {
    if (pathname !== "/kitchen") {
      closeAllMenues()
      setShowSearchBar(false);
    }
  }, [pathname]);
  return (
    <p onClick={handleSearch} className=" cursor-pointer">
      <img src={assets.search_icon} className="size-6" alt="" />
    </p>
    //
  );
}

export default InputSearch;
