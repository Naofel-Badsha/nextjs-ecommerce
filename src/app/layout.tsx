import type { Metadata } from "next";
import "./globals.css";

import { Roboto, Poppins, Oswald } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";


const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  variable: "--font-roboto",
})
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  variable: "--font-poppins",
})
const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700",],
  subsets: ['latin'],
  variable: "--font-Oswald",
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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${roboto.variable} ${poppins.variable} ${oswald.variable}  antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
