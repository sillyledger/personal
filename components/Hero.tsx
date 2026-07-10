import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-0 flex flex-col items-center text-center">
      <h1 className="font-display text-[clamp(60px,5vw,72px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#111] mb-20">
        A foreigner in Taiwan, <span className="text-accent">building</span> anyway.
      </h1>
      <div className="flex items-center gap-12 pb-16 border-b border-stone-300/60 w-full justify-center">
        <p className="text-[18px] text-stone-700 leading-relaxed max-w-[420px] text-left">
          I am Pieter Borremans. Almost a decade ago, I moved to Taiwan without
          speaking a word of Mandarin. This is where I write about the
          language, the culture, and the version of myself that only shows up
          when nothing is familiar. I am Asian-born, from Indonesia, but
          raised in Belgium, and eventually landed in London &amp; Taichung.
        </p>
        <Link
          href="/journal"
          className="bg-[#111] text-white text-[13px] font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Read Journal →
        </Link>
      </div>
    </section>
  );
}
