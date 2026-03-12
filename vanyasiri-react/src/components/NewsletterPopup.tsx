"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function NewsletterPopup() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Show popup after 2 seconds only if not previously dismissed/subscribed
        const dismissed = localStorage.getItem("vs_newsletter_dismissed");
        if (!dismissed) {
            const timer = setTimeout(() => setShow(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const dismiss = () => {
        localStorage.setItem("vs_newsletter_dismissed", "1");
        setShow(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        localStorage.setItem("vs_newsletter_dismissed", "1");
        setTimeout(() => setShow(false), 2500);
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm" onClick={dismiss}>
            <div
                className="relative bg-[#f7f5ed] max-w-md w-full shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top decorative bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#546247] via-[#B38F52] to-[#546247]" />

                <button
                    onClick={dismiss}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                    aria-label="Close">
                    <X size={20} />
                </button>

                <div className="p-10 text-center">
                    {!submitted ? (
                        <>
                            <div className="text-3xl mb-4">🌿</div>
                            <h2 className="font-serif text-2xl text-[#2A2E26] uppercase tracking-widest mb-2">
                                Ancient Wisdom, Delivered
                            </h2>
                            <p className="text-[#546247] text-xs uppercase tracking-widest mb-6 font-medium">
                                Vanya Siri Newsletter
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                Subscribe to receive exclusive updates on new Rasamani collections, sacred oils, Vedic knowledge, and special offers.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full border border-[#DFD5C4] px-4 py-3 text-sm text-[#2A2E26] focus:outline-none focus:border-[#546247] transition-colors bg-white"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#546247] hover:bg-[#435038] text-white py-3 text-sm uppercase tracking-widest transition-colors">
                                    Subscribe
                                </button>
                            </form>
                            <button
                                onClick={dismiss}
                                className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2">
                                No thanks, I&apos;ll miss out
                            </button>
                        </>
                    ) : (
                        <div className="py-6">
                            <div className="text-5xl mb-6">✨</div>
                            <h2 className="font-serif text-2xl text-[#546247] mb-3">Thank You!</h2>
                            <p className="text-gray-500 text-sm">
                                You&apos;ve been added to the Vanya Siri family. Expect ancient wisdom in your inbox soon.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
