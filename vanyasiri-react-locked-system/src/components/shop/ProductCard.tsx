"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/store/CartContext";
import { X, ZoomIn } from "lucide-react";

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isBestSeller?: boolean;
};

export default function ProductCard({ product }: { product: any }) {
    const { addToCart } = useCart();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Unify product fields between static JSON and Medusa
    const name = product.name || product.title;
    const image = product.image || product.thumbnail || "/images/placeholder.png";
    const description = product.description || "";

    // For price, Medusa v2 store API returns variants with prices. 
    // We'll try to find an INR price or just use the first available one.
    let price = product.price;
    if (!price && product.variants && product.variants[0]?.calculated_price?.calculated_amount) {
        price = product.variants[0].calculated_price.calculated_amount;
    } else if (!price && product.variants && product.variants[0]?.prices) {
        // Fallback for older Medusa or specific configurations
        const p = product.variants[0].prices.find((p: any) => p.currency_code === "inr") || product.variants[0].prices[0];
        price = p ? p.amount : 0;
    }

    const displayPrice = price ? price.toLocaleString("en-IN") : "Price on Request";

    return (
        <>
            <div className="group bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
                {/* Image Section - Clicking opens Lightbox */}
                <div
                    className="relative aspect-square bg-[#F9F8F6] overflow-hidden cursor-pointer flex items-center justify-center p-4 group/image"
                    onClick={() => setIsLightboxOpen(true)}
                >
                    <div className="relative w-full h-full max-w-[250px] max-h-[250px]">
                        <Image
                            src={image}
                            fill
                            className="object-contain group-hover/image:scale-105 transition-transform duration-500"
                            alt={name}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    </div>

                    {/* Hover Overlay Icon for Image */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full shadow-sm transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                            <ZoomIn size={20} className="text-[#546247]" />
                        </div>
                    </div>

                    {product.isBestSeller && (
                        <div className="absolute top-3 left-3 bg-[#546247] text-white text-[10px] uppercase px-2 py-1 tracking-wider z-10">Best Seller</div>
                    )}
                </div>

                {/* Details Section - Clicking opens Product Page */}
                <div className="p-5 text-center flex flex-col flex-1 justify-between">
                    <Link href={`/shop/product/${product.id}`} className="block flex-1 group/text">
                        <h3 className="font-serif text-sm text-[#2A2E26] mb-1 group-hover/text:text-[#546247] transition-colors leading-tight line-clamp-2 min-h-[40px] flex items-center justify-center">
                            {name}
                        </h3>
                        <p className="text-[#B38F52] font-semibold text-sm mb-4">₹{displayPrice}</p>
                    </Link>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="w-full border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white py-2.5 text-xs uppercase tracking-wider transition-colors mt-auto font-medium z-10 relative">
                        Add To Cart
                    </button>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                    <button
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full"
                        aria-label="Close image"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-4xl aspect-square md:aspect-video bg-transparent flex flex-col items-center justify-center">
                        <div className="relative w-full h-full max-h-[80vh]">
                            <Image
                                src={product.image}
                                fill
                                className="object-contain drop-shadow-2xl"
                                alt={product.name}
                                priority
                            />
                        </div>
                        <div className="absolute bottom-[-40px] text-white text-center w-full">
                            <h3 className="font-serif text-xl tracking-wide">{product.name}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
