import { employees } from "../assets/assets";
import EmployeeForm from "../components/EmployeeForm";
import Title from "../components/Title";

function Employees() {
  return (
    <div className="grid place-items-center mt-10 ">
      <Title text1="" text2="EMPLOYEES" size="heading3 text-red-900" />
      <div className="hidden">
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;
