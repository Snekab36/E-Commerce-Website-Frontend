import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">SparkMart</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="ml-4">Register</Link>

      </div>
    </nav>
  );
}
