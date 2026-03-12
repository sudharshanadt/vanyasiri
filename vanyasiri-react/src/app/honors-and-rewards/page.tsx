export default function HonorsRewardsPage() {
    return (
        <div className="flex flex-col w-full bg-[#f7f5ed] min-h-screen">
            <section className="bg-[#2B4573] text-white py-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight uppercase">Honors & Rewards</h1>
                    <p className="text-[#DFD5C4] tracking-widest uppercase text-sm">Recognitions of our journey</p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-8 max-w-4xl min-h-[50vh] flex items-center justify-center">
                <div className="text-center bg-white p-12 shadow-sm border border-[#DFD5C4]/30 w-full">
                    <h2 className="text-2xl font-serif text-[#2B4573] mb-6">Coming Soon</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We are currently gathering all the photos and information about our honors, awards, and recognitions to showcase them here. Check back soon!
                    </p>
                </div>
            </section>
        </div>
    );
}
