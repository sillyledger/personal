import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Pieter Borremans",
  description: "How affiliate links work on this site.",
};

export default function AffiliateDisclosure() {
  return (
    <main className="max-w-[720px] mx-auto px-10 pt-16 pb-24">
      <div className="text-[13px] font-medium tracking-wide text-muted uppercase mb-5">
        Legal
      </div>

      <h1 className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-[1.2] tracking-tight text-ink">
        Affiliate Disclosure
      </h1>
      <div className="text-[12px] font-medium text-faint mt-3 mb-10">
        Last updated: July 2026
      </div>

      <div className="text-body text-ink space-y-5 max-w-[600px]">
        <p>
          Some links on this site are affiliate links. That means if you
          click one and go on to buy something, I may earn a small
          commission, at no extra cost to you. It doesn&apos;t change the
          price you pay.
        </p>
        <p>
          I only link to products, tools, and services I&apos;ve actually
          used or genuinely believe in. Affiliate relationships never decide
          what I write about or how I write about it, if something isn&apos;t
          good, I say so.
        </p>
        <p>
          This applies across the site, including journal posts and any
          resources I recommend. Where it&apos;s not obvious from context,
          I&apos;ll try to flag that a link is an affiliate link.
        </p>
        <p>
          Any income from affiliate links helps cover the cost of running
          this site and the time spent writing it, nothing more calculated
          than that.
        </p>
        <p>
          Questions about a specific link or partnership? Email me at{" "}
          <a
            href="mailto:hi@pieter.tw"
            className="text-accent underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
          >
            hi@pieter.tw
          </a>
          .
        </p>
      </div>
    </main>
  );
}
