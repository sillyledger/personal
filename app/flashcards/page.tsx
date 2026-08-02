import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: "500" });

type Deck = {
  href: string;
  name: string;
  subtitle: string;
  chips: { label: string; variant: "gold" | "neutral" }[];
  count: string;
};

const decks: Deck[] = [
  {
    href: "/flashcards/hsk1",
    name: "HSK1",
    subtitle: "The reference deck",
    chips: [
      { label: "Ultra beginner", variant: "gold" },
      { label: "Standard vocab", variant: "gold" },
    ],
    count: "150",
  },
  {
    href: "/flashcards/personal",
    name: "Personal",
    subtitle: "Words that actually happened to me",
    chips: [
      { label: "Words that embarrassed me", variant: "neutral" },
      { label: "Fourth tone problems", variant: "neutral" },
    ],
    count: "12",
  },
];

function Chip({ label, variant }: { label: string; variant: "gold" | "neutral" }) {
  return (
    <span
      className={
        variant === "gold"
          ? "text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full border border-gold/35 bg-gold/8 text-gold"
          : "text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full border border-border text-muted"
      }
    >
      {label}
    </span>
  );
}

export default function FlashcardsPage() {
  return (
    <main className="max-w-[900px] mx-auto px-10 pt-16 pb-24">
      <div className="text-[13px] font-medium tracking-wide text-muted uppercase mb-5">
        Learning Chinese
      </div>
      <h1 className="font-display font-bold text-[clamp(30px,4.6vw,48px)] leading-[1.2] tracking-tight text-ink">
        Flashcards
      </h1>
      <p className="mt-[18px] text-body text-muted max-w-[540px]">
        Two decks. One is the standard stuff every beginner needs. The other
        is everything that&apos;s tripped me up living here — sorted by how
        badly it went.
      </p>

      <div className="mt-12 border border-border rounded-[14px] bg-card overflow-hidden">
        <div className="hidden sm:grid grid-cols-[1fr_auto] gap-6 px-7 pt-5 pb-3 text-[10.5px] font-medium tracking-wide uppercase text-faint">
          <span>Deck</span>
          <span>Words</span>
        </div>

        {decks.map((deck, i) => (
          <Link
            key={deck.href}
            href={deck.href}
            className={`group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-7 py-6 hover:bg-gold/5 transition-colors ${
              i < decks.length - 1 ? "border-b border-dashed border-border" : ""
            }`}
          >
            <div className="flex-1">
              <div className="font-display font-bold text-[20px] tracking-tight text-ink group-hover:text-accent transition-colors">
                {deck.name}
              </div>
              <div className="text-[13px] text-muted mt-0.5">
                {deck.subtitle}
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {deck.chips.map((chip) => (
                  <Chip key={chip.label} label={chip.label} variant={chip.variant} />
                ))}
              </div>
            </div>
            <div className="font-display font-bold text-[22px] tracking-tight text-ink sm:text-right">
              {deck.count}
            </div>
          </Link>
        ))}
      </div>

      <p className={`${caveat.className} mt-8 text-[20px] text-faint max-w-[540px]`}>
        started this because i still can&apos;t say 你好 without thinking
        about it
      </p>
    </main>
  );
}
