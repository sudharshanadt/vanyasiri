import Image from "next/image";
import Link from "next/link";

export default function AyurvedaPage() {
  const conditions = [
    { title: "Digestive Disorders", items: ["Acid Reflux (GERD) – Amlapitta", "Irritable Bowel Syndrome (IBS) – Grahani", "Constipation – Vibandha", "Indigestion – Agnimandya", "Gastritis – Urdhva Amlapitta", "Crohn's Disease – Grahani Dosha"] },
    { title: "Respiratory Conditions", items: ["Asthma – Swasa Roga", "Chronic Bronchitis – Kashtan Swasa", "Sinusitis – Peenasa", "Allergic Rhinitis – Vataja Pratishyaya", "Coughs and Cold – Kasa and Pratishyaya"] },
    { title: "Skin Disorders", items: ["Acne – Yauvan Pidika", "Eczema – Vicharchika", "Psoriasis – Ekakushta", "Vitiligo – Shwitra", "Ringworm – Dadru", "Dandruff – Darunaka"] },
    { title: "Joint & Musculoskeletal", items: ["Osteoarthritis – Sandhigata Vata", "Rheumatoid Arthritis – Amavata", "Gout – Vata Rakta", "Chronic Back Pain – Kati Shula", "Frozen Shoulder – Apabahuka"] },
    { title: "Neurological & Mental Health", items: ["Insomnia – Anidra", "Anxiety and Stress – Chittodvega", "Depression – Vishada", "Migraine – Ardhavabhedaka", "Parkinson's – Kampavata", "Fatigue – Klama"] },
    { title: "Metabolic & Hormonal", items: ["Diabetes Mellitus (Type 2) – Madhumeha", "Obesity – Sthaulya", "Thyroid Disorders – Galaganda", "PCOS – Aarthava Kshaya", "Menstrual Irregularities – Artava Dushti", "Infertility – Vandhyatva"] },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f7f5ed]">
      {/* Hero */}
      <section className="bg-[#546247] text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-serif uppercase tracking-widest opacity-5 whitespace-nowrap pointer-events-none">Ayurveda</div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-[#DFD5C4] mb-4 block">The Science of Life</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Ayurveda</h1>
          <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-8"></div>
          <p className="text-[#DFD5C4] text-lg leading-relaxed font-light">
            A holistic system of living that focuses on balancing the body, mind, and spirit.
            Originating in India over 5,000 years ago — "Ayus" means life, "Veda" means science.
          </p>
          <div className="mt-8">
            <Link href="/book-consultation" className="bg-[#546247] hover:bg-[#435038] text-white px-8 py-4 text-sm uppercase tracking-wide transition-colors">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif text-[#2A2E26] mb-6">The Ancient Science of Life</h2>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              Ayurveda teaches that all living beings—humans, plants, and animals—must live in harmony with nature to thrive.
              It emphasizes daily and seasonal routines to promote optimal health and longevity. Health, in Ayurveda, is seen as
              a dynamic balance between the subtle energies within the body (Microcosm) and the external environment (Macrocosm).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              At our practice, we stay true to the authentic principles of Ayurveda. We prepare <strong>100% in-house medicines</strong> for
              our patients and do not rely on commercially produced Ayurvedic products. With over <strong>four generations of experience</strong>,
              we have successfully treated more than <strong>10,000 patients</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed font-light">
              There are two main types of Ayurvedic medicines: Classical formulations prepared according to ancient Ayurvedic texts
              (Samhitas), and Patent or Proprietary formulations made using plant extracts. We practice the former — the true, classical tradition.
            </p>
          </div>
          <div className="relative aspect-square bg-[#DFD5C4] shadow-xl overflow-hidden">
            <Image src="/images/DSC03263-1-1-edited-1-1024x680.jpg" fill className="object-cover" alt="Vanyasiri Ayurveda Practice" />
          </div>
        </div>

        {/* Conditions We Treat */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif uppercase tracking-widest text-[#546247] mb-4">Conditions We Treat</h2>
          <div className="w-16 h-0.5 bg-[#B38F52] mx-auto mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our expertise includes managing and curing a wide range of chronic and acute conditions using authentic classical Ayurvedic formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((section, i) => (
            <div key={i} className="bg-white p-6 shadow-sm border-t-2 border-[#546247]/40">
              <h3 className="font-serif text-[#546247] text-base mb-4 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="text-sm text-gray-600 flex gap-2 items-start">
                    <span className="text-[#B38F52] flex-shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-[#546247] text-white p-12">
          <h2 className="text-3xl font-serif mb-4">Begin Your Healing Journey</h2>
          <p className="text-[#DFD5C4] mb-8 max-w-xl mx-auto font-light">
            We take pride in offering personalized care and treatments aligning with the timeless wisdom of Ayurveda,
            helping our patients achieve lasting health and well-being.
          </p>
          <Link href="/contact-us" className="inline-block border border-white hover:bg-white hover:text-[#546247] px-10 py-4 text-sm uppercase tracking-wider transition-colors">
            Book an Ayurveda Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
