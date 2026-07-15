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

      <div className="flex flex-col sm:flex-row border border-white/10 rounded-[10px] bg-card overflow-hidden">
        <div className="flex-1 p-7">
          <div className="text-[10.5px] font-medium tracking-wide uppercase text-faint">
            Passenger
          </div>
          <div className="text-[15px] mt-1 mb-5 text-ink">
            Pieter Borremans
          </div>

          <div className="flex items-center gap-3.5">
            <div>
              <div className="font-display font-bold text-[22px] tracking-tight text-ink">
                BEL
              </div>
              <div className="text-[10.5px] font-medium text-faint mt-0.5">
                Brussels
              </div>
            </div>
            <div className="flex-1 h-px border-t border-dashed border-white/30" />
            <div className="text-right">
              <div className="font-display font-bold text-[22px] tracking-tight text-ink">
                TPE
              </div>
              <div className="text-[10.5px] font-medium text-faint mt-0.5">
                Taichung
              </div>
            </div>
          </div>
        </div>

        <div className="teaser-stub relative w-full sm:w-[200px] p-7 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-dashed border-white/15">
          <div>
            <div className="text-[10.5px] font-medium tracking-wide uppercase text-faint">
              Status
            </div>
            <div className="flex items-center gap-2 mt-1 text-[11px] font-medium tracking-wide uppercase text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Still boarding
            </div>
          </div>

          <div>
            <div className="teaser-barcode" />
            
              <a href="/about" className="text-[10.5px] font-medium text-faint hover:text-accent transition-colors mt-2 inline-block tracking-wide">
              Full boarding pass →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
