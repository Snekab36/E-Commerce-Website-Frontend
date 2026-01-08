import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://e-commerce-website-backend-lilac.vercel.app/api/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <img src={product.image} className="h-64" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button
        className="bg-black text-white px-4 py-2"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
