import Image from "next/image";
import Link from "next/link";

export default function SughandhaVedaKnowledgePage() {
    const oils = [
        {
            name: "Sandalwood Oil (Chandana Taila)",
            subtitle: "The Divine Fragrance of Enlightenment",
            desc: 'Revered in Rig Veda as "Chandana" used in sacred fire rituals, Sandalwood oil is described as "the sweat of Vishnu." Charaka Samhita classifies it as "Shita Virya" (cooling energy) for fever, inflammation and skin conditions. Buddha\'s first meditation seat was made of sandalwood.',
            emoji: "🌳"
        },
        {
            name: "Agarwood Oil (Aguru/Oud)",
            subtitle: "Liquid Gold of the Gods",
            desc: "Known as Aguru in Sanskrit, sacred in Hindu, Buddhist and Ayurvedic traditions. The Atharva Veda mentions it for purification rituals; Charaka Samhita prescribes it for digestive, nervous and vitality issues. Puranas list it among precious worship materials, particularly associated with Lord Krishna.",
            emoji: "⚗️"
        },
        {
            name: "Rose Oil (Gulab Taila)",
            subtitle: "Elixir of the Ancients",
            desc: "Called \"Hridaya-Vasini\" (the heart's beloved) in Bhavaprakasha, rose oil is one of the costliest and most revered botanical extracts. Used in Ayurvedic Panchakarma, ancient Egyptian temple arts, and sacred devotional offerings.",
            emoji: "🌹"
        },
        {
            name: "Jasmine Oil (Mallika Taila)",
            subtitle: "The Moonlit Nectar of the Gods",
            desc: "Jasmine (Mallika) is sacred to Vishnu and Lakshmi. The oil calms the nervous system, relieves anxiety, elevates mood and enhances romantic connection. Widely used in ancient South Indian bridal ceremonies and royal court fragrances.",
            emoji: "🌸"
        },
        {
            name: "Kadamba Oil (Mitragyna parvifolia)",
            subtitle: "Sacred Tree of Lord Krishna",
            desc: "The Kadamba tree is deeply associated with Lord Krishna's divine pastimes in Vrindavan. Its rare oil possesses a rich earthy-sweet fragrance and is used for spiritual connection, grounding and devotional practice.",
            emoji: "🌿"
        },
        {
            name: "Kewda Oil (Ketaki Tailam)",
            subtitle: "The Sacred Pandanus Flower",
            desc: "An intensely sweet and rare fragrance from the pandanus blossom, Kewda is used in traditional Indian temple offerings and royal perfumery. Mentioned in ancient texts as one of the finest floral scents of South Asia.",
            emoji: "🌼"
        },
        {
            name: "Vetiver Root Oil (Ushira Taila)",
            subtitle: "The Earth's Cooling Veins",
            desc: "Known as Ushira in Ayurveda, Vetiver root oil has deep cooling and grounding properties. It calms excess Pitta, reduces stress and anxiety, and reconnects scattered energy through its rich, smoky-earthy fragrance.",
            emoji: "🌾"
        },
        {
            name: "Pink Lotus Oil (Padma Taila)",
            subtitle: "The Blossom of Enlightenment",
            desc: "The sacred Lotus (Padma) is the divine seat of Brahma and Lakshmi. Its oil awakens spiritual consciousness, opens the heart chakra, and promotes deep emotional healing and inner peace.",
            emoji: "🪷"
        },
        {
            name: "White Lotus Oil (Pundarika Taila)",
            subtitle: "Nectar of Divine Purity",
            desc: "Pundarika — the white lotus — is the highest symbol of purity and transcendence. Its oil is sacred to Goddess Saraswati and is used to activate the crown chakra and purify the mind and spirit.",
            emoji: "🤍"
        },
        {
            name: "Champak Oil (Champaka Taila)",
            subtitle: "Beloved of Lord Vishnu",
            desc: "The golden Champaka flower is beloved by Lord Vishnu and used in Vishnu temple offerings across India. Its rich, warm-floral oil is prized in traditional Indian perfumery and is used for devotional practices.",
            emoji: "💛"
        },
        {
            name: "Rajanighandha Oil (Tuberose)",
            subtitle: "Moonlit Elixir of Divine Fragrance",
            desc: "Known as Rajanighandha (night-blooming flower), this tuberose oil has deeply calming properties and is one of the most prized scents in Indian classical perfumery. It promotes restful sleep and calms the subtle body.",
            emoji: "🌙"
        },
        {
            name: "Tulasi Oil (Holy Basil)",
            subtitle: "Liquid Divinity of Vishnu",
            desc: "Tulasi (Holy Basil) is the most sacred plant in Vaishnavism, considered the embodiment of Goddess Lakshmi. Its oil purifies body and space, boosts immunity, relieves respiratory conditions and is a cornerstone of Ayurvedic wellness.",
            emoji: "🕉️"
        },
    ];

    return (
        <div className="flex flex-col w-full bg-[#f7f5ed]">
            {/* Hero */}
            <section className="relative bg-[#1F2E1A] text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/Gemini_Generated_Image_a3w26ia3w26ia3w2.jpeg" fill className="object-cover opacity-15" alt="Sughandha Veda" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <span className="text-xs uppercase tracking-[0.4em] text-[#DFD5C4] mb-4 block">Ancient Fragrance Science</span>
                    <h1 className="text-5xl md:text-6xl font-serif mb-6">Sughandha Veda</h1>
                    <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-8"></div>
                    <p className="text-[#DFD5C4] text-lg leading-relaxed font-light">
                        A rare Ayurvedic text detailing forest-based aromatics and healing herbs — including sacred oils like Kadamba,
                        sandalwood, Champak, Jasmine, Rose, Tulasi and Agarwood — revealing ancient fragrance therapies for body, mind and spiritual elevation.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 container mx-auto px-4 md:px-8 max-w-4xl text-center">
                <h2 className="text-2xl font-serif text-[#2A2E26] mb-6">Introduction</h2>
                <p className="text-gray-700 leading-relaxed font-light mb-4">
                    For over <strong>5,000 years</strong>, essential oils have been revered as liquid prana – the spiritual and medicinal
                    essence of plants. Our formulations are rooted in Vedic alchemy, Egyptian temple arts, and lost botanical wisdom,
                    offering more than just fragrance — a doorway to healing, devotion, and transcendence.
                </p>
                <p className="text-gray-700 leading-relaxed font-light">
                    Essential oils were considered the <em>"blood of the Earth"</em> in ancient traditions. The Rig Veda (1500 BCE) mentions
                    Soma Rasa (divine plant elixirs) for enlightenment. The Charaka Samhita lists 21 sacred oils for Panchakarma detox
                    and Chakra Sadhana. The Bhavaprakasha calls rose oil "Hridaya-Vasini" — the heart's beloved.
                </p>
            </section>

            {/* Oils Grid */}
            <section className="pb-20 container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-serif uppercase tracking-widest text-[#546247] mb-3">Sacred Oils of the Vedic Tradition</h2>
                    <div className="w-12 h-0.5 bg-[#B38F52] mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {oils.map((oil, i) => (
                        <div key={i} className="bg-white p-6 shadow-sm border-l-4 border-[#546247]/30 hover:border-[#546247] transition-colors flex gap-4">
                            <div className="text-3xl flex-shrink-0">{oil.emoji}</div>
                            <div>
                                <h3 className="font-serif text-[#2A2E26] text-base mb-1 font-semibold">{oil.name}</h3>
                                <p className="text-[#B38F52] text-xs uppercase tracking-wider mb-2">{oil.subtitle}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{oil.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Shop CTA */}
            <section className="bg-[#546247] text-white py-16 px-4 text-center">
                <h2 className="text-3xl font-serif mb-4">Experience Sacred Oils</h2>
                <p className="text-[#DFD5C4] mb-8 max-w-xl mx-auto font-light">
                    Explore our complete collection of authentic, forest-harvested essential oils — formulated by the ancient Sughandha Veda tradition.
                </p>
                <Link href="/shop/sughandha-veda" className="inline-block border border-white hover:bg-white hover:text-[#546247] px-10 py-4 text-sm uppercase tracking-wider transition-colors">
                    Shop Sughandha Veda Collection
                </Link>
            </section>
        </div>
    );
}
