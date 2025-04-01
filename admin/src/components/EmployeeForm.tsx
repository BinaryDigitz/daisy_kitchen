import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface Image{
 name:string;
 lastModified: number;
 lastModifiedDate: Date;
webkitRelativePath:string;
size:number;
type:string
}
function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    phone: "",
    position: "",
    email: "",
    salary: "",
    qualification: "",
    image:'',
  });
  function clearForm() {
    setEmployee({
      name: "",
      phone: "",
      position: "",
      email: "",
      salary: "",
      qualification: "",
    });
  }
  async function handleFormSubmit(event: FormEvent) {
    event?.preventDefault();
    console.log(employee);

    // clear
    toast.success("Employee added successfully");
    clearForm();
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="my-10 border border-red-100 rounded-sm p-5 w-full overflow-hidden"
    >
      <h2 className="mx-auto w-30 my-5 text-red-900 font-bold">ADD EMPLOYEE</h2>

      <div className="mb-3">
        <label htmlFor="image" className="cursor-pointer">
          <input
            type="file"
            id="image"
            onChange={(e: ChangeEvent<HTMLInputElement>) => { 
              console.table(e?.target?.files[0]);
              
              setEmployee({ ...employee, image: e?.target?.files[0] })
            }}
            hidden
          />
          <img
            src={employee.image ? URL.createObjectURL(employee.image) : ""}
            className="size-16 w-24 h-26 md:size-20 border border-red-200 rounded-sm  mx-auto"
            alt=""
          />
        </label>
      </div>

      <input
        type="text"
        placeholder="Full Name"
        required
        autoComplete="full name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        className="border border-red-100 shadow-sm w-full mb-3 shadow-red-200 outline-none rounded-sm py-1.5 px-3"
      />

      <div className="flex items-center gap-3 mb-3 ">
        <input
          type="text"
          required
          autoComplete="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
          className="border border-red-100 shadow-sm shadow-red-200 outline-none rounded-sm py-1.5 w-1/2 px-3"
        />
        <input
          type="text"
          required
          autoComplete="position"
          value={employee.position}
          onChange={(e) =>
            setEmployee({ ...employee, position: e.target.value })
          }
          placeholder="Position"
          className="border border-red-100 shadow-sm shadow-red-200 outline-none rounded-sm py-1.5 w-1/2 px-3"
        />
      </div>
      <div className="flex items-center gap-3 mb-3">
        <input
          type="text"
          required
          autoComplete="email"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          placeholder="Email"
          className="border w-1/2 border-red-100 shadow-sm shadow-red-200 outline-none rounded-sm py-1.5 px-3"
        />
        <input
          type="number"
          required
          autoComplete="number"
          value={employee.salary}
          onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
          placeholder="Salary"
          className="border w-1/2 border-red-100 shadow-sm shadow-red-200 outline-none rounded-sm py-1.5 px-3"
        />
      </div>
      <input
        type="text"
        required
        value={employee.qualification}
        onChange={(e) =>
          setEmployee({ ...employee, qualification: e.target.value })
        }
        placeholder="Qualification"
        className="border border-red-100 shadow-sm shadow-red-200 outline-none rounded-sm py-1.5 px-3 w-full"
      />
      <button
        type="submit"
        className="w-full bg-red-300 text-red-500 py-1.5 cursor-pointer hover:bg-red-400 shadow-sm shadow-red-200 rounded-sm my-5"
      >
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;
