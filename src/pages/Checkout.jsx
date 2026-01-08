import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();
  

  const placeOrder = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "https://e-commerce-website-backend-lilac.vercel.app/api/orders",
        {
          orderItems: cart,
          totalPrice: cart.reduce((s, i) => s + i.price * i.quantity, 0),
          shippingAddress: "Test Address",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Order placed successfully 🎉");
    } catch {
      toast.error("Order failed");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <button
        onClick={placeOrder}
        className="bg-black text-white px-4 py-2"
      >
        Place Order
      </button>
    </div>
  );
}
