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
  metadataBase: new URL('https://alanwedsbenitta.vercel.app'),
  title: "Alan & Benitta | Wedding Invitation",
  description: "Celebrate love with us on May 24, 2026 — join Alan and Benitta for an intimate wedding celebration in style.",
  openGraph: {
    title: "Alan & Benitta | Wedding Invitation",
    description: "Celebrate love with us on May 24, 2026 — join Alan and Benitta for an intimate wedding celebration in style.",
    images: [{ url: "/images/watercolor_couple_sketch.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan & Benitta | Wedding Invitation",
    description: "Celebrate love with us on May 24, 2026 — join Alan and Benitta for an intimate wedding celebration in style.",
    images: ["/images/watercolor_couple_sketch.png"],
  },
  icons: [
    { rel: "icon", url: "/ring.svg" },
    { rel: "apple-touch-icon", url: "/ring.svg" },
  ],
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
