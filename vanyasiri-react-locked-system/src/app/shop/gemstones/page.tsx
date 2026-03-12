"use client";

import Link from "next/link";
import productsData from "@/data/products.json";
import ProductCard from "@/components/shop/ProductCard";
import SuggestedProducts from "@/components/shop/SuggestedProducts";

export default function GemstonesPage() {
  const products = productsData.filter(p => p.category.toLowerCase() === "gemstones");

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-20 pb-12 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-4">Gemstones</h1>
          <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
        </div>
        
        {products.length === 0 ? (
          <div className="text-center text-gray-500 py-20 bg-gray-50 rounded-sm border border-gray-100">
            <p>More Gemstones products coming soon.</p>
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
      <SuggestedProducts currentCategory="Gemstones" />
    </div>
  );
}
