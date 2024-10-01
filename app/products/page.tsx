import { getProducts } from "@/lib/api";

export const dynamic = "force-dynamic"; //ssr

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-pink-600">Products</h1>
      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((product: any) => (
          <li
            key={product.id}
            className="border border-pink-300 p-4 rounded-md"
          >
            <a
              href={`/products/${product.id}`}
              className="text-pink-500 hover:underline"
            >
              {product.title} - ${product.price}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
