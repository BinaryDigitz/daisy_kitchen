import { useState } from "react";
import { employees } from "../assets/assets";
import EmployeeForm from "../components/EmployeeForm";
import Title from "../components/Title";
import { Link } from "react-router-dom";

function Employees() {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className="grid place-items-center mt-10 relative w-full overflow-hidden">
      <Title text1="" text2="EMPLOYEES" size="heading3 text-red-900" />
      <button
        onClick={() => setShowForm(!showForm)}
        className="absolute top-5 left-5 lg:left-[30%] lg:top-10 border px-6 py-1 cursor-pointer 
        hover:opacity-70 rounded-sm border-red-200 text-red-900 shadow-sm shadow-red-200"
      >
        {showForm ? "Hide form" : "Add Employee"}
      </button>
      <div className={`${!showForm && "hidden"}  w-[90%] mx-auto md:w-md lg:w-lg 2xl:w-xl `} >
        <EmployeeForm />
      </div>
      <div className="w-full mx-auto lg:w-3xl mt-10">
        <table className="w-full">
          <thead>
            <tr className="flex font-medium  items-center justify-between lg:px-10 p-4 bg-green-50 border border-green-100 text-green-900 text-md  text-sm md:text-[18px]">
              <td>SN</td>
              <td>NAME</td>
              <td>POSITION</td>
              <td>EMAIL</td>
              <td>SALARY</td>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <Link to={`/employees/${employee.employeeId}`}>
                <tr
                  className="flex font-medium hover:bg-green-100 cursor-pointer items-center justify-between lg:px-10 p-4 border border-green-100 text-green-900 text-md  text-sm md:text-[16px]"
                  key={employee.employeeId}
                >
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.email}</td>
                  <td>{employee.salary.toLocaleString()}.00</td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;
