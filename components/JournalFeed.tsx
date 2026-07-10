const posts = [
  {
    date: "Aug 02",
    title: "Getting lost in Fengjia, on purpose",
    href: "#",
  },
  {
    date: "Jul 26",
    title: "The word for \"home\" doesn't translate the way I thought",
    href: "#",
  },
  {
    date: "Jul 14",
    title: "Six months in, still ordering food by pointing",
    href: "#",
  },
  {
    date: "Jul 03",
    title: "What my neighbors taught me about noise, silence, and space",
    href: "#",
  },
];

export default function JournalFeed() {
  return (
    <div className="max-w-[720px] mx-auto px-10 pb-24">
      {posts.map((post, i) => (
        <a
          key={post.href + i}
          href={post.href}
          className="group flex items-baseline justify-between gap-6 py-4 border-t border-line first:border-t-0"
        >
          <span className="flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">
              {post.date}
            </span>
            <span className="text-[15px] text-ink group-hover:text-accent transition-colors">
              {post.title}
            </span>
          </span>
          <span className="font-mono text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}
