import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Post = {
  slug: string;
  title: string;
  category: string | null;
  published_at: string | null;
};

async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug, title, category, published_at")
    .eq("target_site", "pieter.tw")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to load posts:", error);
    return [];
  }
  return data || [];
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
}

export default async function JournalPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-[720px] mx-auto px-10 pt-16 pb-24">
      <div className="font-mono text-[13px] tracking-wide text-muted uppercase mb-5">
        Journal
      </div>
      <h1 className="font-display font-bold text-[clamp(30px,4.6vw,48px)] leading-[1.2] tracking-tight text-ink">
        Field notes from Taiwan.
      </h1>
      <p className="mt-[18px] text-[16px] leading-relaxed text-muted max-w-[560px]">
        Everything I&apos;ve written since landing here — the language, the
        culture, the day-to-day of being a foreigner in Taiwan.
      </p>

      <div className="mt-12">
        {posts.length === 0 && (
          <p className="text-[15px] text-muted py-8">
            No posts published yet — check back soon.
          </p>
        )}

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group flex items-baseline justify-between gap-6 py-4 border-t border-line first:border-t-0"
          >
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-muted">
                {formatDate(post.published_at)}
              </span>
              <span className="text-[15px] text-ink group-hover:text-accent transition-colors">
                {post.title}
              </span>
            </span>
            <span className="font-mono text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
