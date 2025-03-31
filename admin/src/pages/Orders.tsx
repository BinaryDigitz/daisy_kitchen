import { orders } from "../assets/assets";
import Title from "../components/Title";
import YearlySelect from "../components/YearlySelect";
import { Link } from "react-router-dom";

function Orders() {
  return (
    <div className="grid place-items-center mb-10">
      <Title text1="" text2="ORDERS" size="heading3 text-red-900" />
      <div className="w-full">
        <YearlySelect />
        <table className=" w-full  lg:w-4/5 mx-auto">
          <thead className="bg-red-50 h-10 ">
            <tr className="flex font-medium hover:bg-green-100 cursor-pointer items-center justify-between lg:px-10 p-4 bg-green-50 border border-green-100 text-green-900 text-md  text-sm md:text-[18px]">
              <td>SN</td>
              <td>Sender</td>
              <td>Status</td>
              <td>Date</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Link to={`/orders/${order.orderId}`} key={order.orderId}>
                <tr className="flex text-sm hover:bg-green-100 cursor-pointer  items-center justify-between p-4  border border-green-100 text-green-900 text-md text-center  md:text-[16px]">
                  <td>{index + 1}</td>
                  <td>{order.sender}</td>
                  <td
                    className={`${
                      order.status === "Delivered"
                        ? "text-green-500"
                        : "text-gray-500"
                    } ${order.status === "Cancel" ? "text-red-500" : ""}`}
                  >
                    {order.status}
                  </td>
                  <td>{order.date}</td>
                  <td>{order.phone}</td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
