import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pieter Borremans",
  description: "Get in touch — partnerships, press, or general enquiries.",
};

export default function ContactPage() {
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

      <div className="text-[13px] font-medium tracking-wide text-muted uppercase mb-5">
        Contact
      </div>

      <h1 className="font-display font-bold text-[clamp(30px,4.6vw,50px)] leading-[1.2] tracking-tight text-ink max-w-[560px]">
        Say hello.
      </h1>

      <p className="mt-6 text-body text-ink max-w-[560px]">
        Partnerships, enquiries, or just want to talk about Taiwan, the
        inbox is open.
      </p>

      {/* ---------- boarding pass ---------- */}
      <div className="mt-14 flex flex-col sm:flex-row border border-white/10 rounded-[10px] bg-card overflow-hidden">
        <div className="flex-1 p-8">
          <div className="mb-5">
            <div className="text-[10.5px] font-medium tracking-wide uppercase text-faint">
              Passenger
            </div>
            <div className="text-[15px] mt-1 text-ink">Pieter Borremans</div>
          </div>

          <div className="flex items-center gap-3.5 mb-6">
            <div>
              <div className="font-display font-bold text-[26px] tracking-tight text-ink">
                BEL
              </div>
              <div className="text-[11px] font-medium text-faint mt-0.5">
                Brussels
              </div>
            </div>
            <div className="flex-1 h-px border-t border-dashed border-white/30" />
            <div className="text-right">
              <div className="font-display font-bold text-[26px] tracking-tight text-ink">
                RMQ
              </div>
              <div className="text-[11px] font-medium text-faint mt-0.5">
                Taichung
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="text-[10.5px] font-medium tracking-wide uppercase text-faint">
              Purpose
            </div>
            <div className="text-[15px] mt-1 text-ink">
              Partnerships · Press · General enquiries
            </div>
          </div>

          <div>
            <div className="text-[10.5px] font-medium tracking-wide uppercase text-faint">
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

        <div className="pass-stub relative w-full sm:w-[220px] p-8 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-dashed border-white/15">
          <div>
            <div className="text-[10.5px] font-medium tracking-wide uppercase text-faint">
              Status
            </div>
            <div className="flex items-center gap-2 mt-1 text-[11px] font-medium tracking-wide uppercase text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Open inbox
            </div>
          </div>

          <div>
            <div className="barcode" />
            <div className="text-[9.5px] font-medium text-faint mt-1.5 tracking-wide">
              PIETER · BORREMANS · RMQ
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
