import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { url } from "inspector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL("/"),
  title: {
    template: "%s | Shopcart-Premimum Online Shopping",
    default: "NexCart E-commerce App",
  },
  description: "A modern ecommerce application built with Next.js and TypeScript",
  keywords: [
    "online shopping",
    "ecommerce",
    "Shopcart",
    "premium products",
    "shopping platform",
    "user experience",
    "buy online",
    "shop online",
    "retail",
    "fashion",
    "electronics",
  ],
  authors: [
    {
      name: "NexCart",
      // url: ""
    },
  ],
  creator: "NexCart Team",
  publisher: "NexCart Inc",
  alternates: {
    // canonical: ""
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;


}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
