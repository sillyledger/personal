import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pieter Borremans | Foreigner living in Taiwan",
  description: "A foreigner in Taiwan, writing about the language, the culture, and building Ryoka along the way.",
};

// Canonical entity graph — same @id as ryokagroup.com/founder, pieterborremans.com,
// indiehacker.blog/about, and echoroom.xyz/about, so Google treats all five as
// describing the same Person. Keep sameAs and description in sync across all five.
// Site-wide (root layout): static, universal identity data, not page content.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ryokagroup.com/founder#pieter",
  name: "Pieter Borremans",
  givenName: "Pieter",
  familyName: "Borremans",
  jobTitle: "Writer, Content Creator, Founder",
  description:
    "Pieter Borremans is a writer, content creator, and founder living in Taichung, Taiwan. He writes about the language, the culture, and building Ryoka along the way.",
  url: "https://pieter.tw",
  image: "https://pieter.tw/avatar-circle-master-1024.png",
  homeLocation: [
    { "@type": "Place", name: "Taichung, Taiwan" },
    { "@type": "Place", name: "London, United Kingdom" },
  ],
  worksFor: {
    "@type": "Organization",
    "@id": "https://ryokagroup.com/#organization",
    name: "Ryoka Group",
  },
  sameAs: [
    "https://pieterborremans.com",
    "https://ryokagroup.com/founder",
    "https://www.indiehacker.blog",
    "https://echoroom.xyz/about",
    "https://ryoka.xyz",
    "https://www.linkedin.com/in/pieter-borremans/",
    "https://medium.com/@borremanspieter",
    "https://www.youtube.com/@PieterBorremans",
    "https://github.com/sillyledger",
    "https://www.pinterest.com/borremanspieter",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;900&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink font-sans min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
