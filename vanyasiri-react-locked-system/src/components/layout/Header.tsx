"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, ChevronDown, Menu, X, User } from "lucide-react";
import { useCart } from "@/store/CartContext";
import productsData from "@/data/products.json";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchWrapperRef = useRef<HTMLDivElement>(null);
    const { itemCount } = useCart();

    const searchResults = searchQuery.trim().length > 1
        ? productsData.filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 8)
        : [];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleDonate = async () => {
        try {
            const res = await fetch("/api/razorpay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: 50000 }), // ₹500 default donation
            });
            const order = await res.json();

            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                const options = {
                    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
                    amount: order.amount,
                    currency: "INR",
                    name: "Vanya Siri Trust",
                    description: "Support / Donate",
                    order_id: order.id,
                    theme: { color: "#546247" },
                };
                // @ts-expect-error Razorpay global
                new window.Razorpay(options).open();
            };
            document.body.appendChild(script);
        } catch {
            alert("Could not open payment. Please try again.");
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
            {/* TIER 1: Announcement Bar */}
            <div className="bg-[#2A2E26] text-[#DFD5C4] text-xs py-2 px-4 text-center tracking-wider">
                Support Wildlife Conservation | <span className="text-white hover:underline cursor-pointer" onClick={handleDonate}>Donate to Vanya Siri Trust</span>
            </div>

            {/* TIER 2: Main Row */}
            <div className="container mx-auto px-4 md:px-8 border-b border-gray-100">
                <div className="flex h-20 items-center justify-between gap-6 relative">

                    {/* Left: Logo & Mobile Toggle */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-1 text-gray-700 hover:text-[#546247] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/vanyasiri-logo.jpg"
                                alt="Vanya Siri Logo"
                                width={56}
                                height={56}
                                className="h-12 w-12 object-contain rounded-full border border-gray-200"
                                priority
                            />
                            <span className="font-serif text-xl md:text-2xl tracking-widest text-[#546247] uppercase font-light hidden sm:block">
                                Vanya Siri
                            </span>
                        </Link>
                    </div>

                    {/* Center: Search Bar (Desktop) */}
                    <div className="hidden lg:flex flex-1 max-w-2xl px-8 relative" ref={searchWrapperRef}>
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for wellness, ayurveda, rituals..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-5 pr-12 text-sm text-gray-800 focus:outline-none focus:border-[#546247] focus:bg-white transition-all shadow-inner"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#546247]">
                                <Search size={20} strokeWidth={2} />
                            </button>
                        </div>

                        {/* Search Dropdown Desktop */}
                        {isSearchFocused && searchQuery.trim().length > 1 && (
                            <div className="absolute top-full left-8 right-8 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-[100]">
                                {searchResults.length > 0 ? (
                                    <ul className="max-h-[400px] overflow-y-auto py-2">
                                        <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-50">Suggested Products</div>
                                        {searchResults.map(p => {
                                            const catSlug = p.category.toLowerCase().replace(/\s+/g, "-");
                                            return (
                                                <li key={p.id}>
                                                    <Link
                                                        href={`/shop/product/${p.id}`}
                                                        onClick={() => { setIsSearchFocused(false); setSearchQuery(""); }}
                                                        className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                                                    >
                                                        <div className="relative w-12 h-12 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                                                            <Image src={p.image} fill className="object-cover" alt={p.name} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm text-gray-800 font-medium truncate">{p.name}</p>
                                                            <p className="text-xs text-[#546247] truncate">{p.category}</p>
                                                        </div>
                                                        <span className="text-sm font-semibold text-[#B38F52] whitespace-nowrap">₹{p.price.toLocaleString("en-IN")}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <div className="p-6 text-center text-sm text-gray-500">
                                        No products found for "{searchQuery}"
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-5 md:gap-8 flex-shrink-0">
                        <Link href="/account" className="hidden sm:flex text-gray-600 hover:text-[#546247] transition-colors flex-col items-center gap-1 group">
                            <User size={22} strokeWidth={1.5} />
                            <span className="text-[10px] uppercase font-medium tracking-wide">Account</span>
                        </Link>

                        <Link href="/cart" className="relative text-gray-600 hover:text-[#546247] transition-colors flex flex-col items-center gap-1 group">
                            <div className="relative">
                                <ShoppingCart size={22} strokeWidth={1.5} />
                                {itemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#F25C54] text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold px-1 border-2 border-white shadow-sm">
                                        {itemCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-[10px] uppercase font-medium tracking-wide hidden sm:block">Cart</span>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Mobile Search Input (Visible only on mobile below main header) */}
            <div className="lg:hidden px-4 py-3 bg-white border-b border-gray-100 relative">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-[#546247]"
                    />
                    <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Search Dropdown Mobile */}
                {searchQuery.trim().length > 1 && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-[100] max-h-[60vh] overflow-y-auto">
                        {searchResults.length > 0 ? (
                            <ul className="py-2">
                                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-50">Suggestions</div>
                                {searchResults.map(p => (
                                    <li key={p.id}>
                                        <Link
                                            href={`/shop/product/${p.id}`}
                                            onClick={() => { setIsMobileMenuOpen(false); setSearchQuery(""); }}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50"
                                        >
                                            <div className="relative w-10 h-10 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                                <Image src={p.image} fill className="object-cover" alt={p.name} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-gray-800 font-medium truncate">{p.name}</p>
                                                <p className="text-xs text-[#546247]">{p.category}</p>
                                            </div>
                                            <span className="text-sm font-semibold text-[#B38F52]">₹{p.price}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-4 text-center text-sm text-gray-500">No results found</div>
                        )}
                    </div>
                )}
            </div>

            {/* TIER 3: Desktop Navigation Bar */}
            <nav className="hidden lg:flex justify-center bg-[#FDFCF8] border-b border-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
                <ul className="flex items-center h-14 space-x-1">

                    <li className="h-full">
                        <Link href="/our-story" className="h-full px-5 flex items-center text-[13px] font-medium uppercase tracking-[0.08em] text-gray-700 hover:text-[#546247] hover:bg-gray-50/80 transition-all border-b-2 border-transparent hover:border-[#546247]">
                            Our Story
                        </Link>
                    </li>

                    {/* Vedic Wisdom Dropdown */}
                    <li className="relative group h-full">
                        <div className="h-full px-5 flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.08em] text-gray-700 hover:text-[#546247] hover:bg-gray-50/80 transition-all cursor-pointer border-b-2 border-transparent hover:border-[#546247]">
                            Vedic Wisdom <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </div>
                        <div className="absolute top-full left-0 w-64 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top group-hover:scale-100 scale-95 z-50 rounded-b-md border border-gray-100 overflow-hidden">
                            <ul className="py-2">
                                <li><Link href="/vedic-wisdom/ayurveda" className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#F2EEE9] hover:text-[#546247] transition-colors">Vanyasiri Ayurveda</Link></li>
                                <li><Link href="/vedic-wisdom/rasashala" className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#F2EEE9] hover:text-[#546247] transition-colors">Vanyasiri Rasashala</Link></li>
                                <li><Link href="/vedic-wisdom/vedic-agriculture" className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#F2EEE9] hover:text-[#546247] transition-colors">Vanyasiri Vedic Agriculture</Link></li>
                                <li><Link href="/vedic-wisdom/yoga-meditation" className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#F2EEE9] hover:text-[#546247] transition-colors">Vanyasiri Yoga & Meditation</Link></li>
                                <li><Link href="/vedic-wisdom/goshala" className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#F2EEE9] hover:text-[#546247] transition-colors">Vanyasiri Goshala</Link></li>
                            </ul>
                        </div>
                    </li>

                    {/* Shop Dropdown */}
                    <li className="relative group h-full">
                        <div className="h-full px-5 flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.08em] text-gray-700 hover:text-[#546247] hover:bg-gray-50/80 transition-all cursor-pointer border-b-2 border-transparent hover:border-[#546247]">
                            Shop <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </div>
                        <div className="absolute top-full left-0 w-[500px] bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top group-hover:scale-100 scale-95 z-50 rounded-b-md border border-gray-100 overflow-hidden p-6 grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 block px-3">Categories</h4>
                                <ul>
                                    <li><Link href="/shop/rasamani" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#546247] rounded-md transition-colors">Rasamani</Link></li>
                                    <li><Link href="/shop/sughandha-veda" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#546247] rounded-md transition-colors">Sughandha Veda</Link></li>
                                    <li><Link href="/shop/resins-and-gums" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#546247] rounded-md transition-colors">Resins and Gums</Link></li>
                                    <li><Link href="/shop/palm-leaf-manuscripts" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#546247] rounded-md transition-colors">Palm Leaf Manuscripts</Link></li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 block px-3">Features & Tools</h4>
                                <ul>
                                    <li><Link href="/shop/gemstones" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#546247] rounded-md transition-colors">Gemstones</Link></li>
                                    <li><Link href="/shop/idols" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#546247] rounded-md transition-colors">Idols</Link></li>
                                    <li><Link href="/shop/ayurveda" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#546247] rounded-md transition-colors">Ayurveda</Link></li>
                                    <li><Link href="/shop/yoga-meditation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#546247] rounded-md transition-colors">Yoga & Meditation</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="h-full">
                        <Link href="/cwcr" className="h-full px-5 flex items-center text-[13px] font-medium uppercase tracking-[0.08em] text-gray-700 hover:text-[#546247] hover:bg-gray-50/80 transition-all border-b-2 border-transparent hover:border-[#546247]">
                            CWCR
                        </Link>
                    </li>
                    <li className="h-full">
                        <Link href="/honors-and-rewards" className="h-full px-5 flex items-center text-[13px] font-medium uppercase tracking-[0.08em] text-gray-700 hover:text-[#546247] hover:bg-gray-50/80 transition-all border-b-2 border-transparent hover:border-[#546247]">
                            Honors & Rewards
                        </Link>
                    </li>
                    <li className="h-full">
                        <Link href="/blogs" className="h-full px-5 flex items-center text-[13px] font-medium uppercase tracking-[0.08em] text-gray-700 hover:text-[#546247] hover:bg-gray-50/80 transition-all border-b-2 border-transparent hover:border-[#546247]">
                            Blogs
                        </Link>
                    </li>
                    <li className="h-full">
                        <Link href="/contact-us" className="h-full px-5 flex items-center text-[13px] font-medium uppercase tracking-[0.08em] text-gray-700 hover:text-[#546247] hover:bg-gray-50/80 transition-all border-b-2 border-transparent hover:border-[#546247]">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Push Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="absolute top-[138px] left-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <nav className="flex flex-col py-4">
                            <Link href="/our-story" className="px-6 py-4 text-[15px] font-medium uppercase tracking-wider border-b border-gray-100 flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                                Our Story <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-[#546247]" size={16} />
                            </Link>

                            <div className="border-b border-gray-100">
                                <div className="px-6 py-4 text-[15px] font-medium uppercase tracking-wider text-gray-800 bg-gray-50">
                                    Vedic Wisdom
                                </div>
                                <ul className="bg-white">
                                    <li><Link href="/vedic-wisdom/ayurveda" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Vanyasiri Ayurveda</Link></li>
                                    <li><Link href="/vedic-wisdom/rasashala" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Vanyasiri Rasashala</Link></li>
                                    <li><Link href="/vedic-wisdom/vedic-agriculture" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Vanyasiri Vedic Agriculture</Link></li>
                                    <li><Link href="/vedic-wisdom/yoga-meditation" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Vanyasiri Yoga & Meditation</Link></li>
                                    <li><Link href="/vedic-wisdom/goshala" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Vanyasiri Goshala</Link></li>
                                </ul>
                            </div>

                            <div className="border-b border-gray-100">
                                <div className="px-6 py-4 text-[15px] font-medium uppercase tracking-wider text-gray-800 bg-gray-50">
                                    Shop
                                </div>
                                <ul className="bg-white">
                                    <li><Link href="/shop/rasamani" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Rasamani</Link></li>
                                    <li><Link href="/shop/sughandha-veda" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Sughandha Veda</Link></li>
                                    <li><Link href="/shop/resins-and-gums" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Resins and Gums</Link></li>
                                    <li><Link href="/shop/palm-leaf-manuscripts" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Palm Leaf manuscripts</Link></li>
                                    <li><Link href="/shop/gemstones" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Gemstones</Link></li>
                                    <li><Link href="/shop/idols" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Idols</Link></li>
                                    <li><Link href="/shop/ayurveda" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Ayurveda</Link></li>
                                    <li><Link href="/shop/yoga-meditation" className="block px-8 py-3.5 text-[15px] text-gray-600 hover:text-[#546247] hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Yoga & Meditation</Link></li>
                                </ul>
                            </div>

                            <Link href="/cwcr" className="px-6 py-4 text-[15px] font-medium uppercase tracking-wider border-b border-gray-100 flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                                CWCR <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-[#546247]" size={16} />
                            </Link>
                            <Link href="/honors-and-rewards" className="px-6 py-4 text-[15px] font-medium uppercase tracking-wider border-b border-gray-100 flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                                Honors & Rewards <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-[#546247]" size={16} />
                            </Link>
                            <Link href="/blogs" className="px-6 py-4 text-[15px] font-medium uppercase tracking-wider border-b border-gray-100 flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                                Blogs <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-[#546247]" size={16} />
                            </Link>
                            <Link href="/contact-us" className="px-6 py-4 text-[15px] font-medium uppercase tracking-wider border-b border-gray-100 flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Us <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-[#546247]" size={16} />
                            </Link>
                        </nav>

                        <div className="p-6 bg-gray-50 mt-4">
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); handleDonate(); }}
                                className="w-full bg-[#546247] hover:bg-[#435038] text-white py-3.5 text-[13px] uppercase tracking-[0.1em] font-medium rounded-sm transition-colors shadow-sm text-center">
                                Support / Donate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
