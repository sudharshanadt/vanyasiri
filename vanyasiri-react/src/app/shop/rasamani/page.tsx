"use client";

import Link from "next/link";
import productsData from "@/data/products.json";
import ProductCard from "@/components/shop/ProductCard";
import SuggestedProducts from "@/components/shop/SuggestedProducts";

import { useEffect, useState } from "react";

export default function RasamaniPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:9000/store/products", {
          headers: {
            "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "pk_19c9867c6163b41d4b003cb12d1b028fd67ccb9fa9c2b19993b4bd8cf1609c0d"
          }
        });
        if (res && res.ok) {
          const data = await res.json();
          // In Medusa v2, we Check categories for name or handle
          const filtered = data.products.filter((p: any) =>
            p.categories?.some((c: any) => c.name === "Rasamani" || c.handle === "rasamani")
          );
          setProducts(filtered.length > 0 ? filtered : productsData.filter(p => p.category.toLowerCase() === "rasamani"));
        } else {
          setProducts(productsData.filter(p => p.category.toLowerCase() === "rasamani"));
        }
      } catch (error) {
        setProducts(productsData.filter(p => p.category.toLowerCase() === "rasamani"));
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-white">
        <div className="w-8 h-8 border-4 border-[#546247] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-20 pb-12 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-4">Rasamani</h1>
          <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 py-20 bg-gray-50 rounded-sm border border-gray-100">
            <p>More Rasamani products coming soon.</p>
            <Link href="/" className="inline-block mt-8 bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
              Return Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <SuggestedProducts currentCategory="Rasamani" />
    </div>
  );
}
