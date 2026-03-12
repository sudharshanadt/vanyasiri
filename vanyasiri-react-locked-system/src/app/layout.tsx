import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NewsletterPopup from "@/components/NewsletterPopup";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanya Siri | The Art of Holistic Healing",
  description: "Discover the ancient wisdom of Ayurveda, sacred oils, Rasamani gems and Vedic products from Vanya Siri Trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className={`antialiased min-h-screen flex flex-col bg-[#F2EEE9] text-[#2A2E26]`}>
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <NewsletterPopup />
        </Providers>
      </body>
    </html>
  );
}
