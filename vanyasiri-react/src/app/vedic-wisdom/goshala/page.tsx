import Image from "next/image";
import Link from "next/link";

export default function GoshalaPage() {
    return (
        <div className="flex flex-col w-full bg-[#f7f5ed]">
            {/* Hero */}
            <section className="relative bg-[#2A2E26] text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/photo_2025-11-07-14.06.14-1024x882.jpeg" fill className="object-cover opacity-30" alt="Goshala" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <span className="text-xs uppercase tracking-[0.4em] text-[#DFD5C4] mb-4 block">Devarayanadurga Land</span>
                    <h1 className="text-5xl md:text-6xl font-serif mb-6">Vanyasiri Goshala</h1>
                    <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-6"></div>
                    <p className="text-[#DFD5C4] text-lg tracking-widest uppercase text-sm">Goshala is Coming Soon!</p>
                </div>
            </section>

            {/* What Makes Us Special */}
            <section className="py-20 container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-4">What Makes Us Special</h2>
                    <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        VANYASIRI Goshala is situated in the Devarayanadurga land and is a sanctuary for Cows, bulls and calves.
                        Our main activity is cow protection and education about the importance of cow protection (Go-Raksha).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {[
                        { title: "Lifelong Support", desc: "We provide lifelong support to cows and bulls, including shelter, medical care, and food throughout their natural lives." },
                        { title: "Gomata Products", desc: "We create high quality Ayurvedic items from cow products and herbs, following traditional Vedic formulations." },
                        { title: "Bond with Cows", desc: "We invite everyone to come and connect with cows. Experience the peace of being in the presence of these gentle, sacred beings." },
                        { title: "Education", desc: "We educate people about the importance of cow protection (Go-Raksha) — an essential pillar of Vedic civilization." },
                        { title: "Natural Way of Life", desc: "In our Goshala you can experience a more natural way of life and learn how to adopt sustainable Vedic living principles." },
                        { title: "Cow Protection is Dharma", desc: "According to Vedic civilization, cow protection is a very important duty of human society and essential for spiritual advancement." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 shadow-sm border-t-2 border-[#546247]/30 hover:border-[#546247] transition-colors">
                            <h3 className="font-serif text-lg text-[#546247] mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Why Cows Are Important */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-[#2A2E26] mb-6 leading-relaxed">Why Cows Are Important</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 font-light">
                            Cow protection is essential for human society. Even Lord Krishna Himself says that cows are especially dear
                            to Him. He is known as Gopala and Govinda and eternally grazes cows. Lord Krishna also instructed us how
                            important it is to protect the cows because the cow is a mother and gives miracle food — milk.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 font-light">
                            Just by maintaining cows one can live a very natural and prosperous life. The cow is the mother, for she
                            supplies milk to human society. There is a miracle in milk, for it contains all the necessary vitamins to
                            sustain human physiological conditions for higher achievements.
                        </p>
                        <blockquote className="border-l-4 border-[#B38F52] pl-4 italic text-[#546247] my-6">
                            "How much pious credit we get by visiting holy places, offering food for Cows, fasting, chanting of mantras
                            and doing many yajnas — that much pious credit we can get simply by offering a blade of grass to a cow."
                            <span className="block mt-2 text-gray-500 not-italic text-sm">— Mahabharata</span>
                        </blockquote>
                        <div className="flex gap-4 mt-8">
                            <Link href="/contact-us" className="inline-block bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
                                Donate Today
                            </Link>
                            <Link href="/shop" className="inline-block border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
                                Buy Gomata Products
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] bg-[#DFD5C4]">
                        <Image src="/images/photo_2025-11-07-14.06.14-1024x882.jpeg" fill className="object-cover" alt="Goshala Cows" />
                    </div>
                </div>
            </section>

            {/* Our Aim */}
            <section className="bg-[#2A2E26] text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif uppercase tracking-widest mb-6 text-[#DFD5C4]">Our Aim</h2>
                    <p className="text-[#DFD5C4] mb-8">
                        VANYASIRI Goshala was established in 2023. It is a home for Cows, bulls and calves.
                        Our main aim is to please Lord Krishna by giving all protection and love to the cows.
                    </p>
                    <ul className="text-left max-w-xl mx-auto space-y-3 text-gray-300 text-sm">
                        {[
                            "Protect cows and bulls throughout their lives by providing shelter, food and other care.",
                            "Educate society about the role of cows in society and the importance of cow protection.",
                            "Engage people in service of the cows.",
                            "Help people develop a relationship with the cows and become lifelong supporters of cow protection.",
                            "Teach people a simple and more natural way of life."
                        ].map((aim, i) => (
                            <li key={i} className="flex gap-3 items-start">
                                <span className="text-[#B38F52] mt-0.5 flex-shrink-0">✦</span>
                                <span>{aim}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
