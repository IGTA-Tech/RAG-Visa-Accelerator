'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Dashboard', icon: '🏠', desc: 'Training overview' },
    { href: 'https://docs.google.com/spreadsheets/d/1c_ydAYMmGEhI2fcU4Ls9TQ5yHVFEvPrv-bb1RFaUamw/edit?gid=0#gid=0', label: 'Lead Sheet', icon: '📊', desc: 'Brett\'s leads', external: true },
    { href: '/notebooks', label: 'NotebookLM Training', icon: '🎧', desc: 'AI learning' },
    { href: '/chat', label: 'IGTA AI', icon: '🤖', desc: 'Tech visas' },
    { href: '/ssv', label: 'SSV BD', icon: '🏃', desc: 'Sports visas', highlight: true },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-green-400 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            BD Portal
          </Link>
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isExternal = 'external' in item && item.external;
              const className = `px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                pathname === item.href
                  ? 'highlight' in item && item.highlight ? 'bg-cyan-600 text-white' : 'bg-green-600 text-white'
                  : 'highlight' in item && item.highlight
                  ? 'bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600 hover:text-white border border-cyan-500'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`;

              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    title={item.desc}
                  >
                    <span>{item.icon}</span>
                    <span className="hidden md:inline">{item.label}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={className}
                  title={item.desc}
                >
                  <span>{item.icon}</span>
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
