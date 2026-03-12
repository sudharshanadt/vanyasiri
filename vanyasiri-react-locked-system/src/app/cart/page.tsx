"use client";

import { useCart } from "@/store/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
    const { items, updateQuantity, removeFromCart, totalAmount, clearCart } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        try {
            // 1. Load Razorpay script
            const res = await new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                script.onload = () => resolve(true);
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            });

            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                setIsCheckingOut(false);
                return;
            }

            // 2. Create order via API
            const orderRes = await fetch("/api/razorpay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: totalAmount }),
            });

            const orderData = await orderRes.json();
            if (!orderData.id) {
                alert("Server error. Please try again.");
                setIsCheckingOut(false);
                return;
            }

            // 3. Open Razorpay Widget
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_YourTestKeyHere",
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Vanya Siri",
                description: "Test Transaction",
                order_id: orderData.id,
                handler: function (response: any) {
                    alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                    clearCart();
                },
                prefill: {
                    name: "Guest User",
                    email: "guest@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#546247",
                },
            };

            const rzp = new (window as any).Razorpay(options);
            rzp.on("payment.failed", function (response: any) {
                alert(`Payment Failed: ${response.error.description}`);
            });
            rzp.open();
        } catch (error) {
            console.error(error);
            alert("Error processing checkout. Please try again.");
        } finally {
            setIsCheckingOut(false);
        }
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center min-h-[60vh]">
                <h1 className="text-4xl font-serif text-[#546247] mb-6">Your Cart is Empty</h1>
                <p className="text-gray-500 mb-8">Discover ancient wellness and holistic healing products.</p>
                <Link href="/" className="inline-block bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
                    Return to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-8 py-16 min-h-screen">
            <h1 className="text-4xl font-serif text-[#2A2E26] mb-12 uppercase tracking-widest text-center border-b border-[#DFD5C4] pb-6">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Cart Items */}
                <div className="w-full lg:w-2/3 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white shadow-sm border border-gray-100">
                            <div className="relative w-24 h-24 bg-[#F2EEE9] flex-shrink-0">
                                <Image src={item.image} fill className="object-cover" alt={item.name} />
                            </div>
                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="font-serif text-lg text-[#2A2E26] mb-1">{item.name}</h3>
                                <p className="text-[#B38F52] font-semibold text-sm">₹{item.price.toLocaleString("en-IN")}</p>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center border border-gray-200">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50 transition-colors">
                                        <Minus size={14} />
                                    </button>
                                    <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50 transition-colors">
                                        <Plus size={14} />
                                    </button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 transition-colors p-2" aria-label="Remove item">
                                    <Trash2 size={18} />
                                </button>
                            </div>

                            <div className="hidden sm:block text-right w-24">
                                <span className="font-bold text-[#2A2E26]">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-1/3">
                    <div className="bg-[#f7f5ed] p-8 border border-[#DFD5C4]/50 sticky top-28">
                        <h2 className="text-2xl font-serif text-[#546247] mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-8 text-sm text-gray-600">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{totalAmount.toLocaleString("en-IN")}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#DFD5C4]/50 pb-4">
                                <span>Shipping</span>
                                <span className="text-[#546247]">Calculated at checkout</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg text-[#2A2E26] pt-2">
                                <span>Total</span>
                                <span>₹{totalAmount.toLocaleString("en-IN")}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            disabled={isCheckingOut}
                            className="w-full bg-[#546247] hover:bg-[#435038] disabled:bg-gray-400 text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors shadow-md flex justify-center items-center gap-2"
                        >
                            {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
                            {!isCheckingOut && <ArrowRight size={16} />}
                        </button>

                        <div className="mt-6 flex justify-between items-center text-xs text-gray-400">
                            <span className="uppercase tracking-widest">Secure Payment by</span>
                            <span className="font-bold tracking-widest text-gray-500">RAZORPAY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
