import React from "react";
import { Title } from "../components/exportComp";

function Orders() {
  const orders = [
    { orderId: 1234, status: "Pending", price: "200, 000frs" },
    { orderId: 1234, status: "Active", price: "200, 000frs" },
    { orderId: 1234, status: "Decline", price: "200, 000frs" },
    { orderId: 1234, status: "Ready", price: "200, 000frs" },
  ];
  return (
    <div className="place-items-center my-8 lg:my-14 h-[716dvh]">
      <Title text1="YOUR" text2="ORDERS" size="heading3" />
      <div className=" w-full">
        <table className="mt-14 mx-auto w-[90%] lg:w-4/5">
          <thead>
            <tr className="flex text-start justify-between py-2 px-3 gap-4 bg-red-100 text-red-950">
              <td>SN</td>
              <td className="">Order ID</td>
              <td>Status</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                className="flex cursor-pointer  hover:bg-red-100 justify-between py-3 lg:py-2 px-3 gap-4 border border-red-50 trans"
                key={order.orderId}
              >
                <td>{index + 1}</td>
                <td>{order.orderId}</td>
                <td
                  className={`${
                    order.status === "Decline"
                      ? "text-red-500"
                      : "text-gray-500"
                  } ${
                    order.status === "Ready"
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                >
                  {order.status}
                </td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
