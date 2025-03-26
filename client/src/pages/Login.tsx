import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { RootState } from "../store/store"
import { useDispatch, useSelector } from "react-redux"
import { logInSuccess, logInFail, loginInStart } from "../store/userReducer"


function Login() {

 

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((  state: RootState) => state.user)
  const baseUrl ='/api/auth/login'

 const [ formData, setFormData ] = useState({ email: '', password: ''})

 function clearForm(){
  setFormData({...formData, email:''})
  setFormData({...formData, password:''})
 }
 async function handleFormSubmit(event:FormEvent){
  console.log('Start fetching......');
  
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
      setTimeout(() =>navigate('/'), 1000)
      clearForm()
      return;
    }
  }
  catch(ex ){
    dispatch(logInFail(ex.message))
  }
  console.log('Start fetching......');

 }
 
  return (
    <section className=" text grid place-items-cente text-center ">
      <div className="py-10">
        <form onSubmit={event => handleFormSubmit(event)}  className="mt-1 mx-auto border border-red-200  p-7 shadow-sm rounded-md w-[350px] md:w-[500px]">
        <h1 className="heading3 pb-5 text-red-950">Login to your account</h1>
         
          <div className="mb-4 border border-red-200 rounded-full text-start px-4 py-1.5 flex">
            <label htmlFor="email" className="sr-only">Email</label>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e57372"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            <input type="email" value={formData.email} onChange={event => setFormData({...formData, email: event.target.value})} placeholder="Email address" id="email" required autoComplete="email" className="outline-none border-none w-full bg-inherit" />
          </div>
         
          <div className="mb-3 border border-red-200 rounded-full text-start px-4 py-1.5 flex">
            <label htmlFor="password" className="sr-only">Password</label>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e57372"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
            <input type="password" placeholder="Password" value={formData.password} onChange={event => setFormData({...formData, password: event.target.value})} id="password" required autoComplete="password" className="outline-none border-none w-full bg-inherit" />
          </div>
          <p title="Click to reset password" className="text-start px-4 mb-5 text-sm text-gray-500 cursor-pointer">Forgot password</p>
         
          <button disabled={isLoading} className="bg-gradient-to-tr from-[var(--secondary-color)] to-[var(--primary-color)]  hover:opacity-70 active:translate-x-2 w-full disabled:bg-gray-300 rounded-full py-2 mb-2 text-white trans">
            { isLoading ? 'Loading....' : 'Login'}
          </button>
          <div className="flex text-sm text-gray-500 gap-5 px-4 mb-3">
            <p>Don't have an account?</p>
            <p onClick={() => navigate('/signup')} className="text-indigo-700 cursor-pointer">Signup</p>
          </div>
          <hr className=" bg-black my-4"/>
          <button type="button" className="border hover:opacity-70 active:translate-x-2 w-full rounded-full my-3 py-2 text-[var(--primary-color)] trans border-[var(--primary-color)]">Continue with Google</button>
          {
            error && <p className="text-sm text-red-500">{error}</p>
          }
        </form>
      </div>
    </section>
  )
}

export default Login
