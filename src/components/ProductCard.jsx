import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-contain"
/>
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <Link
          to={`/products/${product._id}`}
          className="inline-block mt-2 text-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
