import Image from "next/image";
import Link from "next/link";

export default function CWCRPage() {
    return (
        <div className="flex flex-col w-full bg-[#f7f5ed] min-h-screen">
            {/* Header Section */}
            <section className="bg-[#546247] text-white py-24 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-black/40 mix-blend-multiply"></div>
                <div className="relative z-10 max-w-5xl mx-auto">
                    <p className="text-[#DFD5C4] tracking-widest uppercase text-xs md:text-sm font-semibold mb-4">Vanya Siri Trust</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight uppercase tracking-wide">
                        Centre for Wildlife Conservation and Research
                    </h1>
                    <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 container mx-auto px-4 md:px-8 max-w-6xl space-y-24">

                {/* 1. Sacred Vanas */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-serif text-[#2A2E26] uppercase tracking-widest">Sacred Vanas</h2>
                        <div className="w-12 h-0.5 bg-[#B38F52]"></div>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            Step into the mystical realm of Sacred Vanas, a divine sanctuary where nature and spirituality unite in perfect harmony.
                            This sacred haven, cradled by ancient trees and infused with tranquil energy, calls you to rediscover your inner essence
                            and connect with the divine. Hear the gentle whispers of the universe as you meditate within its serene landscapes,
                            awakening a profound sense of peace and purpose.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            Sacred Vanas is more than a destination—it’s a pilgrimage for the soul, where the wisdom of the earth and the light of
                            spiritual awakening merge. Embrace its sacred magic and let it guide your spirit toward transformation.
                        </p>
                        <Link href="/our-story" className="inline-block border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors mt-4">
                            Learn More
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 relative min-h-[400px]">
                        <Image
                            src="/images/cwcr/ashok-vana-3-1.jpg"
                            alt="Sacred Vanas"
                            fill
                            className="object-cover rounded-sm shadow-xl"
                        />
                    </div>
                </div>

                {/* 2. Research on Flora and Fauna */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-serif text-[#2A2E26] uppercase tracking-widest leading-snug">
                            Research on Flora and Fauna in Devarayana Durga State Forest
                        </h2>
                        <div className="w-12 h-0.5 bg-[#B38F52]"></div>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            We are thrilled to announce our research project, <strong>Survey and Documentation of Flora and Fauna in Devarayana Durga State Forest</strong>,
                            officially approved by the Karnataka Forest Department, State Level Forestry, and Wildlife Research Advisory Committee, Arya Bhavan.
                            This initiative aims to meticulously study and document the rich biodiversity of this ecologically significant forest.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            Our team has already commenced fieldwork, uncovering the hidden treasures of Devarayana Durga’s unique ecosystem.
                            Join us in this vital journey to preserve and celebrate Karnataka’s natural heritage for generations to come.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="relative aspect-square">
                            <Image
                                src="/images/cwcr/Slide1.jpg"
                                alt="Flora and Fauna Research"
                                fill
                                className="object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-square">
                            <Image
                                src="/images/cwcr/DSCN2206.jpg"
                                alt="Forest Ecosystem Exploration"
                                fill
                                className="object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[2/1] col-span-2">
                            <Image
                                src="/images/cwcr/DSCN1618.jpg"
                                alt="Flora and Fauna Documentation"
                                fill
                                className="object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* 3. Documentary */}
                <div className="flex flex-col md:flex-row gap-12 items-center bg-[#F5F7F2] p-8 md:p-12 rounded-sm border border-[#DFD5C4]/30 shadow-inner">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-serif text-[#2A2E26] uppercase tracking-widest">Documentary</h2>
                        <div className="w-12 h-0.5 bg-[#B38F52]"></div>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            <strong>Village Leopards</strong> by Raghunandan S. is a gripping documentary exploring the escalating conflict between
                            humans and wildlife, focusing on leopards and sloth bears in rural India. Through real-life stories, stunning visuals,
                            and emotional depth, it highlights habitat loss, the struggles of villagers, and the plight of wildlife forced into
                            human-dominated areas.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            The film calls for sustainable solutions and coexistence, urging collaboration between communities and local organizations.
                            A must-watch, it raises awareness and empathy for the delicate balance between humans and nature.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 relative min-h-[400px]">
                        <Image
                            src="/images/cwcr/WhatsApp-Image-2025-03-07-at-7.06.48-PM.jpeg"
                            alt="Documentary Poster"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </section>
        </div>
    );
}
