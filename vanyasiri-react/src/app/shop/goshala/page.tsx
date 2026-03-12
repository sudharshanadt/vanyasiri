"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "@/components/shop/ProductCard";
import SuggestedProducts from "@/components/shop/SuggestedProducts";

const goshalaProduts = [
    {
        id: "raw-wild-honey",
        name: "Raw Wild Honey",
        category: "Goshala",
        price: 850,
        image: "/images/raw-honey-.jpeg",
        description: "100% pure raw wild-harvested honey from the forests of Devarayanadurga, Karnataka. Rich in enzymes, antioxidants and medicinal properties as described in Ayurveda. Collected sustainably by tribal communities.",
    },
    {
        id: "wild-stingless-bees-honey",
        name: "Wild Stingless Bees Honey",
        category: "Goshala",
        price: 1200,
        image: "/images/Gemini_Generated_Image_hs0aarhs0aarhs0a-1-e1754549928806.png",
        description: "Rarest of all honeys — collected from wild Stingless Bee colonies in pristine forest areas. Known as 'Mehi' in Ayurveda, prized for extraordinary medicinal properties with a unique bittersweet taste.",
    },
];

export default function GoshalaShopPage() {
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
                            c.handle === "goshala" || c.name.toLowerCase() === "goshala"
                        )
                    );
                    setProducts(filtered.length > 0 ? filtered : goshalaProduts);
                } else {
                    setProducts(goshalaProduts);
                }
            } catch {
                setProducts(goshalaProduts);
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
                <span className="text-xs uppercase tracking-[0.3em] text-[#B38F52] mb-3 block">Vedic Tradition</span>
                <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-4">Goshala</h1>
                <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-6"></div>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed px-4">
                    Step into the serene world of a Goshala — a sanctuary of compassion dedicated to the care and protection of cows, revered as sacred beings in Indian culture. Our Goshala products bring the purity of this tradition directly to your home.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16 flex-grow">
                {products.length === 0 ? (
                    <div className="text-center text-gray-500 py-20 bg-gray-50 rounded-sm border border-gray-100">
                        <p>Goshala products coming soon.</p>
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
            <SuggestedProducts currentCategory="Goshala" />
        </div>
    );
}
