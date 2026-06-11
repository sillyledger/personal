import Link from "next/link";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });
export default function Hero() {
  return (
    <section className="pt-32 pb-0 flex flex-col items-center text-center">
      <h1 className={`${playfair.className} text-[clamp(60px,5vw,72px)] font-normal leading-[1.1] tracking-[-0.01em] text-[#111]`}>
        Creating is my default.
      </h1>
      <h2 className={`${playfair.className} text-[clamp(60px,5vw,72px)] font-normal leading-[1.1] tracking-[-0.01em] text-accent mb-20`}>
        <em>Building is my obsession.</em>
      </h2>
      <div className="flex items-center gap-12 pb-16 border-b border-stone-300/60 w-full justify-center">
        <p className="text-[18px] text-stone-700 leading-relaxed max-w-[420px] text-left">
          Founder of{" "}
          <a href="https://www.ryoka.xyz" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">
            Ryoka
          </a>
          {" "}&amp; corporate catalyst. I build companies, experiment with micro SaaS, create content, and document the journey from first principles to first revenue.
        </p>
        <Link
          href="/contact"
          className="bg-[#111] text-white text-[13px] font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Get in Touch →
        </Link>
      </div>
    </section>
  );
}
