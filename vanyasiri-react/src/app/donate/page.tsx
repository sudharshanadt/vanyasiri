import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export const metadata = {
    title: "Donate | Vanya Siri — Support Our Sacred Mission",
    description: "Support the Vanya Siri mission of preserving ancient Vedic wisdom, protecting wildlife and nurturing our Goshala by making a donation.",
};

export default function DonatePage() {
    return (
        <div className="flex flex-col w-full bg-white min-h-screen">
            {/* Hero */}
            <section className="relative py-24 bg-[#546247] text-white text-center px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10 text-[120px] font-serif uppercase tracking-widest flex items-center justify-center pointer-events-none select-none">
                    Seva
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#DFD5C4] mb-4 block">Support Our Mission</span>
                    <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-6">Make a Donation</h1>
                    <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-8"></div>
                    <p className="text-[#DFD5C4] text-base md:text-lg leading-relaxed">
                        Your generosity helps us preserve ancient Vedic wisdom, protect wildlife, and nurture our sacred Goshala for future generations.
                    </p>
                </div>
            </section>

            {/* Mission Cards */}
            <section className="py-20 bg-[#F5F7F2]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-4">Your Gift Supports</h2>
                        <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🌿",
                                title: "Vedic Knowledge Preservation",
                                description: "Help us digitize and preserve rare palm leaf manuscripts, ancient texts and Vedic knowledge that is at risk of being lost forever."
                            },
                            {
                                icon: "🐄",
                                title: "Goshala & Animal Welfare",
                                description: "Support the care and protection of cows in our sacred Goshala. Your donation feeds, shelters and provides veterinary care for these revered beings."
                            },
                            {
                                icon: "🦁",
                                title: "Wildlife Conservation (CWCR)",
                                description: "Fund our Center for Wildlife Conservation and Research — protecting biodiversity in the Devarayanadurga forest ecosystem."
                            },
                            {
                                icon: "🌾",
                                title: "Vedic Agriculture",
                                description: "Support the cultivation of 20+ rare traditional rice varieties and forest produce using sacred, eco-friendly farming practices."
                            },
                            {
                                icon: "🔬",
                                title: "Rasa Shastra Research",
                                description: "Fund continued research and development of ancient Rasa Shastra (alchemical) formulations for healing and spiritual advancement."
                            },
                            {
                                icon: "📚",
                                title: "Education & Outreach",
                                description: "Help us educate communities about Ayurveda, Yoga, and Vedic wisdom through free workshops and accessible learning programs."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#DFD5C4]/40 p-8 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-serif text-[#546247] uppercase tracking-wider text-sm mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-4">Donate Now</h2>
                        <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-6"></div>
                        <p className="text-gray-500 text-sm">Every contribution, no matter the size, makes a real difference.</p>
                    </div>

                    {/* Quick Amounts */}
                    <div className="mb-8">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4 text-center">Select Amount</p>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                            {[100, 500, 1000, 2500, 5000, 10000].map(amount => (
                                <button
                                    key={amount}
                                    className="border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white py-3 text-sm font-medium transition-colors"
                                >
                                    ₹{formatPrice(amount)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Custom Amount (₹)</label>
                            <input type="number" placeholder="Enter amount" className="w-full border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors text-sm" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Full Name *</label>
                                <input type="text" placeholder="Your full name" className="w-full border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email *</label>
                                <input type="email" placeholder="Your email address" className="w-full border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors text-sm" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                            <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Dedicate to (Optional)</label>
                            <input type="text" placeholder="In memory of / In honour of" className="w-full border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Message (Optional)</label>
                            <textarea rows={3} placeholder="Share your intention or message" className="w-full border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors text-sm resize-none"></textarea>
                        </div>
                        <div className="pt-4">
                            <button type="submit" className="w-full bg-[#546247] hover:bg-[#435038] text-white py-4 text-sm uppercase tracking-wider transition-colors font-medium shadow-md">
                                Proceed to Payment
                            </button>
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            Payments are secured via Razorpay. You will receive a receipt by email.
                        </p>
                    </form>
                </div>
            </section>

            {/* Quote */}
            <section className="py-16 bg-[#E0D7C9] text-center px-4">
                <p className="font-serif italic text-[#546247] text-xl md:text-2xl max-w-3xl mx-auto">
                    "Tyāgena eke amṛtatvam ānaśuḥ" — Through sacrifice alone, immortality is attained.
                </p>
                <p className="text-[#B38F52] text-sm mt-4">— Kaivalya Upanishad</p>
            </section>

            {/* Contact */}
            <section className="py-12 bg-white text-center px-4">
                <p className="text-gray-500 text-sm">
                    For bank transfers or large donations, please contact us at{" "}
                    <a href="mailto:info@vanyasiri.org" className="text-[#546247] hover:underline">info@vanyasiri.org</a>
                    {" "}or{" "}
                    <a href="https://wa.me/919902050505" className="text-[#546247] hover:underline">WhatsApp: +91 99020 50505</a>
                </p>
                <div className="mt-6">
                    <Link href="/" className="text-sm uppercase tracking-wider text-[#546247] border-b border-[#546247] pb-0.5 hover:border-[#B38F52] hover:text-[#B38F52] transition-colors">
                        Return to Home
                    </Link>
                </div>
            </section>
        </div>
    );
}
