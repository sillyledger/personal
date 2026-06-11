import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });

export default function Page() {
  return (
    <main className="max-w-[860px] mx-auto px-16">

      <div className="pt-20 pb-16">
        <p className="text-[11px] text-stone-400 tracking-[0.1em] uppercase font-medium mb-5">About</p>
        <h1 className={`${playfair.className} text-[64px] font-normal leading-[1.05] tracking-[-0.02em] text-[#111]`}>
          I&apos;m <em className="text-accent">Pieter.</em>
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-16 pb-16 border-b border-stone-300/60">
        <div className="flex flex-col gap-5 text-[18px] text-stone-600 leading-relaxed">
          <p>Born in Asia, raised in Belgium. I write, build, and document the process of doing work that actually means something.</p>
          <p>After years in business and digital strategy, I stripped things back. Today I focus on writing, content creation, and building companies from first principles. This site is where I think out loud.</p>
          <p>You&apos;ll find my writing, a podcast journal, and the occasional project update. If you&apos;re figuring things out in public — you&apos;re in the right place.</p>
        </div>

        <div className="flex flex-col gap-8 pt-1">
          <div>
            <p className="text-[11px] text-stone-400 tracking-[0.09em] uppercase font-medium mb-2">Based in</p>
            <p className="text-[15px] text-stone-700 font-medium">Taichung / London</p>
          </div>
          <div>
            <p className="text-[11px] text-stone-400 tracking-[0.09em] uppercase font-medium mb-2">Focused on</p>
            <p className="text-[15px] text-stone-700 font-medium">Writing · Building · Podcasting</p>
          </div>
          <div>
            <p className="text-[11px] text-stone-400 tracking-[0.09em] uppercase font-medium mb-2">Companies</p>
            <p className="text-[15px] text-stone-700 font-medium">Ryoka · Aegos Intel · Sorano</p>
          </div>
          <div>
            <p className="text-[11px] text-stone-400 tracking-[0.09em] uppercase font-medium mb-2">Say hello</p>
            <a href="mailto:hi@pieter.tw" className="text-[15px] text-accent underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity font-medium">
              hi@pieter.tw
            </a>
          </div>
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
