import { useState, FormEvent } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const disableButton =
    person.fullName.length < 4 ||
    person.email.length < 6 ||
    person.phone.length < 7 ||
    person.reason.length < 10 ||
    person.message.length < 5;
  function clearForm() {
    setPerson({
      fullName: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    });
  }
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    toast.success("Message sent successfully");
    console.log(person);
    clearForm();
  }
  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="flex flex-col gap-1 justify-center mt-10 items-center border border-red-100 p-5 lg:px-10 rounded-md shadow-md mx-auto w-[350px] lg:w-[400px]"
    >
      <h2 className="text-center mb-3 text-red-950 text-2xl font-bold">
        Message us
      </h2>
      <div className="mb-3 flex items-center  gap-2  borde border-gray-600 input-box ">
        <label htmlFor="fullName" className=" w-20">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          required
          autoComplete="full name"
          value={person.fullName}
          onChange={(e) => setPerson({ ...person, fullName: e.target.value })}
          placeholder="John Doe"
          className="w-[200px] shadow-sm py-1.5 shadow-red-300 border border-red-200 bg-inherit"
        />
      </div>
      <div className="mb-3 flex items-center gap-2  borde border-gray-600 input-box ">
        <label htmlFor="email" className=" w-20">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          autoComplete="email"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
          placeholder="johndoe@email.com"
          className=" w-[200px] shadow-sm py-1.5 shadow-red-300 border border-red-200 bg-inherit"
        />
      </div>
      <div className="mb-3 flex items-center gap-2  borde border-gray-600 input-box">
        <label htmlFor="phone" className=" w-20">
          Phone
        </label>
        <input
          type="tel"
          id={"phone"}
          required
          autoComplete="tel"
          value={person.phone}
          onChange={(e) => setPerson({ ...person, phone: e.target.value })}
          placeholder="+ 237 663 003 637"
          className=" w-[200px] shadow-sm py-1.5 shadow-red-300 border border-red-200 bg-inherit"
        />
      </div>
      <div className="mb-3 flex items-center gap-2  borde border-gray-600 input-box">
        <label htmlFor="select" className=" w-20">
          Reason
        </label>
        <select
          name=""
          id="select"
          onChange={(e) => setPerson({ ...person, reason: e.target.value })}
          className="p-1 w-[200px] shadow-sm py-2 shadow-red-300 border border-red-200 bg-inherit"
        >
          <option value="">Please select reason</option>
          <option value="placeOrder">Place order</option>
          <option value="eventPlanning">Event planing</option>
          <option value="training">Cookery classes</option>
          <option value="services">Services</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="mb-3 flex items-cente gap-2  borde border-gray-600 input-box">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={7}
          required
          cols={26}
          className="shadow-sm shadow-red-300 border border-red-200 bg-inherit"
          value={person.message}
          onChange={(e) => setPerson({ ...person, message: e.target.value })}
          placeholder="message"
        ></textarea>
      </div>
      <button
        disabled={disableButton}
        className={`btn bg-[var(--primary-color)] w-52 px-6 h-9 rounded-2xl text-[var(--white-color)] mx-auto my-3 py-3 ${
          disableButton && "opacity-40"
        } trans`}
        type="submit"
      >
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
