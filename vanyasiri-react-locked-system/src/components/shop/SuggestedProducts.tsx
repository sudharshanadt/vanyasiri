"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import productsData from "@/data/products.json";
import { useCart } from "@/store/CartContext";

export default function SuggestedProducts({ currentCategory, currentProductId }: { currentCategory?: string, currentProductId?: string }) {
    const [suggestedProducts, setSuggestedProducts] = useState<typeof productsData>([]);
    const { addToCart } = useCart();

    useEffect(() => {
        async function fetchProducts() {
            try {
                // In Medusa v2, we filter by category_id or handle
                // For simplicity, we'll fetch all products and filter for now, or use a search param if we have the ID
                const res = await fetch("http://localhost:9000/store/products", {
                    headers: {
                        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "pk_19c9867c6163b41d4b003cb12d1b028fd67ccb9fa9c2b19993b4bd8cf1609c0d"
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    let pool = data.products.filter((p: any) => p.id !== currentProductId);

                    // Filter by category if matches
                    const categoryPool = pool.filter((p: any) =>
                        p.categories?.some((c: any) => c.name === currentCategory || c.handle === currentCategory?.toLowerCase().replace(/\s+/g, '-'))
                    );

                    const finalPool = categoryPool.length >= 4 ? categoryPool : pool;
                    const shuffled = [...finalPool].sort(() => 0.5 - Math.random());
                    setSuggestedProducts(shuffled.slice(0, 4));
                } else {
                    const availableProducts = productsData.filter(p => p.id !== currentProductId);
                    let pool = availableProducts.filter(p => p.category === currentCategory);
                    if (pool.length < 4) pool = availableProducts;
                    const shuffled = [...pool].sort(() => 0.5 - Math.random());
                    setSuggestedProducts(shuffled.slice(0, 4));
                }
            } catch (error) {
                console.error("Error fetching suggestions:", error);
                const availableProducts = productsData.filter(p => p.id !== currentProductId);
                let pool = availableProducts.filter(p => p.category === currentCategory);
                if (pool.length < 4) pool = availableProducts;
                const shuffled = [...pool].sort(() => 0.5 - Math.random());
                setSuggestedProducts(shuffled.slice(0, 4));
            }
        }
        fetchProducts();
    }, [currentCategory, currentProductId]);

    if (suggestedProducts.length === 0) return null;

    return (
        <section className="py-20 border-t border-[#DFD5C4]/30 mt-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-serif uppercase tracking-widest text-[#2A2E26] mb-3">You May Also Like</h2>
                    <div className="w-12 h-0.5 bg-[#B38F52] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {suggestedProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                            <Link href={`/shop/product/${product.id}`} className="block relative aspect-square bg-[#F9F8F6] overflow-hidden">
                                <Image
                                    src={product.image}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    alt={product.name}
                                />
                                {product.isBestSeller && (
                                    <div className="absolute top-3 left-3 bg-[#546247] text-white text-[10px] uppercase px-2 py-1 tracking-wider">Best Seller</div>
                                )}
                            </Link>
                            <div className="p-5 text-center flex flex-col flex-1 justify-between">
                                <Link href={`/shop/product/${product.id}`} className="block">
                                    <h3 className="font-serif text-sm text-[#2A2E26] mb-1 group-hover:text-[#546247] transition-colors leading-tight line-clamp-2 min-h-[40px] flex items-center justify-center">
                                        {product.name}
                                    </h3>
                                    <p className="text-[#B38F52] font-semibold text-sm mb-4">₹{product.price.toLocaleString("en-IN")}</p>
                                </Link>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart(product);
                                    }}
                                    className="w-full border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white py-2 text-xs uppercase tracking-wider transition-colors mt-auto">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
