import type { Metadata } from "next";
import "./globals.css";
// import localFont from "next/font/local";
import { Roboto, Poppins } from "next/font/google";
// const poppins = localFont ({
// src: "../fonts/Poppins.woff2",
// variable: "--font-poppins",
// weight: "100 900",
// display: "swap",
// preload: false,
// });
const roboto = Roboto ({
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   subsets:['latin']
  }) 
const poppins = Poppins ({
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   subsets:['latin']
  }) 

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
      className={`${roboto.className}, ${poppins.className} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
