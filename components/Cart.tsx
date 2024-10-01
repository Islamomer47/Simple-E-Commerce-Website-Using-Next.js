"use client";

import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
};

const Cart = ({ product }: { product: Product }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="mt-6">
      <button
        onClick={() => addToCart(product)}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
      {cart.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-pink-600">Cart</h2>
          <ul className="mt-2 text-pink-400">
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
