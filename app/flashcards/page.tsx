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

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {decks.map((deck) => (
          <Link
            key={deck.href}
            href={deck.href}
            className="group flex flex-col justify-between min-h-[230px] border border-border rounded-[14px] bg-card p-6 hover:border-gold/40 hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="font-display font-bold text-[21px] tracking-tight text-ink">
                {deck.name}
              </div>
              <div className="text-[12.5px] text-faint mt-1">
                {deck.subtitle}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {deck.chips.map((chip) => (
                  <Chip key={chip.label} label={chip.label} variant={chip.variant} />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-dashed border-border pt-4 mt-5">
              <span className="text-[13px] text-muted">
                <span className="text-ink font-bold">{deck.count}</span> words
              </span>
              <span className="text-faint group-hover:text-gold group-hover:translate-x-0.5 transition-all">
                →
              </span>
            </div>
          </Link>
        ))}

        <div className="flex flex-col items-center justify-center text-center min-h-[230px] border border-dashed border-border rounded-[14px] p-6 text-faint">
          <div className="text-[22px]">+</div>
          <div className="text-[12.5px] mt-2 max-w-[160px]">
            more decks land here as they come together
          </div>
        </div>
      </div>

      <p className={`${caveat.className} mt-8 text-[20px] text-faint max-w-[540px]`}>
        started this because i still can&apos;t say 你好 without thinking
        about it
      </p>
    </main>
  );
}
