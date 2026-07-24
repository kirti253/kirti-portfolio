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
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const navRef = useRef(null);
  const linkRefs = useRef({});

  // Measure the active link and move the pill indicator under it
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

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
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

        {/* Desktop nav */}
        <nav
          ref={navRef}
          className="relative hidden items-center gap-8 md:flex"
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
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
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

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/80 transition-colors hover:bg-foreground/5 md:hidden"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="transition-transform duration-200"
          >
            {menuOpen ? (
              <path
                d="M3 3L15 15M15 3L3 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 5H16M2 9H16M2 13H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-foreground/10 px-4 py-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-foreground/[0.06] text-foreground"
                    : "text-foreground/70 hover:bg-foreground/[0.04] hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
