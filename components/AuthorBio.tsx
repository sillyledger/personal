import Image from "next/image";

const links = [
  { label: "YouTube", href: "https://youtube.com/@Pieterborremans" },
  { label: "Pinterest", href: "https://www.pinterest.com/borremanspieter/" },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/765k4LuyZrS2sYEkXHOZ47",
  },
  { label: "pieterborremans.com", href: "https://pieterborremans.com" },
];

export default function AuthorBio() {
  return (
    <div className="mt-16 pt-6 border-t border-gold">
      <div className="flex items-start gap-5">
        <Image
          src="/pieter-borremans-living-in-taiwan.jpeg"
          alt="Pieter Borremans, a foreigner living in Taiwan"
          width={64}
          height={64}
          className="flex-shrink-0 rounded-full object-cover w-16 h-16 border border-line"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="font-mono text-[11px] tracking-wide uppercase text-gold">
              Written by
            </span>
            <span className="font-display font-semibold text-[19px] text-ink">
              Pieter ✈ Borremans
            </span>
          </div>

          <p className="text-[15px] leading-relaxed text-muted">
            Writer, founder, and podcaster living in Taichung, Taiwan since
            2018. Documenting life as a foreigner here, unfiltered, on this
            journal.
          </p>

          <div className="flex flex-wrap mt-4 pt-3 border-t border-line">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-[11px] tracking-wide uppercase text-muted hover:text-ink transition-colors px-3.5 first:pl-0 last:pr-0 ${
                  i < links.length - 1 ? "border-r border-line" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
