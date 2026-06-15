import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

export const revalidate = 0

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default async function JournalPage() {
  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, slug, category, published_at, status')
    .eq('target_site', 'pieter.tw')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  const allPosts = posts || []

  const categories = ['All', ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)))]

  function formatDate(str: string) {
    return new Date(str).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <main className="max-w-[900px] mx-auto px-16 py-12">
      <p className="text-[11px] text-stone-400 tracking-[0.09em] uppercase font-semibold mb-1.5">
        Journal
      </p>
      <h1 className="text-[32px] font-bold text-[#111] tracking-tight mb-8">
        All posts
      </h1>

      {allPosts.length === 0 ? (
        <p className="text-[14px] text-stone-400">No posts yet.</p>
      ) : (
        <div className="border-t border-[#d8d6d2]">
          {allPosts.map((post, i) => (
            <Link
              key={post.id}
              href={`/journal/${post.slug}`}
              className="group flex items-baseline justify-between py-4 border-b border-[#d8d6d2] cursor-pointer hover:border-stone-400 transition-colors gap-4 no-underline"
            >
              <div className="flex items-baseline gap-4 flex-1 min-w-0">
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
                  {post.published_at ? formatDate(post.published_at) : ''}
                </span>
                <span className="text-[#e8440a] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform flex-shrink-0">
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <p className="text-[12px] text-stone-400 text-center mt-4">
        {allPosts.length} {allPosts.length === 1 ? 'post' : 'posts'}
      </p>
    </main>
  )
}
