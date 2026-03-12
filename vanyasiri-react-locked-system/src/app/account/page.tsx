"use client";

import { useState } from "react";
import Dashboard from "@/components/account/Dashboard";

export default function AccountPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
    }

    return (
        <div className="flex flex-col w-full bg-[#f7f5ed] min-h-[80vh] items-center justify-center px-4 py-20 pb-32">
            <div className="w-full max-w-4xl bg-white shadow-xl shadow-black/5 rounded-sm overflow-hidden flex flex-col md:flex-row border border-[#DFD5C4]/30">

                {/* Visual/Branding Side */}
                <div className="w-full md:w-1/2 bg-[#2A2E26] text-[#DFD5C4] p-12 flex flex-col justify-center relative overflow-hidden hidden md:flex">
                    <div className="absolute inset-0 bg-[url('/images/vanyasiri-logo.jpg')] opacity-[0.03] bg-center bg-repeat mix-blend-overlay"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif text-white mb-6 uppercase tracking-widest leading-tight">Authentic<br />Vedic Wisdom</h2>
                        <div className="w-12 h-0.5 bg-[#B38F52] mb-6"></div>
                        <p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                            Create an account to track your orders, save your shipping addresses, and experience seamless checkout for all your Ayurvedic and spiritual essentials.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-[#B38F52]"></div>
                                <span className="text-xs uppercase tracking-widest">Track Existing Orders</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-[#B38F52]"></div>
                                <span className="text-xs uppercase tracking-widest">Saved Addresses</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-[#B38F52]"></div>
                                <span className="text-xs uppercase tracking-widest">Consultation History</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-3xl font-serif text-[#2A2E26] mb-3 uppercase tracking-wider">{isRegistering ? "Create Account" : "Welcome Back"}</h2>
                        <p className="text-sm text-gray-500">{isRegistering ? "Register to unlock the full Vanya Siri experience." : "Sign in to access your dashboard and orders."}</p>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-6">
                        {isRegistering && (
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#546247] transition-colors"
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Email Address</label>
                            <input
                                required
                                type="email"
                                className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#546247] transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Password</label>
                                {!isRegistering && (
                                    <button type="button" className="text-[10px] text-[#B38F52] hover:text-[#546247] uppercase tracking-wider font-semibold">Forgot Password?</button>
                                )}
                            </div>
                            <input
                                required
                                type="password"
                                className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#546247] transition-colors"
                            />
                        </div>

                        <button type="submit" className="w-full bg-[#546247] hover:bg-[#435038] text-white py-4 mt-4 text-sm uppercase tracking-[0.1em] font-medium transition-colors shadow-md">
                            {isRegistering ? "Register Now" : "Secure Sign In"}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-600">
                            {isRegistering ? "Already have an account?" : "New to Vanya Siri?"}
                            <button
                                onClick={() => setIsRegistering(!isRegistering)}
                                className="ml-2 font-semibold text-[#546247] hover:text-[#2A2E26] hover:underline uppercase tracking-wider text-xs transition-colors"
                            >
                                {isRegistering ? "Sign In" : "Create Account"}
                            </button>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
