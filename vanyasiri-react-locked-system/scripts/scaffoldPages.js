const fs = require('fs');
const path = require('path');

const shopCategories = [
  { id: 'rasamani', title: 'Rasamani' },
  { id: 'essential-oils', title: 'Essential Oils' },
  { id: 'resins-and-gums', title: 'Resins and Gums' },
  { id: 'palm-leaf-manuscripts', title: 'Palm Leaf Manuscripts' },
  { id: 'gemstones', title: 'Gemstones' },
  { id: 'idols', title: 'Idols' }
];

const vedicCategories = [
  { id: 'ayurveda', title: 'Vanyasiri Ayurveda' },
  { id: 'rasashala', title: 'Vanyasiri Rasashala' },
  { id: 'vedic-agriculture', title: 'Vanyasiri Vedic Agriculture' },
  { id: 'yoga-meditation', title: 'Vanyasiri Yoga & Meditation' }
];

function generateShopPage(category) {
  return `"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import { useCart } from "@/store/CartContext";

export default function ${category.id.replace(/-/g, '')}Page() {
  const products = productsData.filter(p => p.category.toLowerCase() === "${category.title.toLowerCase()}");
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-4">${category.title}</h1>
        <div className="w-16 h-0.5 bg-[#B38F52] mx-auto"></div>
      </div>
      
      {products.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          <p>More ${category.title} products coming soon.</p>
          <Link href="/" className="inline-block mt-8 bg-[#546247] hover:bg-[#435038] text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
            Return Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square bg-[#DFD5C4]/30 mb-4 overflow-hidden flex items-center justify-center">
                <Image src={product.image} fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg text-[#2A2E26] mb-1 group-hover:text-[#546247] transition-colors">{product.name}</h3>
                <p className="text-[#B38F52] font-semibold text-sm mb-4">₹{product.price.toLocaleString('en-IN')}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white py-2 text-xs uppercase tracking-wider transition-colors">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
`;
}

function generateVedicPage(category) {
  return `import Image from "next/image";
import Link from "next/link";

export default function ${category.id.replace(/-/g, '')}Page() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-6">${category.title}</h1>
        <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Explore the timeless wisdom of ${category.title}. This section is currently being updated with profound knowledge and detailed scriptures from our ancient repositories.
        </p>
        <Link href="/" className="inline-block border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
`;
}

const baseDir = path.join(process.cwd(), 'src', 'app');

shopCategories.forEach(cat => {
  const dirPath = path.join(baseDir, 'shop', cat.id);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), generateShopPage(cat));
});

vedicCategories.forEach(cat => {
  const dirPath = path.join(baseDir, 'vedic-wisdom', cat.id);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), generateVedicPage(cat));
});

console.log('Successfully regenerated all shop and vedic wisdom pages with addToCart binding!');
