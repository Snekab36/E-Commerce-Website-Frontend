import { createContext, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  const addToCart = async (product) => {
    const token = localStorage.getItem("token"); 
    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/cart",
        {
          productId: product._id,
          title: product.name,
          price: product.price,
          image: product.image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart(data.items);
      toast.success("Product added to cart");
    } catch {
      toast.error("Failed to add to cart");
    }
  };

  const removeFromCart = async (productId) => {
    const token = localStorage.getItem("token"); 
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/cart/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCart(data.items);
      toast.success("Item removed");
    } catch {
      toast.error("Failed to remove item");
    }
  };



  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
