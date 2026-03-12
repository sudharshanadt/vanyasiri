import Image from "next/image";
import Link from "next/link";

export default function yogameditationPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-serif uppercase tracking-widest text-[#546247] mb-6">Vanyasiri Yoga & Meditation</h1>
        <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Explore the timeless wisdom of Vanyasiri Yoga & Meditation. This section is currently being updated with profound knowledge and detailed scriptures from our ancient repositories.
        </p>
        <Link href="/" className="inline-block border border-[#546247] text-[#546247] hover:bg-[#546247] hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
