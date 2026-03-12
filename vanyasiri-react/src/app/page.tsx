import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import ProductCard from "@/components/shop/ProductCard";
import { ArrowRight } from "lucide-react";

async function getMedusaProducts() {
  try {
    const res = await fetch("http://localhost:9000/store/products?fields=categories.*", {
      headers: {
        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "pk_19c9867c6163b41d4b003cb12d1b028fd67ccb9fa9c2b19993b4bd8cf1609c0d"
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!res || !res.ok) return productsData;

    const data = await res.json();
    return data.products.length > 0 ? data.products : productsData;
  } catch (error) {
    
    return productsData;
  }
}

export default async function Home() {
  const products = await getMedusaProducts();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center bg-[#2A2E26] text-white text-center px-4 overflow-hidden">
        {/* We will add an image background here once downloaded. For now, dark olive gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2A2E26]/80 to-[#2A2E26] z-10"></div>

        <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto mt-16">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#DFD5C4] mb-4">Discover Your Destiny</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
            THE ART OF HOLISTIC<br />HEALING
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-10 tracking-widest uppercase">
            Authentic Yoga, Ayurveda and Ancient Vedic Wisdom
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/our-story" className="bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors border border-transparent">
              Our Story
            </Link>
            <Link href="/book-consultation" className="bg-transparent hover:bg-white/10 text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors border border-white">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Best Selling Products */}
      <section className="py-20 bg-[#F5F7F2]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-4">Best Selling Products</h2>
            <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product: any) => (
              <ProductCard key={product.id} product={{ ...product, isBestSeller: true }} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ayurveda Section */}
      <section className="py-24 bg-[#546247] text-[#F5F7F2] relative overflow-hidden text-center px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-serif uppercase tracking-widest opacity-5 whitespace-nowrap pointer-events-none">
          Ayurveda
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-8">Ayurveda</h2>
          <p className="text-base md:text-lg leading-relaxed text-[#DFD5C4] mb-10 font-light">
            Discover the ancient wisdom of Ayurveda, a 5,000-year-old holistic healing system that
            harmonizes mind, body, and spirit. Rooted in nature, it offers personalized wellness through
            herbal remedies, balanced nutrition, and mindful living. Embrace a life of vitality, clarity, and
            inner peace with timeless practices tailored to your unique constitution. Ayurveda isn’t just
            medicine—it’s a way of life.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/vedic-wisdom/ayurveda" className="inline-block border border-[#DFD5C4] hover:bg-[#DFD5C4] hover:text-[#546247] px-8 py-3 text-sm uppercase tracking-wider transition-colors">
              Learn More
            </Link>
            <Link href="/shop/ayurveda" className="inline-block border border-[#DFD5C4] hover:bg-[#DFD5C4] hover:text-[#546247] px-8 py-3 text-sm uppercase tracking-wider transition-colors">
              Shop Ayurveda
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Rasashala Section */}
      <section className="flex flex-col md:flex-row w-full bg-[#1F3C6D] text-white relative">
        <div className="w-full md:w-1/2 min-h-[400px] bg-[#162a4d] flex items-center justify-center p-12">
          <span className="text-white/50">Ayurveda Deity Image</span>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl font-serif uppercase tracking-widest mb-6">Rasashala</h2>
          <p className="text-sm md:text-base leading-relaxed text-[#DFD5C4] mb-8 font-light">
            Welcome to the enchanting realm of Ancient Rasashala, where the art of alchemy meets the
            wisdom of Ayurveda. We have revived the legendary Chintamani and Rasa Mani, powerful
            elixirs of transformation and healing, crafted with sacred precision. Inspired by this success,
            we are on a mission to create 100 more Rasamanis, each a unique blend of ancient knowledge and
            modern innovation. Join us in this extraordinary journey to unlock the secrets of timeless wellness
            and discover the magic of Rasashala.
          </p>
          <div className="flex gap-4">
            <Link href="/vedic-wisdom/rasashala" className="inline-block bg-[#B38F52] hover:bg-[#9c7b44] text-[#1F3C6D] px-8 py-3 text-sm uppercase tracking-wider transition-colors font-medium">
              Discover Rasashala
            </Link>
            <Link href="/shop/rasamani" className="inline-block border border-[#B38F52] text-[#B38F52] hover:bg-[#B38F52] hover:text-[#1F3C6D] px-8 py-3 text-sm uppercase tracking-wider transition-colors font-medium">
              Shop Rasamani
            </Link>
          </div>
        </div>
      </section>

      {/* 5. The Celestial Healers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-3">The Celestial Healers</h2>
              <p className="text-[#B38F52] italic text-lg opacity-80">Harness the Ancient Power of Pure Gemstones</p>
            </div>
            <p className="text-sm text-gray-500 max-w-md text-right hidden md:block leading-relaxed">
              Unlock Your Potential with Nature’s Celestial Keys. Discover the transformative power of 100% pure, ethically sourced gemstones.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-[#F5F7F2] flex items-center justify-center group overflow-hidden">
                <span className="text-[#546247] opacity-40">Gem {i}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <Link href="/shop/gemstones" className="border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
              Buy Now
            </Link>
            <Link href="/our-story" className="bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors border border-transparent">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Sughandha Veda (Essential Oils) */}
      <section className="py-24 bg-[#E0D7C9] relative overflow-hidden px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-end items-center relative z-10">
          <div className="w-full md:w-1/2 p-8 md:p-16 max-w-xl text-[#2A2E26] bg-[#F5F7F2]/80 backdrop-blur-sm border border-white/20 shadow-xl">
            <h2 className="text-3xl font-serif uppercase tracking-widest mb-6 text-[#546247]">Sughandha Veda</h2>
            <p className="text-base leading-relaxed mb-6">
              A rare Ayurvedic text detailing forest-based aromatics & healing herbs, including sacred oils like
              Kadamba, sandal wood, champak, jasmine, Rose, tulasi & Agarwood. Reveals ancient fragrance therapies
              for body, mind & spiritual elevation.
            </p>
            <p className="text-[#B38F52] italic font-serif text-lg mb-8">
              “Where nature’s scent meets divine science” 🌿
            </p>
            <div className="flex gap-4">
              <Link href="/vedic-wisdom/sughandha-veda" className="inline-block bg-[#546247] text-white hover:bg-[#435038] px-8 py-3 text-sm uppercase tracking-wider transition-colors">
                Read More
              </Link>
              <Link href="/shop/sughandha-veda" className="inline-block border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors bg-white">
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
        {/* Background product image container */}
        <div className="absolute inset-0 md:w-1/2 bg-[#d1c8b8] flex items-center justify-center opacity-40 md:opacity-100 mix-blend-multiply border-l border-white/20">
          <Image src="/images/essential-oil-photo-.png" fill className="object-cover" alt="Sughandha Veda" />
        </div>
      </section>

      {/* 7. Grid Blocks: Goshala, Vedic Agri, Yoga */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* Goshala */}
        <div className="bg-[#F5F7F2] p-12 md:p-20 flex flex-col justify-center border-b border-r border-[#DFD5C4]/30 text-center lg:text-left">
          <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-6">Goshala</h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Step into the serene world of a Goshala, a sanctuary of compassion dedicated to the care and protection
            of cows, revered as sacred beings in Indian culture. Experience the harmony of nature as you witness these
            gentle creatures nurtured with love, respect, and holistic care. A Goshala is not just a shelter—it’s a symbol
            of sustainability, spirituality, and coexistence.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link href="/vedic-wisdom/goshala" className="inline-block border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
              Explore Goshala
            </Link>
            <Link href="/shop/goshala" className="inline-block bg-[#546247] text-white hover:bg-[#435038] px-8 py-3 text-sm uppercase tracking-wider transition-colors border border-transparent">
              Shop Goshala
            </Link>
          </div>
        </div>
        <div className="bg-[#DFD5C4] relative aspect-square lg:aspect-auto flex items-center justify-center min-h-[400px]">
          <Image src="/images/photo_2025-11-07-14.06.14-1024x882.jpeg" fill className="object-cover opacity-80" alt="Goshala" />
        </div>

        {/* Vedic Agriculture */}
        <div className="bg-[#E4DECF] p-12 md:p-20 flex flex-col justify-center border-b border-[#DFD5C4]/30 order-last md:order-none">
          <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-6">Vedic Agriculture</h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
            Step into the timeless world of Ancient Vedic Agriculture, where nature and spirituality unite to create a
            sustainable farming legacy. We proudly nurture over 20 rare varieties of traditional rice, each a treasure
            trove of heritage, flavor, and nourishment. Grown using sacred, eco-friendly practices.
          </p>
          <div className="flex gap-4">
            <Link href="/vedic-wisdom/vedic-agriculture" className="inline-block bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
              Read More
            </Link>
            <Link href="/shop/vedic-agriculture" className="inline-block border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
              Shop Agriculture
            </Link>
          </div>
        </div>
        <div className="bg-[#D0C7B5] relative aspect-square lg:aspect-auto flex items-center justify-center min-h-[400px]">
          <Image src="/images/agri-vedic-.png" fill className="object-cover opacity-90" alt="Vedic Agriculture" />
        </div>

        {/* Yoga & Meditation */}
        <div className="bg-[#B8C0CB] relative aspect-square lg:aspect-auto flex items-center justify-center min-h-[400px]">
          <Image src="/images/1.jpeg" fill className="object-cover opacity-80" alt="Yoga & Meditation" />
        </div>
        <div className="bg-[#8E9EBB] p-12 md:p-20 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-serif uppercase tracking-widest mb-6 text-white">Yoga & Meditation</h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed max-w-lg">
            Unlock the power of Yoga and Meditation, ancient practices that harmonize the mind, body, and soul,
            guiding you toward inner peace and vitality. Through mindful movement and deep stillness, discover a
            path to clarity, balance, and profound self-awareness. Embrace the journey to a calmer, healthier you.
          </p>
          <div className="flex gap-4">
            <Link href="/vedic-wisdom/yoga-meditation" className="inline-block bg-white text-[#1F3C6D] hover:bg-gray-100 px-8 py-3 text-sm uppercase tracking-wider transition-colors font-medium">
              Find Peace
            </Link>
            <Link href="/shop/yoga-meditation" className="inline-block border border-white text-white hover:bg-white hover:text-[#1F3C6D] px-8 py-3 text-sm uppercase tracking-wider transition-colors font-medium">
              Shop Yoga
            </Link>
          </div>
        </div>
      </section>

      {/* CWCR Connect */}
      <section className="py-24 bg-white text-center px-4">
        <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-4">Connect With Us</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Be part of our Center for Wildlife Conservation And Research (CWCR) and the Vanya Siri community.
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors" />
            <input type="text" placeholder="Last Name" className="border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full border-b border-[#DFD5C4] py-3 px-2 focus:outline-none focus:border-[#546247] transition-colors" />
          <div className="pt-6">
            <button className="bg-[#546247] hover:bg-[#435038] text-white px-12 py-4 text-sm uppercase tracking-wider transition-colors shadow-md w-full">
              Join Our Newsletter
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
