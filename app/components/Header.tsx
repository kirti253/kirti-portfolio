'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/project', label: 'Project' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center space-x-1">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Kirti
          </Link>
        </div>
        <ul className="flex items-center space-x-1 md:space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    relative px-3 py-2 text-sm font-medium transition-colors
                    hover:text-foreground
                    ${
                      isActive
                        ? 'text-foreground'
                        : 'text-foreground/70'
                    }
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
