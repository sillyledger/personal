import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";

type Post = {
  title: string;
  slug: string;
  content: string | null;
  category: string | null;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
};

async function getPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select(
      "title, slug, content, category, seo_title, seo_description, published_at"
    )
    .eq("target_site", "pieter.tw")
    .eq("status", "published")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || undefined,
  };
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function JournalPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="max-w-[720px] mx-auto px-10 pt-16 pb-24">
      <Link
        href="/journal"
        className="font-mono text-[13px] text-muted hover:text-accent transition-colors"
      >
        ← Journal
      </Link>

      <div className="mt-8 font-mono text-[12px] text-muted flex items-center gap-3">
        {formatDate(post.published_at)}
        {post.category && (
          <>
            <span className="w-1 h-1 rounded-full bg-muted" />
            {post.category}
          </>
        )}
      </div>

      <h1 className="mt-3 font-display font-bold text-[clamp(28px,4.4vw,44px)] leading-[1.22] tracking-tight text-ink">
        {post.title}
      </h1>

      <div
        className="prose-journal mt-10 text-[17px] leading-relaxed text-ink"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />

      <style>{`
        .prose-journal p { margin-bottom: 1.4em; }
        .prose-journal a { color: #E8B923; text-decoration: underline; text-underline-offset: 3px; }
        .prose-journal h2 { font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 24px; margin: 1.6em 0 0.6em; color: #F5F3EE; }
        .prose-journal h3 { font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 19px; margin: 1.4em 0 0.5em; color: #F5F3EE; }
        .prose-journal img { border-radius: 8px; margin: 1.6em 0; max-width: 100%; }
        .prose-journal ul, .prose-journal ol { margin: 0 0 1.4em; padding-left: 1.4em; }
      `}</style>
    </main>
  );
}
