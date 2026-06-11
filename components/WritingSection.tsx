import Link from "next/link";

const posts = [
  {
    slug: "how-i-structure-intelligence-reports",
    title: "How I structure intelligence reports for our analysts",
    category: "Ops",
    date: "Jun 8, 2026",
  },
  {
    slug: "why-we-rebuilt-aegos-score",
    title: "Why we rebuilt Aegos Score from scratch",
    category: "Building",
    date: "May 22, 2026",
  },
  {
    slug: "b2b-data-products-and-the-trust-problem",
    title: "B2B data products and the trust problem",
    category: "Strategy",
    date: "May 10, 2026",
  },
  {
    slug: "first-90-days-as-a-saas-founder",
    title: "First 90 days as a SaaS founder: what I got wrong",
    category: "Reflect",
    date: "Apr 29, 2026",
  },
];

export default function WritingSection() {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <p className="text-[11px] text-stone-400 tracking-[0.09em] uppercase font-medium mb-1">
            Journal
          </p>
          <h2 className="text-[22px] font-semibold text-[#111]">
            Thinking out loud.
          </h2>
        </div>
        <Link
          href="/writing"
          className="flex items-center gap-2 text-[13px] font-medium text-[#555] hover:text-[#111] transition-colors group"
        >
          All posts
          {/* HTML/SVG arrow — renders crisply on all screen sizes */}
          <span
            className="flex items-center justify-center w-[22px] h-[22px] rounded-full border border-current flex-shrink-0"
            aria-hidden="true"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8L8 2M8 2H4M8 2V6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>

      {/* Post list */}
      <div className="border-t border-[#d8d6d2]">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group flex items-baseline justify-between py-4 border-b border-[#d8d6d2] hover:border-stone-400 transition-colors"
          >
            <div className="flex items-baseline gap-4 flex-1 min-w-0 pr-4">
              <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-stone-400 whitespace-nowrap w-[72px] flex-shrink-0">
                {post.category}
              </span>
              <span className="text-[15px] font-medium text-[#252525] group-hover:text-[#e8440a] transition-colors truncate">
                {post.title}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-[13px] text-stone-400 whitespace-nowrap">
                {post.date}
              </span>
              {/* Always-visible diagonal arrow */}
              <span
                className="flex-shrink-0 text-[#e8440a] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform"
                aria-hidden="true"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
