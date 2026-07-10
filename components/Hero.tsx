export default function Hero() {
  return (
    <section className="max-w-[720px] mx-auto px-10 pt-24 pb-20">
      <style>{`
        @keyframes fly-across {
          0% { left: 4%; }
          100% { left: 96%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .plane-icon { animation: none !important; }
        }
      `}</style>

      <div className="font-mono text-[13px] tracking-wide text-muted uppercase mb-6">
        Pieter Borremans —{" "}
        <span className="text-ink normal-case">field notes from Taiwan</span>
      </div>

      <h1 className="font-display font-bold text-[clamp(30px,4.6vw,56px)] leading-[1.18] tracking-tight text-ink">
        Writing my way through a country that isn&apos;t mine.
      </h1>

      <p className="mt-6 text-[16px] leading-relaxed text-muted">
        Belgian-raised, Indonesian-born — building Ryoka and writing about
        Taiwan since 2016.
      </p>

      <div className="mt-12 pt-7 border-t border-line flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 font-mono text-[13px] tracking-wide text-ink">
          <span
            className="inline-block w-[22px] h-[15px] rounded-sm"
            style={{
              background:
                "linear-gradient(90deg, #000 0% 33%, #FDDA24 33% 66%, #EF3340 66% 100%)",
            }}
          />
          BEL
        </div>

        <div className="flex-1 min-w-[80px] relative h-4 flex items-center">
          <span className="w-full border-t border-dashed border-ink/35" />
          <svg
            className="plane-icon absolute top-1/2 -translate-y-1/2 w-4 h-4 [animation:fly-across_6s_linear_infinite]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 16L22 8L18 16L22 22L14 18L8 22L9 15L2 16Z"
              fill="#F5F3EE"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2 font-mono text-[13px] tracking-wide text-ink">
          TPE
          <span className="inline-block w-[22px] h-[15px] rounded-sm bg-red" />
        </div>

        <div className="w-full font-mono text-[12px] text-muted mt-1">
          left Brussels in 2016 — still finding my way around Taichung.
        </div>
      </div>
    </section>
  );
}
