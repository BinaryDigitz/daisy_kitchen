import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Back, Title } from "../components/exportComp";

function ViewOrder() {
  const order = {
    orderId: "12dsf34e",
    orderDate: "03-25-2023",
    products: [
      { productId: "afg42234df44", name: "Cake one", price: "200000" },
      { productId: "afg42234df44", name: "Cake one", price: "200233" },
      { productId: "afg42234df44", name: "Cake one", price: "234244" },
    ],
    status: "Delivered",
    totalPrice: "234, 000",
  };
  const { orderId } = useParams();

  async function fetchOrder() {
    const { data } = await fetch("", { order: "orderId" });
    console.log(data);
  }
  useEffect(() => {
    fetchOrder();
  }, [orderId]);
  const statusColor =
    order.status === "Delivered" ? "text-green-500" : "text-gray-500 ";
  const amount = order.products.reduce((total, item) => {
    const convertedNumber = Number.parseInt(item.price);
    return (total += convertedNumber);
  }, 0);

  return (
    <div className="h-scree relative my-6 lg:my-8 min-h-[80dvh]">
      <Back link="/orders" />
      <Title text1="ORDER" text2="STATUS" size="heading3" />
      <div className="text-center mt-10">
        <h3 className="text-gray-600">Order ID: {order.orderId}</h3>
        <p className="text-gray-500 py-2">
          Order date: <span className="text-gray-700">{order.orderDate}</span>
        </p>
        <p className="text-gray-500">
          Order status: <span className={`${statusColor}`}>{order.status}</span>
        </p>
      </div>
      <div>
        <table className="mt-14 mx-auto w-[90%] lg:w-4/5 border-b">
          <thead className="">
            <tr className="flex text-start font-bold justify-between bg-red-100 py-2 px-3 gap-4 bg-red-50 text-red-950">
              <td>ORDER ID</td>
              <td>ITEM</td>
              <td>PRICE</td>
            </tr>
          </thead>
          <tbody>
            {order.products.map((item) => (
              <tr
                key={item.productId}
                className="hover:bg-red-50 flex text-start justify-between py-2 bg-red-50 px-3 gap-4 hover:bg-red-100 text-red-950"
              >
                <td className="text-gray-500">{item.productId}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p className="mt-8 text-end w-4/5 text-gray-500">
            Total amount:
            <span className="font-bold text-green-800">
              {" " + amount.toLocaleString()}.00
            </span>
          </p>
          <p className="text-sm mt-8 w-4/5 underline text-end">
            <span title="download file" className="w-40 bg-red-50 p-3 cursor-pointer">Download order PDF</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
