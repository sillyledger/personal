"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "HOME" },
  { href: "/journal", label: "JOURNAL" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/about", label: "ABOUT" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="max-w-[1100px] mx-auto px-16 flex items-center justify-between py-5">
        <Link href="/" className="text-[17px] font-bold tracking-tight text-[#111]">
          Pieter<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] font-medium tracking-wider transition-colors ${
                pathname === link.href ? "text-accent" : "text-stone-600 hover:text-[#111]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
