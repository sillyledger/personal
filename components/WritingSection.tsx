import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

export const revalidate = 0;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function formatDate(str: string) {
  return new Date(str).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function WritingSection() {
  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, slug, category, published_at, status")
    .eq("target_site", "pieter.tw")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(4);

  const recentPosts = posts || [];

  return (
    <section className="py-16">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[11px] text-stone-400 tracking-[0.09em] uppercase font-medium">
          Journal
        </p>
      </div>

      {/* Post list */}
      {recentPosts.length === 0 ? (
        <div className="border-t border-[#d8d6d2] py-8">
          <p className="text-[14px] text-stone-400">No posts yet.</p>
        </div>
      ) : (
        <div className="border-t border-[#d8d6d2]">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/journal/${post.slug}`}
              className="group flex items-baseline justify-between py-4 border-b border-[#d8d6d2] hover:border-stone-400 transition-colors"
            >
              <div className="flex items-baseline gap-4 flex-1 min-w-0 pr-4">
                {post.category && (
                  <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-stone-400 whitespace-nowrap w-[72px] flex-shrink-0">
                    {post.category}
                  </span>
                )}
                <span className="text-[15px] font-medium text-[#252525] group-hover:text-[#e8440a] transition-colors truncate">
                  {post.title}
                </span>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[13px] text-stone-400 whitespace-nowrap">
                  {post.published_at ? formatDate(post.published_at) : ""}
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
      )}

      {/* All posts link */}
      <div className="mt-6 flex justify-end">
        <Link
          href="/journal"
          className="flex items-center gap-5 text-[13px] font-medium text-[#555] hover:text-[#111] transition-colors"
        >
          All posts
          <span
            className="flex items-center justify-center w-[22px] h-[22px] rounded-full border border-current flex-shrink-0"
            aria-hidden="true"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
