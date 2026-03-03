import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { LayoutExtras } from "@/components/layout/LayoutExtras";
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
  verification: {
    google: "45mlNKoIdSc4aoJ7STf-xAb75NR2Lr7UiNhEoKguhSc",
  },
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2JRZE3D91Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2JRZE3D91Z');
          `}
        </Script>

        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <LayoutExtras />
      </body>
    </html>
  );
}

