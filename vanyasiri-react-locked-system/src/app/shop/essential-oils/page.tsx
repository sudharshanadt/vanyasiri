"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import { useCart } from "@/store/CartContext";
import SuggestedProducts from "@/components/shop/SuggestedProducts";

export default function essentialoilsPage() {
  const products = productsData.filter(p => p.category.toLowerCase() === "essential oils");
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-4">Essential Oils</h1>
        <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
      </div>
      
      {products.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          <p>More Essential Oils products coming soon.</p>
          <Link href="/" className="inline-block mt-8 bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
            Return Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square bg-[#DFD5C4]/30 mb-4 overflow-hidden flex items-center justify-center">
                <Image src={product.image} fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg text-[#2A2E26] mb-1 group-hover:text-[#546247] transition-colors">{product.name}</h3>
                <p className="text-[#B38F52] font-semibold text-sm mb-4">₹{product.price.toLocaleString('en-IN')}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white py-2 text-xs uppercase tracking-wider transition-colors mt-auto z-10 relative" onClick={(e) => { e.preventDefault(); addToCart(product); }}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
