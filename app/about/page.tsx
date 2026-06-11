import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });

export default function Page() {
  return (
    <main className="max-w-[860px] mx-auto px-16">

      <div className="pt-20 pb-14">
        <p className="text-[11px] text-stone-400 tracking-[0.1em] uppercase font-medium mb-5">About</p>
        <h1 className={`${playfair.className} text-[64px] font-normal leading-[1.05] tracking-[-0.02em] text-[#111]`}>
          I&apos;m <em className="text-accent">Pieter.</em>
        </h1>
      </div>

      <div className="max-w-[620px] flex flex-col gap-6 text-[18px] text-stone-600 leading-relaxed">
        <p>Born in Asia, raised in Belgium. I write, build, and document the process of doing work that actually means something.</p>
        <p>After years in business and digital strategy, I stripped things back. Today my focus is Ryoka — building a permanent capital company from first principles. Everything else, the writing, the content, the building in public, flows from that.</p>
        <p>You&apos;ll find my writing, a podcast journal, and the occasional project update. If you&apos;re figuring things out in public — you&apos;re in the right place.</p>
      </div>

      <p className="text-[11px] text-stone-400 tracking-[0.1em] uppercase font-medium mt-12 mb-5">Quick facts</p>

      <div className="flex flex-col border-t border-stone-300/60">
        {[
          { label: "Based in", value: "Taichung / London" },
          { label: "Focused on", value: "Writing · Building · Podcasting" },
          { label: "Companies", value: "Ryoka · Aegos Intel · Sorano" },
        ].map((f) => (
          <div key={f.label} className="flex items-baseline justify-between py-4 border-b border-stone-300/60">
            <span className="text-[13px] text-stone-400 font-medium">{f.label}</span>
            <span className="text-[14px] text-stone-700 font-medium">{f.value}</span>
          </div>
        ))}
        <div className="flex items-baseline justify-between py-4 border-b border-stone-300/60">
          <span className="text-[13px] text-stone-400 font-medium">Say hello</span>
          <a href="mailto:hi@pieter.tw" className="text-[14px] text-accent font-medium underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">
            hi@pieter.tw
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between py-14">
        <span className={`${playfair.className} text-[28px] text-[#111] italic`}>Let&apos;s talk.</span>
        <a
          href="mailto:hi@pieter.tw"
          className="bg-[#111] text-white text-[13px] font-medium px-7 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          Send a message →
        </a>
      </div>

    </main>
  );
}
