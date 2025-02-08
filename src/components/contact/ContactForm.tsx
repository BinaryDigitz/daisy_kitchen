import { useState, FormEvent } from "react"


function ContactForm() {
  const [person, setPerson] = useState({fullName: '', email: '', phone: '', reason: '', message: ''})
 
const disableButton =   person.fullName.length > 4 || person.email.length > 6 || person.phone.length > 7 || person.reason.length > 10 || person.message !== ''

  function handleSubmit(event:FormEvent){
    event.preventDefault()
    console.log(person)
  }
  return (
    <form onSubmit={event=> handleSubmit(event)} className="flex flex-col gap-1 justify-center items-center border border-gray-300 p-5 lg:px-10 rounded-md shadow-md mx-auto w-[350px] lg:w-[400px]">
      <h2 className="text-center mb-3 text-[var(--primary-color)] text-2xl font-bold">Message us</h2>
       <div className="mb-3 flex items-center  gap-2  borde border-gray-600 input-box ">
            <label htmlFor="fullName" className=" w-20">Full Name</label>
            <input type="text" id="fullName" value={person.fullName} onChange={e => setPerson({...person, fullName:e.target.value})} placeholder="John Doe" className="w-[200px]"/>
          </div>
       <div className="mb-3 flex items-center gap-2  borde border-gray-600 input-box ">
            <label htmlFor="email"  className=" w-20">Email</label>
            <input type="text" id="email" value={person.email} onChange={e => setPerson({...person, email:e.target.value})} placeholder="johndoe@email.com" className=" w-[200px]"/>
          </div>
       <div className="mb-3 flex items-center gap-2  borde border-gray-600 input-box">
            <label htmlFor="phone" className=" w-20">Phone</label>
            <input type="text" id={'phone'} value={person.phone} onChange={e => setPerson({...person, phone:e.target.value})}  placeholder="+ 237 663 003 637" className=" w-[200px]"/>
          </div>
       <div className="mb-3 flex items-center gap-2  borde border-gray-600 input-box">
            <label htmlFor="select" className=" w-20">Reason</label>
            <select name="" id="select"  onChange={e => setPerson({...person, reason:e.target.value})}  className="border border-gray-300 p-1 w-[200px]">
                <option value="">Please select  reason</option>
                <option value="Event planing">Event planing</option>
                <option value="Cookery classes">Cookery classes</option>
                <option value="Services">Services</option>
                <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-3 flex items-cente gap-2  borde border-gray-600 input-box">
            <label htmlFor="message">Message</label>
                <textarea  id="message" rows={7} cols={26}  className='bg-inherit' value={person.message} onChange={e => setPerson({...person, message:e.target.value})}  className="border"  placeholder="message"></textarea>
          </div>
          <button disabled={!disableButton} className={`btn bg-[var(--primary-color)] p2 py-4 w-52 px-6 rounded-2xl text-[var(--white-color)] mx-auto my-3 ${disableButton && "opacity-40"} trans`} type="submit">Send</button>
    </form>
  )
}

export default ContactForm
