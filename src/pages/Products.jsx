import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://e-commerce-website-backend-lilac.vercel.app/api/products")
      .then(res => setProducts(res.data));
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
