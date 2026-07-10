"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Taipei",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-10 pt-8 font-mono text-[12.5px] tracking-wide text-muted">
      <Link href="/" className="text-ink">
        <span className="font-medium">Pieter Borremans</span> · Writer &amp; Founder of Ryoka
      </Link>

      <nav className="flex items-center gap-6 uppercase">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-ink"
                : "hover:text-ink transition-colors"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="h-[7px] w-[7px] rounded-full bg-gold animate-pulse" />
        TAICHUNG · {time || "--:--"}
      </div>
    </header>
  );
}
