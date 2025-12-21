'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/training', label: 'Training' },
  { href: '/benefits', label: 'Benefits' },
  { href: 'https://forms.gle/cms5mJMPFSb6zdJRA', label: 'Apply Now', highlight: true, external: true },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl flex items-center gap-2">
            <span className="text-2xl">🤝</span>
            <span className="hidden sm:inline">IGTA Partner Program</span>
            <span className="sm:hidden">IGTA Partners</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isExternal = 'external' in item && item.external;
              const className = `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === item.href
                  ? item.highlight
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-700 text-white'
                  : item.highlight
                  ? 'bg-green-600/20 text-green-300 hover:bg-green-600 border border-green-500'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`;

              return isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700 pt-2">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isExternal = 'external' in item && item.external;
                const className = `px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? item.highlight
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-700 text-white'
                    : item.highlight
                    ? 'bg-green-600/20 text-green-300 hover:bg-green-600 border border-green-500'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`;

                return isExternal ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={className}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
