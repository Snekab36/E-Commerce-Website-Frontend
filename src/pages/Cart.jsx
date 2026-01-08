import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,0);
if (!cart.length) return <p className="p-8">Cart is empty</p>;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Cart</h1>

      {cart.map(item => (
        <div key={item.productId} className="flex justify-between">
          <p>{item.title} (x{item.quantity})</p>
          <button onClick={() => removeFromCart(item.productId)}>
            Remove
          </button>
        </div>
      ))}

      <p className="mt-4 font-bold">Total: ${total}</p>

      <Link
        to="/checkout"
        className="bg-black text-white px-4 py-2 mt-4 inline-block"
      >
        Checkout
      </Link>
    </div>
  );
}