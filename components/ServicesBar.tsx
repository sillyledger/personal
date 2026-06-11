const services = [
  "Content Creation",
  "SaaS & Software",
  "Podcast",
  "Investing & Building",
];

export default function ServicesBar() {
  return (
    <div className="flex items-center justify-between py-5">
      {services.map((service) => (
        <div key={service} className="flex items-center gap-3 text-[13px] text-stone-400">
          {service}
          <span className="w-[6px] h-[6px] bg-accent rounded-[1px]" />
        </div>
      ))}
    </div>
  );
}
