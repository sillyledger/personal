// app/gallery/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photo Gallery | Pieter Borremans",
  description:
    "Photos from Pieter Borremans' life in Taiwan — unfiltered, one roll at a time.",
};

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

// Add a new photo by dropping the file in /public and adding one entry here.
const photos: Photo[] = [
  {
    src: "/pieter-borremans-living-in-taiwan.jpeg",
    alt: "Pieter Borremans, founder of Ryoka, living in Taichung, Taiwan",
    caption: "Where it all starts.",
  },
  {
    src: "/pieter-borremans-taichung-coffee-shop.jpeg",
    alt: "Pieter Borremans at a coffee shop in Taichung, Taiwan",
    caption: "Favorite coffee shop",
  },
  {
    src: "/pieter-borremans-in-taiwan-dark-grey-mirror-shot.jpeg",
    alt: "Pieter Borremans, mirror photo, Taiwan",
    caption: "Mirror shot, no filter",
  },
  {
    src: "/pieter-borremans-poker-night-taipei.jpeg",
    alt: "Pieter Borremans playing poker in Taipei, Taiwan",
    caption: "Asian Poker Tour Taipei",
  },
];

const SITE_URL = "https://pieter.tw";

function GalleryJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Photo Gallery | Pieter Borremans",
    description:
      "Photos from Pieter Borremans' life in Taiwan — unfiltered, one roll at a time.",
    url: `${SITE_URL}/gallery`,
    image: photos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${photo.src}`,
      description: photo.alt,
      caption: photo.caption,
      creator: {
        "@type": "Person",
        name: "Pieter Borremans",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function GalleryPage() {
  return (
    <main className="max-w-[900px] mx-auto px-16 py-24">
      <GalleryJsonLd />

      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs tracking-widest text-[#8A8C94] uppercase">
          Contact sheet · roll 01
        </span>
        <span className="font-mono text-xs text-[#8A8C94]">
          {photos.length} / 36 EXP
        </span>
      </div>

      <h1 className="font-semibold text-3xl text-[#F2F1ED] mb-12 leading-tight">
        Nine stops,
        <br />
        unfiltered.
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className={`flex flex-col gap-2 ${
              i % 2 === 0 ? "rotate-[-1.2deg]" : "rotate-[1deg]"
            } hover:rotate-0 transition-transform duration-200`}
          >
            <div className="relative aspect-square overflow-hidden rounded-sm border border-white/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 280px"
              />
            </div>
            <figcaption className="font-mono text-[10px] text-[#8A8C94] leading-snug">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
        <span className="font-mono text-xs text-[#8A8C94]">
          BEL → TPE · 2018–2026
        </span>
        <span className="font-mono text-xs text-[#C23B3B]">
          STILL SHOOTING
        </span>
      </div>
    </main>
  );
}
