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
      <div className="font-mono text-[13px] tracking-wide text-ink uppercase mb-6">
        field notes from Taiwan
      </div>
      <h1 className="font-display font-bold text-[clamp(30px,4.6vw,56px)] leading-[1.18] tracking-tight text-ink">
        Writing my way through a country that isn&apos;t mine.
      </h1>
      <p className="mt-6 text-body text-muted">
        Belgian-raised, Indonesian-born, somehow calling Taiwan home since 2018.  I moved to this wonderful place without speaking a word of Mandarin.
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-4">
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
              fill="#17171A"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2 font-mono text-[13px] tracking-wide text-ink">
          TPE
          <span className="relative inline-block w-[22px] h-[15px] rounded-sm bg-red overflow-hidden">
            <span className="absolute top-0 left-0 w-[55%] h-[55%] bg-[#000095]" />
            <span className="absolute top-[16%] left-[20%] w-[4px] h-[4px] rounded-full bg-white" />
          </span>
        </div>
        <div className="w-full font-mono text-[13px] text-muted mt-1">
          left Brussels in 2006 — went around the world, stranded in London & Taichung.
        </div>
      </div>
    </section>
  );
}
