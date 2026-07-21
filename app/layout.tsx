import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinisbrands.com"),
  title: {
    default: "Diogo Dinis: Build Profitable Ecommerce Brands",
    template: "%s · Diogo Dinis",
  },
  description:
    "Practical frameworks, templates and systems to help ambitious founders launch and grow real ecommerce brands. By Diogo Dinis, founder of DinisBrands.",
  keywords: [
    "ecommerce",
    "founder",
    "Shopify",
    "brand building",
    "mentorship",
    "Diogo Dinis",
    "DinisBrands",
  ],
  authors: [{ name: "Diogo Dinis" }],
  creator: "Diogo Dinis",
  openGraph: {
    title: "Diogo Dinis: Build Profitable Ecommerce Brands",
    description:
      "Practical frameworks, templates and systems to help ambitious founders launch and grow real ecommerce brands.",
    url: "https://dinisbrands.com",
    siteName: "DinisBrands",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diogo Dinis: Build Profitable Ecommerce Brands",
    description:
      "Practical frameworks, templates and systems to help ambitious founders launch and grow real ecommerce brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
