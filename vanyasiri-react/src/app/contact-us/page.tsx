export default function ContactUsPage() {
    return (
        <div className="flex flex-col w-full bg-[#f7f5ed] min-h-screen">
            {/* Hero header */}
            <section className="bg-[#546247] text-white py-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Contact Us</h1>
                    <p className="text-[#DFD5C4] tracking-widest uppercase text-sm">We'd love to hear from you</p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Contact Details */}
                    <div className="w-full md:w-1/3 space-y-12">
                        <div>
                            <h3 className="text-xl font-serif text-[#2A2E26] mb-4 border-b border-[#DFD5C4] pb-2">Visit Our Center</h3>
                            <a
                                href="https://www.google.com/maps/place/VANYASIRI+CWCR+(Centre+for+Wildlife+Conservation+and+Research)/@13.3724122,77.2076474,19z/data=!4m6!3m5!1s0x3bb1d3db33113ff7:0x51c65be81cb60e8e!8m2!3d13.3721591!4d77.2082455!16s%2Fg%2F11x27yby63?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 leading-relaxed font-light hover:text-[#546247] transition-colors block"
                            >
                                Vanya Siri Trust<br />
                                Devarayanandurga, State Forest,<br />
                                Urdigere Post, Tumkur Taluk & Dist<br />
                                Karnataka, India 572104
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-serif text-[#2A2E26] mb-4 border-b border-[#DFD5C4] pb-2">Get in Touch</h3>
                            <p className="text-gray-600 leading-relaxed font-light mb-2">
                                <strong className="text-[#546247] font-medium w-16 inline-block">Phone:</strong> +91 6361379190
                            </p>
                            <p className="text-gray-600 leading-relaxed font-light">
                                <strong className="text-[#546247] font-medium w-16 inline-block">Email:</strong> <a href="mailto:vanyasiritrust@gmail.com" className="hover:text-[#B38F52] transition-colors">vanyasiritrust@gmail.com</a>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-serif text-[#2A2E26] mb-4 border-b border-[#DFD5C4] pb-2">Opening Hours</h3>
                            <p className="text-gray-600 leading-relaxed font-light">
                                Monday - Saturday<br />
                                9:00 AM - 6:00 PM IST
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-2/3 bg-white p-8 md:p-12 shadow-lg border-t-4 border-[#546247]">
                        <h2 className="text-3xl font-serif text-[#546247] mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide uppercase">First Name</label>
                                    <input type="text" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#546247] focus:ring-1 focus:ring-[#546247] transition-all" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide uppercase">Last Name</label>
                                    <input type="text" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#546247] focus:ring-1 focus:ring-[#546247] transition-all" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide uppercase">Email Address</label>
                                <input type="email" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#546247] focus:ring-1 focus:ring-[#546247] transition-all" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide uppercase">Message</label>
                                <textarea rows={5} className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#546247] focus:ring-1 focus:ring-[#546247] transition-all" required></textarea>
                            </div>

                            <button type="submit" className="bg-[#2B4573] hover:bg-[#1a2c4e] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors w-full md:w-auto mt-4">
                                Send Communication
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
