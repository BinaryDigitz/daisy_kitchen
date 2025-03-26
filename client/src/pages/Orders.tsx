import { Link } from "react-router-dom";
import { Title } from "../components/exportComp";
import NewsLetter from "../components/home/NewsLetter";

function Orders() {
  const orders = [
    { orderId: 1234, status: "Pending", price: "200, 000frs" },
    { orderId: 1234, status: "Delivered", price: "200, 000frs" },
    { orderId: 1234, status: "Active", price: "200, 000frs" },
    { orderId: 1234, status: "Decline", price: "200, 000frs" },
    { orderId: 1234, status: "Ready", price: "200, 000frs" },
  ];
  return (
    <div className="place-items-center my-6 lg:my-8 ">
      <hr className="w-4/5 border border-red-100 mb-6" />
      <Title text1="YOUR" text2="ORDERS" size="heading3" />
      <div>
       
      </div>
      <div className=" w-full mb-10">
        {orders.length === 0 ? (

          // NO ORDER HISTORY AVAILABLE
          <div className="w-full h-[300px] grid place-items-center">
            <div className="text-center">
              <h2 className="heading4 text-red-950">No order history</h2>
              <Link to="/kitchen">
                <button
                  title="visit the kitchen"
                  className="px-6 py-3 bg-[var(--primary-color)] font-medium hover:bg-red-800 my-3 trans rounded-full border-red-200 shadow-lg shadow-red-200 text-red-100"
                >
                  Create your first order
                </button>
              </Link>
            </div>
          </div>
        ) : (

          // ATLEAST ONE ORDER HISTORY AVAILABLE
          <table className="mt-14 mx-auto w-[90%] lg:w-4/5">
            <thead>
              <tr className="flex text-start justify-between py-2 px-3 gap-4 bg-red-100 text-red-950">
                <td>SN</td>
                <td className="">Order ID</td>
                <td>Status</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody className="border-b-2">
              {orders.map((order, index) => (
                <Link
                  key={order.orderId}
                  title="View order"
                  to={`/view_order/${order.orderId}`}
                >
                  <tr className="flex cursor-pointer  hover:bg-red-100 justify-between py-3 lg:py-2 px-3 gap-4 border bg-white trans">
                    <td>{index + 1}</td>
                    <td>{order.orderId}</td>
                    <td
                      className={`${
                        order.status === "Decline"
                          ? "text-red-500"
                          : "text-gray-500"
                      } ${
                        order.status === "Ready" || order.status === "Delivered"
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      {order.status}
                    </td>
                    <td>{order.price}</td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <NewsLetter />
    </div>
  );
}

export default Orders;
