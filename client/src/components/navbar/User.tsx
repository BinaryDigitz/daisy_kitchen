import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { AppContext } from "../../providers/Context";

function User() {
  const {
    closeAllMenues,
    showProfileLinks,
    setShowProfileLinks,
    userIsLoggedIn,
  } = useContext(AppContext);

  function handleProfileLinks() {
    closeAllMenues();
    setShowProfileLinks((prev: boolean) => !prev);
  }
  return (
    <div onClick={handleProfileLinks} className="relative cursor-pointer">
      <img src={assets.profile_icon} className="size-6" alt="" />
      <ul
        className={`absolute p-2 ${
          showProfileLinks ? "block" : "hidden"
        }  bg-white shadow-md -bottom-[110px] -left-6 text-md w-28`}
      >
        <Link to="/profile">
          <li className="hover:bg-gray-100 py-1">Profile</li>
        </Link>
        <Link to="/orders">
          <li className="hover:bg-gray-100 py-1">Orders</li>
        </Link>
        {userIsLoggedIn ? (
          <Link to="/sign-up">
            <li className="text-red-600 pb-1 hover:bg-gray-100">Log out</li>
          </Link>
        ) : (
          <Link to="/login">
            <li className="text-green-600 pb-1 hover:bg-gray-100">Login</li>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default User;
