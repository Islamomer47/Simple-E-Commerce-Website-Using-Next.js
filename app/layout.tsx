import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Simple E-Commerce Website" />
        <meta name="keywords" content="E-commerce, Products, Online Shopping" />
        <title>Simple E-Commerce Store</title>
      </head>
      <body className="bg-pink-50">
        {" "}
        <header className="bg-pink-500 p-4 text-white">
          <nav className="container mx-auto">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-pink-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-pink-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-200">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
