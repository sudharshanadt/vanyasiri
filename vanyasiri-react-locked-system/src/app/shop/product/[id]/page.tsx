"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import productsData from "@/data/products.json";
import { useCart } from "@/store/CartContext";
import SuggestedProducts from "@/components/shop/SuggestedProducts";
import { ChevronRight } from "lucide-react";

import { useEffect, useState } from "react";

export default function ProductDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const { addToCart } = useCart();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`http://localhost:9000/store/products/${id}`, {
                    headers: {
                        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "pk_19c9867c6163b41d4b003cb12d1b028fd67ccb9fa9c2b19993b4bd8cf1609c0d"
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setProduct(data.product);
                } else {
                    // Fallback to static data
                    const staticProduct = productsData.find(p => p.id === id);
                    setProduct(staticProduct);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
                const staticProduct = productsData.find(p => p.id === id);
                setProduct(staticProduct);
            } finally {
                setLoading(false);
            }
        }

        if (id) fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh] bg-[#f7f5ed]">
                <div className="w-8 h-8 border-4 border-[#546247] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex flex-col w-full bg-[#f7f5ed] min-h-[70vh] items-center justify-center px-4">
                <h1 className="text-4xl font-serif text-[#2A2E26] mb-4">Product Not Found</h1>
                <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
                <Link href="/shop/rasamani" className="bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors inline-block">
                    Return to Shop
                </Link>
            </div>
        );
    }

    const categorySlug = product.category.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="flex flex-col w-full bg-white min-h-screen">
            {/* Breadcrumb Navigation */}
            <div className="bg-[#FDFCF8] border-b border-gray-100 py-3">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center text-xs text-gray-500 uppercase tracking-wider space-x-2">
                        <Link href="/" className="hover:text-[#546247] transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/our-story" className="hover:text-[#546247] transition-colors">Shop</Link>
                        <ChevronRight size={12} />
                        <Link href={`/shop/${categorySlug}`} className="hover:text-[#546247] transition-colors">{product.category}</Link>
                        <ChevronRight size={12} />
                        <span className="text-[#546247] font-medium truncate max-w-[200px] md:max-w-none">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Product Section */}
            <section className="py-12 md:py-20 container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left: Product Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-square bg-[#F9F8F6] rounded-sm overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center p-8">
                            <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
                                <Image
                                    src={product.image}
                                    fill
                                    className="object-contain"
                                    alt={product.name}
                                    priority
                                />
                            </div>
                            {product.isBestSeller && (
                                <div className="absolute top-6 left-6 bg-[#546247] text-white text-[11px] font-medium uppercase px-3 py-1.5 tracking-widest shadow-sm rounded-sm">
                                    Best Seller
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="mb-6">
                            <h2 className="text-[#546247] uppercase tracking-widest text-xs font-semibold mb-3">{product.category}</h2>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2E26] leading-tight mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-baseline gap-4 mb-6">
                                <span className="text-2xl font-serif text-[#B38F52]">₹{product.price.toLocaleString("en-IN")}</span>
                                <span className="text-sm text-gray-400 font-light">Inclusive of all taxes</span>
                            </div>
                        </div>

                        <div className="w-16 h-px bg-gray-200 mb-8"></div>

                        <div className="prose prose-sm md:prose-base text-gray-600 mb-10 leading-relaxed font-light">
                            <p>{product.description}</p>
                        </div>

                        {/* Features List (Generic placeholder mapping but gives rich look) */}
                        <ul className="space-y-3 mb-10 text-sm text-gray-600">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#546247]"></span>
                                100% Authentic & Natural
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#546247]"></span>
                                Ethically Sourced
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#546247]"></span>
                                Handcrafted with Vedic Principles
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button
                                onClick={() => addToCart(product)}
                                className="flex-1 bg-[#546247] hover:bg-[#435038] text-white py-4 px-8 text-sm uppercase tracking-[0.1em] font-medium rounded-sm transition-colors shadow-sm focus:ring-2 focus:ring-[#546247] focus:ring-offset-2 flex justify-center items-center gap-2">
                                Add To Cart
                            </button>
                        </div>

                        <div className="bg-[#FDFCF8] border border-[#DFD5C4]/30 p-6 rounded-sm text-sm text-[#2A2E26]">
                            <p className="flex items-start gap-3 mb-3">
                                <span className="text-[#B38F52] font-serif shrink-0">Delivery:</span>
                                <span>Estimated delivery within 5-7 business days across India.</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <span className="text-[#B38F52] font-serif shrink-0">Support:</span>
                                <span>For spiritual guidance or product questions, <a href="mailto:vanyasiritrust@gmail.com" className="text-[#546247] underline">contact us</a>.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suggested Products Component */}
            <SuggestedProducts currentCategory={product.category} currentProductId={product.id} />
        </div>
    );
}
