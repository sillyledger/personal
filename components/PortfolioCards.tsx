import Link from "next/link";
const projects = [
  {
    name: "Sorano",
    url: "sorano.space",
    href: "https://sorano.space",
    initial: "S",
    desc: "Your product roadmap, publicly shared. Show users what you're building — one clean link, no login required.",
    tags: ["SaaS", "Indie", "Active"],
  },
  {
    name: "TWO Docs",
    url: "two.so",
    href: "https://two.so",
    initial: "T",
    desc: "The doc app built for iPad and Mac. Beautiful, focused writing for creatives and small teams.",
    tags: ["SaaS", "B2B & B2C", "In Beta"],
  },
  {
    name: "Aegos Intel",
    url: "aegosintel.com",
    href: "https://aegosintel.com",
    initial: "A",
    desc: "Company intelligence and data platform. Structured insights for operators and analysts.",
    tags: ["SaaS", "B2B", "In Progress"],
  },
  {
    name: "Ryoka",
    url: "ryoka.xyz",
    href: "https://ryoka.xyz",
    initial: "R",
    desc: "A permanent capital company that builds, acquires, and invests in exceptional assets.",
    tags: ["Holding", "Investing"],
  },
];
export default function PortfolioCards() {
  return (
    <section className="py-16">
      <p className="text-[11px] text-faint tracking-[0.09em] uppercase font-medium mb-5">
        Portfolio
      </p>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((p) => (
          
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-[14px] p-6 flex flex-col hover:border-white/25 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-bold text-ink">{p.name}</span>
                  <span className="text-[13px] text-faint group-hover:text-muted transition-colors">↗</span>
                </div>
                <p className="text-[11px] text-faint mt-0.5">{p.url}</p>
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-white/5 border border-border flex items-center justify-center text-[13px] font-bold text-muted flex-shrink-0">
                {p.initial}
              </div>
            </div>
            <p className="text-[13px] text-muted leading-relaxed mb-4 flex-1">{p.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-medium text-ink bg-white/5 border border-border px-[10px] py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}