"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "@/components/shop/ProductCard";
import SuggestedProducts from "@/components/shop/SuggestedProducts";

const agriProducts = [
    {
        id: "raw-wild-honey",
        name: "Raw Wild Honey",
        category: "Vedic Agriculture",
        price: 850,
        image: "/images/raw-honey-.jpeg",
        description: "100% pure raw wild-harvested honey from the forests of Devarayanadurga. Grown using sacred, eco-friendly Vedic agricultural practices.",
    },
];

export default function VedicAgricultureShopPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

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
                    const filtered = data.products.filter((p: any) =>
                        p.categories?.some((c: any) =>
                            c.handle?.includes("agriculture") || c.name.toLowerCase().includes("agriculture")
                        )
                    );
                    setProducts(filtered.length > 0 ? filtered : agriProducts);
                } else {
                    setProducts(agriProducts);
                }
            } catch {
                setProducts(agriProducts);
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
            {/* Hero */}
            <div className="bg-[#F5F7F2] py-20 text-center border-b border-[#DFD5C4]/40">
                <span className="text-xs uppercase tracking-[0.3em] text-[#B38F52] mb-3 block">Ancient Wisdom</span>
                <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-4">Vedic Agriculture</h1>
                <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-6"></div>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed px-4">
                    Step into the timeless world of Ancient Vedic Agriculture, where nature and spirituality unite. We nurture over 20 rare varieties of traditional rice and forest produce, grown using sacred, eco-friendly Vedic practices.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16 flex-grow">
                {products.length === 0 ? (
                    <div className="text-center text-gray-500 py-20 bg-gray-50 rounded-sm border border-gray-100">
                        <p>Vedic Agriculture products coming soon.</p>
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
            <SuggestedProducts currentCategory="Vedic Agriculture" />
        </div>
    );
}
