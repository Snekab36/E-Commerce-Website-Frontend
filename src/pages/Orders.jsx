import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://e-commerce-website-backend-lilac.vercel.app/api/orders/myorders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => setOrders(res.data));
  }, []);

  if (!orders.length)
    return <p className="p-8">No orders found</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.map(order => (
        <div
          key={order._id}
          className="border p-4 mb-4 rounded"
        >
          <p><b>Order ID:</b> {order._id}</p>
          <p><b>Total:</b> ${order.totalPrice}</p>
          <p><b>Status:</b> {order.isPaid ? "Paid" : "Pending"}</p>

          <div className="mt-2">
            <b>Items:</b>
            {order.orderItems.map((item, index) => (
              <p key={index}>
                {item.title} x {item.quantity}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
