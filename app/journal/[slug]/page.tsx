import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 0

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function JournalPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('target_site', 'pieter.tw')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single()

  if (!post) notFound()

  function formatDate(str: string) {
    return new Date(str).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <main className="max-w-[680px] mx-auto px-8 py-16">

      <Link
        href="/journal"
        className="text-[13px] text-stone-400 no-underline inline-block mb-12 hover:text-[#252525] transition-colors"
      >
        ← Journal
      </Link>

      <div className="flex items-center gap-4 mb-6">
        {post.category && (
          <span className="text-[11px] text-stone-400 tracking-[0.08em] uppercase font-semibold">
            {post.category}
          </span>
        )}
        {post.published_at && (
          <>
            <span className="text-stone-300">·</span>
            <span className="text-[13px] text-stone-400">{formatDate(post.published_at)}</span>
          </>
        )}
      </div>

      <h1 className="text-[38px] font-bold text-[#111] tracking-tight leading-tight mb-12">
        {post.title}
      </h1>

      <div
        className="journal-content"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />

      <style>{`
        .journal-content { color: #374151; font-size: 17px; line-height: 1.75; font-weight: 400; }
        .journal-content p { margin-bottom: 20px; }
        .journal-content h2 { font-size: 22px; font-weight: 700; color: #111; margin: 40px 0 14px; letter-spacing: -0.02em; }
        .journal-content h3 { font-size: 18px; font-weight: 600; color: #111; margin: 32px 0 10px; }
        .journal-content ul, .journal-content ol { padding-left: 20px; margin-bottom: 20px; }
        .journal-content li { margin-bottom: 8px; }
        .journal-content strong { color: #111; font-weight: 600; }
        .journal-content a { color: #252525; text-decoration: underline; text-decoration-color: rgba(0,0,0,0.3); text-underline-offset: 3px; }
        .journal-content a:hover { color: #e8440a; text-decoration-color: #e8440a; }
        .journal-content blockquote { border-left: 2px solid #d8d6d2; padding-left: 20px; margin: 24px 0; color: #6b7280; }
        .journal-content code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 14px; }
        .journal-content pre { background: #f3f4f6; padding: 20px; border-radius: 8px; overflow-x: auto; margin: 24px 0; }
      `}</style>
    </main>
  )
}
