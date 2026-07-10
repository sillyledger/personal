export default function BoardingPassTeaser() {
  return (
    <div className="max-w-[720px] mx-auto px-10 pb-16">
      <style>{`
        .teaser-stub::before,
        .teaser-stub::after {
          content: "";
          position: absolute;
          left: -11px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #14151A;
        }
        .teaser-stub::before { top: -11px; }
        .teaser-stub::after { bottom: -11px; }
        .teaser-barcode {
          height: 26px;
          background: repeating-linear-gradient(
            90deg,
            #F5F3EE 0px,
            #F5F3EE 2px,
            transparent 2px,
            transparent 5px
          );
          opacity: 0.7;
        }
      `}</style>

      <div className="flex flex-col sm:flex-row border border-line rounded-[10px] bg-[#1B1C22] overflow-hidden">
        <div className="flex-1 p-7">
          <div className="font-mono text-[10.5px] tracking-wide uppercase text-muted">
            Passenger
          </div>
          <div className="text-[15px] mt-1 mb-5 text-ink">
            Pieter Borremans
          </div>

          <div className="flex items-center gap-3.5">
            <div>
              <div className="font-display font-black text-[22px] tracking-tight">
                BEL
              </div>
              <div className="font-mono text-[10.5px] text-muted mt-0.5">
                Brussels
              </div>
            </div>
            <div className="flex-1 h-px border-t border-dashed border-ink/30" />
            <div className="text-right">
              <div className="font-display font-black text-[22px] tracking-tight">
                TPE
              </div>
              <div className="font-mono text-[10.5px] text-muted mt-0.5">
                Taichung
              </div>
            </div>
          </div>
        </div>

        <div className="teaser-stub relative w-full sm:w-[200px] p-7 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-dashed border-line">
          <div>
            <div className="font-mono text-[10.5px] tracking-wide uppercase text-muted">
              Status
            </div>
            <div className="flex items-center gap-2 mt-1 font-mono text-[11px] tracking-wide uppercase text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Still boarding
            </div>
          </div>

          <div>
            <div className="teaser-barcode" />
            <a
              href="/about"
              className="font-mono text-[10.5px] text-muted hover:text-accent transition-colors mt-2 inline-block tracking-wide"
            >
              Full boarding pass →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
