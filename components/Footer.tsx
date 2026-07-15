import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Journal", href: "/journal" },
  { label: "Portfolio", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categoryLinks = [
  { label: "Food & Culture", href: "/journal?category=Food%20%26%20Culture" },
  { label: "Exploring", href: "/journal?category=Exploring" },
  { label: "Learning Chinese", href: "/journal?category=Learning%20Chinese" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Affiliate disclaimer", href: "/affiliate-disclaimer" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#14151A]">
      <div className="max-w-[720px] mx-auto px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-dashed border-white/15 pt-10">
          {/* Navigate */}
          <div>
            <p className="font-mono text-[11px] tracking-wider text-faint mb-4">
              NAVIGATE
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm font-medium text-ink/70 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="font-mono text-[11px] tracking-wider text-faint mb-4">
              CATEGORIES
            </p>
            <ul className="flex flex-col gap-2.5">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm font-medium text-ink/70 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono text-[11px] tracking-wider text-faint mb-4">
              LEGAL
            </p>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm font-medium text-ink/70 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-5 border-t border-dashed border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-faint">
            © {new Date().getFullYear()} Pieter Borremans
          </p>
          <p className="font-mono text-xs text-faint">
            🇧🇪 🇬🇧 🇹🇼 TAICHUNG · LONDON
          </p>
        </div>
      </div>
    </footer>
  );
}
