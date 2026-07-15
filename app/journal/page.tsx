import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type Post = {
  slug: string;
  title: string;
  category: string | null;
  published_at: string | null;
  featured_image: string | null;
};

async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug, title, category, published_at, featured_image")
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

function keywordFromCategory(category: string | null) {
  if (!category) return "";
  return category.split(" ")[0].toUpperCase();
}

export default async function JournalPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-[900px] mx-auto px-10 pt-16 pb-24">
      <div className="text-[13px] font-medium tracking-wide text-muted uppercase mb-5">
        Journal
      </div>
      <h1 className="font-display font-bold text-[clamp(30px,4.6vw,48px)] leading-[1.2] tracking-tight text-ink">
        Field notes from Taiwan.
      </h1>
      <p className="mt-[18px] text-body text-muted max-w-[560px]">
        Everything I&apos;ve written since landing here. The language, the
        culture, the day-to-day of being a foreigner in Taiwan.
      </p>

      {posts.length === 0 && (
        <p className="text-[15px] text-muted py-8 mt-8">
          No posts published yet — check back soon.
        </p>
      )}

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group block bg-card border border-border rounded-[6px] overflow-hidden"
          >
            <div
              className="relative h-[150px] bg-cover bg-center"
              style={{
                backgroundImage: post.featured_image
                  ? `url(${post.featured_image})`
                  : undefined,
                backgroundColor: post.featured_image ? undefined : "#2a2b32",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,21,26,0.92) 0%, rgba(20,21,26,0.15) 55%, rgba(20,21,26,0) 70%)",
                }}
              />
              <div className="absolute left-0 right-0 bottom-0 px-3.5 pb-3 pt-2.5">
                <div className="flex items-center justify-between text-[10.5px] font-medium tracking-wide text-[#d8d8d8]">
                  <span>BEL</span>
                  <span>TPE</span>
                </div>
                <div className="border-t border-dashed border-white/35 mt-1 mb-1.5" />
                {keywordFromCategory(post.category) && (
                  <div className="font-display font-bold text-[20px] tracking-tight text-ink">
                    {keywordFromCategory(post.category)}
                  </div>
                )}
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <div className="flex items-center justify-between text-[11px] text-muted mb-1.5">
                <span>
                  {post.category ? `${post.category} · ` : ""}
                  {formatDate(post.published_at)}
                </span>
              </div>
              <div className="font-display font-bold text-[15px] leading-snug text-ink group-hover:text-accent transition-colors">
                {post.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}