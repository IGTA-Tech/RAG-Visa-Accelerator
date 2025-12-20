'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/sherrod', label: 'Sherrod Seward' },
  { href: '/angles', label: 'Story Angles' },
  { href: '/stats', label: 'Statistics' },
  { href: '/targets', label: 'Media Targets' },
  { href: '/chat', label: 'Ask AI' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            IGTA Media Kit
          </Link>
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
