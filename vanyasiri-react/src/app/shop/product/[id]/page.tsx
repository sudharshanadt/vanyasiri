"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import productsData from "@/data/products.json";
import { useCart } from "@/store/CartContext";
import SuggestedProducts from "@/components/shop/SuggestedProducts";
import { ChevronRight } from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";
import { formatPrice, extractPrice } from "@/lib/utils";

export default function ProductDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const { addToCart } = useCart();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Review states
    const [reviewName, setReviewName] = useState("");
    const [reviewEmail, setReviewEmail] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [reviewRating, setReviewRating] = useState(5);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [reviews, setReviews] = useState<any[]>([]);

    // Tab state
    const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`http://localhost:9000/store/products/${id}`, {
                    headers: {
                        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "pk_19c9867c6163b41d4b003cb12d1b028fd67ccb9fa9c2b19993b4bd8cf1609c0d"
                    }
                });
                if (res && res.ok) {
                    const data = await res.json();
                    setProduct(data.product);
                } else {
                    // Fallback to static data
                    const staticProduct = productsData.find(p => p.id === id);
                    setProduct(staticProduct);
                }
            } catch (error) {

                const staticProduct = productsData.find(p => p.id === id);
                setProduct(staticProduct);
            } finally {
                setLoading(false);
            }
        }

        if (id) fetchProduct();
    }, [id]);

    const imageUrls: string[] = useMemo(() => {
        if (!product) return [];
        if (Array.isArray(product.images) && product.images.length > 0) {
            if (typeof product.images[0] === "string") return product.images.filter(Boolean);
            if (product.images[0]?.url) return product.images.map((img: any) => img.url).filter(Boolean);
        }
        if (product.image) return [product.image];
        if (product.thumbnail) return [product.thumbnail];
        return [];
    }, [product]);

    useEffect(() => {
        setSelectedImage(imageUrls[0] || null);
    }, [imageUrls]);

    // Load static reviews from localStorage
    useEffect(() => {
        if (id) {
            const stored = localStorage.getItem(`reviews_${id}`);
            if (stored) {
                setReviews(JSON.parse(stored));
            }
        }
    }, [id]);

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReview = {
            id: Date.now().toString(),
            name: reviewName,
            email: reviewEmail,
            text: reviewText,
            rating: reviewRating,
            date: new Date().toLocaleDateString(),
            status: "pending" // Admin needs to approve
        };
        const updated = [...reviews, newReview];
        setReviews(updated);
        localStorage.setItem(`reviews_${id}`, JSON.stringify(updated));
        setReviewSubmitted(true);
        setReviewName("");
        setReviewEmail("");
        setReviewText("");
        setReviewRating(5);
    };

    const getShippingInfo = (category: string) => {
        const cat = category.toLowerCase();
        if (cat.includes("sughandha")) return "Dispatched 5 days after payment.";
        if (cat.includes("ayurveda") || cat.includes("yoga")) return "Dispatched 3 days after payment.";
        if (cat.includes("palm leaf")) return "Shipment after 100 days of payment (custom crafted).";
        if (cat.includes("resin") || cat.includes("gum")) return "Dispatched 2 days after payment.";
        if (cat.includes("gem") || cat.includes("stone")) return "Please enquire for availability and shipping.";
        return "Estimated delivery within 5-7 business days across India.";
    };

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
                                    src={selectedImage || imageUrls[0] || product.image || product.thumbnail || "/images/placeholder.png"}
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

                        {imageUrls.length > 1 && (
                            <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
                                {imageUrls.map((url) => {
                                    const isActive = url === selectedImage;
                                    return (
                                        <button
                                            key={url}
                                            type="button"
                                            onClick={() => setSelectedImage(url)}
                                            className={[
                                                "relative h-20 w-20 shrink-0 rounded-sm border bg-white",
                                                isActive ? "border-[#546247] ring-2 ring-[#546247]/20" : "border-gray-200 hover:border-gray-300"
                                            ].join(" ")}
                                            aria-label="Select product image"
                                        >
                                            <Image src={url} alt={product.name} fill className="object-contain p-2" />
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Right: Product Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="mb-6">
                            <h2 className="text-[#546247] uppercase tracking-widest text-xs font-semibold mb-3">{product.category}</h2>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2E26] leading-tight mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-baseline gap-4 mb-6">
                                <span className="text-2xl font-serif text-[#B38F52]">₹{formatPrice(extractPrice(product))}</span>
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
                                <span>{getShippingInfo(product.category)}</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <span className="text-[#B38F52] font-serif shrink-0">Support:</span>
                                <span>For spiritual guidance or product questions, <a href="mailto:info@vanyasiri.org" className="text-[#546247] underline">contact us</a>.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Section for Description & Reviews */}
            <section className="py-12 bg-[#F9F8F6] border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    {/* Tabs Header */}
                    <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab("description")}
                            className={`px-6 py-4 text-sm uppercase tracking-widest font-medium whitespace-nowrap transition-colors border-b-2 ${activeTab === "description" ? "border-[#546247] text-[#546247]" : "border-transparent text-gray-400 hover:text-gray-600"}`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab("reviews")}
                            className={`px-6 py-4 text-sm uppercase tracking-widest font-medium whitespace-nowrap transition-colors border-b-2 ${activeTab === "reviews" ? "border-[#546247] text-[#546247]" : "border-transparent text-gray-400 hover:text-gray-600"}`}
                        >
                            Reviews ({reviews.filter(r => r.status === "approved").length})
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[300px]">
                        {activeTab === "description" && (
                            <div className="bg-white p-8 md:p-10 border border-[#DFD5C4]/30 shadow-sm rounded-sm">
                                {product.longDescription ? (
                                    <div
                                        className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed font-light prose-headings:font-serif prose-headings:text-[#2A2E26] prose-headings:font-normal prose-a:text-[#546247]"
                                        dangerouslySetInnerHTML={{ __html: product.longDescription }}
                                    />
                                ) : (
                                    <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed font-light">
                                        <p>{product.description}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Write a Review */}
                                <div className="bg-white p-8 border border-[#DFD5C4]/30 shadow-sm rounded-sm">
                                    <h3 className="font-serif text-[#2A2E26] text-xl mb-6">Write a Review</h3>
                                    {reviewSubmitted ? (
                                        <div className="bg-[#F5F7F2] text-[#546247] p-4 text-sm border border-[#546247]/20 rounded-sm">
                                            <p className="font-medium">Thank you for your review!</p>
                                            <p className="mt-1">Your review has been submitted and is currently pending admin approval. It will appear here once approved.</p>
                                            <button onClick={() => setReviewSubmitted(false)} className="mt-4 text-xs uppercase tracking-widest underline decoration-[#546247]/30 hover:decoration-[#546247] transition-all">Write another</button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                                            <div className="flex gap-1 mb-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        type="button"
                                                        key={star}
                                                        onClick={() => setReviewRating(star)}
                                                        className="focus:outline-none"
                                                    >
                                                        <Star size={20} className={star <= reviewRating ? "fill-[#B38F52] text-[#B38F52]" : "text-gray-300"} />
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    required
                                                    value={reviewName}
                                                    onChange={(e) => setReviewName(e.target.value)}
                                                    placeholder="Your Name *"
                                                    className="w-full border-b border-[#DFD5C4] py-2 px-1 focus:outline-none focus:border-[#546247] text-sm bg-transparent"
                                                />
                                                <input
                                                    type="email"
                                                    required
                                                    value={reviewEmail}
                                                    onChange={(e) => setReviewEmail(e.target.value)}
                                                    placeholder="Your Email *"
                                                    className="w-full border-b border-[#DFD5C4] py-2 px-1 focus:outline-none focus:border-[#546247] text-sm bg-transparent"
                                                />
                                            </div>
                                            <textarea
                                                required
                                                rows={4}
                                                value={reviewText}
                                                onChange={(e) => setReviewText(e.target.value)}
                                                placeholder="Your Review *"
                                                className="w-full border-b border-[#DFD5C4] py-2 px-1 focus:outline-none focus:border-[#546247] text-sm bg-transparent resize-none mt-4"
                                            ></textarea>
                                            <button type="submit" className="bg-[#546247] hover:bg-[#435038] text-white px-6 py-3 text-xs uppercase tracking-widest transition-colors mt-2 w-full">
                                                Submit Review
                                            </button>
                                            <p className="text-xs text-gray-500 text-center mt-3 italic">All reviews are subject to admin approval.</p>
                                        </form>
                                    )}
                                </div>

                                {/* Display Reviews */}
                                <div>
                                    <h3 className="font-serif text-[#2A2E26] text-xl mb-6">Published Reviews</h3>
                                    <div className="space-y-6">
                                        {reviews.filter(r => r.status === "approved").length === 0 ? (
                                            <p className="text-gray-500 text-sm italic">There are no approved reviews yet.</p>
                                        ) : (
                                            reviews.filter(r => r.status === "approved").map((review) => (
                                                <div key={review.id} className="border-b border-[#DFD5C4]/30 pb-6">
                                                    <div className="flex gap-1 mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} size={14} className={i < review.rating ? "fill-[#B38F52] text-[#B38F52]" : "text-gray-300"} />
                                                        ))}
                                                    </div>
                                                    <p className="text-sm font-medium text-[#2A2E26] mb-1">{review.name} <span className="text-gray-400 font-normal text-xs ml-2">{review.date}</span></p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Suggested Products Component */}
            <SuggestedProducts currentCategory={product.category} currentProductId={product.id} />
        </div>
    );
}
