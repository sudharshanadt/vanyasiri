"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const PHONE = "+916361379190";
const PHONE_DISPLAY = "+91 6361379190";
const INSTAGRAM_URL = "https://www.instagram.com/vanya_siri/";
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${PHONE.replace("+", "")}&text=Hi%2C%20I%20got%20your%20WhatsApp%20information%20from%20your%20website.`;
const MAPS_URL = "https://www.google.com/maps/place/VANYASIRI+CWCR+(Centre+for+Wildlife+Conservation+and+Research)/@13.3724122,77.2076474,19z/data=!4m6!3m5!1s0x3bb1d3db33113ff7:0x51c65be81cb60e8e!8m2!3d13.3721591!4d77.2082455!16s%2Fg%2F11x27yby63?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D";
const ADDRESS = "Devarayanandurga, Devarayanadurga State Forest, Urdigere post, Tumkur Taluk, & District, Karnataka, India 572104";

export default function Footer() {
    return (
        <footer className="bg-[#2A2E26] text-[#F5F7F2] py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-serif text-3xl tracking-widest uppercase font-light text-white">
                                Vanya Siri
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-[#DFD5C4]/80 pr-4">
                            Dedicated to the preservation and promotion of India&apos;s ancient wisdom,
                            fostering a deeper connection between humanity and nature through holistic
                            practices, sustainable agriculture, and authentic products.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-[#DFD5C4]/20 flex items-center justify-center hover:bg-[#546247] hover:border-transparent transition-all">
                                <Instagram size={18} />
                            </a>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-10 h-10 rounded-full border border-[#DFD5C4]/20 flex items-center justify-center hover:bg-[#546247] hover:border-transparent transition-all">
                                {/* WhatsApp SVG */}
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:vanyasiritrust@gmail.com"
                                aria-label="Email"
                                className="w-10 h-10 rounded-full border border-[#DFD5C4]/20 flex items-center justify-center hover:bg-[#546247] hover:border-transparent transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg uppercase tracking-wider mb-6 text-[#B38F52]">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-[#DFD5C4]/80">
                            <li><Link href="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/shop/rasamani" className="hover:text-white transition-colors">Shop All Products</Link></li>
                            <li><Link href="/vedic-wisdom/ayurveda" className="hover:text-white transition-colors">Vanyasiri Ayurveda</Link></li>
                            <li><Link href="/vedic-wisdom/goshala" className="hover:text-white transition-colors">Vanyasiri Goshala</Link></li>
                            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-lg uppercase tracking-wider mb-6 text-[#B38F52]">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-[#DFD5C4]/80">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#B38F52]" />
                                <a
                                    href={MAPS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="leading-relaxed hover:text-white transition-colors">
                                    {ADDRESS}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="flex-shrink-0 text-[#B38F52]" />
                                <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">
                                    {PHONE_DISPLAY}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="flex-shrink-0 text-[#B38F52]" />
                                <a href="mailto:vanyasiritrust@gmail.com" className="hover:text-white transition-colors">
                                    vanyasiritrust@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-lg uppercase tracking-wider mb-6 text-[#B38F52]">Newsletter</h4>
                        <p className="text-sm text-[#DFD5C4]/80 mb-4">
                            Subscribe to stay updated on new collections and exclusive wisdom.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); (e.target as HTMLFormElement).reset(); }}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white/5 border border-[#DFD5C4]/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#546247] transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#546247] hover:bg-[#435038] text-white uppercase text-sm tracking-wider py-3 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-[#DFD5C4]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#DFD5C4]/60">
                    <p>© {new Date().getFullYear()} Vanya Siri Trust. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
