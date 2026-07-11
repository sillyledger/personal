export default function AboutPage() {
  return (
    <main className="max-w-[720px] mx-auto px-10 pt-16 pb-24">
      <style>{`
        .pass-stub::before,
        .pass-stub::after {
          content: "";
          position: absolute;
          left: -11px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #14151A;
        }
        .pass-stub::before { top: -11px; }
        .pass-stub::after { bottom: -11px; }
        .barcode {
          height: 34px;
          background: repeating-linear-gradient(
            90deg,
            #F5F3EE 0px,
            #F5F3EE 2px,
            transparent 2px,
            transparent 5px
          );
          opacity: 0.75;
        }
      `}</style>

      <div className="font-mono text-[13px] tracking-wide text-muted uppercase mb-5">
        About
      </div>

      <div className="relative">
        <h1 className="font-display font-bold text-[clamp(30px,4.6vw,50px)] leading-[1.2] tracking-tight text-ink max-w-[560px]">
          Born in Asia. Raised in Belgium. Still figuring out where home is.
        </h1>

        <div className="hidden sm:flex absolute -top-1.5 right-0 w-24 h-24 rounded-full border border-dashed border-gold/55 items-center justify-center -rotate-[9deg]">
          <div className="w-[78px] h-[78px] rounded-full border border-gold/40 flex flex-col items-center justify-center text-center font-mono text-gold text-[9.5px] tracking-wide leading-relaxed">
            ENTRY
            <br />
            <strong className="text-[11px]">TAIWAN</strong>
            <br />
            2018
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-5 max-w-[600px]">
        <p className="text-[17px] leading-relaxed text-ink">
          <strong className="font-medium">I&apos;m Pieter Borremans</strong> —
          writer, digital entrepreneur, and software founder. Born in
          Indonesia, raised in Belgium, and spent the years after collecting
          passport stamps before landing, for now, in Taichung, Taiwan.
        </p>
        <p className="text-[17px] leading-relaxed text-ink">
          After years in business and digital strategy, I stripped things
          back. Today my focus is <strong className="font-medium">Ryoka Group</strong>,
          which builds, operates, and grows software products. Everything
          else, the writing, the content, the building in public, flows
          from that.
        </p>
        <p className="text-[17px] leading-relaxed text-ink">
          This site is the in-between: the language I&apos;m still learning,
          the culture I&apos;m still adjusting to, and the version of myself
          that only shows up when nothing is familiar.
        </p>
      </div>

      {/* ---------- boarding pass ---------- */}
      <div className="mt-14 flex flex-col sm:flex-row border border-line rounded-[10px] bg-[#1B1C22] overflow-hidden">
        <div className="flex-1 p-8">
          <div className="mb-5">
            <div className="font-mono text-[10.5px] tracking-wide uppercase text-muted">
              Passenger
            </div>
            <div className="text-[15px] mt-1 text-ink">Pieter Borremans</div>
          </div>

          <div className="flex items-center gap-3.5 mb-6">
            <div>
              <div className="font-display font-black text-[26px] tracking-tight">
                BEL
              </div>
              <div className="font-mono text-[11px] text-muted mt-0.5">
                Brussels
              </div>
            </div>
            <div className="flex-1 h-px border-t border-dashed border-ink/30" />
            <div className="text-right">
              <div className="font-display font-black text-[26px] tracking-tight">
                TPE
              </div>
              <div className="font-mono text-[11px] text-muted mt-0.5">
                Taichung
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="font-mono text-[10.5px] tracking-wide uppercase text-muted">
              Focused on
            </div>
            <div className="text-[15px] mt-1 text-ink">
              Writing · Building · Podcasting
            </div>
          </div>
          <div className="mb-5">
            <div className="font-mono text-[10.5px] tracking-wide uppercase text-muted">
              Companies
            </div>
            <div className="text-[15px] mt-1 text-ink">
              Ryoka · Aegos Intel · Sorano
            </div>
          </div>
          <div>
            <div className="font-mono text-[10.5px] tracking-wide uppercase text-muted">
              Say hello
            </div>
            <a
              href="mailto:hi@pieter.tw"
              className="text-[15px] mt-1 inline-block text-accent underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
            >
              hi@pieter.tw
            </a>
          </div>
        </div>

        <div className="pass-stub relative w-full sm:w-[220px] p-8 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-dashed border-line">
          <div>
            <div className="font-mono text-[10.5px] tracking-wide uppercase text-muted">
              Status
            </div>
            <div className="flex items-center gap-2 mt-1 font-mono text-[11px] tracking-wide uppercase text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Still boarding
            </div>

            <div className="font-mono text-[10.5px] tracking-wide uppercase text-muted mt-5">
              Departed
            </div>
            <div className="text-[15px] mt-1 text-ink">2006</div>
          </div>

          <div>
            <div className="barcode" />
            <div className="font-mono text-[9.5px] text-muted mt-1.5 tracking-wide">
              PIETER · BORREMANS · TPE
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
