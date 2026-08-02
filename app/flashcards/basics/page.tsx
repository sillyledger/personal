"use client";

import { useState } from "react";
import Link from "next/link";
import { basicsDeck, shuffleDeck, type FlashcardWord } from "@/lib/flashcards-basics";

export default function BasicsPracticePage() {
  const [deck] = useState<FlashcardWord[]>(() => shuffleDeck(basicsDeck));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const current = deck[index];
  const total = deck.length;

  function advance() {
    setRevealed(false);
    setIndex((i) => (i + 1) % total);
  }

  return (
    <main className="max-w-[900px] mx-auto px-10 pt-16 pb-24">
      <Link
        href="/flashcards"
        className="text-[12.5px] font-medium text-faint hover:text-ink transition-colors"
      >
        ← All decks
      </Link>

      <div className="text-[13px] font-medium tracking-wide text-muted uppercase mb-5 mt-6">
        Learning Chinese
      </div>
      <h1 className="font-display font-bold text-[clamp(30px,4.6vw,48px)] leading-[1.2] tracking-tight text-ink">
        Basics
      </h1>
      <p className="mt-[18px] text-body text-muted max-w-[540px]">
        Beginner words I&apos;ve actually learned.
      </p>

      <div className="mt-12 max-w-[560px] mx-auto flex flex-col border border-white/10 rounded-[10px] bg-card overflow-hidden">
        <div className="p-10 flex flex-col items-center text-center">
          <div className="text-[10.5px] font-medium tracking-wide uppercase text-faint">
            Word
          </div>
          <div className="font-display font-bold text-[56px] tracking-tight text-ink mt-4">
            {current.word}
          </div>
          <div className="text-[15px] text-muted mt-2">{current.pinyin}</div>

          <div className="w-full mt-8 min-h-[44px] flex items-center justify-center">
            {revealed ? (
              <div className="text-[18px] text-ink font-medium">
                {current.meaning}
              </div>
            ) : (
              <button
                onClick={() => setRevealed(true)}
                className="text-[13px] font-medium tracking-wide uppercase text-gold border border-gold/35 rounded-full px-5 py-2 hover:bg-gold/8 transition-colors"
              >
                Reveal
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={advance}
              className="text-[13px] font-medium tracking-wide uppercase text-bg bg-gold rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              Got it
            </button>
            <button
              onClick={advance}
              className="text-[13px] font-medium tracking-wide uppercase text-muted border border-border rounded-full px-5 py-2.5 hover:border-red/40 hover:text-red transition-colors"
            >
              Still learning
            </button>
          </div>
        </div>

        <div className="border-t border-dashed border-white/15 px-7 py-5 flex items-center justify-between">
          <div>
            <div className="text-[10.5px] font-medium tracking-wide uppercase text-faint">
              Basics
            </div>
            <div className="font-display font-bold text-[18px] tracking-tight text-ink mt-0.5">
              {index + 1} of {total}
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide uppercase text-faint">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Shuffled this visit
          </div>
        </div>
      </div>
    </main>
  );
}
