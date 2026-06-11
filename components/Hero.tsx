import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Hero() {
  return (
    <section className="relative pt-10 pb-0 min-h-[480px]">
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

      {/* Bottom row */}
      <div className="flex items-end justify-between pt-12 pb-10">
        {/* Social links */}
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

        {/* Card */}
        <div className="w-[280px]">
          {/* Image placeholder — replace with next/image when you have a photo */}
          <div className="w-full h-[160px] bg-stone-300 rounded-[10px] mb-4" />

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
