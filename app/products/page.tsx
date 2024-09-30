type Product = {
  id: number;
  name: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: "Product 1", price: "$10" },
  { id: 2, name: "Product 2", price: "$20" },
  { id: 3, name: "Product 3", price: "$30" },
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>
              {product.name} - {product.price}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
