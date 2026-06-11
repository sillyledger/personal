const services = [
  "Content Creation",
  "SaaS & Software",
  "Company Intelligence",
  "Investing & Building",
];

export default function ServicesBar() {
  return (
    <div className="border-t border-stone-300/60 flex items-center justify-between py-5">
      {services.map((service, i) => (
        <div key={service} className="flex items-center gap-3 text-[13px] text-stone-400">
          {service}
          {i < services.length - 1 && (
            <span className="w-[6px] h-[6px] bg-accent rounded-[1px]" />
          )}
        </div>
      ))}
    </div>
  );
}
