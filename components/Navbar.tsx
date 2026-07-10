"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="max-w-[620px] mx-auto flex items-center justify-between pt-11 px-6">
        <Link href="/" className="text-[14px] tracking-tight text-[#252525]">
          // pieter.tw
        </Link>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                pathname === link.href
                  ? "text-[#252525]"
                  : "text-[#8E8A84] hover:text-[#252525]"
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
