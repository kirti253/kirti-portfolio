"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Measure the active link and move the underline indicator under it
  useEffect(() => {
    const activeEl = linkRefs.current[pathname];
    const navEl = navRef.current;
    if (activeEl && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [pathname]);

  return (
    <header className="w-full border-b border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-1 ring-foreground/10 transition-transform duration-300 ease-out group-hover:scale-105">
            <Image
              src="/kirtilogo.png"
              alt="Kirti"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Kirti
          </span>
        </Link>

        {/* Nav — always visible, scales down on small screens */}
        <nav
          ref={navRef}
          className="relative flex items-center gap-4 sm:gap-6 md:gap-8"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[link.href] = el;
                }}
                className={`relative py-1 text-xs font-medium tracking-wide transition-colors duration-200 sm:text-sm ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Sliding underline */}
          <span
            className="pointer-events-none absolute -bottom-0.5 h-px bg-violet-400 shadow-[0_0_8px_1px_rgba(167,139,250,0.6)] transition-all duration-300 ease-out"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
        </nav>
      </div>
    </header>
  );
}
