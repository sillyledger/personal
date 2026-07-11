import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Post = {
  slug: string;
  title: string;
  published_at: string | null;
};

async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug, title, published_at")
    .eq("target_site", "pieter.tw")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(4);

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

export default async function JournalFeed() {
  const posts = await getPosts();

  if (posts.length === 0) return null;

  return (
    <div className="max-w-[720px] mx-auto px-10 pb-24">
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
  );
}
