import Image from "next/image";
import Link from "next/link";

export default function RasashalaPage() {
  const manis = [
    { name: "Raja Akarshana Mani", desc: "Attracts wealth, power, and success, enhancing leadership qualities and bringing prosperity." },
    { name: "Sarva Akarshana Rasamani", desc: "Attracts positive energies, opportunities, and favorable circumstances in all aspects of life." },
    { name: "Dhampathya Anusandhana Mani", desc: "Strengthens marital harmony, love, and understanding between partners." },
    { name: "Shonitha Shukra Vruddhi Rasa Mani", desc: "Enhances blood health and vitality, improving overall energy and reproductive health." },
    { name: "Akshaya Vruddhi Rasa Mani", desc: "For eternal growth, abundance, and unending prosperity." },
    { name: "Nava Yoga Siddhi Rasa Mani", desc: "Achieves success in all nine yogas (astrological combinations), ensuring overall well-being." },
    { name: "Shiva Rudra Rasa Mani", desc: "Invokes the blessings of Lord Shiva and Rudra, providing protection, strength, and spiritual growth." },
    { name: "Kubera Rasamani", desc: "Attracts wealth and material abundance — Kubera is the deity of wealth." },
    { name: "Maha Lakshmi Rasamani", desc: "Invokes the blessings of Goddess Lakshmi for wealth, prosperity, and happiness." },
    { name: "Paranand Rasamani", desc: "Helps experience supreme bliss and spiritual joy, enhancing inner peace and contentment." },
    { name: "Maharaja Yoga Rasamani", desc: "Achieves the highest astrological combination (Maharaja Yoga), ensuring success, power, and prosperity." },
    { name: "Divya Akarshana Rasamani", desc: "Attracts divine energies and blessings, enhancing spiritual growth and protection." },
    { name: "Sarva Arishta Dosha Nivrutthi Rasamani", desc: "Removes all types of misfortunes and protects from negative influences." },
    { name: "Gnyana Mani", desc: "Enhances wisdom, knowledge, and intellectual abilities." },
    { name: "Trikala Gnana Mani", desc: "Grants knowledge of the past, present, and future, enhancing intuition and foresight." },
    { name: "Bhairava Rasa Mani", desc: "For protection from negative energies and to gain courage and strength." },
    { name: "Navarasa Mani", desc: "Balances the nine emotions and brings emotional stability." },
    { name: "Sarva Siddhi Rasa Mani", desc: "Achieves all types of Siddhis and success in life." },
    { name: "Mantra Siddhi Rasa Mani", desc: "Enhances the power of mantras and achieves success in spiritual practices." },
    { name: "Rahu Ketu Rasa Mani", desc: "Neutralizes the malefic effects of Rahu and Ketu in astrology." },
    { name: "Saraswati Rasa Mani", desc: "Blesses with divine knowledge, arts and learning from Goddess Saraswati." },
    { name: "Ganapati Rasa Mani", desc: "Invokes Lord Ganesha for removing obstacles and bringing success in all endeavours." },
    { name: "Kundalini Rasa Mani", desc: "Awakens dormant Kundalini energy for profound spiritual transformation." },
    { name: "Dhanvantari Rasa Mani", desc: "Invokes the divine physician Dhanvantari for health, healing and vitality." }
  ];

  return (
    <div className="flex flex-col w-full bg-[#f7f5ed]">
      {/* Hero */}
      <section className="bg-[#1F3C6D] text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/RASA-SHA-1.jpg" fill className="object-cover" alt="Rasashala" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-[#DFD5C4] mb-4 block">Ancient Alchemy of Healing</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Vanyasiri Rasashala</h1>
          <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-8"></div>
          <p className="text-[#DFD5C4] text-lg leading-relaxed font-light">
            The ancient alchemical laboratory — a sacred space where metals, minerals, and herbs are transformed into powerful medicines and gems through the timeless science of Rasa Shastra.
          </p>
        </div>
      </section>

      {/* About Rasashala */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative aspect-[4/5] bg-[#DFD5C4] shadow-xl overflow-hidden">
            <Image src="/images/RASA-SHA-1.jpg" fill className="object-cover" alt="Rasashala" />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-[#1F3C6D] mb-6">The Sacred Art of Rasa Shastra</h2>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              Rasashala, the traditional Indian alchemical laboratory, is a sacred space where metals, minerals, and herbs
              are transformed into powerful medicines through ancient alchemical processes. We have revived the legendary
              <strong> Chintamani and Rasa Mani</strong>, powerful elixirs of transformation and healing, crafted with sacred precision.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              Inspired by this success, we are on a mission to create <strong>100 more Rasamanis</strong>, each a unique blend of ancient
              knowledge and modern innovation. Join us in this extraordinary journey to unlock the secrets of timeless wellness
              and discover the magic of Rasashala.
            </p>
            <p className="text-gray-700 leading-relaxed font-light">
              Each Mani is created using ancient alchemical processes rooted in Rasa Shastra and Ayurveda, ensuring purity,
              potency, and divine blessings. These transformative gems address specific needs and enhance every aspect of life.
            </p>
            <div className="mt-8">
              <Link href="/shop/rasamani" className="inline-block bg-[#B38F52] hover:bg-[#9c7b44] text-[#1F3C6D] px-8 py-3 text-sm uppercase tracking-wider transition-colors font-medium">
                Shop Rasamani Collection
              </Link>
            </div>
          </div>
        </div>

        {/* Manis List */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif uppercase tracking-widest text-[#1F3C6D] mb-4">Powerful Manis We Create</h2>
          <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Each Mani is crafted for specific transformations — from attracting wealth and health to achieving spiritual awakening and divine protection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {manis.map((mani, i) => (
            <div key={i} className="bg-white p-5 shadow-sm border-l-2 border-[#B38F52]/40 hover:border-[#B38F52] transition-colors">
              <h3 className="font-serif text-[#1F3C6D] text-sm mb-2 font-semibold">{mani.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{mani.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="mt-20 bg-[#1F3C6D] text-white p-12 text-center">
          <h2 className="text-3xl font-serif mb-6">Why Choose Vanyasiri Rasashala?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { title: "Ancient Authenticity", desc: "Rooted in the original Rasa Shastra texts and classical alchemical methods." },
              { title: "Sacred Precision", desc: "Each Mani crafted through meticulous, time-honoured processes with sacred intent." },
              { title: "Transformative Power", desc: "Successfully revived legendary gems like Chintamani and Rasa Mani with proven results." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif text-[#B38F52] text-lg mb-3">{item.title}</h3>
                <p className="text-[#DFD5C4] text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact-us" className="inline-block border border-white hover:bg-white hover:text-[#1F3C6D] px-10 py-4 text-sm uppercase tracking-wider transition-colors">
              Enquire About Rasamani
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
