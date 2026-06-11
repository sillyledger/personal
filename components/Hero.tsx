import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Hero() {
  return (
    <section className="relative pt-10 pb-0">
      {/* Since label */}
      <span className="absolute top-12 right-0 text-[13px] text-stone-400">
        Since 2020
      </span>

      {/* Main headline */}
      <h1 className="text-[clamp(80px,11vw,148px)] font-extrabold leading-[0.92] tracking-[-0.04em] text-[#111]">
        Creator
      </h1>
      <h2 className="text-[clamp(80px,11vw,148px)] font-extrabold leading-[0.92] tracking-[-0.04em] text-accent">
        &amp; Founder.
      </h2>

      {/* Bottom row: socials left, bio+CTA right */}
      <div className="flex items-end justify-between pt-12 pb-10">
        <ul className="flex flex-col gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-stone-500 hover:text-[#111] transition-colors"
              >
                <span className="w-[7px] h-[7px] bg-accent rounded-[2px] flex-shrink-0" />
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bio + CTA — no image */}
        <div className="w-[280px]">
          <p className="text-[13px] text-stone-500 leading-relaxed mb-4">
            Building software companies at the intersection of data and
            intelligence. Founder of Aegos Intel — structured insights for
            operators and analysts.
          </p>
          <Link
            href="/contact"
            className="text-[13px] font-medium text-accent border-b border-accent pb-[2px] inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
          >
            Get in Touch ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
