type Status = "active" | "building" | "idle";

type Project = {
  flightNo: string;
  name: string;
  url: string;
  gate: string;
  status: Status;
  statusLabel: string;
  year: string;
};

const projects: Project[] = [
  { flightNo: "RY-01", name: "Ryoka Group", url: "ryoka.xyz", gate: "Holding · Investing", status: "active", statusLabel: "On time", year: "2016" },
  { flightNo: "SO-02", name: "Sorano", url: "sorano.space", gate: "SaaS · Indie", status: "active", statusLabel: "Active", year: "2024" },
  { flightNo: "TD-03", name: "TWO Docs", url: "two.so", gate: "SaaS · B2B & B2C", status: "building", statusLabel: "Boarding", year: "2024" },
  { flightNo: "AI-04", name: "Aegos Intel", url: "aegosintel.com", gate: "SaaS · B2B", status: "building", statusLabel: "In progress", year: "2025" },
  { flightNo: "KI-05", name: "Kiroka", url: "subscription tracker", gate: "Free · Donation", status: "active", statusLabel: "Active", year: "2025" },
  { flightNo: "HA-06", name: "Harova", url: "harova.xyz", gate: "Web Directory", status: "building", statusLabel: "Boarding", year: "2026" },
  { flightNo: "ER-07", name: "Echo Room", url: "solo podcast", gate: "Audio", status: "active", statusLabel: "On time", year: "2026" },
  { flightNo: "??-08", name: "— add project —", url: "replace me", gate: "—", status: "idle", statusLabel: "TBA", year: "—" },
  { flightNo: "??-09", name: "— add project —", url: "replace me", gate: "—", status: "idle", statusLabel: "TBA", year: "—" },
];

const statusColors: Record<Status, string> = {
  active: "text-[#3ECF8E]",
  building: "text-gold",
  idle: "text-muted",
};
const statusDot: Record<Status, string> = {
  active: "bg-[#3ECF8E]",
  building: "bg-gold",
  idle: "bg-muted",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-[900px] mx-auto px-10 pt-16 pb-24">
      <div className="font-mono text-[13px] tracking-wide text-muted uppercase mb-5">
        Portfolio
      </div>

      <h1 className="font-display font-bold text-[clamp(30px,4.6vw,48px)] leading-[1.22] tracking-tight text-ink max-w-[640px]">
        Everything I&apos;ve built, launched, or crashed into along the way.
      </h1>
      <p className="mt-[18px] text-[16px] leading-relaxed text-muted max-w-[560px]">
        Some are held for the long run. Others were experiments to test
        what&apos;s worth building next. Status updates as things move.
      </p>

      <div className="mt-12 border border-white/10 rounded-[10px] bg-[#1B1C22] overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 font-mono text-[11.5px] tracking-wide text-[#8B8D96]">
          <span>TAICHUNG DEPARTURES · {projects.length} FLIGHTS</span>
          <span className="flex items-center gap-1.5 text-[#3ECF8E] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
            Live
          </span>
        </div>

        <div className="hidden sm:grid grid-cols-[70px_1.6fr_1fr_1fr_70px] px-6 py-3 border-b border-white/10 font-mono text-[10.5px] tracking-wide uppercase text-[#8B8D96]">
          <span>Flight</span>
          <span>Destination</span>
          <span>Gate</span>
          <span>Status</span>
          <span className="text-right">Since</span>
        </div>

        {projects.map((p) => (
          <div
            key={p.flightNo}
            className={`grid grid-cols-1 sm:grid-cols-[70px_1.6fr_1fr_1fr_70px] gap-1.5 sm:gap-0 items-center px-6 py-4 border-b border-white/10 last:border-b-0 hover:bg-white/[0.03] transition-colors ${
              p.status === "idle" ? "opacity-45" : ""
            }`}
          >
            <div className="font-mono text-[13px] text-[#F5F3EE]">{p.flightNo}</div>
            <div className="text-[15px] text-[#F5F3EE]">
              {p.name}
              <span className="block font-mono text-[10.5px] text-[#8B8D96] mt-0.5">
                {p.url}
              </span>
            </div>
            <div className="font-mono text-[12px] text-[#8B8D96]">{p.gate}</div>
            <div
              className={`flex items-center gap-1.5 font-mono text-[11.5px] tracking-wide uppercase ${
                statusColors[p.status]
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  statusDot[p.status]
                }`}
              />
              {p.statusLabel}
            </div>
            <div className="font-mono text-[12px] text-[#8B8D96] sm:text-right">
              {p.year}
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center flex-wrap gap-3 px-6 py-4 font-mono text-[10.5px] tracking-wide text-[#8B8D96]">
          <div className="flex gap-[18px] flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />{" "}
              Active / shipped
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Building /
              in progress
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B8D96]" /> Idle /
              not started
            </span>
          </div>
          <span>PIETER · BORREMANS · PORTFOLIO</span>
        </div>
      </div>
    </main>
  );
}
