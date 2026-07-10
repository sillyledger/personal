import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";

export default function PhotoStrip() {
  const preview = photos.slice(0, 3);

  return (
    <section className="max-w-[900px] mx-auto px-16 py-16">
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs tracking-widest text-[#8A8C94] uppercase">
          Contact sheet
        </span>
        <Link
          href="/gallery"
          className="font-mono text-xs text-[#8A8C94] hover:text-[#F2F1ED] transition-colors"
        >
          See all →
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {preview.map((photo, i) => (
          <div
            key={photo.src}
            className={`relative aspect-square overflow-hidden rounded-sm border border-white/10 ${
              i % 2 === 0 ? "rotate-[-1.2deg]" : "rotate-[1deg]"
            } hover:rotate-0 transition-transform duration-200`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 280px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
