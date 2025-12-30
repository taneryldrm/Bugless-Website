import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bugless Digital | Kurumsal Dijital Ajans",
  description: "Modern, yaratıcı ve profesyonel dijital çözümler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
