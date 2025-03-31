import { useParams } from "react-router-dom";
import { orders } from "../assets/assets";
import { useEffect, useState } from "react";
import type { Order } from "../types";
import Title from "../components/Title";
import { toast } from "react-toastify";

function ViewOrders() {
  const [order, setOrder] = useState<Order>();
  const { orderId } = useParams();

  const totalSum = () =>
    order?.orderDetails.reduce((total, current) => {
      return (total += Number.parseInt(current.productPrice));
    }, 0);
  const disablePendingButton =
    order?.status === "Delivered" || order?.status === "Canceled";
  const disableDeliveredButton =
    order?.status === "Canceled" || order?.status === "Delivered";
  const disableCancelButton =
    order?.status === "Delivered" || order?.status === "Canceled";
  async function handleDeliveredProducts() {
    toast.success("Order Delivered successfully");
  }
  async function handleCanceledProducts() {
    toast.warning("Order Canceled successfully");
  }
  useEffect(() => {
    const foundOrder = orders.find((order) => order.orderId === orderId);
    setOrder(foundOrder);
  }, [orderId]);
  return (
    <div className="grid place-items-center mt-10">
      <Title text1="" text2="ORDER-STATUS" size="heading3 text-red-800" />
      <div>
        <article className="bg-gradient-to-r from-green-50 w-md lg:w-2xl border my-5 border-green-100 rounded-sm p-5 flex flex-col gap-2">
          <p className="flex gap-4 text-gray-500">
            Order ID:
            <span className="text-gray-800"> {order?.orderId}</span>
          </p>
          <p className="flex gap-7 text-gray-500">
            Sender:
            <span className="text-gray-800">{order?.sender}</span>
          </p>
          <p className="flex gap-8 text-gray-500">
            Phone:
            <span className="text-gray-800">{order?.phone}</span>
          </p>
          <p className="flex gap-8 text-gray-500">
            Status:
            <span
              className={`${
                order?.status === "Delivered"
                  ? "text-green-500"
                  : "text-gray-500"
              } ${order?.status === "Canceled" ? "text-red-500" : ""}`}
            >
              {order?.status}
            </span>
          </p>
        </article>
        <div className="border border-green-200">
          <table className="w-full">
            <thead>
              <tr className="flex font-medium  items-center justify-between lg:px-10 p-4 bg-green-50 border border-green-100 text-green-900 text-md  text-sm md:text-[18px]">
                <td>SN</td>
                <td>PRODUCT</td>
                <td>QUANTITY</td>
                <td>PRICE</td>
              </tr>
            </thead>
            <tbody>
              {order?.orderDetails.map((item, index) => (
                <tr
                  key={index + 1}
                  className="flex font-medium hover:bg-green-100 cursor-pointer items-center justify-between lg:px-10 p-4 border border-green-100 text-green-900 text-md  text-sm md:text-[16px]"
                >
                  <td>{index + 1}</td>
                  <td>{item.productName}</td>
                  <td>{item.productQuantity}</td>
                  <td>
                    {Number.parseInt(item.productPrice).toLocaleString()}.00{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="my-5 px-[50%] text-gray-500">
          Total:
          <span className="text-green-800 bg-green-50 p-2 text-nowrap font-medium">
            {totalSum()?.toLocaleString()}.00 xaf FCFA
          </span>
        </p>
      </div>
      <p className="text-gray-600 mt-10">Set Order Status</p>
      <div className="flex gap-3 my-5">
        <button
          disabled={disablePendingButton}
          className="text-gray-800 border disabled:opacity-45 px-6 py-2 rounded-sm shadow cursor-pointer hover:bg-gray-100 trans shadow-gray-300 border-gray-200"
        >
          {order?.status === "Pending" ? "Pending" : "Done"}
        </button>
        <button
          disabled={disableDeliveredButton}
          onClick={handleDeliveredProducts}
          className={`text-green-800 border disabled:opacity-45 px-6 py-2 rounded-sm shadow cursor-pointer ${
            order?.status === "Delivered"
              ? "bg-green-500 text-white"
              : "hover:bg-green-100 "
          } trans shadow-green-200 border-green-100 `}
        >
          {order?.status === "Delivered" ? "Delivered" : "Deliver"}
        </button>
        <button
          disabled={disableCancelButton}
          onClick={handleCanceledProducts}
          className={`text-red-800 border disabled:opacity-45 px-6 py-2 rounded-sm shadow cursor-pointer ${
            order?.status === "Canceled"
              ? "bg-red-500 text-white"
              : "hover:bg-red-100 "
          } trans shadow-red-200 border-red-100`}
        >
          {order?.status === "Canceled" ? "Canceled" : "Cancel"}
        </button>
      </div>
    </div>
  );
}

export default ViewOrders;
