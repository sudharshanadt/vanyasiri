export default function BlogsPage() {
    return (
        <div className="flex flex-col w-full bg-[#f7f5ed] min-h-screen">
            <section className="bg-[#B38F52] text-[#2A2E26] py-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight uppercase">Vedic Blogs</h1>
                    <p className="tracking-widest uppercase text-sm font-medium">Wisdom, Stories & Insights</p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-8 max-w-4xl min-h-[50vh] flex items-center justify-center">
                <div className="text-center bg-white p-12 shadow-sm border border-[#DFD5C4]/30 w-full">
                    <h2 className="text-2xl font-serif text-[#B38F52] mb-6">Articles Coming Soon</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We are currently writing detailed articles about Ayurveda, Yoga, Vedic Agriculture, and Spiritual Wellness. Stay tuned for our upcoming publications!
                    </p>
                </div>
            </section>
        </div>
    );
}
