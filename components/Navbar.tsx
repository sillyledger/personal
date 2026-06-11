"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-stone-300/60">
      <div className="max-w-[1100px] mx-auto px-16 flex items-center justify-between py-5">
        <Link href="/" className="text-[17px] font-bold tracking-tight text-[#111]">
          Pieter<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors ${
                pathname === link.href ? "text-accent" : "text-stone-400 hover:text-[#111]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="w-9 h-9 bg-accent rounded-md flex flex-col items-center justify-center gap-[5px]" aria-label="Menu">
          <span className="block w-4 h-[1.5px] bg-white" />
          <span className="block w-4 h-[1.5px] bg-white" />
        </button>
      </div>
    </nav>
  );
}
