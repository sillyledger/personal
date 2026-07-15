const topics = ["Language", "Discovery", "Food & Culture", "Building Ryoka"];

export default function ServicesBar() {
  return (
    <div className="max-w-[720px] mx-auto px-10 flex flex-wrap items-center justify-between gap-y-3 py-5 text-[13px] font-medium text-muted">
      {topics.map((topic) => (
        <div key={topic} className="flex items-center gap-3">
          {topic}
          <span className="w-[6px] h-[6px] bg-accent rounded-[1px]" />
        </div>
      ))}
    </div>
  );
}