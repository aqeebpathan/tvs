import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// New fonts for polished minimal look
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Village Shop",
    template: "%s | The Village Shop",
  },
  description:
    "The Village Shop - A modern specialty destination offering handcrafted drinks, authentic goods, and authentic local experiences. Your community gathering space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
