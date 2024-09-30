"use client"; // Mark this as a Client Component

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
};

const products: Product[] = [
  { id: 1, name: "Product 1", price: "$10", description: "This is Product 1" },
  { id: 2, name: "Product 2", price: "$20", description: "This is Product 2" },
  { id: 3, name: "Product 3", price: "$30", description: "This is Product 3" },
];

export default function ProductDetailsPage() {
  const params = useParams();
  const { id } = params;

  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) {
    notFound(); // Return a 404 if the product isn't found
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
