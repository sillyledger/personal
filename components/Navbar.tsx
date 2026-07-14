"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
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
    <header className="flex flex-wrap items-center justify-between gap-4 px-10 pt-8 font-mono text-[14px] tracking-wide text-muted">
      <Link href="/" className="flex items-center gap-3.5 text-ink">
        <Image
          src="/pieter-borremans-living-in-taiwan.jpeg"
          alt="Pieter Borremans, a foreigner living in Taiwan"
          width={40}
          height={40}
          className="rounded-full object-cover w-10 h-10"
          priority
        />
        <span>
         <span className="uppercase text-[12px]">
  <span className="font-medium">Pieter Borremans</span> · Foreigner
  living in Taiwan
</span>
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
