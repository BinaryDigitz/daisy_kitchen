
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

function Auth() {
  const navigate = useNavigate()
  const { isLoggedIn, currentUser} = useSelector((state:RootState) => state.user)
 
  return (
   <section  >
    <div className="md: hidden py-5 mb-10 mx-auto h-26 bg-red-50 shadow-sm">
      {
        isLoggedIn ? (
        <div className="flex justify-around rounded-lg  items-center">
          {/* <img onClick={()=> navigate('/profile')} src={currentUser.photo} className="size-12 cursor-pointer rounded-full" alt="" /> */}
          <p className="flex flex-col">
            <span onClick={()=> navigate('/profile')} title="Click to go to account" className="py-2 cursor-pointer">Account</span>
            <span title="Click to sign out" className="text-red-500 py-2 cursor-pointer">Log out</span>
          </p>
        </div>
        ) :
        (
      <div className="flex gap-4 p-1 ">
        <button onClick={()=> navigate('/signup')} title="Click to create an account" className="shadow-lg w-24 border hover:opacity-70 trans rounded-lg px-3 p-1 border-[var(--primary-color)] text-red-900">Sign up</button>
        <button onClick={()=> navigate('/login')} title="Click to login" className="shadow-lg w-24 rounded-lg px-4 p-1 hover:opacity-70 trans bg-[var(--primary-color)] text-red-100">Login</button>
     </div>
        )
      }
     
    </div>
     <div className="hidden md:block">
      {
        !isLoggedIn ? (
          <Link to='/login'>
          <p title="Please Login" className="cursor-pointer bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]
           trans text-[var(--white-color2)]  p-3 py-1 rounded-lg">Login</p>
          </Link>
        ) :
        (
          <div title="Go to profile" className="relative group size-10 rounded-full overflow-hidden cursor-pointer">
            {/* <img src={currentUser.photo} alt="" /> */}
          {/* <span className="rounded-full grid place-items-center size-8 lg:size-10 bg-white text-black cursor-pointer heading4">B</span> */}
          <ul className="group-hover:block p-3  text-center hidden absolute  top-9 text-sm rounded-lg bg-gray-50 text-var(--black-color1) shadow-lg ">
            <li className="text-gray-500 cursor-pointer trans">Account</li>
            <li className="text-red-500  cursor-pointer  trans py-1">Log out</li>
  
          </ul>
  
        </div>
        )
      }
    </div>
   </section>
  )
}

export default Auth
