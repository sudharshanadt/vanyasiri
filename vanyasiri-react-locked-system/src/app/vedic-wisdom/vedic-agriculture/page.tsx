import Image from "next/image";
import Link from "next/link";

export default function VedicAgriculturePage() {
  const riceVarieties = [
    "Raksha Sali", "Navara (the legendary Ayurvedic rice)", "Manipur Black Rice",
    "Kullakar", "Doddi Batha", "Jeeraga Samba", "Njavara", "Kalanamak",
    "Katarni", "Mappillai Samba", "Poongar", "Red Rice (Sivappu Kavuni)", "Bamati Heritage"
  ];

  return (
    <div className="flex flex-col w-full bg-[#f7f5ed]">
      {/* Hero */}
      <section className="relative text-white py-24 text-center px-4 overflow-hidden bg-[#2A3A26]">
        <div className="absolute inset-0">
          <Image src="/images/agri-vedic-.png" fill className="object-cover opacity-40" alt="Vedic Agriculture" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-[#DFD5C4] mb-4 block">On 1.5 Acres of Pristine Farmland</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Vedic Agriculture</h1>
          <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-8"></div>
          <p className="text-[#DFD5C4] text-lg leading-relaxed font-light">
            Preserving Heritage, Nurturing Nature — Reviving and sustaining the ancient wisdom of Vedic farming while conserving biodiversity.
          </p>
          <p className="mt-4 text-xl font-serif italic text-[#B38F52]">🌱 Where Tradition Meets Nature! 🌱</p>
        </div>
      </section>

      {/* ENERGY FROM HERBS Banner */}
      <div className="bg-[#546247] text-white py-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] font-light">Energy from herbs..! Free from diseases..!</p>
      </div>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif text-[#2A2E26] mb-6">Vanyasiri Vedic Agriculture</h2>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              At Vanyasiri Vedic Agriculture, we are dedicated to reviving and sustaining the ancient wisdom of Vedic farming
              while conserving biodiversity. Situated on <strong>1.5 acres of pristine farmland</strong>, our sanctuary is home
              to <strong>20 rare and traditional medicinal rice varieties</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              Alongside these precious grains, we nurture over <strong>200 varieties of medicinal plants and trees</strong>,
              following chemical-free, natural farming practices rooted in Vedic principles. Our approach harmonizes with nature,
              ensuring soil vitality, water conservation, and ecological balance.
            </p>
            <p className="text-gray-700 leading-relaxed font-light">
              Each of our 20+ traditional rice varieties carries unique healing properties, cultural significance, and deep roots
              in the Ayurvedic tradition — many of which are endangered and at risk of being lost to modern monoculture farming.
            </p>
          </div>
          <div className="relative aspect-[4/5] bg-[#DFD5C4] shadow-xl overflow-hidden">
            <Image src="/images/agri-vedic-.png" fill className="object-cover" alt="Vedic Farming" />
          </div>
        </div>

        {/* Rice Varieties */}
        <div className="bg-white p-10 shadow-sm mb-16">
          <h2 className="text-2xl font-serif uppercase tracking-widest text-[#546247] mb-6 text-center">Rare Rice Varieties We Cultivate</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {riceVarieties.map((variety, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-[#546247] flex-shrink-0">🌾</span>
                <span>{variety}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-sm italic text-gray-400">
              <span className="text-[#546247] flex-shrink-0">🌾</span>
              <span>...and many more</span>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-8 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Preserve Indigenous Seeds",
                desc: "Protect endangered desi rice and vegetable varieties that are at risk of being permanently lost to industrial farming practices."
              },
              {
                icon: "☀️",
                title: "Promote Ayurvedic Farming",
                desc: "Grow nutrient-rich, toxin-free food as per ancient Vedic traditions — without chemicals, without compromise."
              },
              {
                icon: "📚",
                title: "Educate & Inspire",
                desc: "Share Vedic agricultural knowledge with the community for sustainable, conscious living and a healthy future."
              }
            ].map((item, i) => (
              <div key={i} className="text-center bg-[#F2EEE9] p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-[#2A2E26] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Natural Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative aspect-square bg-[#DFD5C4] shadow-xl overflow-hidden">
            <Image src="/images/DSC03283-1-1-1024x644.jpg" fill className="object-cover" alt="Natural Farming" />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-[#2A2E26] mb-6">Chemical-Free Vedic Practices</h2>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              Our farming approach is deeply rooted in ancient Vedic principles — using only natural inputs, cow-based
              preparations (Panchagavya), herbal pest management, and traditional water conservation methods.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 font-light">
              We believe that the land is sacred. Every tree, every grain, and every medicinal plant that grows here
              is a living bridge between the ancient wisdom of our ancestors and the health of future generations.
            </p>
            <blockquote className="border-l-4 border-[#B38F52] pl-4 italic text-[#546247]">
              "Join us in celebrating India's agricultural heritage while embracing a future of health, sustainability, and harmony with Mother Earth."
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#2A2E26] text-white p-12 text-center">
          <h2 className="text-3xl font-serif mb-4">Support Our Farm</h2>
          <p className="text-[#DFD5C4] mb-8 max-w-xl mx-auto font-light">
            Help preserve India's ancient seeds, rare medicinal plants, and traditional Vedic farming knowledge. Every contribution keeps this heritage alive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="inline-block bg-[#546247] hover:bg-[#435038] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors">
              Get In Touch
            </Link>
            <Link href="/contact-us" className="inline-block border border-white hover:bg-white hover:text-[#2A2E26] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors">
              Donate to Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
