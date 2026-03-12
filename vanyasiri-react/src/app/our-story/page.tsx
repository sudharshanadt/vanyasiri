import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
    return (
        <div className="flex flex-col w-full bg-[#f7f5ed]">
            {/* Hero header */}
            <section className="bg-[#2A2E26] text-white py-24 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#546247]/20 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-sm uppercase tracking-[0.3em] text-[#DFD5C4] mb-4 block">The Genesis</span>
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Our Story</h1>
                    <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-8 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-[#546247] mb-6 leading-relaxed">Preserving Ancient Wisdom for a Modern World</h2>
                        <p className="text-gray-700 leading-relaxed mb-6 font-light">
                            Vanya Siri Trust was born out of a profound reverence for India's ancient heritage—a legacy of holistic wellness, sustainable agriculture, and spiritual harmony. We recognized that in the rush of the modern world, the profound wisdom of our ancestors was slowly fading into obscurity.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8 font-light">
                            Our mission is not merely to revive these traditions, but to integrate them seamlessly into contemporary lifestyles. From the sacred formulas of the Rasashala to the compassionate care within our Goshala, every endeavor is a step toward reconnecting humanity with the healing rhythms of nature.
                        </p>
                        <Link href="/shop/rasamani" className="inline-block border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
                            Explore Discoveries
                        </Link>
                    </div>
                    <div className="relative aspect-[4/5] bg-[#DFD5C4] p-4 shadow-xl">
                        <div className="w-full h-full bg-[#546247]/10 border border-[#546247]/20 flex items-center justify-center relative overflow-hidden">
                            <Image src="/images/RASA-SHA-1.jpg" fill className="object-cover opacity-90" alt="Vanya Siri Origins" />
                        </div>
                    </div>
                </div>

                <div className="mt-32 text-center max-w-3xl mx-auto">
                    <blockquote className="text-2xl font-serif italic text-[#2A2E26] leading-relaxed relative">
                        <span className="text-[#DFD5C4] text-7xl absolute -top-10 -left-10 opacity-50">"</span>
                        We do not inherit the earth from our ancestors; we borrow it from our children. Our goal is to leave behind a thriving ecosystem enriched by Vedic intelligence.
                        <span className="text-[#DFD5C4] text-7xl absolute -bottom-16 -right-10 opacity-50">"</span>
                    </blockquote>
                    <p className="mt-8 text-[#B38F52] uppercase tracking-widest text-sm">— Vanya Siri Founders</p>
                </div>
            </section>
        </div>
    );
}
