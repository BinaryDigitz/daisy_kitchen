
import { useState, FormEvent, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store/store"
import { logInFail, loginInStart, logInSuccess } from "../store/userReducer"
import { toast } from "react-toastify"


function Signup() {
  const navigate = useNavigate()
 const dispatch = useDispatch()
const { isLoading } = useSelector(( state: RootState) => state.user)
 const [ confirmPassword, setConfirmPassword ] = useState('')
 const [ formData, setFormData ] = useState({
  fullName: '', email:'', phone:'', password:''
 });
 const baseUrl = '/api/auth/signup'
 const disableBtn = confirmPassword !== formData.password && isLoading

  function clearForm(){
   setFormData({
    fullName: '', email:'', phone: '', password:''
   })
   return setFormData({...formData, password:''})
  }
  function handleChange(event:ChangeEvent<HTMLInputElement> ){
    setFormData({...formData, [ event.target.id] : event.target.value})
  }
  async function handleFormSubmit(event:FormEvent){
    console.log("start fetch");
    
   event.preventDefault()
   dispatch(loginInStart())
   try{
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type' : 'Application/json'},
      body: JSON.stringify(formData)
    })
    const { success, message, user } = await response.json()
    if(!success){
      toast.error(message)
      dispatch(logInFail(message))
      clearForm()
      return;
    }
    else{
      toast.success(message)
      dispatch(logInSuccess(user))
      setTimeout(() => navigate('/'), 1000)
      clearForm()
      return;
    }

   }
   catch(ex){
    
    toast.error(ex.message)
    dispatch(logInFail(ex.message))
    clearForm()
   }
 
 
   clearForm()
  }
  
  return (
    <section className=" text grid place-items-cente text-center ">
      <div className="py-10">
        <form onSubmit={ e => handleFormSubmit(e)} className="mt-1 mx-auto border border-red-200  p-7 shadow-sm rounded-md w-[350px] md:w-[500px]">
        <h1 className="heading3 pb-4">Create your account</h1>
          <div className="mb-3 border border-red-200 rounded-full text-start px-4 py-1.5 flex">
            <label htmlFor="fullName" className="sr-only">Full Name</label>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e57372"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            <input type="text" value={formData.fullName} onChange={e => handleChange(e)} placeholder="Full name" id="fullName" required autoComplete="full name" className="outline-none border-none w-full bg-inherit" />
          </div>
          <div className="mb-3 border border-red-200 rounded-full text-start px-4 py-1.5 flex">
            <label htmlFor="email" className="sr-only">Email</label>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e57372"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            <input type="email" value={formData.email} onChange={e => handleChange(e)}  placeholder="Email address" id="email" required autoComplete="email" className="outline-none border-none w-full bg-inherit" />
          </div>
          <div className="mb-3 border border-red-200 rounded-full text-start px-4 py-1.5 flex">
            <label htmlFor="phone" className="sr-only">Phone number</label>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e57372"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
            <input type="phone" value={formData.phone} onChange={e => handleChange(e)}  placeholder="Phone number" id="phone" required autoComplete="phone" className="outline-none border-none w-full bg-inherit" />
          </div>
          <div className="mb-3 border border-red-200 rounded-full text-start px-4 py-1.5 flex">
            <label htmlFor="password" className="sr-only">Password</label>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e57372"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
            <input type="password" value={formData.password} onChange={e => handleChange(e)}  placeholder="Password" id="password" required autoComplete="password" className="outline-none border-none w-full bg-inherit" />
          </div>
          <div className="mb-3 border border-red-200 rounded-full text-start px-4 py-1.5 flex">
            <label htmlFor="confirmPassword" className="sr-only">Password</label>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e57372"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password" id="confirmPassword" required autoComplete="password" className="outline-none border-none w-full bg-inherit" />
          </div>
          <button type="submit" disabled={ disableBtn} className=" bg-[var(--primary-color)] hover:opacity-70 active:translate-x-2 w-full disabled:bg-red-200 rounded-full py-2 mb-2 text-white trans">
            { isLoading ? 'Loading....' : 'Signup'}
          </button>
          <div className="flex text-sm text-gray-500 gap-5 px-4 mb-3">
            <p>Already have an account?</p>
            <p onClick={() => navigate('/login')} className="text-indigo-700 cursor-pointer">Login</p>
          </div>
          <hr className=" bg-black"/>
          <button type="button" className="border hover:opacity-70 active:translate-x-2 w-full rounded-full my-3 py-2 text-[var(--primary-color)] trans border-[var(--primary-color)]">Signup with google</button>
        </form>
      </div>
    </section>
  )
}

export default Signup
