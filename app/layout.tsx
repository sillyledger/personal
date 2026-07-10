import type { Metadata } from "next";
import { Figtree, Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Figtree = body text font (used for paragraphs, nav, dates, everything except headlines)
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

// Fira Sans = headline font (used only for big headers like the homepage title)
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "Pieter Borremans | Content Creator & Founder",
  description:
    "I am a content creator, blogger, and entrepreneur with an occasional experiment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${firaSans.variable} bg-[#FFFAFA] text-[#252525] font-[family-name:var(--font-figtree)]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
