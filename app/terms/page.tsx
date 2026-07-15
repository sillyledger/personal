import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Pieter Borremans",
  description: "Terms for using this site.",
};

export default function Terms() {
  return (
    <main className="max-w-[720px] mx-auto px-10 pt-16 pb-24">
      <div className="text-[13px] font-medium tracking-wide text-muted uppercase mb-5">
        Legal
      </div>

      <h1 className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-[1.2] tracking-tight text-ink">
        Terms
      </h1>
      <div className="text-[12px] font-medium text-faint mt-3 mb-10">
        Last updated: July 2026
      </div>

      <div className="text-body text-ink space-y-5 max-w-[600px]">
        <p>
          By using this site, you&apos;re agreeing to the basics below.
          Nothing here is unusual, it&apos;s mostly common sense written
          down.
        </p>
        <p>
          <strong className="font-medium">Content.</strong> Everything I
          write, record, or publish here, posts, photos, is mine unless
          stated otherwise. You&apos;re welcome to quote or link to it with
          credit and a link back. Please don&apos;t republish it wholesale
          as your own.
        </p>
        <p>
          <strong className="font-medium">No professional advice.</strong>{" "}
          Nothing on this site is legal, financial, or professional advice.
          It&apos;s my own thinking and experience, shared for what it&apos;s
          worth. Make your own decisions accordingly.
        </p>
        <p>
          <strong className="font-medium">External links.</strong> This
          site links to other sites and services I don&apos;t control.
          I&apos;m not responsible for their content or how they handle
          your data once you leave.
        </p>
        <p>
          <strong className="font-medium">No guarantees.</strong> This site
          is provided as-is. I try to keep things accurate and working, but
          I can&apos;t promise it&apos;ll always be error-free or available.
        </p>
        <p>
          <strong className="font-medium">Changes.</strong> These terms
          might change as the site evolves. The date at the top of this
          page reflects the last update.
        </p>
        <p>
          Questions? Email me at{" "}
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
