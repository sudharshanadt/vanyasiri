"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import productsData from "@/data/products.json";
import ProductCard from "@/components/shop/ProductCard";
import SuggestedProducts from "@/components/shop/SuggestedProducts";

export default function CategoryPage() {
    const params = useParams();
    const categorySlug = params?.category as string;
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Map slug back to display name if needed, or just use slug directly for handle matching
    const categoryName = categorySlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("http://localhost:9000/store/products?fields=categories.*", {
                    headers: {
                        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "pk_19c9867c6163b41d4b003cb12d1b028fd67ccb9fa9c2b19993b4bd8cf1609c0d"
                    }
                });

                if (res && res.ok) {
                    const data = await res.json();
                    // In Medusa v2, we check categories for name or handle matching the slug
                    const filtered = data.products.filter((p: any) =>
                        p.categories?.some((c: any) =>
                            c.handle === categorySlug ||
                            c.name.toLowerCase() === categoryName.toLowerCase()
                        )
                    );

                    // Fallback to static data if no products found in Medusa for this category
                    if (filtered.length > 0) {
                        setProducts(filtered);
                    } else {
                        const staticProducts = productsData.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug);
                        setProducts(staticProducts);
                    }
                } else {
                    const staticProducts = productsData.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug);
                    setProducts(staticProducts);
                }
            } catch (error) {
                
                const staticProducts = productsData.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug);
                setProducts(staticProducts);
            } finally {
                setLoading(false);
            }
        }

        if (categorySlug) fetchProducts();
    }, [categorySlug, categoryName]);

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
                    <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-4">{categoryName}</h1>
                    <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
                </div>

                {products.length === 0 ? (
                    <div className="text-center text-gray-500 py-20 bg-gray-50 rounded-sm border border-gray-100">
                        <p>More {categoryName} products coming soon.</p>
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
            <SuggestedProducts currentCategory={categoryName} />
        </div>
    );
}
