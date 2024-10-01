export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-pink-600">
        Welcome to Our E-Commerce Store
      </h1>
      <p className="mt-4 text-pink-400">
        <a href="/products" className="underline hover:text-pink-500">
          Browse our Products
        </a>
      </p>
    </div>
  );
}
