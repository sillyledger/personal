import Link from "next/link";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], weight: ["300", "400"] });

export default function Hero() {
  return (
    <section className="relative pt-10 pb-0">

      <h1 className={`${geist.className} text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-[#111]`}>
        Creating is my default.
      </h1>
      <h2 className={`${geist.className} text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-accent mb-16 whitespace-nowrap`}>
        Building is my obsession.
      </h2>

      <div className="flex items-start justify-between pb-12 border-b border-stone-300/60">
        <p className="text-[18px] text-stone-700 leading-relaxed max-w-[380px]">
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
