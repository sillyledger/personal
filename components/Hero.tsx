import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-10 pb-0">

      {/* Since label top right */}
      <span className="absolute top-12 right-0 text-[13px] text-stone-400">
        Since 2020
      </span>

      {/* Big headline */}
      <h1 className="text-[clamp(80px,11vw,148px)] font-extrabold leading-[0.92] tracking-[-0.04em] text-[#111]">
        Creator
      </h1>
      <h2 className="text-[clamp(80px,11vw,148px)] font-extrabold leading-[0.92] tracking-[-0.04em] text-accent mb-16">
        &amp; Founder.
      </h2>

      {/* Below headline: bio left, CTA right — like Aegos Intel */}
      <div className="flex items-start justify-between pb-12 border-b border-stone-300/60">
        <p className="text-[14px] text-stone-500 leading-relaxed max-w-[420px]">
          Building software companies at the intersection of data and
          intelligence. Founder of Aegos Intel — structured insights for
          operators and analysts.
        </p>
        <Link
          href="/contact"
          className="bg-[#111] text-white text-[13px] font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Get in Touch →
        </Link>
      </div>

    </section>
  );
}
