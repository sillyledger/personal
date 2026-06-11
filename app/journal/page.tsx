"use client";

import { useState } from "react";

const categories = ["All", "Ops", "Building", "Strategy", "Reflect"];

const posts = [
  { cat: "Ops",      title: "How I structure intelligence reports for our analysts",    date: "Jun 8, 2026"  },
  { cat: "Building", title: "Why we rebuilt Aegos Score from scratch",                  date: "May 22, 2026" },
  { cat: "Strategy", title: "B2B data products and the trust problem",                  date: "May 10, 2026" },
  { cat: "Reflect",  title: "First 90 days as a SaaS founder: what I got wrong",       date: "Apr 29, 2026" },
  { cat: "Building", title: "Shipping fast without breaking trust",                     date: "Apr 12, 2026" },
  { cat: "Ops",      title: "My research workflow for company deep-dives",              date: "Mar 28, 2026" },
  { cat: "Strategy", title: "Positioning a data product in a crowded market",           date: "Mar 14, 2026" },
  { cat: "Reflect",  title: "On staying focused when you run multiple companies",       date: "Feb 27, 2026" },
  { cat: "Building", title: "The Aegos Score: how we quantify company health",          date: "Feb 10, 2026" },
  { cat: "Ops",      title: "How we run async across three time zones",                 date: "Jan 24, 2026" },
  { cat: "Strategy", title: "Why I'm building in public — and what I'll keep private", date: "Dec 3, 2025"  },
  { cat: "Ops",      title: "The tools I use to run three companies at once",           date: "Oct 18, 2025" },
  { cat: "Reflect",  title: "What Ryoka taught me about long-term thinking",            date: "Aug 5, 2025"  },
  { cat: "Building", title: "Going from idea to first paying customer in 6 weeks",     date: "Jun 22, 2025" },
  { cat: "Strategy", title: "When to niche down and when to stay broad",               date: "Apr 9, 2025"  },
];

const PAGE_SIZE = 8;

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LoadMoreIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 2v9M3 8.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function JournalPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [shown, setShown] = useState(PAGE_SIZE);

  const filtered =
    activeFilter === "All" ? posts : posts.filter((p) => p.cat === activeFilter);

  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    setShown(PAGE_SIZE);
  };

  return (
    <main className="max-w-[900px] mx-auto px-16 py-12">
      <p className="text-[11px] text-stone-400 tracking-[0.09em] uppercase font-semibold mb-1.5">
        Journal
      </p>
      <h1 className="text-[32px] font-bold text-[#111] tracking-tight mb-8">
        All posts
      </h1>

      {/* Category filters */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`text-[12px] font-medium px-[14px] py-1.5 rounded-full border transition-colors ${
              activeFilter === cat
                ? "bg-[#252525] text-white border-[#252525]"
                : "bg-transparent text-stone-500 border-[#d8d6d2] hover:border-stone-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div className="border-t border-[#d8d6d2]">
        {visible.map((post, i) => (
          <div
            key={i}
            className="group flex items-baseline justify-between py-4 border-b border-[#d8d6d2] cursor-pointer hover:border-stone-400 transition-colors gap-4"
          >
            <div className="flex items-baseline gap-4 flex-1 min-w-0">
              <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-stone-400 whitespace-nowrap w-[72px] flex-shrink-0">
                {post.cat}
              </span>
              <span className="text-[15px] font-medium text-[#252525] group-hover:text-[#e8440a] transition-colors truncate">
                {post.title}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-[13px] text-stone-400 whitespace-nowrap">
                {post.date}
              </span>
              <span className="text-[#e8440a] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform flex-shrink-0">
                <ArrowIcon />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex items-center gap-4 mt-8">
          <div className="flex-1 h-px bg-[#d8d6d2]" />
          <button
            onClick={() => setShown((s) => s + PAGE_SIZE)}
            className="flex items-center gap-2 text-[13px] font-medium text-[#252525] border border-[#d8d6d2] hover:border-[#252525] rounded-full px-5 py-2 transition-colors whitespace-nowrap"
          >
            Load more
            <LoadMoreIcon />
          </button>
          <div className="flex-1 h-px bg-[#d8d6d2]" />
        </div>
      )}

      {/* Post count */}
      <p className="text-[12px] text-stone-400 text-center mt-4">
        {hasMore
          ? `Showing ${visible.length} of ${filtered.length} posts`
          : `Showing all ${filtered.length} posts`}
      </p>
    </main>
  );
}
