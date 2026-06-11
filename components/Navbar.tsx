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
      <div className="max-w-[1100px] mx-auto px-16 flex items-center justify-center py-5 relative">
        <Link href="/" className="text-[17px] font-bold tracking-tight text-[#111] absolute left-16">
          Pieter<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium tracking-wider transition-colors ${
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
