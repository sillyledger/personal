export default function AboutParagraph() {
  return (
    <section className="max-w-[720px] mx-auto px-10 pb-16">
      <p className="text-[16px] leading-relaxed text-ink">
        I am Pieter Borremans, a foreigner in Taiwan who&apos;s been building{" "}
        <a
          href="https://www.ryokagroup.com/founder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Ryoka Group
        </a>
        . Almost a decade ago, I moved to Taiwan without speaking a word of
        Mandarin. This is where I write about the language, the culture, and
        the version of myself that only shows up when nothing is familiar.
      </p>
    </section>
  );
}
