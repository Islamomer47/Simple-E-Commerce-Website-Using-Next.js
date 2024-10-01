import { getProductById, getProducts } from "@/lib/api";
import { notFound } from "next/navigation";
import Cart from "@/components/Cart";

export const revalidate = 60; //isr

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: any) => ({ id: product.id.toString() }));
}

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-pink-600">{product.title}</h1>
      <p className="mt-2 text-pink-500">Price: ${product.price}</p>
      <p className="mt-4 text-pink-400">{product.description}</p>

      <Cart product={product} />
    </div>
  );
};

export default ProductDetailsPage;
