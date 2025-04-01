import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { employees } from "../assets/assets";
import type { Employee } from "../types";
import { toast } from "react-toastify";
import Back from "../components/Back";

function ViewEmployee() {
  const [employee, setEmployee] = useState<Employee>();
  const { employeeId } = useParams();

  async function fetchEmployeeDetails() {
    const result = employees.find(
      (employee) => employee.employeeId === employeeId
    );
    setEmployee(result);
  }

  async function deleteEmployee() {
    //   delete from the data base
    toast.success(`${employee?.name} deleted successfully`);
  }
  useEffect(() => {
    fetchEmployeeDetails();
  }, [employeeId]);
  return (
    <div className="grid place-items-center relative">
      <Back link='/employees' styles="left-1 top-1"/>
      <Title
        text1=""
        text2="EMPLOYEE DETAILS"
        size="heading3 text-red-900 mb-5"
      />
      <div>
        <div className="flex gap-3 lg:gap-5 flex-col  lg:flex-row items-center">
          <img
            src=""
            className="bg-red-100 h-62 w-52 lg:w-58 lg:h-[295px] rounded-sm"
            alt=""
          />
          <article className="bg-gradient-to-r from-green-50 w-md lg:w-xl border my-5 border-green-100 rounded-sm p-5 flex flex-col gap-2">
            <p className="flex gap-4 text-gray-500">
              Employee ID:
              <span className="text-gray-800"> {employee?.employeeId}</span>
            </p>
            <p className="flex gap-8 text-gray-500">
              Full Name:
              <span className="text-gray-800">{employee?.name}</span>
            </p>
            <p className="flex gap-14 text-gray-500">
              Phone:
              <span className="text-gray-800">{employee?.phone}</span>
            </p>
            <p className="flex gap-15 text-gray-500">
              Email:
              <span className="text-gray-800">{employee?.email}</span>
            </p>
            <p className="flex gap-11 text-gray-500">
              Position:
              <span className="text-gray-800">{employee?.position}</span>
            </p>
            <p className="flex gap-13 text-gray-500">
              Salary:
              <span className="text-green-800">
                {employee?.salary.toLocaleString()}.00 xaf cfa
              </span>
            </p>
            <p className="flex gap-8 text-gray-500 ">
              Date of Employment:
              <span className="text-gray-800">
                {employee?.dateOfEmployement}
              </span>
            </p>
            {employee?.dateOfTermination.length !== 0 && (
              <p className="flex gap-9 text-gray-500 ">
                Date of Termination:
                <span className="text-red-800">
                  {employee?.dateOfTermination}
                </span>
              </p>
            )}
            <p className="flex gap-21 text-gray-500">
              Date of Birth:
              <span className="text-gray-800">{employee?.dateOfBirth}</span>
            </p>
          </article>
        </div>
        <div className="flex gap-6 ">
          <button className="text-green-900 border border-green-200 px-6 hover:bg-green-100 trans cursor-pointer py-1.5 rounded-sm shadow-md shadow-green-200">
            Update Employee
          </button>
          <button
            onClick={deleteEmployee}
            className="text-red-900 border border-red-200 px-6 hover:bg-red-100 trans cursor-pointer py-1.5 rounded-sm shadow-md shadow-red-200"
          >
            Delete Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
