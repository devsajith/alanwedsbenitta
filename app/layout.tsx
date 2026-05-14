import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Alan & Benitta | Wedding Invitation",
  description: "Request the honor of your presence at the Holy Matrimony of Alan and Benitta on May 24, 2026.",
  openGraph: {
    title: "Alan & Benitta | Wedding Invitation",
    description: "Request the honor of your presence at the Holy Matrimony of Alan and Benitta on May 24, 2026.",
    images: [{ url: "/images/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
