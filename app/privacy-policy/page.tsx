import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pieter Borremans",
  description: "How this site handles your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-[720px] mx-auto px-10 pt-16 pb-24">
      <div className="text-[13px] font-medium tracking-wide text-muted uppercase mb-5">
        Legal
      </div>

      <h1 className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-[1.2] tracking-tight text-ink">
        Privacy Policy
      </h1>
      <div className="text-[12px] font-medium text-faint mt-3 mb-10">
        Last updated: July 2026
      </div>

      <div className="text-body text-ink space-y-5 max-w-[600px]">
        <p>
          This is a personal site. I don&apos;t sell your data, and I try to
          collect as little of it as possible.
        </p>
        <p>
          <strong className="font-medium">What&apos;s collected.</strong>{" "}
          Basic analytics, like which pages get visited and roughly where
          from, so I can understand what people find useful. If you email me,
          I keep that conversation to reply to you, nothing more.
        </p>
        <p>
          <strong className="font-medium">Cookies.</strong> This site may use
          cookies for basic functionality and analytics. You can block or
          clear cookies in your browser at any time without breaking the
          site.
        </p>
        <p>
          <strong className="font-medium">Third parties.</strong> This site
          is hosted on Vercel and may use Google Analytics or Search Console
          to understand traffic. Those services have their own privacy
          policies covering how they handle data.
        </p>
        <p>
          <strong className="font-medium">Your data.</strong> I don&apos;t
          sell or trade personal information. If you&apos;d like to know
          what I have on you, or want it deleted, just ask.
        </p>
        <p>
          Questions about any of this? Email me at{" "}
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
