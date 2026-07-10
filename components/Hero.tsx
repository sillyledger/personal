import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-44 pb-0 flex flex-col items-center text-center">
      <div className="flex flex-col items-start gap-8 pb-16 border-b border-stone-300/60 w-full max-w-[820px] mx-auto text-left">
        <p className="text-[28px] md:text-[34px] leading-[1.5] tracking-[-0.01em] text-stone-800">
          I am Pieter Borremans, a foreigner in Taiwan who&apos;s been
          building{" "}
          <a
            href="https://www.ryokagroup.com/founder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Ryoka Group
          </a>
          . Almost a decade ago, I moved to Taiwan without speaking a word of
          Mandarin. This is where I write about the language, the culture,
          and the version of myself that only shows up when nothing is
          familiar. I am Asian-born, from Indonesia, but raised in Belgium,
          and eventually landed in London &amp; Taichung.
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
