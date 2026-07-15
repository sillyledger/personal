import Image from "next/image";

const links = [
  { label: "YouTube", href: "https://youtube.com/@Pieterborremans" },
  { label: "Pinterest", href: "https://pinterest.com/borremanspieter" },
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
          className="flex-shrink-0 rounded-full object-cover w-16 h-16 border border-border"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="text-[11px] font-medium tracking-wide uppercase text-gold">
              Written by
            </span>
            <span className="font-display font-bold text-[19px] text-ink">
              Pieter ✈ Borremans
            </span>
          </div>

          <p className="text-[15px] leading-relaxed text-muted">
            Pieter Borremans is a writer, content creator, and founder based
            in Taichung, Taiwan and London, UK. He writes about
            entrepreneurship, independent business-building, and the
            unfiltered reality of creating things online.
          </p>

          <div className="flex flex-wrap mt-4 pt-3 border-t border-border">
            {links.map((link, i) => (
              
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[11px] font-medium tracking-wide uppercase text-muted hover:text-ink transition-colors px-3.5 first:pl-0 last:pr-0 ${
                  i < links.length - 1 ? "border-r border-border" : ""
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